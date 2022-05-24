import React from "react";

export default function UserList({ users }) {
  return (
    <table className="table  w-75 m-auto">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Date of birth</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.address}</td>
              <td>{user.email}</td>
              <td>{user.dateOfBirth}</td>
              <td>
                <button className="btn btn-danger mr-2">Delete</button>
                <button className="btn btn-success mr-2">Update</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
