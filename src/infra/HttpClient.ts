export default interface HttpClient {
    get(url: string): Promise<any>;
    post(url: string, params: any): Promise<any>;
    put (url: string, data: any): Promise<any>;
    delete (url: string): Promise<any>;
}
