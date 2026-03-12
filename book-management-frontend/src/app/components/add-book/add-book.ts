import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-book.html',
  styleUrl: './add-book.css',
})
export class AddBook {
  book: Partial<Book> = {
    title: '',
    author: '',
    isbn: '',
    publicationDate: undefined
  };

  constructor(private bookService: BookService, private router: Router) {}

  onSubmit(): void {
    this.bookService.addBook(this.book as Book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
