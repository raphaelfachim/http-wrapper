import http from "http"
import { HttpRequest } from "../dto/http-request"
import { HttpURL } from "../dto/http-url"

export function httpGet(url: HttpURL, req: HttpRequest, callback: Function){

    const options = {
        ...url,
        headers: req.headers
    }

    http.request(options, (res) => {
        var str = '';

        res.on("data", (chunk) => {
            str += chunk;
        })

        res.on("end", () => {
            callback(JSON.parse(str));
        })

    }).end();
}

export function httpPost(url: HttpURL, req: HttpRequest, callback: Function){

    const options = {
        ...url,
        headers: req.headers,
        method: "POST",
    }

    var httpReq = http.request(options, (res) => {
        var str = '';

        res.on("data", (chunk) => {
            str += chunk;
        })

        res.on("end", () => {
            callback(JSON.parse(str));
        })

    });

    httpReq.write(JSON.stringify(req.body));
    httpReq.end();
}