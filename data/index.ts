
import { ImageSourcePropType } from 'react-native';

export type Categoria = {
  id: string;
  nome: string;
};

export type Produto = {
  id: string;
  categoriaId: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: ImageSourcePropType;
};

export const categorias: Categoria[] = [
  { id: '1', nome: 'Eletrônicos' },
  { id: '2', nome: 'Livros' },
];

export const produtos: Produto[] = [
  {
    id: 'a',
    categoriaId: '1',
    nome: 'Smartphone X',
    descricao: 'Tela OLED, 128 GB, câmera tripla',
    preco: 2499.9,
    imagem: require('../assets/smartphone.png'),
  },
  {
    id: 'b',
    categoriaId: '2',
    nome: 'Livro Genérico',
    descricao: 'Livro feito apenas para teste',
    preco: 89.9,
    imagem: require('../assets/livro.png'),
  },
  {
    id: 'c',
    categoriaId: '1',
    nome: 'Fone Bluetooth Pro',
    descricao: 'Cancelamento de ruído ativo, 20h de bateria',
    preco: 599.0,
    imagem: require('../assets/smartphone.png'),
  },
  {
    id: 'd',
    categoriaId: '2',
    nome: 'Guia de React Native',
    descricao: 'Aprenda a desenvolver apps móveis',
    preco: 129.9,
    imagem: require('../assets/livro.png'),
  },
  {
    id: 'e',
    categoriaId: '1',
    nome: 'Smartwatch Série 5',
    descricao: 'Monitor de frequência, GPS integrado',
    preco: 999.0,
    imagem: require('../assets/smartphone.png'),
  },
  {
    id: 'f',
    categoriaId: '2',
    nome: 'Romance Clássico',
    descricao: 'Edição especial com capa dura',
    preco: 59.9,
    imagem: require('../assets/livro.png'),
  },
  {
    id: 'g',
    categoriaId: '1',
    nome: 'Caixa de Som Portátil',
    descricao: 'Bluetooth, resistente à água',
    preco: 249.5,
    imagem: require('../assets/smartphone.png'),
  },
  {
    id: 'h',
    categoriaId: '2',
    nome: 'História da Tecnologia',
    descricao: 'Do rádio ao smartphone',
    preco: 74.9,
    imagem: require('../assets/livro.png'),
  },
  {
    id: 'i',
    categoriaId: '1',
    nome: 'Câmera de Ação 4K',
    descricao: 'À prova d’água, 60fps',
    preco: 799.9,
    imagem: require('../assets/smartphone.png'),
  },
  {
    id: 'j',
    categoriaId: '2',
    nome: 'Atlas Ilustrado',
    descricao: 'Mapas e curiosidades do mundo',
    preco: 149.0,
    imagem: require('../assets/livro.png'),
  },
];
