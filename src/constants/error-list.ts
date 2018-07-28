/**
 * List of all the error code which should be will to client
 * */
enum app_Error_Code_Enum {
    SUCCESS,
    CLIENT_INVALID_USER,
    CANNOT_ACCESS_DB
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
            description: app_Error_Code_Enum.SUCCESS.toString()
        }],
        [app_Error_Code_Enum.CLIENT_INVALID_USER, {
            statusCode: "422",
            description: app_Error_Code_Enum.CLIENT_INVALID_USER.toString()
        }],
        [app_Error_Code_Enum.CANNOT_ACCESS_DB, {
            statusCode: "422",
            description: app_Error_Code_Enum.CANNOT_ACCESS_DB.toString()
        }],


    ];

let app_Error_Code_Map =
    new Map<app_Error_Code_Enum, IErrorDetail>(app_Error_Code_Tuple);

export {
    app_Error_Code_Map,
    app_Error_Code_Enum
};