import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Pages.css";

const ContextPage = () => {
  const { t } = useTranslation();
  const [gender, setGender] = useState("male");
  const [itemCount, setItemCount] = useState(1);
  const userName = "Alex";

  return (
    <div className="context-container">
      <h1 className="context-title">{t("context.title")}</h1>
      <div className="context-card">
        <div className="mb-6">
          <label className="context-label">
            {t("context.demo.genderLabel")}
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="context-select"
          >
            <option value="male">{t("context.demo.user", {context:'male'})}</option>
            <option value="female">{t("context.demo.user", {context:'female'})}</option>
          </select>
        </div>

        <div className="input-group">
          <label className="label">{t("plurals.demo.countLabel")}</label>
          <input
            type="number"
            value={itemCount}
            onChange={(e) => setItemCount(parseInt(e.target.value) || 0)}
            className="input"
            min="0"
          />
        </div>

        <div className="context-greeting-box">
          <p className="context-greeting-text">
            {t("context.demo.greeting", {
              name: userName,
              context: gender,
              count: itemCount,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContextPage;
