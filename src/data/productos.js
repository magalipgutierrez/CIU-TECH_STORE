import imagenAuriculares from '../assets/aureiculares sony2.webp';
import auriculares2 from '../assets/aureiculares sony3.webp';
import compu1 from '../assets/compu sony.webp';
import tecladoMec from '../assets/tecladoMecanico1.webp';
import monitorGamer from '../assets/monitorGamer.webp';
import placaVideo from '../assets/placaDeVideo.webp';
import mouse from '../assets/mouseLogi.webp';
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
    precio: 245000,
    imagen: imagenAuriculares,
    descripcion: "Auriculares con cancelación de ruido...",
    stock: 5
  },
  {
    id: 2,
    nombre: "Notebook ASUS TUF Gaming F15",
    categoria: "Notebooks",
    precio: 1350000,
    imagen: compu1,
    descripcion: "Intel Core i5, 16GB RAM, 512GB SSD, RTX 3050. Pantalla de 144Hz ideal para competir.",
    stock: 3
  },
  {
    id: 3,
    nombre: "Teclado Mecánico Redragon Mitra",
    categoria: "Perifericos",
    precio: 45000,
    imagen: tecladoMec,
    descripcion: "Switch Blue, retroiluminación RGB, distribución en español y estructura reforzada.",
    stock: 0 // Sin stock para validaciones
  },
  {
    id: 4,
    nombre: "Monitor Gamer Samsung Odyssey G4 27\"",
    categoria: "Perifericos",
    precio: 380000,
    imagen:monitorGamer,
    descripcion: "Panel IPS con 240Hz de tasa de refresco y 1ms de tiempo de respuesta.",
    stock: 8
  },
  {
    id: 5,
    nombre: "Placa de Video NVIDIA RTX 4060 Ti",
    categoria: "Componentes",
    precio: 970000,
    imagen: placaVideo,
    descripcion: "8GB GDDR6, arquitectura Ada Lovelace y DLSS 3 para trazado de rayos de última generación.",
    stock: 4
  },
  {
    id: 6,
    nombre: "Mouse Logitech G305 Wireless",
    categoria: "Perifericos",
    precio: 17486,
    imagen: mouse,
    descripcion: "El sensor óptico con resolución de 1000 dpi registra el movimiento del cursor para tareas de navegación cotidiana",
    stock: 12
  },
  {
    id: 7,
    nombre: "Auriculares HyperX Cloud Flight",
    categoria: "Perifericos",
    precio: 95000,
    imagen: auriculares2,
    descripcion: "Audio inalámbrico de alta fidelidad para gaming, batería de hasta 30 horas.",
    stock: 0 // Sin stock para validaciones
  },
  {
    id: 8,
    nombre: "Memoria RAM Corsair Vengeance 16GB",
    categoria: "Componentes",
    precio: 123.580,
    imagen: memoriaRAM,
    descripcion: "Capacidad total de 8 GB para multitasking eficiente. Velocidad 2.4 GHz para procesamiento super rápido.",
    stock: 15
  },
  {
    id: 9,
    nombre: "Disco SSD NVMe Kingston 1TB",
    categoria: "Componentes",
    precio: 78000,
    imagen: discoKingston,
    descripcion: "Velocidades de lectura de hasta 3500 MB/s para arranques ultra rápidos.",
    stock: 9
  },
  {
    id: 10,
    nombre: "MacBook Air M2",
    categoria: "Notebooks",
    precio: 2449000,
    imagen: macBook,
    descripcion: "Procesador: Apple M2 M2, RAM: 16 GB, 2560 x 1664, pantalla Liquid Retina. Marca Apple.",
    stock: 2
  },
  {
    id: 11,
    nombre: "Gabinete Corsair 4000D Airflow",
    categoria: "Componentes",
    precio: 534412,
    imagen:gabinete,
    descripcion: "Corsta De La Torre Media De Flujo De Aire Corsair Icue 4000d Blanco, con panel lateral de vidrio templado y diseño optimizado para refrigeración.",
    stock: 6
  },
  {
    id: 12,
    nombre: "Fuente Certificada EVGA 750W 80 Plus Gold",
    categoria: "Componentes",
    precio: 175000,
    imagen: fuente,
    descripcion: "Potencia de salida de 750 W para un rendimiento óptimo.Eficiencia del 90% con carga típica para ahorro energético.",
    stock: 7
  }
];