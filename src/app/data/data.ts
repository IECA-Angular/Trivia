import { IQuestion } from "../interfaces/question.interface";


export const QUESTION_DATA: IQuestion[] = [
  {
    question: "¿En qué año se descubrió América?",
    category: "Historia",
    options: [
      { text: "1492", correct: true },
      { text: "1776", correct: false },
      { text: "1812", correct: false },
      { text: "1901", correct: false },
    ],
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    category: "Geografía",
    options: [
      { text: "Amazonas", correct: true },
      { text: "Nilo", correct: false },
      { text: "Misisipi", correct: false },
      { text: "Yangtsé", correct: false },
    ],
  },
  {
    question: "¿Quién pintó La Mona Lisa?",
    category: "Arte",
    options: [
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: false },
      { text: "Salvador Dalí", correct: false },
    ],
  },
  {
    question: "¿Cuál es la capital de Australia?",
    category: "Geografía",
    options: [
      { text: "Sídney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    category: "Geografía",
    options: [
      { text: "Océano Atlántico", correct: false },
      { text: "Océano Índico", correct: false },
      { text: "Océano Pacífico", correct: true },
      { text: "Océano Ártico", correct: false },
    ],
  },
  {
    question: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
    category: "Ciencia",
    options: [
      { text: "Hierro", correct: false },
      { text: "Silicio", correct: true },
      { text: "Oxígeno", correct: false },
      { text: "Aluminio", correct: false },
    ],
  },
  {
    question: "¿Cuál es el país más grande del mundo en términos de superficie?",
    category: "Geografía",
    options: [
      { text: "Rusia", correct: true },
      { text: "China", correct: false },
      { text: "Estados Unidos", correct: false },
      { text: "Canadá", correct: false },
    ],
  },
  {
    question: "¿Quién escribió la novela 'Cien años de soledad'?",
    category: "Literatura",
    options: [
      { text: "Gabriel García Márquez", correct: true },
      { text: "Julio Cortázar", correct: false },
      { text: "Jorge Luis Borges", correct: false },
      { text: "Pablo Neruda", correct: false },
    ],
  },
  {
    question: "¿Cuál es la capital de Canadá?",
    category: "Geografía",
    options: [
      { text: "Toronto", correct: false },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
      { text: "Ottawa", correct: true },
    ],
  },
  {
    question: "¿En qué año se celebró la primera Copa Mundial de Fútbol?",
    category: "Deportes",
    options: [
      { text: "1930", correct: true },
      { text: "1950", correct: false },
      { text: "1970", correct: false },
      { text: "1990", correct: false },
    ],
  },
  {
    question: "¿Cuál es la montaña más alta del mundo?",
    category: "Geografía",
    options: [
      { text: "Monte Kilimanjaro", correct: false },
      { text: "Monte Everest", correct: true },
      { text: "Monte Aconcagua", correct: false },
      { text: "Monte Denali", correct: false },
    ],
  },
  {
    question: "¿Cuál es el río más largo de África?",
    category: "Geografía",
    options: [
      { text: "Nilo", correct: true },
      { text: "Zambeze", correct: false },
      { text: "Congo", correct: false },
      { text: "Níger", correct: false },
    ],
  },
  {
    question: "¿En qué año se fundó la Organización de las Naciones Unidas (ONU)?",
    category: "Historia",
    options: [
      { text: "1945", correct: true },
      { text: "1919", correct: false },
      { text: "1939", correct: false },
      { text: "1957", correct: false },
    ],
  },
  {
    question: "¿Cuál es el autor de la obra 'Don Quijote de la Mancha'?",
    category: "Literatura",
    options: [
      { text: "Miguel de Cervantes", correct: true },
      { text: "Federico García Lorca", correct: false },
      { text: "Pablo Picasso", correct: false },
      { text: "Miguel de Unamuno", correct: false },
    ],
  },
  {
    question: "¿Cuál es el planeta más grande del sistema solar?",
    category: "Ciencia",
    options: [
      { text: "Mercurio", correct: false },
      { text: "Júpiter", correct: true },
      { text: "Venus", correct: false },
      { text: "Saturno", correct: false },
    ],
  },
  {
    question: "¿En qué año se llevó a cabo la Revolución Francesa?",
    category: "Historia",
    options: [
      { text: "1789", correct: true },
      { text: "1804", correct: false },
      { text: "1848", correct: false },
      { text: "1905", correct: false },
    ],
  },
  {
    question: "¿Cuál es la capital de Brasil?",
    category: "Geografía",
    options: [
      { text: "Río de Janeiro", correct: false },
      { text: "São Paulo", correct: false },
      { text: "Brasilia", correct: true },
      { text: "Buenos Aires", correct: false },
    ],
  },
  {
    question: "¿Cuál es el autor de la pintura 'La noche estrellada'?",
    category: "Arte",
    options: [
      { text: "Pablo Picasso", correct: false },
      { text: "Vincent van Gogh", correct: true },
      { text: "Salvador Dalí", correct: false },
      { text: "Leonardo da Vinci", correct: false },
    ],
  },
  {
    question: "¿Cuál es el símbolo químico del oro?",
    category: "Ciencia",
    options: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Fe", correct: false },
      { text: "Cu", correct: false },
    ],
  },
  {
    question: "¿Qué es TypeScript?",
    category: "Programación",
    options: [
      { text: "Un lenguaje de programación", correct: true },
      { text: "Una base de datos", correct: false },
      { text: "Un sistema operativo", correct: false },
      { text: "Una librería de JavaScript", correct: false },
    ],
  },
  {
    question: "¿Qué significa HTML?",
    category: "Programación",
    options: [
      { text: "HyperText Markup Language", correct: true },
      { text: "High-Level Programming Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "Hyperlink and Text Markup Language", correct: false },
    ],
  },
  {
    question: "¿Cuál de los siguientes no es un lenguaje de programación?",
    category: "Programación",
    options: [
      { text: "Java", correct: false },
      { text: "CSS", correct: true },
      { text: "Python", correct: false },
      { text: "C#", correct: false },
    ],
  },
  {
    question: "¿Qué es un bucle 'for'?",
    category: "Programación",
    options: [
      { text: "Un condicional", correct: false },
      { text: "Una función", correct: false },
      { text: "Una estructura de datos", correct: false },
      { text: "Una estructura de control", correct: true },
    ],
  },
  {
    question: "¿Qué es una API?",
    category: "Programación",
    options: [
      { text: "Application Programming Interface", correct: true },
      { text: "Automated Programming Interface", correct: false },
      { text: "Application Process Integration", correct: false },
      { text: "Automated Process Integration", correct: false },
    ],
  },
  {
    question: "¿Qué es Git?",
    category: "Programación",
    options: [
      { text: "Un lenguaje de programación", correct: false },
      { text: "Un sistema operativo", correct: false },
      { text: "Un control de versiones", correct: true },
      { text: "Un servidor web", correct: false },
    ],
  },
  {
    question: "¿Qué es un framework?",
    category: "Programación",
    options: [
      { text: "Un lenguaje de programación", correct: false },
      { text: "Una base de datos", correct: false },
      { text: "Una biblioteca de funciones", correct: false },
      { text: "Un conjunto de herramientas y librerías", correct: true },
    ],
  },
  {
    question: "¿Qué es JSON?",
    category: "Programación",
    options: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "JavaScript Oriented Notation", correct: false },
      { text: "JavaScript Open Network", correct: false },
      { text: "JavaScript Order Naming", correct: false },
    ],
  },
  {
    question: "¿Cuál es la capital de Australia?",
    category: "Geografía",
    options: [
      { text: "Sídney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "¿Cuál es el océano más grande del mundo?",
    category: "Geografía",
    options: [
      { text: "Océano Atlántico", correct: false },
      { text: "Océano Índico", correct: false },
      { text: "Océano Pacífico", correct: true },
      { text: "Océano Ártico", correct: false },
    ],
  },
  {
    question: "¿Qué significa CSS?",
    category: "Programación",
    options: [
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Script Sheets", correct: false },
      { text: "Cascading Style System", correct: false },
      { text: "Cascading Syntax Styles", correct: false },
    ],
  },
  {
    question: "¿Qué es un bucle 'while'?",
    category: "Programación",
    options: [
      { text: "Una estructura de control", correct: true },
      { text: "Una función", correct: false },
      { text: "Una estructura de datos", correct: false },
      { text: "Un condicional", correct: false },
    ],
  },
];
