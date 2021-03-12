import { AppState } from '../AppState.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class PostService {
  async getPosts() {
    try {
      const res = await api.get('blogs')
      AppState.posts = res.data
      console.log(res.data)
    } catch (error) {
      logger.error()
    }
  }
}

export const postService = new PostService()
