import { NextResponse } from "next/server";
import connectRouteToDb from "@/middlewares/connectRouteToDb";
import Todo from "@/app/models/Todo";

export const GET = connectRouteToDb(async (request) => {
  return NextResponse.json("Hello, Todo", { status: 200 });
});

export const POST = connectRouteToDb(async (request) => {
  try {
    const { titre } = await request.json();
    const newTodo = new Todo({
      titre,
    });
    await newTodo.save();
    return NextResponse.json({ message: "created" }, { status: 201 });
  } catch (error) {
    NextResponse.json("oups error", { status: 500 });
  }
});

export const PUT = connectRouteToDb(async (request) => {
  const { id } = await request.json();
  console.log(typeof id, id);
  const searchTodo = await Todo.findById(id);

  if (searchTodo) {
    searchTodo.isDone = !searchTodo.isDone;
    searchTodo.save();
    return NextResponse.json(searchTodo, { status: 200 });
  } else {
    console.log("pas de todo trouvé");
  }
});

export const DELETE = connectRouteToDb(async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  console.log(id);
  const deleteTodo = await Todo.findByIdAndDelete(id);
  return NextResponse.json("la todo a été détruite", { status: 200 });
});
