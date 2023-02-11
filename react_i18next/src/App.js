import { useTranslation } from "react-i18next";
import { sayHello } from "./utils";

function App() {
  const { t, i18n } = useTranslation();

  const clickHandle = async lang => {
    await i18n.changeLanguage(lang)
  }

  const user = {
    name: "Omer Can",
    surname: "Kaplan"
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          Active : {i18n.language}

          <nav>
            <button onClick={() => clickHandle("tr")}>Turkçe</button>
            <button onClick={() => clickHandle("en")}>English</button>
            <button onClick={sayHello}>Say Hello</button>
          </nav>

          <h3>{t("welcome", { user })}</h3>
        </header>
      </div>
    </>

  );
}

export default App;
