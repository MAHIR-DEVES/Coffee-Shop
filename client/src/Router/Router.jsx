import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import About from '../Pages/About/About';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/menu',
        Component: Menu,
      },
      {
        path: '/about',
        Component: About,
      },
    ],
  },
]);
