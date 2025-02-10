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

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <Error />
      </Layout>
    ),
  },
  {
    path: '/books',
    element: (
      <Layout>
        <Books />
      </Layout>
    ),
  },
  {
    path: '/signup',
    element: (
      <Layout>
        <Signup />
      </Layout>
    ),
  },
  {
    path: '/reset',
    element: (
      <Layout>
        <ResetPassword />
      </Layout>
    ),
  },
  {
    path: '/signin',
    element: (
      <Layout>
        <Signin />
      </Layout>
    ),
  },
  {
    path: '/book/:bookId',
    element: (
      <Layout>
        <BookDetail />
      </Layout>
    ),
  },
  {
    path: '/cart',
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: '/order',
    element: (
      <Layout>
        <Order />
      </Layout>
    ),
  },
  {
    path: '/orderList',
    element: (
      <Layout>
        <OrderList />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <BookStoreThemeProvider>
      <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
