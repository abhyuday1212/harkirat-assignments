import axios from "axios"; 
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function fetchData1() {
  const response = await axios.get("http://localhost:3000/api/user");

  console.log("Response is " + JSON.stringify(response.data));
  return response.data;
}

async function fetchData2() {
  const user = await prisma.user.findFirst();

  return {
    username: user?.username,
    name: "Abhyuday",
  };
}

export default async function User() {
  const data = await fetchData2();

  return <div>{data.username}</div>;
}
