import imagenAuriculares from '../assets/aureiculares sony2.webp';
import compu1 from '../assets/compu sony.webp';

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
    imagen: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=500",
    descripcion: "Switch Blue, retroiluminación RGB, distribución en español y estructura reforzada.",
    stock: 0 // Sin stock para validaciones
  },
  {
    id: 4,
    nombre: "Monitor Gamer Samsung Odyssey G4 27\"",
    categoria: "Perifericos",
    precio: 380000,
    imagen: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=500",
    descripcion: "Panel IPS con 240Hz de tasa de refresco y 1ms de tiempo de respuesta.",
    stock: 8
  },
  {
    id: 5,
    nombre: "Placa de Video NVIDIA RTX 4060 Ti",
    categoria: "Componentes",
    precio: 580000,
    imagen: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=500",
    descripcion: "8GB GDDR6, arquitectura Ada Lovelace y DLSS 3 para trazado de rayos de última generación.",
    stock: 4
  },
  {
    id: 6,
    nombre: "Mouse Logitech G305 Wireless",
    categoria: "Perifericos",
    precio: 38000,
    imagen: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500",
    descripcion: "Sensor HERO de alta precisión, conexión inalámbrica Lightspeed y autonomía extrema.",
    stock: 12
  },
  {
    id: 7,
    nombre: "Auriculares HyperX Cloud Flight",
    categoria: "Perifericos",
    precio: 95000,
    imagen: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=500",
    descripcion: "Audio inalámbrico de alta fidelidad para gaming, batería de hasta 30 horas.",
    stock: 0 // Sin stock para validaciones
  },
  {
    id: 8,
    nombre: "Memoria RAM Corsair Vengeance 16GB",
    categoria: "Componentes",
    precio: 62000,
    imagen: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=500",
    descripcion: "Módulo DDR4 de 3200MHz con disipador de aluminio optimizado.",
    stock: 15
  },
  {
    id: 9,
    nombre: "Disco SSD NVMe Kingston 1TB",
    categoria: "Componentes",
    precio: 78000,
    imagen: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=500",
    descripcion: "Velocidades de lectura de hasta 3500 MB/s para arranques ultra rápidos.",
    stock: 9
  },
  {
    id: 10,
    nombre: "MacBook Air M2",
    categoria: "Notebooks",
    precio: 1950000,
    imagen: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=500",
    descripcion: "Chip M2 de Apple, 8GB de memoria unificada, 256GB SSD, pantalla Liquid Retina.",
    stock: 2
  },
  {
    id: 11,
    nombre: "Gabinete Corsair 4000D Airflow",
    categoria: "Componentes",
    precio: 110000,
    imagen: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=500",
    descripcion: "Diseño con panel frontal optimizado para el paso del aire y gestión de cables inteligente.",
    stock: 6
  },
  {
    id: 12,
    nombre: "Fuente Certificada EVGA 750W 80 Plus Gold",
    categoria: "Componentes",
    precio: 145000,
    imagen: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500",
    descripcion: "Energía ultra estable con certificación Gold y diseño modular para cables limpios.",
    stock: 7
  }
];