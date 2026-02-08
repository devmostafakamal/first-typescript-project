import React from "react";
type UserCardProps = {
  name: string;
  email: string;
  role: "admin" | "user";
  onDelete: () => void;
};
function UserCard({ name, email, role, onDelete }: UserCardProps) {
  return (
    <div>
      <h2>Name:{name}</h2>
      <p>Email:{email}</p>
      <p>Role:{role}</p>
      <button className="px-4 py-2 bg-gray-200" onClick={onDelete}>
        Delete User
      </button>
    </div>
  );
}

export default UserCard;
