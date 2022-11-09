import http from "http"
import { HttpRequest } from "../dto/http-request"
import { HttpURL } from "../dto/http-url"

export function httpGet(url: HttpURL, req: HttpRequest){

    const options = {
        ...url,
        ...req
    }

    http.request(options, (res) => {
        var str = '';

        res.on("data", (chunk) => {
            str += chunk;
        })

        res.on("end", () => {
            console.log(JSON.parse(str));
        })

    }).end();
}