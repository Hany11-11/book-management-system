import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  imports: [FormsModule, RouterLink],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.css',
})
export class EditBook implements OnInit {
  book: Book = { id: 0, title: '', author: '', isbn: '', publicationDate: new Date() };

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id).subscribe(book => {
      this.book = {
        ...book,
        publicationDate: new Date(book.publicationDate).toISOString().split('T')[0] as any
      };
      this.cdr.detectChanges();
    });
  }

  onSubmit(): void {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
