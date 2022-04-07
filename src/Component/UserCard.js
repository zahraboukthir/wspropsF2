import React from "react";

const UserCard = ({ el, handelname }) => {
  return (
    <tr>
      <td>{el.name} </td>
      <td>{el.projet.namep}</td>
      <td>{el.adresse}</td>
      <td>{el.email}</td>
      <button onClick={() => handelname(el.name, el.projet.namep)}>
        my name
      </button>
    </tr>
  );
};

export default UserCard;
