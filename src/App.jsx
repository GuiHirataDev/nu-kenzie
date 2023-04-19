import "./App.css";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { MainProvider } from "./contexts/MainContext";

const App = () => {
  return (
    <>
      <MainProvider>
        <RouterProvider router={router} />
      </MainProvider>
    </>
  );
}

export default App;
