import "./styles/Global.css";
import "./styles/Reset.css";

import { Navbar } from "./components/navbar/Navbar.js";
import { HomePage } from "./pages/home/HomePage.js";
import { Footer } from "./components/footer/Footer.js";

const navbar = new Navbar('header');
navbar.render();

const homePage = new HomePage();
homePage.render();

const footer = new Footer();
footer.render();