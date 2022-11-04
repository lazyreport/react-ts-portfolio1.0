import React from "react";
import "./styles/styles.scss";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./layout/LanguageSwitcher";


const App: React.FC = () => {

  return (
    <div className="App">
      <LanguageSwitcher />
      <h1>Pretendard</h1>
      <h2>Pretendard</h2>
      <h3>Pretendard</h3>
      <h4>Pretendard</h4>
      <h5>Pretendard</h5>
      <h6>Pretendard</h6>
    </div>
  );
};

export default App;
