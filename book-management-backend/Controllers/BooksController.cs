using Microsoft.AspNetCore.Mvc;
using BookApi.Models;
using BookApi.Services;

namespace BookApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly BookService bookService;

        public BooksController()
        {
            bookService = new BookService();
        }

        [HttpGet]
        public ActionResult<List<Book>> GetAllBooks()
        {
            return Ok(bookService.GetAllBooks());
        }

        [HttpGet("{id}")]
        public ActionResult<Book> GetBookById(int id)
        {
            var book = bookService.GetBookById(id);
            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        [HttpPost]
        public ActionResult AddBook(Book book)
        {
            bookService.AddBook(book);
            return CreatedAtAction(nameof(GetBookById), new { id = book.Id }, book);
        }

        [HttpPut("{id}")]
        public ActionResult UpdateBook(int id, Book updatedBook)
        {
            var existingBook = bookService.GetBookById(id);
            if (existingBook == null)
            {
                return NotFound();
            }
            bookService.UpdateBook(id, updatedBook);
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult DeleteBook(int id)
        {
            var existingBook = bookService.GetBookById(id);
            if (existingBook == null)
            {
                return NotFound();
            }
            bookService.DeleteBook(id);
            return Ok();
    }
    }
}
