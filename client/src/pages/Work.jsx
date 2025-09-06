import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

export default function WorkDisplayPage() {
  const [projects, setProjects] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    category: "",
    media: null,
  });

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/works/All`);
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Works</h1>
      <button onClick={() => setShowAddModal(true)}>Add New Project</button>

      {/* Projects */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {projects.filter((project) => project.category === "saas").map((project) => (
          <div key={project._id} style={{ border: "1px solid #ccc", padding: "10px", width: "300px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Category:</strong> {project.category}</p>
            <p>{project.mediaUrl}ois rths </p>
              <video src={project.mediaUrl} muted loop autoPlay />
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", width: "400px" }}>
            <h2>Add New Project</h2>
            <input
              type="text"
              placeholder="Title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
              type="text"
              placeholder="Description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
              type="text"
              placeholder="Category"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
              style={{ width: "100%", marginBottom: "10px" }}
            />
            <input
              type="file"
              onChange={(e) => setNewProject({ ...newProject, media: e.target.files[0] })}
              style={{ marginBottom: "10px" }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
              <button onClick={handleAddNew}>Add</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
