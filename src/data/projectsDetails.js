import project1Img1 from "../assets/Project 1/0-xc60-b4-2021.jpg";
import project1Img2 from "../assets/Project 1/1-xc60-b4-2021.jpg";
import project1Img3 from "../assets/Project 1/2-xc60-b4-2021.jpg";
import project1Img4 from "../assets/Project 1/3-xc6-0b4-2021.jpg";
import project1Video1 from "../assets/Project 1/xc60-b4-2021.mp4";

const projectsDetails = [
  {
    id: "volvo-xc60",
    titleKey: "projects.volvo-xc60.title",
    descriptionKey: "projects.volvo-xc60.activationsDescription",
    resultKey: "projects.volvo-xc60.projectHeader.result",
    projectHeader: {
      configurationsKey: "projects.volvo-xc60.projectHeader.configurations",
      diagnosisTitleKey: "projects.volvo-xc60.projectHeader.diagnosisTitle",
      tagsKeys: [
        "projects.volvo-xc60.projectHeader.tags.fullDiagnosis",
        "projects.volvo-xc60.projectHeader.tags.sensorCalibration",
        "projects.volvo-xc60.projectHeader.tags.softwareOptimized",
      ],
      cards: {
        modeActive: {
          labelKey: "projects.volvo-xc60.projectHeader.cards.modeActive",
          value: 13,
        },
        accVersion: {
          labelKey: "projects.volvo-xc60.projectHeader.cards.accVersion",
          value: 4,
        },
      },
    },
    summaryKeys: [
      "projects.volvo-xc60.summary.longBeamAdaptation",
      "projects.volvo-xc60.summary.accVersion4",
      "projects.volvo-xc60.summary.maxSpeedRemoval",
      "projects.volvo-xc60.summary.polestarTheme",
    ],
    activationsKeys: [
      "projects.volvo-xc60.activations.activation1",
      "projects.volvo-xc60.activations.activation2",
      "projects.volvo-xc60.activations.activation3",
      "projects.volvo-xc60.activations.activation4",
      "projects.volvo-xc60.activations.activation5",
      "projects.volvo-xc60.activations.activation6",
      "projects.volvo-xc60.activations.activation7",
      "projects.volvo-xc60.activations.activation8",
      "projects.volvo-xc60.activations.activation9",
      "projects.volvo-xc60.activations.activation10",
      "projects.volvo-xc60.activations.activation11",
      "projects.volvo-xc60.activations.activation12",
      "projects.volvo-xc60.activations.activation13",
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
    status: "Finalizat",
  },
];

export default projectsDetails;
