import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import Swal from 'sweetalert2';

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
    publicationDate: undefined,
  };

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {}

  onSubmit(): void {
    this.bookService.addBook(this.book as Book).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Book Added',
        text: 'The book has been added successfully!',
        confirmButtonColor: '#667eea',
      }).then(() => {
        this.router.navigate(['/']);
      });
    });
  }
}
