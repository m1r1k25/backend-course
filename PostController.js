import Post from "./Post.js"

class PostController {
  async create(req, res) {
    try {
      const {author, title, content, picture} = req.body
      const post = await Post.create({author, title, content, picture})
      res.json(post)
    } catch(e) {
        res.status(500).json(e.message)
    }
  }
  async getAll(req, res) {
    try {
        const posts = await PostService.getAll();
        return res.json(posts);
    } catch (e) {
        res.status(500).json(e)
    }
}
  async getOne(req, res) {
      try {
          const post = await PostService.getOne(req.params.id)
          return res.json(post)
      } catch (e) {
          res.status(500).json(e)
      }
  }
  async update(req, res) {
      try {
          const updatedPost = await PostService.update(req.body);
          return res.json(updatedPost);
      } catch (e) {
          res.status(500).json(e.message)
      }
  }
  async delete(req, res) {
      try {
          const post = await PostService.create(req.params.id);
          return res.json(post)
      } catch (e) {
          res.status(500).json(e)
      }
  }
}

export default new PostController()