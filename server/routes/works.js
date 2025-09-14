const express = require("express");
const router = express.Router();
const workSchema  = require("../models/works");

const { upload } = require("../middlewares/multer");
const fs = require("fs");


router.get("/All", async (req, res) => {
  try {
    const works = await workSchema.find();
    res.json(works);
  } catch (error) {
    console.error("Error fetching works:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { title, description, category } = req.body;
  
    const mediaUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const newWork = new workSchema({ title, description, category, mediaUrl });
    await newWork.save();
    res.status(201).json(newWork);
  } catch (error) {
    console.error("Error creating work:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/edit/:id", upload.single("file"), async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description, category } = req.body;

    
    const work = await workSchema.findById(id);
    if (!work) return res.status(404).json({ error: "Work not found" });

    let mediaUrl = work.mediaUrl;
    if (req.file) {
     
      if (work.mediaUrl) {
        const oldFile = `./public/uploads/${work.mediaUrl.split("/").pop()}`;
        if (fs.existsSync(oldFile)) fs.unlinkSync(oldFile);
      }
      mediaUrl = `/uploads/${req.file.filename}`;
    }

    const updatedWork = await workSchema.findByIdAndUpdate(
      id,
      { title, description, category, mediaUrl },
      { new: true }
    );

    res.json(updatedWork);
  } catch (error) {
    console.error("Error updating work:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const work = await workSchema.findById(id);
    if (!work) return res.status(404).json({ error: "Work not found" });
    // Delete associated file if exists
    if (work.mediaUrl) {
      const filePath = `./public/uploads/${work.mediaUrl.split("/").pop()}`;
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } 
    await workSchema.findByIdAndDelete(id);
    res.json({ message: "Work deleted successfully" });
  } 
  catch (error) { 
    console.error("Error deleting work:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
