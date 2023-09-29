import { Schema, model, models } from "mongoose";

const todo = new Schema({
  titre: String,
  isDone: {
    type: Boolean,
    default: false,
  },
});

const Todo = models.Todo || model("Todo", todo);

export default Todo;
