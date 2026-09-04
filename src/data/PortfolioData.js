import sportImg from "../assets/Sport.png";
import vueImg from "../assets/MigrationSquared.png";
import venuesImg from "../assets/Venues.png";
import managerImg from "../assets/manager.png";
import polygonImg from "../assets/Polygon.png";
import centerRadiusImg from "../assets/CenterRadius.png";

const portfolioItems = [
  {
    id: "1",
    title: "Vue 2 to Vue 3 Migration",
    description:
      "Migrated 50+ files from Vue 2 to Vue 3, modernizing the frontend architecture and improving the developer experience.",
    image: vueImg,
    details: `Migrated 50+ files from Vue 2 to Vue 3, updating legacy components and modernizing the overall frontend architecture. As part of the migration, I transitioned UI components from PrimeVue to shadcn and replaced Axios with HeyAPI for API communication, helping improve consistency, maintainability, and the overall developer experience.`,
  },
  {
    id: "2",
    title: "Automated Client Backup System",
    description:
      "A desktop automation tool using C#, .NET, Avalonia, and Playwright to automate client account backups for an accounting company.",
    image: managerImg,
    details: `Built a desktop automation tool using C#, .NET, Avalonia, and Playwright to automate client account backups for an accounting company. The application logs into the platform, accesses individual client accounts, generates and downloads backups, and organizes the files automatically, significantly reducing repetitive manual work across hundreds of client accounts.`,
  },
  {
    id: "3",
    title: "AI-Powered Venue Capacity Research System — CitySpark",
    description:
      "An AI-powered pipeline that researched and verified capacities of tens of thousands of venues using Perplexity Sonar Pro, with capacity data stored in MongoDB.",
    image: venuesImg,
    details: `Built an AI-powered pipeline that processed tens of thousands of venues using Perplexity Sonar Pro to research and verify venue capacities. The system stored capacity data in MongoDB and supported venues with multiple rooms by saving individual room capacities as child venues, allowing each space within a venue to maintain its own verified capacity.`,
  },
  {
    id: "4",
    title: "Geographic Polygon & Radius Search Tool",
    description:
      "An interactive geographic search tool using Leaflet that lets users define custom areas with Center + Radius or Polygon-based regions.",
    image: polygonImg,
    galleryImages: [polygonImg, centerRadiusImg],
    details: `Built an interactive geographic search tool that allows users to define custom areas using either Center + Radius or Polygon-based regions. Used Leaflet to provide an interactive map where users can visualize locations, draw and manage polygons, and define search boundaries.

The Center + Radius option allows users to search for a location, automatically retrieve its coordinates, and create a radius around that point. The Polygon option allows users to define more precise custom geographic areas directly on the map. The tool was integrated into the existing application to make location-based filtering and geographic searches more flexible and intuitive.`,
  },
  {
    id: "5",
    title: "Sports Journey Tracker",
    description:
      "A responsive React application that helps athletes track training sessions and visualize progress over time.",
    image: sportImg,
    details: `Sports Journey Tracker is a performance-focused web app designed for athletes to log workouts,
monitor training history, and visualize progress using dynamic charts.
Firebase is used for real-time data storage and authentication, with a strong emphasis on mobile responsiveness,
clean design, and real-world usability inspired by my experience as an NCAA Division I athlete.`,
  },
];

export default portfolioItems;
