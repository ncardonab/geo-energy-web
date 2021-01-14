import eyeIcon from "../../../../assets/SVGs/icons8-ophthalmology-100.svg";
import treeStructureIcon from "../../../../assets/SVGs/Tree icon.svg";
import checklistIcon from "../../../../assets/SVGs/Checklist.svg";
import aimBackground from "../../../../assets/Aim background.png";

export const aims = [
  {
    id: "deep-geothermal-resources",
    icon: eyeIcon,
    background: "",
    backgroundColor: "#f4f4f7",
    flexDirection: "",
    mainText:
      "Improve the understanding of mechanisms governing high and medium-low enthalpy geothermal system processes, such as heat and mass transfer in fractured and porous media, fluid-rock interactions, rock fissuring, and reactivation of existing faults, through:",
    aimsList: [
      "Monitoring, collecting, and sharing available data to enhance the building of conceptual models",
      "Sharing modeling experiences to provide information about different software and their capabilities",
      "Sharing laboratory facilities, taking advantage of students’ mobility",
    ],
  },
  {
    id: "shallow-geothermal-energy",
    icon: treeStructureIcon,
    background: aimBackground,
    backgroundColor: "",
    flexDirection: "row-reverse",
    mainText: "Foster the installation of shallow geothermal systems, through:",
    aimsList: [
      "Analysis and feasibility of geothermal heat pump",
      "Use of other energy technology equipment/systems (such as thermosiphons, ejectors, ORC and others) and development of advanced practices to render this source of energy accessible",
      "Use of groundwater to directly cool buildings and mitigate the urban heat island effect",
    ],
  },
  {
    id: "education",
    icon: checklistIcon,
    background: "",
    backgroundColor: "#ffffff",
    flexDirection: "",
    mainText:
      "Promote educational activities about geoscience and geothermal as renewable, clean, and base-load energy through:",
    aimsList: [
      "Analysis of previous educational experiences in some of the participating countries",
      "Building of our dissemination and learning activities to share knowledge of geoscience and geothermal resources to children",
      "Promoting training activities, such as diploma or workshops, for project members and guests focused on vital issues for the development of geothermal energy in each country (low and high enthalpy)",
    ],
  },
];
