import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEditBook = () => {
  const [book, setBook] = useState({
    name: '',
    author: '',
    category: '',
    isbn: '',
    availability: 'Available',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { id } = useParams(); // for fetch book id from the route, if it present
  const navigate = useNavigate(); // for navigation

  useEffect(() => {
    if (id) {
      // we can fetch book details for editing
      setLoading(true);
      fetch('/api/books/${id}')
        .then((response) => response.json())
        .then((data) => {
          setBook(data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to fetch book details');
          setLoading(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = id ? `/api/books/${id}` : '/api/books';
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to save book');
        return response.json();
      })
      .then(() => {
        setLoading(false);
        navigate('/books');
      })
      .catch((err) => {
        setError('Failed to save book');
        setLoading(false);
      });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="add-edit-book">
      <h1>{id ? 'Edit book' : 'Add new book'}</h1>
      <form onSubmit={handleSubmit}>

        {/* Book Name */}
        <div>
          <label>Book Name: </label>
          <input
            type="text"
            name="name"
            value={book.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Author */}
        <div>
          <label>Author: </label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        {/* ISBN */}
        <div>
          <label>ISBN:</label>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={book.category}
            onChange={handleChange}
          />
        </div>

        {/* Availability */}
        <div>
          <label>Availability:</label>
          <select
            name="availability"
            value={book.availability}
            onChange={handleChange}
          >
            <option value="Available">Available</option>
            <option value="Checked Out">Checked Out</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" disabled={loading}>
            {id ? 'Update Book' : 'Add Book'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEditBook;