import React from "react";

function UserTable() {
  return (
    <>
      <div
        className="w-[740px] h-[414]
      rounded-8.62 custom-shadow absolute top-[395px] left-[-400px]"
      >
        <div className="w-content h-content pt-3 pl-4 pb-6">
          <h1 className="user-text text-bold p-4">Recent Users</h1>{" "}
        </div>
        <div className="user-table">
          <table>
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Going</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone Number</th>
              <th className="p-4">Events</th>
            </tr>
            <tr>
              <td className="name p-4">Dana Boyer</td>
              <td className="date p-4">Wed Aug 30 15:30</td>
              <td className="date p-4">joe@gmail.com</td>
              <td className="date p-4">+92-3334567</td>
              <td className="date p-4">02</td>
            </tr>
            <tr>
              <td className="name p-4">Melody Macy</td>
              <td className="date p-4">Wed Aug 30 15:30</td>
              <td className="date p-4">joe@gmail.com</td>
              <td className="date p-4">+92-3334567</td>
              <td className="date p-4">02</td>
            </tr>
            <tr>
              <td className="name p-4">Max Smith</td>
              <td className="date p-4">Wed Aug 30 15:30</td>
              <td className="date p-4">joe@gmail.com</td>
              <td className="date p-4">+92-3334567</td>
              <td className="date p-4">02</td>
            </tr>
            <tr>
              <td className="name p-4">Sean Bean</td>
              <td className="date p-4">Wed Aug 30 15:30</td>
              <td className="date p-4">joe@gmail.com</td>
              <td className="date p-4">+92-3334567</td>
              <td className="date p-4">02</td>
            </tr>
            <tr>
              <td className="name p-4">Brian Cox</td>
              <td className="date p-4">Wed Aug 30 15:30</td>
              <td className="date p-4">joe@gmail.com</td>
              <td className="date p-4">+92-3334567</td>
              <td className="date p-4">02</td>
            </tr>
            <tr>
              <td className="name p-4">Mikaela Collins</td>
              <td className="date p-4">Wed Aug 30 15:30</td>
              <td className="date p-4">joe@gmail.com</td>
              <td className="date p-4">+92-3334567</td>
              <td className="date p-4">02</td>
            </tr>
            {/* <tr>
              <td className="name">Francis Mitcham</td>
              <td className="date">Wed Aug 30 15:30</td>
              <td className="date">joe@gmail.com</td>
              <td className="date">+92-3334567</td>
              <td className="date">02</td>
            </tr> */}
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTable;

//
