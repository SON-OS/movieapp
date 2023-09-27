
import React from "react";

export default function Register() {
  return (
    <>
      <div className="w-75 mx-auto">
        <h2>Register</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input className="form control mb-2" id="first_name" name="first_name" />
          

          <label htmlFor=" email">email:</label>
          <input className="form control mb-2" id="email" name="email" />
          <br />

          <label htmlFor="password">Password:</label>
          <input className="form control md-2" id="password" name="password" />
        </form>
      </div>
    </>
  );
}

