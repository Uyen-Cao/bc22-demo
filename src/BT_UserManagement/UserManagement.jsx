import React, { Component } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

export default class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstName: "Uyen",
          lastName: "Cao",
          address: "Q.BThanh",
          age: 12,
          email: "uyencao@gmail.com",
          dateOfBirth: "12-5-2022",
        },
        {
          id: 2,
          firstName: "Huynh",
          lastName: "Hoa",
          address: "Q.BThanh",
          age: 24,
          email: "huynh@gmail.com",
          dateOfBirth: "12-5-2022",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1> UserManagement</h1>
        <UserForm />
        <UserList users={this.state.users} />
      </div>
    );
  }
}
