import { readJSON } from '../../utils.js'

const forum = readJSON('./forum.json')

export class ForumModel {
  static async getAll () {
    return forum
  }
}
