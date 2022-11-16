import React from "react";
import "./styles/styles.scss";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./layout/LanguageSwitcher";

const publicProjects = ["ABC", "XYZ"];
const App: React.FC = () => {
  const { t } = useTranslation();

  console.log(t("exampleProject:name"));

  return (
    <div className="App">
      <LanguageSwitcher />
  
    </div>
  );
};

export default App;
