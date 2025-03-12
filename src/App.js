import { Provider } from "react-redux";
import Body from "./components/Body";
import store from "./utils/store";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ThemeProvider from "./components/ThemeProvider"; // New component

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider>
          <Header />
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
