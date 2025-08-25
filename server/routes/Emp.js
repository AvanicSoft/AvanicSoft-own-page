const express = require('express');
const router = express.Router();
const Record = require('../models/Emp');

// Get all records
router.get('/allEmp', async (req, res) => {
  const records = await Record.find();
  res.json(records);
});

// Create new record
router.post('/newEmp', async (req, res) => {

  const record = new Record(req.body);
  await record.save();
  res.json(record);
});

// Update a record
router.put('/:id', async (req, res) => {
  const updated = await Record.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete a record
router.delete('/:id', async (req, res) => {
  await Record.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
});

router.get('/cardEmp/:id', async (req, res) => {
  const record = await Record.findById(req.params.id);
  if (!record) return res.status(404).json({ error: 'Record not found' });
  res.json(record);
});

module.exports = router;
