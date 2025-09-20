

import React, { useState, useEffect } from "react";

export default function AdminPanel() {
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  

  // Load only once when page loads
useEffect(() => {
  const savedNews = localStorage.getItem("news");
  if (savedNews) {
    setNewsList(JSON.parse(savedNews));
  }
}, []);

// Save only if there is some news
useEffect(() => {
  if (newsList && newsList.length > 0) {
    localStorage.setItem("news", JSON.stringify(newsList));
  }
}, [newsList]);

  // Add / Update news
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !category || !description) {
      alert("All fields required!");
      return;
    }

    if (editId) {
      // Update existing news
      const updated = newsList.map((n) =>
        n.id === editId ? { id: editId, title, category, description, image } : n
      );
      setNewsList(updated);
      setEditId(null);
    } else {
      // Add new news
      const newNews = { id: Date.now(), title, category, description, image };
      setNewsList([...newsList, newNews]);
    }

    // Reset form
    setTitle("");
    setCategory("");
    setDescription("");
    setImage("");
  };

  // Delete news
  const handleDelete = (id) => {
    const updated = newsList.filter((item) => item.id !== id);
    setNewsList(updated);
  };

  // Edit news (pre-fill form)
  const handleEdit = (news) => {
    setEditId(news.id);
    setTitle(news.title);
    setCategory(news.category);
    setDescription(news.description);
    setImage(news.image);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/"; // redirect without useNavigate
  };

  return (
    <div style={{ padding: "20px" }} className="Admin-main-div">
      <h2>🛠️ Admin Panel - Manage News</h2>
      <button onClick={handleLogout} style={{ float: "right" }}>
        Logout
      </button>

      {/* Form */}
      <div className="admin-main">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="sports">Sports</option>
          <option value="health">Health</option>
          <option value="fitness">Fitness</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <button onClick={handleSubmit}>{editId ? "Update" : "Add"} News</button>
      </div>

      {/* News Table */}
      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.description.slice(0, 50)}...</td>
              <td>
                <img src={item.image} alt="img" width="100" height="60" />
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {newsList.length === 0 && (
            <tr>
              <td colSpan="5">No News Available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
