import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import TextInput from "./TextInput";
import styles from "./TodoComponent.module.css";

export default function TodoComponent({ data }) {
  return (
    <>
      {data.map((task, index) => {
        let taskProp = JSON.stringify(task);

        return (
          <div key={index} className={styles.todoLine}>
            <div className={styles.checkBloc}>
              <Checkbox task={taskProp} />
            </div>
            <div className={styles.textBloc}>
              <p>{task.titre}</p>
            </div>
            <div className={styles.deleteBloc}>
              <DeleteButton task={taskProp} />
            </div>
          </div>
        );
      })}
    </>
  );
}
