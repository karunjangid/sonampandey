import React, { useState } from 'react';
import '../style/Blog.css';

const initialBlogs = [
  {
    id: 1,
    title: 'The Importance of Legal Advice',
    content: 'Legal advice is crucial for navigating complex legal systems and protecting your rights.',
  },
  {
    id: 2,
    title: 'Understanding Contract Law',
    content: 'Contracts form the basis of many legal agreements. Understanding them helps avoid disputes.',
  },
  {
    id: 3,
    title: 'How to Prepare for Court',
    content: 'Preparation is key to a successful court appearance. Know your case and your rights.',
  },
];

function AdminLogin({ onLogin, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded authentication
    if (username === 'sonampandey' && password === 'pandey@1234') {
      onLogin();
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-overlay">
      <div className="admin-login-modal">
        <h3>Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit">Login</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

function BlogEditor({ blog, onSave, onCancel }) {
  const [title, setTitle] = useState(blog ? blog.title : '');
  const [content, setContent] = useState(blog ? blog.content : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      onSave({ id: blog ? blog.id : Date.now(), title, content });
    }
  };

  return (
    <div className="blog-editor-overlay">
      <div className="blog-editor-modal">
        <h3>{blog ? 'Edit Blog' : 'Write a Blog'}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Write your blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button type="submit">Save</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

function Blog() {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [adminMode, setAdminMode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showEditor, setShowEditor] = useState(false);
  const [editBlog, setEditBlog] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  const handleBlogTextClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount === 7) {
      setShowLogin(true);
      setClickCount(0);
    }
  };

  const handleLoginSuccess = () => {
    setAdminMode(true);
    setShowLogin(false);
  };

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setShowEditor(true);
  };

  const handleSave = (blog) => {
    if (editBlog) {
      setBlogs(blogs.map((b) => (b.id === blog.id ? blog : b)));
    } else {
      setBlogs([blog, ...blogs]);
    }
    setShowEditor(false);
    setEditBlog(null);
  };

  const handleWriteBlog = () => {
    setEditBlog(null);
    setShowEditor(true);
  };

  const handleCancelEditor = () => {
    setShowEditor(false);
    setEditBlog(null);
  };

  return (
    <div className="blog-page">
      <h2 className="blog-title" onClick={handleBlogTextClick}>Blog</h2>
      <p className="blog-description">Read the latest articles, news, and updates from Adv. Sonam Pandey.</p>

      {adminMode && (
        <button className="write-blog-btn" onClick={handleWriteBlog}>
          Write a Blog
        </button>
      )}

      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            {adminMode && (
              <div className="blog-actions">
                <button className="edit-btn" onClick={() => handleEdit(blog)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showLogin && (
        <AdminLogin onLogin={handleLoginSuccess} onClose={() => setShowLogin(false)} />
      )}

      {showEditor && (
        <BlogEditor blog={editBlog} onSave={handleSave} onCancel={handleCancelEditor} />
      )}
    </div>
  );
}

export default Blog;
