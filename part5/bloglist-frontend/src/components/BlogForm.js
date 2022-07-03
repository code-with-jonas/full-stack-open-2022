const BlogForm = ({ addBlog, title, author, url, handleTitleChange, handleAuthorChange, handleUrlChange}) => <>
  <h2>Create new</h2>
  <form onSubmit={addBlog} >
    <div>
      title: 
      <input
        value={title}
        onChange={handleTitleChange}
      />
    </div>
    <div>
      author: 
      <input
        value={author}
        onChange={handleAuthorChange}
      />
    </div>
    <div>url:
      <input
        value={url}
        onChange={handleUrlChange}
      />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
</>

export default BlogForm