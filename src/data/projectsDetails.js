import project1Img1 from "../assets/Project 1/0-xc60-b4-2021.jpg";
import project1Img2 from "../assets/Project 1/1-xc60-b4-2021.jpg";
import project1Img3 from "../assets/Project 1/2-xc60-b4-2021.jpg";
import project1Img4 from "../assets/Project 1/3-xc6-0b4-2021.jpg";
import project1Video1 from "../assets/Project 1/xc60-b4-2021.mp4";

const projectsDetails = [
  {
    id: "volvo-xc60",
    titleKey: "project1.title",
    descriptionKey: "project1.description",
    activationsKeys: [
      "project1.activation1",
      "project1.activation2",
      "project1.activation3",
      "project1.activation4",
      "project1.activation5",
      "project1.activation6",
      "project1.activation7",
      "project1.activation8",
      "project1.activation9",
      "project1.activation10",
      "project1.activation11",
      "project1.activation12",
      "project1.activation13",
    ],
    gallery: [
      {
        images: {
          image1: project1Img1,
          image2: project1Img2,
          image3: project1Img3,
          image4: project1Img4,
        },
        videos: { video1: project1Video1 },
      },
    ],
  },
];

export default projectsDetails;
