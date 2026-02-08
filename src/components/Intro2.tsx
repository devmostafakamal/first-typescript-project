"use client";

function Intro2() {
  // type User = {
  //   name: string;
  //   age: number;
  // };

  // const user: User = {
  //   name: "Mostafa",
  //   age: 25,
  // };
  //generics : TypeScript-এ Generics হলো এমন একটি ফিচার যার মাধ্যমে আমরা টাইপকে parameter হিসেবে পাঠাতে পারি।
  // function identity<T>(value: T): T {
  //   return value;
  // }
  // const text = identity("Bangladeshi");
  // const b = identity(23);
  // text.toUpperCase();
  // console.log(text);
  // // const num=identity<number>('12');

  // interface ApiResponse<T> {
  //   data: T;
  //   success: boolean;
  // }
  // const userResponse: ApiResponse<{ id: number; name: string }> = {
  //   data: { id: 12, name: "mostafa" },
  //   success: true,
  // };
  // console.log(userResponse.data.name);

  // type inference
  // typeScript প্রথম assignment থেকেই টাইপ ধরে নেয় // TypeScript নিজে থেকে টাইপ বুঝে নেয়
  //যদি শুরুতেই কিছু না থাকে, তখন any
  // let a;
  // a = "mostfa";
  // a = 12;
  // a=[];

  // basic types number,string, boolean,array,tuple,enum , any, void, null/undefined
  // const a: number = 12;
  // let b: string;
  // b = "mostafa";
  // console.log(b);
  // let isOnline:boolean;
  // isOnline=true;
  // isOnline=12

  // array
  // let arr:number[];
  // arr=[12,233,''];
  // arr.find() //access all array method

  // object with explicit type
  // const User: { name: string; age: number } = {
  //   name: "Mostafa",
  //   age: 23,
  // };
  // console.log(User.age);

  // any: mane holo jekono type hobe
  // let data:any;
  // data = 10;
  // data = "hello";

  // void: kichui return kore nah
  // function logMessage(msg: string): void {
  //   console.log(msg);
  // }

  // tuple :ekta array te koi ta element thakbe and element gulor type ki hobe ei jinis ta define kore dawea
  // let arr:[string,number];
  // arr=['numeric',12,er]
  // let user: [string, number, boolean] = ["John", 30, true];

  // enum : Enum হল কিছু সংখ্যার বা মানের জন্য সুন্দর নাম দেওয়ার পদ্ধতি, যাতে কোড পড়তে ও বুঝতে সহজ হয়।

  // enum Direction {
  //   up,
  //   down,
  //   left,
  //   right,
  // }
  // let move: Direction = Direction.right;
  // console.log(move);
  // enum Response {
  //   Success = "SUCCESS",
  //   Error = "ERROR",
  //   Pending = "PENDING",
  // }

  // let status: Response = Response.Success;
  // console.log(status);

  // function
  // function greet(a: number, b: string): number {
  //   return 23;
  // }
  // greet(23, "mostafa");

  // type alias : Type alias = custom type বানানো
  // Primitive
  // type UserId = string;
  // type Price = number;

  // // union type
  // type Status = "idle" | "loading" | "success" | "error";
  // // function type
  // type OnClick = (id: string) => void;

  // type user = {
  //   name: string;
  //   age: number;
  // };

  // let a: user;
  // a = {
  //   name: "Mostafa",
  //   age: 23,
  // };
  // type MathFn = (a: number, b: number) => number;
  // let add: MathFn = (a, b) => {
  //   return a;
  // };

  // interface : interface hole typescript e object er shap ba structer define kore dawea.ekta object e ki ki property and tader type ki hobe
  // interface Category {
  //   id: string;
  //   name: string;
  //   slug: string;
  //   description?: string;
  //   parentCategoryId?: string;
  //   imageUrl?: string;
  // }
  // interface e declearation merge hoi
  // interface Person {
  //   name: string;
  //   email: string;
  // }
  // interface Person {
  //   age: number;
  //   phone?: string;
  // }

  // const person: Person = {
  //   name: "mostafa",
  //   email: "email@gmail.com",
  //   age: 1323,
  // };

  //combine 2 interface

  // interface A {
  //   a: number;
  // }

  // interface B extends A {
  //   b: string;
  // }
  // let obj: B = {
  //   a: 49,
  //   b: "smsm",
  // };

  // generics
  // interface user<T> {
  //   name: string;
  //   age: T;
  // }
  // let person: user<number> = {
  //   name: "Mostafa",
  //   age: 23,
  // };
  // let a: ayush;
  // a = {
  //   name: "shshs",
  // };
  // console.log(user.age);
  return <div></div>;
}

export default Intro2;
