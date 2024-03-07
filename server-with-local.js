import { createApp } from "./app.js";
import { MovieModel } from "./models/local-file-system/movie.js";

// Creamos un servidor con mySQL
createApp({ movieModel: MovieModel });
