import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  books: Book[] = [];

  constructor(
    private bookService: BookService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe({
      next: (books) => {
        this.books = books;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Failed to load books:', err),
    });
  }

  deleteBook(id: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This book will be permanently deleted!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.bookService.deleteBook(id).subscribe(() => {
          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'The book has been deleted.',
            confirmButtonColor: '#667eea',
          });
          this.loadBooks();
        });
      }
    });
  }
}
