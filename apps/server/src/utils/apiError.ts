class ApiErrorClass extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string){
        super(message);
        this.statusCode = statusCode;
    };
};

const apiError = (statusCode: number, message: string) => {
    return new ApiErrorClass(statusCode, message);
};

export { ApiErrorClass, apiError };