"use server";
// whenever we use server action than for that we need to import "use server" at the top of the file

import client from "@/app/db";


export async function signupData(email: string, password: string) {
  try {
    await client.user.create({
      data: {
        username: email,
        password: password,
      },
    });

    return true;
  } catch (error) {
    return false;
  }
}
