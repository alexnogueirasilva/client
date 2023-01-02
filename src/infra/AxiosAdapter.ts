import HttpClient from "./HttpClient";
import axios from "axios";

export default class AxiosAdapter implements HttpClient{
    async get(url: string): Promise<any> {
        const response = await axios({
            method: "GET",
            url,
        });

        return response.data;
    }

    async post(url: string, params: any): Promise<any> {
        const response = await axios.post(url, params);
        return response.data;
    }

}
