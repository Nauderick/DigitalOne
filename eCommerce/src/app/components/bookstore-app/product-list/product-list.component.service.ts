import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders }  from "@angular/common/http";
import { Book } from "./model/book";

@Injectable()

export class BookService {
    private url = ''

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'appliction/json'})
    }

    constructor(private http: HttpClient) {}

    getBook() {

        return this.http.get(this.url)
    }
}