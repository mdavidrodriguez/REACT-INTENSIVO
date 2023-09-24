import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "Por hacer",
    tasks: [
      {
        id: uuidv4(),
        title: "curso de html+css",
      },
      {
        id: uuidv4(),
        title: "curso de react",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "En Progreso",
    tasks: [
      {
        id: uuidv4(),
        title: "Estudiar javascript",
      },
      {
        id: uuidv4(),
        title: "Curso Node Js",
      },
      {
        id: uuidv4(),
        title: "Curso de Java, Sprint",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Completado",
    tasks: [
      {
        id: uuidv4(),
        title: "Curso de Html",
      },
    ],
  },

];


export default mockData