import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";

import { theme } from "./theme/theme";
import { GlobalStyles } from "./global/GlobalStyles";
import { SearchContainer } from "./components/SearchContainer";
import HeadContainer from "./components/HeadContainer";
import ResultContainer from "./components/ResultContainer";

function App() {
  const [apiData, setApiData] = useState(null);
  const [isResult, setIsResult] = useState(false);
  const [isDay, setIsDay] = useState(true);

  return (
    <ThemeProvider theme={isDay ? theme.lightMode : theme.darkMode}>
      <GlobalStyles />
      <Helmet>
        <title>Github User Search App</title>
      </Helmet>
      <div className="App">
        <HeadContainer isDay={isDay} setIsDay={setIsDay} />
        <SearchContainer setIsResult={setIsResult} setApiData={setApiData} />
        {isResult && <ResultContainer apiData={apiData} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
