//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  // "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  "--grad": "linear-gradient(315deg, #4700D8 0%, #4888ee 74%)",
  // "--grad": " linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)",
  "--txtcolor": "#1A132F",
  "--p_color": "#890F0D",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "Mayur";

// Main Page
export const main = {
  name: "Mayur Wagh",
  doamin: "A Full Stack Web Developer",
  resume:
    "https://github.com/Mayurwagh98/portfolio_dump/files/10365280/Mayur-Wagh-Resume.pdf",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://user-images.githubusercontent.com/69896733/211123830-d446f87d-1478-4f55-9afc-5803c76503a7.png",
  p1: "Inventive Web Developer creates novel site’s designs and innovative user interfaces. Known for architecting customer facing products that deliver unique experiences while complying with internal standards and technical requirements. Clever provider of fresh assets to grow usership.",
  p2: "Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.",
  p3: "Apart from programming as a human have interest in writing blogs, trekking and visiting new areas.",
};

// export const education = {
//   h1: "Education"
// }

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    // "Built responsive website using HTML, CSS, JS, React",
    // "Creating backend application in Node, ExpressJS",
    // "Built Simple RESTful CRUD APIs",
    // "Knowledge of MongoDB Database",
    // "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS3",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
  
  ],
};

// Project Details
export const details = [
{
    id: 4,
    title: "Banggood (Clone)",
    desc: `Banggood is a chinese E-commerce legitimate online shopping website, offering a wide range of 
      products at very cheap prices.`,
    feature: `Fixed Navbar, Product catalog with filtering, Remove item from Cart.`,
    tech: `Tech Stack: HTML | CSS | JavaScript.`,
    img: "https://user-images.githubusercontent.com/69896733/165465623-3b318902-2f9b-43b1-8d18-429ff3df9ba7.png",
    github: "https://github.com/Mayurwagh98/Banggood-Site",
    link:"https://banggood-clone.netlify.app"
  },
  {
    id: 5,
    title: "AJIO (Clone)",
    desc: `This project is a one to one clone of the online e-commerce website of "Ajio" which was done as a part of Masai School Construct Week #3 and #4. The project includes the Landing page, Login and Signup page, Product pages for Men, Women, and Kids section. The project is truly interactive and functional with features such as Login validation, Sorting product based on keys, 
    and Filter based on categories, Cart feature and Payment checkout. `,
    feature: `Sign-in/Sign-up User Authentication,
    Image slideshow in home page,Product catalog with filtering, Remove item from cart.
    `,
    tech: `Tech Stack: HTML | CSS | JavaScript .`,
    img: "https://user-images.githubusercontent.com/69896733/165460698-081d7790-0fb7-4870-a6bd-dcf374b7faaf.png",

    github: "https://github.com/Mayurwagh98/Ajio-Clone",
    link: "https://ajio-clone-front.netlify.app",
  },
  {
    id: 6,
    title: "Social-Desk (Chat Application)",
    desc: `This is a simple real time chat application, where user can chat with anyone as long as they have this chat app link. User can use it from mobile or laptop.`,
    feature: `User can chat with mulitple people.`,
    tech: `Tech Stack: React| Nodejs | Socket.io | Antd | HTML | CSS | JavaScript .`,
    img: "https://user-images.githubusercontent.com/69896733/211125607-37df666e-a1ac-4aba-94f7-96cc76640d13.png",

    github: "https://github.com/Mayurwagh98/chat_application.git",
    link: "https://chatapp-socket-io.netlify.app",
  },

];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/mayur--wagh/",
  "https://api.whatsapp.com/send/?phone=8208663529&text&app_absent=0",
  "mailto:mswagh98@gmail.com",
  "https://github.com/Mayurwagh98",
  "https://medium.com/@mswagh98 "
];
