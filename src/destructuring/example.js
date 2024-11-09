const user = {
  firstname: "Alejandro",
  lastname: "García",
  role: "Software Engineer",
  username: "agarcia",
  projects: [
    "Digital Transformation for Banco Frankenstein",
    "E-commerce Platform for Shinra",
  ],
  imageUrl: "https://i.pravatar.cc/300?img=1",
  address: {
    city: "Barcelona",
    street: "Pamplona",
    number: 96,
  },
 
};

// const firstname = user.firstname;

// destructuring

const {
  firstname,
  lastname,
  role,
  username,
  projects,
  imageUrl,
  address: { city, street, number }
} = user;

console.log(number);

/*
const firstNameConst = user.firstname;
const lastNameConst = user.lastname;
const roleConst = user.role;
const usernameConst = user.username;
const projectsConst = user.projects;
const imageUrlConst = user.imageUrl;
*/

const [, project2] = projects;

console.log(project2);
