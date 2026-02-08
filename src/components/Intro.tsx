"use client";

import { useState } from "react";

// enum type: Enum হল কিছু সংখ্যার বা মানের জন্য সুন্দর নাম দেওয়ার পদ্ধতি, যাতে কোড পড়তে ও বুঝতে সহজ হয়।
// enum Days {
//   Sunday, // 0
//   Monday, // 1
//   Tuesday, // 2
//   Wednesday, // 3
//   Thursday, // 4
//   Friday, // 5
//   Saturday, // 6
// }
// enum UserRole {
//   Admin = "ADMIN",
//   Editor = "EDITOR",
//   Viewer = "VIEWER",
//   Guest = "GUEST",
// }
// function checkPermission(role: UserRole) {
//   if (role === UserRole.Admin) {
//     return "full access";
//   } else if (role === UserRole.Editor) {
//     return "read only access";
//   }
// }
// let user1 = UserRole.Editor;
// console.log(checkPermission(user1));
// let today: Days = Days.Sunday;

// console.log(today);

// interface: Interface হল TypeScript-এর একটি শক্তিশালী feature যা object-এর shap বা structure define করে, Interface object-এর structure define করে
// interface Person {
//   name: string;
//   age: number;
//   email: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   discount?: number;
// }

// const product: Product = {
//   id: 12,
//   name: "laptop",
//   price: 1200,
// };
// console.log(product.price);
// const person1: Person = {
//   name: "mostafa",
//   age: 23,
//   email: "email@gmail.com",
// };
// console.log(person1.email);

// type

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   role: "user" | "admin";
// };
// const user: User = {
//   id: "12",
//   name: "mostafa",
//   email: "ex@gmail.com",
//   role: "admin",
// };
// console.log(user.role);

type Status = "idle" | "loading" | "success" | "error";

function Intro() {
  const [status, setStatus] = useState<Status>("error");
  const handleSubmit = async () => {
    console.log("Before submit:", status); // 👉 browser console
    setStatus("loading");

    try {
      // fake API delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setStatus("success");
      console.log("After success:", status); // old value (state async)
    } catch (error) {
      setStatus("error");
    }
  };
  return (
    <div>
      <div className="p-6 space-y-4">
        <h1 className="text-xl font-bold">Status Example</h1>

        <p>
          Current Status: <b>{status}</b>
        </p>

        <button
          onClick={handleSubmit}
          disabled={status === "loading"}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          {status === "loading" ? "Submitting..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600">✅ Submission successful</p>
        )}

        {status === "error" && (
          <p className="text-red-600">❌ Something went wrong</p>
        )}
      </div>
    </div>
  );
}

export default Intro;
