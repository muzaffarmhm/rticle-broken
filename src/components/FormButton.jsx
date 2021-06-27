import React from "react";

export default function FormButton() {
  return (
    <div className="mt-10">
      <input
        type="submit"
        defaultValue="Sign up with email"
        className="py-3 bg-green-400 text-white w-full rounded hover:bg-green-600 cursor-pointer"
      />
    </div>
  );
}
