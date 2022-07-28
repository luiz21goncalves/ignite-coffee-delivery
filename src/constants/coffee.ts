import american from '../assets/coffee/american.png'
import arabic from '../assets/coffee/arabic.png'
import cappuccino from '../assets/coffee/capuccino.png'
import chocolate from '../assets/coffee/chocolate.png'
import coffeeMilk from '../assets/coffee/coffee-milk.png'
import cremyExpress from '../assets/coffee/cremy-express.png'
import cuban from '../assets/coffee/cuban.png'
import expresso from '../assets/coffee/expresso.png'
import hawaiian from '../assets/coffee/hawaiian.png'
import iced from '../assets/coffee/iced.png'
import irish from '../assets/coffee/irish.png'
import latte from '../assets/coffee/latte.png'
import macchiato from '../assets/coffee/macchiato.png'
import mochaccino from '../assets/coffee/mochaccino.png'

export const COFFEE = [
  {
    id: 1,
    image: expresso,
    tags: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café com água quente e grãos moídos',
    price: 1403,
  },
  {
    id: 2,
    image: american,
    tags: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 1623,
  },
  {
    id: 3,
    image: cremyExpress,
    tags: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 2084,
  },
  {
    id: 4,
    image: iced,
    tags: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida praparada com café expresso e cubos de gelo',
    price: 2339,
  },
  {
    id: 5,
    image: coffeeMilk,
    tags: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 2685,
  },
  {
    id: 6,
    image: latte,
    tags: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 2801,
  },
  {
    id: 7,
    image: cappuccino,
    tags: ['tradicional', 'com leite'],
    name: 'Cappuccino',
    description:
      'Bebida com canela feita de dose iguais de café, leite e espuma',
    price: 2515,
  },
  {
    id: 8,
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 1494,
  },
  {
    id: 9,
    image: mochaccino,
    tags: ['tradicional', 'com leite'],
    name: 'Macaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 2353,
  },
  {
    id: 10,
    image: chocolate,
    tags: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 1167,
  },
  {
    id: 11,
    image: cuban,
    tags: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 2060,
  },
  {
    id: 12,
    image: hawaiian,
    tags: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada praparada com café e leite de coco',
    price: 2759,
  },
  {
    id: 13,
    image: arabic,
    tags: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 2290,
  },
  {
    id: 14,
    image: irish,
    tags: ['especial', 'alcoólico'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 1978,
  },
]
