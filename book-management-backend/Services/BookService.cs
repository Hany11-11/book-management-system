using BookApi.Models;

namespace BookApi.Services
{
    public class BookService
    {
        private static List<Book> books = new List<Book>();

        public List<Book> GetAllBooks()
        {
            return books;
        }

        public Book GetBookById(int id)
        {
            return books.FirstOrDefault(b => b.Id == id);
        }

        public void AddBook(Book book)
        {
            book.Id = books.Count > 0 ? books.Max(b => b.Id) + 1 : 1;
            books.Add(book);
        }
        public void UpdateBook(int id, Book updatedBook)
        {
            var book = GetBookById(id);
            if (book != null)
            {
                book.Title = updatedBook.Title;
                book.Author = updatedBook.Author;
                book.Isbn = updatedBook.Isbn;
                book.PublicationDate = updatedBook.PublicationDate;
            }
        }
        public void DeleteBook(int id)
        {
            var book = GetBookById(id);
            if (book != null)
            {
                books.Remove(book);
            }
        }
    }
}