/**
 * List of all the error code which should be will to client
 * */
enum app_Error_Code_Enum {
    SUCCESS,
    CLIENT_INVALID_USER,
    CLIENT_INVALID_PASSWORD,
    CANNOT_ACCESS_DB,
    ROUTE_NOT_FOUND,
}
export interface IErrorDetail {
    statusCode: string;
    description: app_Error_Code_Enum | string,
    body?:any
};
let app_Error_Code_Tuple: [app_Error_Code_Enum, IErrorDetail][] =
    [
        [app_Error_Code_Enum.SUCCESS, {
            statusCode: "200",
            description: app_Error_Code_Enum.SUCCESS
        }],
        [app_Error_Code_Enum.CLIENT_INVALID_USER, {
            statusCode: "422",
            description: app_Error_Code_Enum.CLIENT_INVALID_USER
        }],
        [app_Error_Code_Enum.CLIENT_INVALID_PASSWORD, {
            statusCode: "422",
            description: app_Error_Code_Enum.CLIENT_INVALID_PASSWORD
        }],
        [app_Error_Code_Enum.CANNOT_ACCESS_DB, {
            statusCode: "422",
            description: app_Error_Code_Enum.CANNOT_ACCESS_DB
        }],
        [app_Error_Code_Enum.ROUTE_NOT_FOUND, {
            statusCode: "404",
            description: app_Error_Code_Enum.ROUTE_NOT_FOUND
        }],
    ];

let app_Error_Code_Map =
    new Map<app_Error_Code_Enum, IErrorDetail>(app_Error_Code_Tuple);

export {
    app_Error_Code_Map,
    app_Error_Code_Enum
};