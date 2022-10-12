import React from "react";
import ProfileCard from "../ProfileCard";
import SideMenu from "../SideMenu.js";
import "./About.css";
import bisexualFlag from "../../img/bisexualFlag.png";
import lesbianFlag from "../../img/lesbianFlag.png";
import lena from "../../img/lena.jpeg";
import roxanie from "../../img/roxanie.jpg";

const About = () => {
  return (
    <div className="aboutPage">
      <div className="aboutText">
        <h1>For (queer in tech)</h1>
        <p>
          O projeto <strong>For (queer in tech)</strong> nasce da necessidade de
          um mercado de tecnologia mais diverso. Nós criamos a ponte entre
          profissionais LGBTQIA+ e empresas e projetos que buscam por mais
          inclusão.
        </p>
        <p>
          Mas por que ter diversidade na tecnologia? Segundo{" "}
          <a href="https://www.cnnbrasil.com.br/business/lgbtqi-54-nao-sentem-seguranca-no-ambiente-de-trabalho/">
            pesquisa
          </a>
          , 54% das pessoas LGBTQIA+ "não sente segurança para falar abertamente
          sobre a própria orientação sexual ou identidade de gênero no ambiente
          profissional". Um ambiente de trabalho seguro confere maior
          produtividade e identificação com a empresa. Além disso, se um sistema
          é homogêneo, seus produtos sempre terão a mesma cara. Ao ter pessoas
          de diferentes realidades e com diferentes vivências no corpo da
          empresa, há mais criatividade e inovação nos projetos.
        </p>
        <p>
          A ideia parte de duas colegas do bootcamp de Web Development do
          Ironhack São Paulo, ambas orgulhosamente parte da comunidade LGBTQIA+.
        </p>
      </div>
      <div>
        <ProfileCard
          profileImg={roxanie}
          name="Roxanie Fernandes"
          flag={lesbianFlag}
          bio="Boanoiteira oficial, paulista, xx anos"
          github="https://github.com/RoxanieFernandes"
          linkedin="https://www.linkedin.com/in/roxanie-fernandes-6077a89b"
        />
        <ProfileCard
          profileImg={lena}
          name="Lena Araújo"
          flag={bisexualFlag}
          bio="Animadora de stop motion, paraense, 30 anos"
          github="https://github.com/lca92"
          linkedin="https://www.linkedin.com/in/araujolena/"
        />
      </div>

      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default About;
