import React from "react";

const Table = () => {
  return (
    <div>
      <table>
        <caption>Customer Information</caption>
        <tr>
          <th>ID</th>
          <th colSpan='2'>Full Name</th>
          {/* <th>Last Name</th> */}
          <th>Contact</th>
          <th>E-mail</th>
          <th>Address</th>
          <th>Country</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Gangesh</td>
          <td>Yadav</td>
          <td>9892902452</td>
          <td>gangesh30624@gmail.com</td>
          <td>28, Khatizabai mansion, P.B. Marg, Lower Parel, Mumbai 400013</td>
          <td>India</td>
        </tr>

      </table>
    </div>
  );
};

export default Table;
