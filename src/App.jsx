import "./App.css";
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { MainProvider } from "./contexts/MainContext";
import { GlobalStyles } from "./styles/global";

const App = () => {
  return (
    <>
      <MainProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </MainProvider>
    </>
  );
}

export default App;
