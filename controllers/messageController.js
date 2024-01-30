/* eslint-disable camelcase */
const path = require("path");
const Message = require("../models/message");

function messages_index(req, res) {
  let messages = [];
  Message.find()
    .sort({ date_posted: -1 })
    .limit(10)
    .then((result) => {
      messages = result;
    })
    .catch((err) => {
      console.log(err);
    });
  res.render(path.join("messages", "index"), { title: "Messages", messages });
}

function message_details(req, res) {
  const { id } = req.params;

  Message.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
      res.statusCode(404).render("404", { title: "Message Not Found" });
    });
}

function message_get(req, res) {
  res.render(path.join("messages", "new"), { title: "New Message" });
}

function message_post(req, res) {
  res.send("Post new message");
}

function message_delete(req, res) {
  res.send(`Delete: ${req.params.id}`);
}

module.exports = {
  messages_index,
  message_details,
  message_get,
  message_post,
  message_delete,
};