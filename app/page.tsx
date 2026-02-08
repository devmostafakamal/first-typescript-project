// "use client";
import About from "@/src/components/About";
import TodoApp from "@/src/components/TodoApp";
// import FormComponent from "@/src/components/FormComponent";
// import UserCard from "@/src/UserCard";
// import Button from "@/src/Button";
// import Intro from "@/src/components/Intro";
// import Intro2 from "@/src/components/Intro2";
import React from "react";

function page() {
  const handleDelete = () => {
    console.log("user delete");
  };
  return (
    <div>
      {/* <Intro />
      <Intro2 /> */}
      {/* <Button data="mostafa" /> */}
      {/* <UserCard
        name="mostafa"
        email="abc@email.com"
        role="admin"
        onDelete={handleDelete}
      /> */}
      {/* <div className="mt-4">
       
         </div>
      <About /> */}
      <TodoApp />
    </div>
  );
}

export default page;
