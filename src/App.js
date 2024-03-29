import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router/Router';

function App() {
  return (
    <div className="max-w-[1920px] border mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
