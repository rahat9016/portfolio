import { CgWebsite } from "react-icons/cg";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import project_1 from "../Images/project.png"
import project_2 from "../Images/project2.png"
export const headerInformation = [
  {
    title: "Home",
    location: "/",
  },
  {
    title: "About",
    location: "/",
  },
  {
    title: "Service",
    location: "/",
  },
  {
    title: "Project",
    location: "/",
  },
  {
    title: "Review",
    location: "/",
  },
  {
    title: "Contact",
    location: "/",
  },
];

export const skillsProgressInformation = [
  {
    title: "React JS",
    percentage: 90,
  },
  {
    title: "Node JS",
    percentage: 92,
  },
  {
    title: "JavaScript",
    percentage: 97,
  },
  {
    title: "MongoDB",
    percentage: 85,
  },
];
export const services = [
  {
    title: "MERN stack Developer",
    description:
      "I will be your mern stack developer or react js, node js developer",
    icon: CgWebsite,
  },
  {
    title: "React JS Developer",
    description: "I will be your web developer or react js, node js developer",
    icon: DiReact,
  },
  {
    title: "Node JS Developer",
    description:
      "I will develop nodejs, react, redux, vuejs, graphql web application",
    icon: DiNodejsSmall,
  },
];
export const projects =[
  {
    name:"MERN stack E-Commerce website",
    projectImage:project_1,
    type:"E-Commerce",
    keyfeatures:[
      {
        point:"Developed a MERN E-commerce web application with Node.js which is currently used in real production servers. "
      },
      {
        point:"Here customers can buy, cancel or review their orders, and the (Admin) can create, get, delete, or update products."
      }
    ],
    duration:"May 11, 2022 to Present",
    technology:["React", "Redux", 'tailwind CSS','Node JS','Express JS', 'Mongoose', 'MongoDB', 'Coludinary'],
    clientlink:"https://github.com/rahat9016/rahat-shop",
    serverlink:"https://github.com/rahat9016/shop-backend",
    livelink:"https://rahat-shop-q6z7jchoa-rahat9016.vercel.app/"

  },
  {
    name:"MERN stack Food order and delivery website",
    projectImage:project_2,
    type:"Online Food web",
    keyfeatures:[
      {
        point:"Hungry? Fastest food delivery to your door. Order now! Delicious meals delivered fresh to your door."
      },
      {
        point:"Browse our menu & order online! Easy ordering process. Order online - pay on delivery."
      }
    ],
    duration:"Jan 25, 2023 to Present",
    technology:["React", "Redux", 'tailwind CSS','Node JS','Express JS', 'Mongoose', 'MongoDB', 'Coludinary'],
    clientlink:"https://github.com/rahat9016/food-web-client",
    serverlink:"https://github.com/rahat9016/food-web-server",
    livelink:"https://food-web-client.vercel.app/"

  },
]