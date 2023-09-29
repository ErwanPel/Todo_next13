import mongoose from "mongoose";
import Todo from "./models/Todo";
import styles from "./page.module.css";
import TodoComponent from "@/components/TodoComponent";
import TextInput from "@/components/TextInput";
import SaveTask from "@/components/SaveTask";

const getData = async () => {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.DATABASE_URI);
    }
    const allTodo = await Todo.find();
    return allTodo;
  } catch (error) {
    console.log(errormessage);
  }
};

export default function TodosPage() {
  const data = getData();
  return (
    <main className={styles.wrapper}>
      <div className={styles.searchBar}>
        <TextInput />
        <SaveTask />
      </div>

      <div className={styles.todosBloc}>
        <TodoComponent />
      </div>
    </main>
  );
}
