"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function DeleteButton({ task }) {
  const router = useRouter();
  let parseTask = JSON.parse(task);

  console.log(parseTask._id);

  const sendData = async (data) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/todo?id=${parseTask._id}`
      );
      console.log(response.data);
      router.fastRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    sendData();
  };

  return <button onClick={handleDelete}>-</button>;
}
