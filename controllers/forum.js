export class ForumController {
  constructor ({ forumModel }) {
    this.forumModel = forumModel
  }

  getAll = async (req, res) => {
    const forum = await this.forumModel.getAll()
    res.json(forum)
  }
}
