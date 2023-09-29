import { NextResponse } from "next/server";
import connectRouteToDb from "@/middlewares/connectRouteToDb";
import Todo from "@/app/models/Todo";

export const GET = connectRouteToDb(async (request) => {
  return NextResponse.json("Hello, Todo", { status: 200 });
});

export const POST = connectRouteToDb(async (request) => {
  const { titre } = await request.json();
  const newTodo = new Todo({
    titre,
  });
  await newTodo.save();
  return NextResponse.json({ message: "created" }, { status: 201 });
});
