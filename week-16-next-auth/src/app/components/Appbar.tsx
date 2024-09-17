"use client";

import { signIn, signOut } from "next-auth/react";

// import { useRouter } from "next/navigation";

export const Appbar = () => {
  //   const router = useRouter();
  return (
    <div className="m-4 p-2 ">
      <button
        className="border-black rounded "
        onClick={() => {
          //   M-1
          //   router.push("/api/auth/signin");
          //-----------------
          //M-2
          signIn();
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Log Out
      </button>
    </div>
  );
};
