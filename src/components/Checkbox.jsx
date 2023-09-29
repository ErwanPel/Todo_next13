"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Checkbox({ task }) {
  const router = useRouter();
  let parseTask = JSON.parse(task);

  const sendData = async (data) => {
    try {
      const response = await axios.put("http://localhost:3000/api/todo", data);
      console.log(response.data);
      router.fastRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleModify = () => {
    sendData({ id: parseTask._id });
  };

  return (
    <input
      type="checkbox"
      checked={parseTask.isDone}
      name="checkTask"
      id="checkTask"
      onChange={handleModify}
    />
  );
}
