import imagenAuriculares from '../assets/aureiculares sony2.webp';
import auriculares2 from '../assets/aureiculares sony3.webp';
import auri3 from "../assets/auriculares sony1.webp";
import compu1 from '../assets/compu sony.webp';
import compu2 from '../assets/compu2.webp';
import compu3 from '../assets/compu3.webp';
import tecladoMec from '../assets/tecladoMecanico1.webp';
import monitorGamer from '../assets/monitorGamer.webp';
import monitor2 from '../assets/monitorGamer2.webp';
import monitor3 from '../assets/monitorGamer3.webp';
import placaVideo from '../assets/placaDeVideo.webp';
import placa2 from '../assets/placaDeVideo2.webp';
import mouse from '../assets/mouseLogi.webp';
import mouse2 from '../assets/mouse2.webp';
import mouse3 from '../assets/mouse3.webp';
import auri1 from '../assets/auriculares1.webp';
import auri2 from '../assets/auriculares2.webp';
import memoriaRAM from '../assets/memoriaRAM.webp';
import discoKingston from '../assets/discoKingston.webp';
import macBook from '../assets/mac.webp';
import gabinete from '../assets/gabinete.webp';
import fuente from '../assets/fuente.webp';

export const productos = [
  {
    id: 1,
    nombre: "Auriculares Inalámbricos Sony",
    categoria: "Auriculares",
    precio: 89999,
    imagenes: [imagenAuriculares,auriculares2,auri3],
    descripcion: "Alcance inalámbrico de 10 m. Asistente de voz integrado: Google Assistan, Con micrófono incorporado",
    stock: 5
  },
  {
    id: 2,
    nombre: "Notebook Philco 14.1 Pulgadas Intel Cekeron 4gb RAM 128gb SSD",
    categoria: "Notebooks",
    precio: 318799,
    imagenes: [compu1, compu2, compu3],
    descripcion: "Intel Core i5, 16GB RAM, 512GB SSD, RTX 3050. Pantalla de 144Hz ideal para competir.",
    stock: 3
  },
  {
    id: 3,
    nombre: "Teclado Mecánico Redragon Mitra",
    categoria: "Perifericos",
    precio: 45000,
    imagenes: [tecladoMec],
    descripcion: "Switch Blue, retroiluminación RGB, distribución en español y estructura reforzada.",
    stock: 0 // Sin stock para validaciones
  },
  {
    id: 4,
    nombre: "Monitor Gamer Samsung Odyssey G4 27\"",
    categoria: "Perifericos",
    precio: 2229999,
    imagenes: [monitorGamer, monitor2, monitor3],
    descripcion: "Panel IPS con 240Hz de tasa de refresco y 1ms de tiempo de respuesta.",
    stock: 8
  },
  {
    id: 5,
    nombre: "Placa de Video NVIDIA RTX 4060 Ti",
    categoria: "Componentes",
    precio: 561999,
    imagenes: [placaVideo, placa2],
    descripcion: "8GB Tamaño Memoria, Interfaz con la placa madre PCI-Express 5.0 para máxima velocidad de transferencia de datos.Resolución máxima de 8K.Tipo de memoria gráfica GDDR6 ",
    stock: 4
  },
  {
    id: 6,
    nombre: "Mouse Logitech G305 Wireless",
    categoria: "Perifericos",
    precio: 13858,
    imagenes: [mouse, mouse2, mouse3],
    descripcion: "Es inalámbrico. ambidiestro. Consensor óptico, resolución 1000dpi.",
    stock: 12
  },
  {
    id: 7,
    nombre: "Audífonos Inalámbricos Xiaom",
    categoria: "Perifericos",
    precio: 25000,
    imagenes: [auri1, auri2],
    descripcion: "La duración máxima de la batería es 1.5 días. Con micrófono incorporado. Asistente de voz integrado: Xiaomi",
    stock: 0 // Sin stock para validaciones
  },
  {
    id: 8,
    nombre: "Memoria RAM Corsair Vengeance 16GB",
    categoria: "Componentes",
    precio: 209999,
    imagenes: [memoriaRAM],
    descripcion: "Capacidad total de 8 GB para multitasking eficiente. Velocidad 2.4 GHz para procesamiento super rápido.",
    stock: 15
  },
  {
    id: 9,
    nombre: "Disco SSD NVMe Kingston 1TB",
    categoria: "Componentes",
    precio: 78000,
    imagenes: [discoKingston],
    descripcion: "Velocidades de lectura de hasta 3500 MB/s para arranques ultra rápidos.",
    stock: 9
  },
  {
    id: 10,
    nombre: "MacBook Air M2",
    categoria: "Notebooks",
    precio: 2449000,
    imagenes: [macBook],
    descripcion: "Procesador: Apple M2 M2, RAM: 16 GB, 2560 x 1664, pantalla Liquid Retina. Marca Apple.",
    stock: 2
  },
  {
    id: 11,
    nombre: "Gabinete Corsair 4000D Airflow",
    categoria: "Componentes",
    precio: 534412,
    imagenes: [gabinete],
    descripcion: "Corsta De La Torre Media De Flujo De Aire Corsair Icue 4000d Blanco, con panel lateral de vidrio templado y diseño optimizado para refrigeración.",
    stock: 6
  },
  {
    id: 12,
    nombre: "Fuente Certificada EVGA 750W 80 Plus Gold",
    categoria: "Componentes",
    precio: 175000,
    imagenes: [fuente],
    descripcion: "Potencia de salida de 750 W para un rendimiento óptimo.Eficiencia del 90% con carga típica para ahorro energético.",
    stock: 7
  }
];