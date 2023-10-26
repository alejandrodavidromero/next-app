import React from "react";
import { sort } from "fast-sort";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
  orderBy: string
}

const UserTable = async ({ sortOrder, orderBy }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  let sorted: User[] = users;

  if (sortOrder === "name" && orderBy=== "asc") {
    sorted = sort(users).asc((e) => e.name);
  }

  if (sortOrder === "name" && orderBy=== "desc") {
    sorted = sort(users).desc((e) => e.name);
  }

  {
    if (sortOrder === "email" && orderBy ==="asc") {
      sorted = sort(users).asc((e) => e.email);
    }
  }

  
  {
    if (sortOrder === "email" && orderBy ==="desc") {
      sorted = sort(users).desc((e) => e.email);
    }
  }

  return (
    <div>
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
