import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
import "./Checkbox.css";

const Checkbox = ({homeOffice, presencial, pj, clt, junior, pleno, senior, javascript, html, css}) => {
  // const [isChecked, setIsChecked] = useState(false);

  const check = () => {
    // setIsChecked(!isChecked);
    // setHomeOffice(!homeOffice);
    // setPresencial(!presencial);
    // setPj(!pj);
    // setClt(!clt);
    // setJunior(!junior);
    // setPleno(!pleno);
    // setSenior(!senior);
    // setJavaScript(!javascript);
    // setHtml(!html);
    // speechSynthesis(!css);
  };

  return (
    <div>
      <div className="typeOfWork">
        <div className="homeOffice">
          <input
            type="checkbox"
            id="homeOffice"
            name="homeOffice"
            value="HomeOffice"
            checked={homeOffice}
            onChange={check}
          />
          Remoto
        </div>
        <div className="presencial">
          <input
            type="checkbox"
            id="presencial"
            name="presencial"
            value="Presencial"
            checked={presencial}
            onChange={check}
          />
          Presencial
        </div>

        <div className="pj">
          <input
            type="checkbox"
            id="pj"
            name="pj"
            value="pj"
            checked={pj}
            onChange={check}
          />
          PJ
        </div>

        <div className="clt">
          <input
            type="checkbox"
            id="clt"
            name="clt"
            value="clt"
            checked={clt}
            onChange={check}
          />
          CLT
        </div>

        <div className="junior">
          <input
            type="checkbox"
            id="junior"
            name="junior"
            value="junior"
            checked={junior}
            onChange={check}
          />
          Júnior
        </div>

        <div className="pleno">
          <input
            type="checkbox"
            id="pleno"
            name="pleno"
            value="pleno"
            checked={pleno}
            onChange={check}
          />
          Pleno
        </div>

        <div className="senior">
          <input
            type="checkbox"
            id="senior"
            name="senior"
            value="senior"
            checked={senior}
            onChange={check}
          />
          Sênior
        </div>
      </div>
      <div className="languages">
        <div className="javascript">
          <input
            type="checkbox"
            id="javascript"
            name="javascript"
            value="javascript"
            checked={javascript}
            onChange={check}
          />
          JavaScript
        </div>
        <div className="html">
          <input
            type="checkbox"
            id="html"
            name="html"
            value="html"
            checked={html}
            onChange={check}
          />
          HTML
        </div>

        <div className="css">
          <input
            type="checkbox"
            id="css"
            name="css"
            value="css"
            checked={css}
            onChange={check}
          />
          CSS
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
