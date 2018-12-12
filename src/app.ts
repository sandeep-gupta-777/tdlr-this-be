import express, { NextFunction, Request, Response } from "express";
import compression from "compression";  // compresses requests
import session from "express-session";
import bodyParser from "body-parser";
import logger from "./util/logger";
import lusca from "lusca";
import dotenv from "dotenv";
import mongo from "connect-mongo";
import flash from "express-flash";
import path from "path";
import mongoose from "mongoose";
// import passport from "passport";
import expressValidator from "express-validator";
import bluebird from "bluebird";
import { MONGODB_URI, SESSION_SECRET } from "./util/secrets";

const MongoStore = mongo(session);

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: ".env.example" });

// Controllers (route handlers)
import * as homeController from "./controllers/home";


// API keys and Passport configuration
// import * as passportConfig from "./config/passport";
import { routerInit } from "./routes";
import { sendRes } from "./helpers/send-response";

// Create Express server
const app = express();

// Connect to MongoDB
const mongoUrl = MONGODB_URI;
(<any>mongoose).Promise = bluebird;
mongoose.connect(mongoUrl, {useMongoClient: true}).then(
  () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
  // process.exit();
});

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  store: new MongoStore({
    url: mongoUrl,
    autoReconnect: true
  })
}));
// app.use(passport.initialize());
// app.use(passport.session());
app.use(flash());
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
9
// app.use((req, res, next) => {
//   // After successful login, redirect back to the intended page
//   if (!req.user &&
//     req.path !== "/login" &&
//     req.path !== "/signup" &&
//     !req.path.match(/^\/auth/) &&
//     !req.path.match(/\./)) {
//     req.session.returnTo = req.path;
//   } else if (req.user &&
//     req.path == "/account") {
//     req.session.returnTo = req.path;
//   }
//   next();
// });

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);


/*for logging*/
var expressWinston = require('express-winston');
var winston = require('winston'); // for transports.Console
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        })
    ]
}));

/**
 * Primary app routes.
 */
let router = routerInit();
app.use(router);

app.use((req,res, next)=>{
  sendRes(req, res);
  next();
});

app.use( (err:any, req: Request, res: Response, next: NextFunction) => {
    sendRes(req, res);
});

export default app;