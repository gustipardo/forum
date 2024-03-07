import { createApp } from './app.js'
import { ForumModel } from './models/local-file-system/forum.js'

// Creamos un servidor con mySQL
createApp({ forumModel: ForumModel })
