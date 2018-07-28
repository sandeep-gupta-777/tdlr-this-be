import { app_Error_Code_Enum } from "../constants/error-list";
import { documentValidatorErrors } from "./db-validator";

let createRecord$ = function (model: any, data: any): Promise<void> {
    return new Promise((resolve, reject) => {
        let record = new model(data);
        record.save(function (err: any, doc: any) {
            if (err) {
                return reject(documentValidatorErrors(err));
            }
            resolve(doc);
        });
    });
};

let readRecord$ = function (model: any, query: any, projection?: any): Promise<Array<any>> {
    return new Promise((resolve, reject) => {
        model.find(query, projection, function (err: any, doc: Array<any>) {
            if (err) reject(documentValidatorErrors(err));//this is always connection error
            resolve(doc);
        });
    });
};

let updateRecord$ = function (model: any, query: any, data: any, changes: any): Promise<any> {
    let record = new model(data);
    // let validationError =
    return new Promise((resolve, reject) => {
        record.validate(function (err: any) {
            return err ? reject(documentValidatorErrors(err)) : resolve();
        });
    })
        .then(() => {
            model.update(query, changes, {multi: false}, function (err: any, doc: any) {
                if (err) throw (new Error(app_Error_Code_Enum.CANNOT_ACCESS_DB.toString()));
            });
        });

};

let deleteRecord$ = function (model: any, query: any) {//name = delete is clashing with some in build function
    return new Promise((resolve, reject) => {
        model.remove(query, function (err: any) {
            if (err) return reject(new Error(app_Error_Code_Enum.CANNOT_ACCESS_DB.toString()));
            resolve();
        });
    });
};

export const crud = {
    deleteRecord$,
    createRecord$,
    updateRecord$,
    readRecord$
};

