import { useState } from "react";
import { MyContext } from "./Components/Context";
import Header from "./Components/Header";

function App() {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <>
      <MyContext.Provider value={{ hidden, setHidden }}>
        <Header />
      </MyContext.Provider>
    </>
  );
}

export default App;
