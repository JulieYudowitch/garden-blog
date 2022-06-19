import "../styles/globals.css";
import * as React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  const timeoutRef = React.useRef();

  const clearTimer = React.useCallback(
    () => clearTimeout(timeoutRef.current),
    []
  );

  React.useEffect(() => {
    if (timeoutRef.current) clearTimer();

    timeoutRef.current = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);

    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return (
    
      <Component {...pageProps} />
    
  );
};

export default App;
