import Checkbox from "./Checkbox";
import DeleteButton from "./DeleteButton";
import TextInput from "./TextInput";
import styles from "./TodoComponent.module.css";

export default function TodoComponent() {
  return (
    <div className={styles.todoLine}>
      <div className={styles.checkBloc}>
        <Checkbox />
      </div>
      <div className={styles.textBloc}>
        <p>todo</p>
      </div>
      <div className={styles.deleteBloc}>
        <DeleteButton />
      </div>
    </div>
  );
}
