import { useRoutes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import FlagsDetail from './pages/FlagsDetail';
import NotFound from './pages/NotFound';


function App() {

  let element = useRoutes([
    {
      path:'/',
      element: <HomePage />
    },
    {
      path: '/flags/:countryName',
      element: <FlagsDetail />
    },
    {
      path:'*',
      element: <NotFound />
    }
  ]);

  return element; // return page
}

export default App
