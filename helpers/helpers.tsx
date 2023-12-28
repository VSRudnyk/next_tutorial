import Courses from './icon/courses.svg';
import Books from './icon/books.svg';
import Services from './icon/services.svg';
import Products from './icon/products.svg';
import { TopLevelCategory } from '../interfaces/page.interface';
import { FirstLevelMenuItem } from '../interfaces/menu.interface';

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <Courses />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'sevices',
    name: 'Сервисы',
    icon: <Services />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <Books />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'product',
    name: 'Товары',
    icon: <Products />,
    id: TopLevelCategory.Products,
  },
];

export const priceRu = (price: number): string =>
  price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .concat(' ₽');
