import { HashRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Router from "./components/router/router";
import ErrorFallback from "./components/shared/error_fallback/error_fallback";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HashRouter>
          <Router />
        </HashRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
