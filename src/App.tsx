import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Error from './components/common/Error';
import { BookStoreThemeProvider } from './context/themeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
        <Home />
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
