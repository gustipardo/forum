import { Router } from 'express'
import { ForumController } from '../controllers/forum.js'

export const createForumRouter = ({ forumModel }) => {
  const forumRouter = Router()
  const forumController = new ForumController({ forumModel })

  forumRouter.get('/', forumController.getAll)

  return forumRouter
}
