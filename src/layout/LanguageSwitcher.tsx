import React from "react";
import { useTranslation } from "react-i18next";

interface LanguageType {
  nativeName: string;
  flagIcon: string;
}

const lngs: { [index: string]: LanguageType } = {
  en: {
    nativeName: "English",
    flagIcon: "https://icons8.com/icon/t3NE3BsOAQwq/great-britain",
  },
  kr: {
    nativeName: "한국어",
    flagIcon: "https://icons8.com/icon/-_RS8ho736Fs/south-korea",
  },
};

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="lngs-select">
      {Object.keys(lngs).map((lng) => (
        <button
          type="submit"
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng} // is this working?
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
