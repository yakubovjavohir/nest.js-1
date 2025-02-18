interface IMeta {
    statusCode:number,
    message:string
}


export class ResData<TData>{
    public meta:IMeta

    constructor(statusCode:number, message:string, public data:TData | null = null){
        this.meta = {
            statusCode,
            message
        }
    }
}
