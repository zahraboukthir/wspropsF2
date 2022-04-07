import "./App.css";
import ProjectList from "./Component/ProjectList";
import UserList from "./Component/UserList";
import WinnerList from "./Component/WinnerList";

function App() {
  const list = [
    {
      name: "u111111",
      adresse: "gafsa",
      email: "u1@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
      projet: {
        namep: "p1111111",
        des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus animi harum est cupiditate qui, voluptates iste odio sed natus quo molestias aliquam maiores possimus, soluta sint enim perspiciatis commodi?",

        category: "dw",
        photo:
          "http://alltogether.be/wp-content/uploads/2017/05/projectcycle.jpg",
        rate: 6,
      },
    },
    {
      name: "u1",
      adresse: "gafsa",
      email: "u1@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
      projet: {
        namep: "p1",
        des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus animi harum est cupiditate qui, voluptates iste odio sed natus quo molestias aliquam maiores possimus, soluta sint enim perspiciatis commodi?",

        category: "dw",
        photo:
          "http://alltogether.be/wp-content/uploads/2017/05/projectcycle.jpg",
        rate: 9,
      },
    },
    {
      name: "u1",
      adresse: "gafsa",
      email: "u1@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
      projet: {
        namep: "p1",
        des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus animi harum est cupiditate qui, voluptates iste odio sed natus quo molestias aliquam maiores possimus, soluta sint enim perspiciatis commodi?",

        category: "dw",
        photo:
          "http://alltogether.be/wp-content/uploads/2017/05/projectcycle.jpg",
        rate: 5,
      },
    },
    {
      name: "u1",
      adresse: "gafsa",
      email: "u1@gmail.com",
      image:
        "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png",
      projet: {
        namep: "p1",
        des: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti repellendus animi harum est cupiditate qui, voluptates iste odio sed natus quo molestias aliquam maiores possimus, soluta sint enim perspiciatis commodi?",

        category: "dw",
        photo:
          "http://alltogether.be/wp-content/uploads/2017/05/projectcycle.jpg",
        rate: 8,
      },
    },
  ];
  const handelname = (nu, np) => {
    alert(`
    my name is ${nu} and my project is ${np}
    `);
  };
  return (
    <div className="App">
      <UserList listprop={list} title="go my code" handelname={handelname}>
        <p>i ' m a props children</p>
        <img src="logo192.png" alt="" />
      </UserList>
      <ProjectList listprop={list} title=" project list" />
      <WinnerList listprop={list} />
    </div>
  );
}

export default App;
