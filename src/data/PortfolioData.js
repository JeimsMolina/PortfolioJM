import recipeImg from '../assets/buffet.jpg';
import planeImg from '../assets/plane.jpg';
import quotesImg from '../assets/nota.jpg';

const portfolioItems = [
  {
    id: '1',
    title: 'Recipe App',
    description: 'A React app with Firebase integration to store and browse cooking recipes in real time.',
    image: recipeImg,
    details: `This project allows users to submit, view, and manage their favorite recipes using Firebase Realtime Database.
    The main goal was to practice working with backend data and React hooks in a clean user interface.`,
  },
  {
    id: '2',
    title: 'Airline Reservation WPF',
    description: 'A WPF desktop app that simulates booking flights, viewing passengers, and managing flight data.',
    image: planeImg,
    details: `This project uses C# and WPF to simulate an airline reservation system. It includes a real database connection (via Access/OleDb),
    dynamic flight and passenger display, a seat visualization layout, and manager logic separated from the UI.
    It was built to demonstrate real-world application structure and responsive desktop design.`,
  },
  {
    id: '3',
    title: 'Wonderful Quotes',
    description: 'A React quote app that lets users submit, view, and delete inspirational quotes.',
    image: quotesImg,
    details: `This quote app uses React state and props to let users manage a collection of inspiring quotes.
    It includes client-side validation, quote deletion, and a modern UI design.`,
  },
];

export default portfolioItems;
