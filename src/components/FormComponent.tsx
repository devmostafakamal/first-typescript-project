import React, { useState } from "react";

interface FormData {
  username: string;
  email: string;
  age: number;
  agree: boolean;
}

function FormComponent() {
  const [name, setName] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    age: 0,
    agree: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        className="w-20 h-5 bg-gray-200"
        onChange={(e) => setName(e.target.value)}
      />
      <form action="">
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Username"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />

        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Age"
        />

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleInputChange}
          />
          Agree
        </label>
      </form>
    </div>
  );
}

export default FormComponent;
