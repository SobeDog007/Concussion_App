const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  	name: { type: String, required: true },
  	date: { type: Date, default: Date.now },
  	result: { type: String, required: true},
  	notes: { type: String, required: false}
  
});

const Entry = mongoose.model("Entry", entrySchema);

module.exports = Entry;
