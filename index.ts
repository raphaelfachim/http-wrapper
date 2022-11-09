import { HttpRequest } from "./src/infra/dto/http-request";
import { HttpURL } from "./src/infra/dto/http-url";
import { httpGet } from "./src/infra/http/http-adapter";
import { PONTOMAIS_TOKEN } from "./src/secrets";

const url: HttpURL = {
    host: "api.pontomais.com.br",
    path: "/external_api/v1/employees?active=true&attributes=id,first_name,last_name,email,user,login&count=true&page=1&per_page=40&sort_direction=asc&sort_property=first_name"
}

const req: HttpRequest = {
    headers: {
        'Content-Type': 'application/json',
        'access-token': PONTOMAIS_TOKEN
    }
}

httpGet(url, req);