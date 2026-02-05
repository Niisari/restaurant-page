import "./styles/Global.css";
import "./styles/Reset.css";
import { Navbar } from "./components/navbar/Navbar.js";

const navbar = new Navbar('header');
navbar.render();