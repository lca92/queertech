import SideMenu from "../SideMenu";
import "./TechPerson.css";
import TechPersonCard from "../TechPersonCard";
import lesbianFlag from "../../img/lesbianFlag.png";
import gayFlag from "../../img/gayFlag.png";
import bisexualFlag from "../../img/bisexualFlag.png";
import transFlag from "../../img/transFlag.png";
import leannePittsford from "../../img/leannePittsford.jpeg";
import alanTuring from "../../img/alanTuring.jpg";
import peterLandin from "../../img/peterLandin.png";
import lynneConway from "../../img/lynneConway.jpeg";

const TechPerson = () => {
  return (
    <div className="techPersonPage">
      <div>
        <header>
          <h1>Personalidades LGBTQIA+ na tecnologia</h1>
          <p>Pessoas LGBTQIA+ que mudaram o curso da história da tecnologia</p>
        </header>
        <div className="techPersonCards">
          <TechPersonCard
            profileImg={leannePittsford}
            name="Leanne Pittsford"
            flag={lesbianFlag}
            bio="Leanne Pittsford é a presidente e fundadora da Lesbians Who Tech & Allies, a maior comunidade LGBTQ de profissionais de tecnologia no mundo — dedicada à visibilidade, intersecionalidade e quebra dos paradigmas na tecnologia. Desde a sua fundação em 2021, a comunidade chegou à marca de 70.000 pessoas não-binárias, mulheres LGBTQ e mulheres queer não-brancas (e aliades) advindas de mais de 100 países no mundo. Mais de 40.000 líderes reuniram-se para os Summits virtuais de 2020 promovidos pela organização, tornando-o, globalmente, o maior evento profissional LGBTQ e o maior evento voltado a mulheres na tecnologia."
          />
          <TechPersonCard
            profileImg={alanTuring}
            name="Alan Turing"
            flag={gayFlag}
            bio="Inventor do computador, Alan Turing (1912-1954) foi um matemático inglês que ficou mundialmente famoso por criar a máquina The Bomb, capaz de decodificar mensagens nazistas durante a Segunda Guerra Mundial e assim conseguir agir antes dos ataques alemães. A guerra teve fim graças à invenção de Turing. Em 1952, ele foi condenado por “atos homossexuais e indecência”. Em troca de sua liberdade, concordou em ser castrado quimicamente. O matemático faleceu envenenado pouco tempo depois. Desde 1966, o maior prêmio da computação mundial, concedido pela Associação para Maquinaria da Computação, de Nova York, leva o seu nome. Em 2017, a “Lei Turing” anulou as condenações de Alan e de tantas outras pessoas."
          />
          <TechPersonCard
            profileImg={peterLandin}
            name="Peter Landin"
            flag={bisexualFlag}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut egestas sapien. Sed venenatis sit amet ante vitae lobortis. Morbi elementum tristique est, eu posuere sem ultrices sit amet. Aliquam blandit rutrum elit nec condimentum. Vivamus at egestas risus, pellentesque aliquet ligula. Curabitur interdum posuere ex, non convallis urna convallis id. Sed vitae volutpat lectus, a laoreet magna. Aliquam id turpis et nunc malesuada aliquam. Sed lobortis a orci sed congue. Vestibulum eget semper diam, nec sodales est. Donec vel dapibus libero. Integer luctus nunc ac leo tincidunt sagittis. Nunc consequat nulla eget odio interdum ullamcorper. Vivamus turpis dui, consequat at mauris nec, ultricies scelerisque nisl. Phasellus aliquam, dui ac dapibus malesuada, felis leo venenatis nulla, sed rhoncus lacus velit non purus. Duis quis egestas dui, sed accumsan ex."
          />
          <TechPersonCard
            profileImg={lynneConway}
            name="Lynne Conway"
            flag={transFlag}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut egestas sapien. Sed venenatis sit amet ante vitae lobortis. Morbi elementum tristique est, eu posuere sem ultrices sit amet. Aliquam blandit rutrum elit nec condimentum. Vivamus at egestas risus, pellentesque aliquet ligula. Curabitur interdum posuere ex, non convallis urna convallis id. Sed vitae volutpat lectus, a laoreet magna. Aliquam id turpis et nunc malesuada aliquam. Sed lobortis a orci sed congue. Vestibulum eget semper diam, nec sodales est. Donec vel dapibus libero. Integer luctus nunc ac leo tincidunt sagittis. Nunc consequat nulla eget odio interdum ullamcorper. Vivamus turpis dui, consequat at mauris nec, ultricies scelerisque nisl. Phasellus aliquam, dui ac dapibus malesuada, felis leo venenatis nulla, sed rhoncus lacus velit non purus. Duis quis egestas dui, sed accumsan ex."
          />
        </div>
      </div>
      <div>
        <SideMenu />
      </div>
    </div>
  );
};

export default TechPerson;
