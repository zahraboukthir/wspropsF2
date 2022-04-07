import React from "react";
import UserCard from "./UserCard";

const UserList = (props) => {
  console.log(props);
  return (
    <div>
      {props.title}
      <table border="1">
        <th>
          <td>Name</td>
          <td>ProjectName</td>
          <td>Adresse</td>
          <td>Email</td>
        </th>

        {props.listprop.map((el, i) => (
          <UserCard el={el} handelname={props.handelname} />
        ))}
      </table>
      {props.children}
    </div>
  );
};
UserList.defaultProps = {
  title: "you forget the title",
};

export default UserList;
