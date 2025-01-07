import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddEditBook = () => {
  const [book, setBook] = useState({
    name:'',
    author:'',
    category:'',
    isbn:'',
    availability: 'Available',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {id} = useParams(); // for fetch book id from the route, if it present
  const navigate = useNavigate(); // for navigation

  useEffect(()=>{
    if (id) {
      // we can fetch book details for editing
      setLoading(true);
      fetch('/api/books/${id}')
      .then((response)=>response.json())
      .then((data)=>{
        setBook(data);
        setLoading(false);
      })
      .catch((err)=>{
        setError('Failed to fetch book details');
        setLoading(false);
      });
    }
  },[id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({...prevBook, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const url = id ? `/api/books/${id}` : '/api/books';
    const method = id ? 'PUT' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type':'application/json'},
      body: JSON.stringify(book),
    })
    .then((response) => {
      if(!response.ok) throw new Error('Failed to save book');
      return response.json();
    })
    .then(()=>{
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

}