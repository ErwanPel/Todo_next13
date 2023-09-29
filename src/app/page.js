import mongoose from "mongoose";
import Todo from "./models/Todo";
import styles from "./page.module.css";
import TodoComponent from "@/components/TodoComponent";
import TextInput from "@/components/TextInput";

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

export default async function TodosPage() {
  const data = await getData();

  return (
    <main className={styles.wrapper}>
      <TextInput />

      <div className={styles.todosBloc}>
        <TodoComponent data={data} />
      </div>
    </main>
  );
}
