import recipeImg from "../assets/buffet.jpg";
import planeImg from "../assets/plane.jpg";
import quotesImg from "../assets/nota.jpg";
import sportImg from "../assets/Sport.png";

const portfolioItems = [
  {
    id: "1",
    title: "Recipe App",
    description:
      "A React app with Firebase integration to store and browse cooking recipes in real time.",
    image: recipeImg,
    details: `This project allows users to submit, view, and manage their favorite recipes using Firebase Realtime Database.
It was built to practice working with backend data, authentication, and React hooks while maintaining a clean
and intuitive user interface.`,
  },
  {
    id: "2",
    title: "Airline Reservation System",
    description:
      "A WPF desktop application that simulates booking flights, viewing passengers, and managing seat assignments.",
    image: planeImg,
    details: `This desktop application was built using C#, WPF, and OleDb with a real database connection.
It supports flight and passenger management, interactive seat visualization, and clean separation
of business logic from the UI to demonstrate scalable, real-world architecture.`,
  },
  {
    id: "3",
    title: "Sports Journey Tracker",
    description:
      "A responsive React application that helps athletes track training sessions and visualize progress over time.",
    image: sportImg,
    details: `Sports Journey Tracker is a performance-focused web app designed for athletes to log workouts,
monitor training history, and visualize progress using dynamic charts.
Firebase is used for real-time data storage and authentication, with a strong emphasis on mobile responsiveness,
clean design, and real-world usability inspired by my experience as an NCAA Division I athlete.`,
  },
  {
    id: "4",
    title: "Wonderful Quotes",
    description:
      "A React quote app that lets users submit, view, and delete inspirational quotes.",
    image: quotesImg,
    details: `This application demonstrates core React concepts such as state management, props,
and component-driven design. Users can add, remove, and view quotes with client-side validation
and a modern, user-friendly interface.`,
  },
];

export default portfolioItems;
