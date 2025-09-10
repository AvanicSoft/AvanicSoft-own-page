import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const RingLoader = ({ className = "" }) => (
  <div
    className={`w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ${className}`}
  ></div>
);

export default function Work() {
  const [loading, setLoading] = useState(false);
  const [Save, setSave] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [cardsData, setCardsData] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [addNew, setAddNew] = useState([
    { id: 1, title: "", description: "", video: "", category: "" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEdit, setCurrentEdit] = useState(null);


  const fetchData = async () => {
    try {
      const res = await axios.get(`${BACKEND_URL}/api/works/All`);
      setCardsData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add new work
  const uploadSaveHandler = async () => {
    setLoading(true);
    setSave(true);
    try {
      const formData = new FormData();
      formData.append("title", addNew[0].title);
      formData.append("description", addNew[0].description);
      formData.append("category", addNew[0].category);
      formData.append("file", addNew[0].video);

      await axios.post(`${BACKEND_URL}/api/works/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormOpen(false);
      fetchData();
      setAddNew([{ id: 1, title: "", description: "", video: "", category: "" }]);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  // Save edits
  const handleEditSave = async () => {
    try {
      const formData = new FormData();
      formData.append("title", currentEdit.title);
      formData.append("description", currentEdit.description);
      formData.append("category", currentEdit.category);
      if (currentEdit.video instanceof File) {
        formData.append("file", currentEdit.video);
      }

      await axios.put(`${BACKEND_URL}/api/works/edit/${currentEdit._id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsEditing(false);
      setCurrentEdit(null);
      fetchData(); // reload updated cards
    } catch (err) {
      console.error(err);
    }
  };

  const categories = [...new Set(cardsData.map((card) => card.category))];

  const filteredCards = searchTerm
    ? cardsData.filter((card) => card.category === searchTerm)
    : cardsData;

  const handleEditClick = (card) => {
    setCurrentEdit(card);
    setIsEditing(true);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
    setCurrentEdit(null);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-10">
      {/* Add New Form */}
      {formOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Add New Work</h2>
            {addNew.map((item, index) => (
              <div key={item.id} className="mb-4">
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={item.title}
                  onChange={(e) => {
                    const newAdd = [...addNew];
                    newAdd[index].title = e.target.value;
                    setAddNew(newAdd);
                  }}
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={item.description}
                  onChange={(e) => {
                    const newAdd = [...addNew];
                    newAdd[index].description = e.target.value;
                    setAddNew(newAdd);
                  }}
                />
                <input
                  type="text"
                  placeholder="Category"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  value={item.category}
                  onChange={(e) => {
                    const newAdd = [...addNew];
                    newAdd[index].category = e.target.value;
                    setAddNew(newAdd);
                  }}
                />
                <input
                  type="file"
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                  onChange={(e) => {
                    const newAdd = [...addNew];
                    newAdd[index].video = e.target.files[0];
                    newAdd[index].preview = URL.createObjectURL(e.target.files[0]);
                    setAddNew(newAdd);
                  }}
                />
                {item.preview && (
                  <video
                    src={item.preview}
                    controls
                    className="w-full h-auto object-cover rounded-md mb-2"
                  />
                )}
              </div>
            ))}
            <div className="flex justify-between">
              <button
                onClick={() => setFormOpen(false)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={uploadSaveHandler}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                {loading ? <RingLoader /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Form */}
      {isEditing && currentEdit && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-2xl mb-4">Edit Work</h2>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={currentEdit.title}
                onChange={(e) => setCurrentEdit({ ...currentEdit, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Description"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={currentEdit.description}
                onChange={(e) => setCurrentEdit({ ...currentEdit, description: e.target.value })}
              />
              <input
                type="text"
                placeholder="Category"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                value={currentEdit.category}
                onChange={(e) => setCurrentEdit({ ...currentEdit, category: e.target.value })}
              />
              <input
                type="file"
                className="w-full mb-2 p-2 border border-gray-300 rounded"
                onChange={(e) => setCurrentEdit({ ...currentEdit, video: e.target.files[0] })}
              />
              <video
                src={
                  currentEdit.video instanceof File
                    ? URL.createObjectURL(currentEdit.video)
                    : currentEdit.video
                }
                controls
                className="w-full h-auto object-cover rounded-md mb-2"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={handleEditCancel}
                className="px-4 py-2 bg-gray-600 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-600 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="heading text-5xl text-center font-bold">
        <h1 className="mb-2">
          Discover <span className="text-purple-600">Portfolio</span> websites
        </h1>
        <h1>built by the Avanic community</h1>
      </div>

      <button
        onClick={() => setFormOpen(true)}
        className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
      >
        Add
      </button>

      {/* Category Buttons */}
      <div className="sections-withbtn mt-6 flex flex-col md:flex-row items-center justify-between w-full pr-21 pl-21">
        <div className="flex gap-4">
          <button
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSearchTerm(cat)}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-6 mr-20 ml-20">
         {filteredCards.map((card) => (
          <div
            key={card._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <video
              src={`${BACKEND_URL}${card.mediaUrl}`}
              controls
              className="w-full h-auto object-cover rounded-md"
            />
            <div className="text-btns flex flex-row justify-between items-center m-2">
              {currentEdit && currentEdit._id === card._id ? (
                // Edit view
                <div className="flex flex-col w-full gap-2">
                  <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={currentEdit.title}
                    onChange={(e) => setCurrentEdit({ ...currentEdit, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={currentEdit.description}
                    onChange={(e) => setCurrentEdit({ ...currentEdit, description: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="w-full p-2 border border-gray-300 rounded"
                    value={currentEdit.category}
                    onChange={(e) => setCurrentEdit({ ...currentEdit, category: e.target.value })}
                  />
                  <input
                    type="file"
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => setCurrentEdit({ ...currentEdit, video: e.target.files[0] })}
                  />
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={handleEditCancel}
                      className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEditSave}
                      className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-500 transition"
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                // Normal view
                <>
                  <div className="text">
                    <h3 className="text-lg font-semibold text-gray-800 m-2">
                      {card.title}
                    </h3>
                    <p className="description text-gray-500 text-sm m-2">
                      {card.description}
                    </p>
                  </div>
                  <div className="buttons flex gap-2">
                    <button
                      onClick={() => handleEditClick(card)}
                      className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                    >
                      Edit
                    </button>
                    <button
                      onClick={async () => {
                        await axios.delete(`${BACKEND_URL}/api/works/delete/${card._id}`);
                        fetchData();
                      }}
                      className="bg-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition cursor-pointer"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}