
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
   title: 'Wings Of Fire',
   imageUrl: '/images/Wings of fire.jpg',
   link: 'https://www.amazon.in/Wings-Fire-Autobiography-Abdul-Kalam/dp/8173711461'
  },
  {
    title: 'Turning Points',
    imageUrl: '/images/Turning points.jpg',
    link: 'https://www.amazon.in/Turning-Points-Journey-Challanges-Challenges/dp/9350293471'
  },
  {
    title: 'Story Of Experiments With Truth',
    imageUrl: '/images/Story of Experiments with truth.jpg',
    link: 'https://www.amazon.in/Mahatma-Gandhi-Autobiography-Story-Experiments/dp/8172343116'
  },
  {
    title: 'Ignited Minds',
    imageUrl: '/images/Ignited Minds.jpg',
    link: 'https://www.amazon.in/Ignited-Minds-Unleashing-power-within/dp/0143424122'
  },
  {
    title: 'Forge Your Future',
    imageUrl: '/images/forge your future1.webp',
    link: 'https://www.amazon.in/Forge-Future-P-J-Abdul-Kalam/dp/9350642794'
  }
];
 
const BookList = () => (
  <div>
    <h1>My Favorite Books</h1>
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book">
          <img src={book.imageUrl} alt={book.title} />
          <h3>{book.title}</h3>
          <a href={book.link} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  </div>
);

ReactDOM.render(<BookList />, document.getElementById('root'));









