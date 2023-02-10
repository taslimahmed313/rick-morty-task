import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router/Router';

function App() {
  return (
    <div className="max-w-[1920px] border border-red-500 mx-auto h-[1705px]">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
