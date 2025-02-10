import Layout from '@/components/layout/Layout.tsx';
import Home from '@/pages/Home';
import Error from '@/components/common/Error';
import { BookStoreThemeProvider } from '@/context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from '@/pages/Signup';
import ResetPassword from '@/pages/ResetPassword';
import Signin from '@/pages/Signin';
import Books from '@/pages/Books';
import BookDetail from '@/pages/BookDetail';
import Cart from '@/pages/Cart';
import Order from '@/pages/Order';
import OrderList from '@/pages/OrderList';

const routeList = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/books',
    element: <Books />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
  },
  {
    path: '/signin',
    element: <Signin />,
  },
  {
    path: '/book/:bookId',
    element: <BookDetail />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/orderList',
    element: <OrderList />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: (
        <Layout>
          <Error />
        </Layout>
      ),
    };
  })
);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
