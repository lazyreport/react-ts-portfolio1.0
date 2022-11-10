import React from "react";
import "./styles/styles.scss";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./layout/LanguageSwitcher";
import ProjectContainer from "./components/projects/ProjectContainer";

const publicProjects = ["ABC", "XYZ"];
const App: React.FC = () => {
  const { t } = useTranslation();

  console.log(t("exampleProject:name"));

  return (
    <div className="App">
      <LanguageSwitcher />
      <ProjectContainer />
      <div className="projeccts-section">
        {publicProjects.map((key) => (
          <ProjectContainer />
        ))}
      </div>
    </div>
  );
};

export default App;
