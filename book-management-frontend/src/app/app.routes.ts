import { Routes } from '@angular/router';
import { BookList } from './components/book-list/book-list';
import { AddBook } from './components/add-book/add-book';
import { EditBook } from './components/edit-book/edit-book';

export const routes: Routes = [
    {path: '', component: BookList},
    {path: 'add', component: AddBook},
    {path: 'edit/:id', component: EditBook}
];
