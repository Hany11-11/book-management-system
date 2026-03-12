import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Book } from "../models/book";

@Injectable({ providedIn: 'root' })
export class BookService {
    private apiUrl = 'http://localhost:5204/api/books';

    constructor(private http: HttpClient){}
    
    getBooks(): Observable<Book[]>{
        return this.http.get<Book[]>(this.apiUrl);
    }

    getBook(id: number): Observable<Book>{
        return this.http.get<Book>(`${this.apiUrl}/${id}`);
    }

    addBook(book: Book){
        return this.http.post(this.apiUrl, book);
    }

    updateBook(id: number, book: Book){
        return this.http.put(`${this.apiUrl}/${id}`, book);
    }

    deleteBook(id: number){
        return this.http.delete(`${this.apiUrl}/${id}`)
    }
}