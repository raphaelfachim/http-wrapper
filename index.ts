import { HttpRequest } from "./src/infra/dto/http-request";
import { HttpURL } from "./src/infra/dto/http-url";
import { httpGet, httpPost } from "./src/infra/http/http-adapter";
import { PONTOMAIS_TOKEN } from "./src/secrets";

var url: HttpURL = {
    host: "api.pontomais.com.br",
    path: "/external_api/v1/employees?active=true&attributes=id,first_name,last_name,email,user,login&count=true&page=1&per_page=30&sort_direction=asc&sort_property=first_name"
}

var req: HttpRequest = {
    headers: {
        'Content-Type': 'application/json',
        'access-token': PONTOMAIS_TOKEN
    }
}

// httpGet(url, req, (res: any) => {
//     console.log(res);
// });

url.path = "/external_api/v1/reports/time_cards";

req.body = {
    report : {
        start_date: "2022-11-08",
        end_date: "2022-11-08",
        columns: "date,time",
        employee_id: 1992193,
        format: "json"
    }
} 

console.log('req', req);


httpPost(url, req, (res: any) => {
    console.log(res);
    
})