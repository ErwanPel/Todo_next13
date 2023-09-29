"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TextInput() {
  const [text, setText] = useState("");

  const router = useRouter();

  console.log(router);

  const sendData = async (data) => {
    console.log("send data");
    try {
      const response = await axios.post("http://localhost:3000/api/todo", data);
      console.log(response.data);
      router.fastRefresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("ici");
    sendData({ titre: text });
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Your task ?"
        max={90}
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button>Save your task</button>
    </form>
  );
}
