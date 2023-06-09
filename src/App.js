import React from "react";
// components
import LayoutRouter from "./Components/Router/LayoutRouter";
import Loader from "./Components/Loader/Loader";

// Libraries
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@hybris-software/ui-kit";

// Data
import { routeComponents } from "./Routes/routes";

// Views
import NotFoundView from "./Views/NotFoundView/NotFoundView";

//Style
import Theme from "./Assets/css/Theme.module.css";

function App() {
  return (
    <ThemeProvider
      theme={{
        row: {
          columnGap: {
            horizontal: {
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            },
            vertical: {
              xs: 20,
              sm: 20,
              md: 20,
              lg: 20,
              xl: 20,
              xxl: 20,
            },
          },
        },

        container: {
          containerClassName: Theme.container,
        },
        button: {
          buttonClassName: Theme.buttonStyle,
          buttonSecondaryClassName: Theme.buttonSecondary,
        },
        inputField: {
          baseClassName: Theme.inputFieldStyle,
          errorClassName: Theme.inputFieldErrorStyle,
          successClassName: Theme.inputFieldSuccessStyle,
        },
        textField: {
          baseClassName: Theme.textFieldStyle,
        },
      }}
    >
      <HashRouter>
        <LayoutRouter
          loader={<Loader />}
          loadingTime={2000}
          clientTitle="Globe"
        >
          <Routes>
            {routeComponents}
            <Route path="*" element={<NotFoundView />} />
          </Routes>
        </LayoutRouter>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
