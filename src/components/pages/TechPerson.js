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
            bio="Peter Landin (1930-2009) foi um cientista da computação britânico que inventou a máquina Stack, Environment, Control, Dump (SECD) e a linguagem ISWIM. Nos anos 1960, Landin mostrou que a programação pode ser definida em termos de funções matemáticas. A máquina virtual de processamento abstrato SECD foi a primeira a ser usada para cálculo lambda, que permitia a tradução daquelas funções matemáticas em expressões matemáticas funcionais. A sua máquina era um conjunto de instruções simples e claras para que o usuário pudesse implementá-las como quisesse, tornando a computação mais democrática. No fim de sua vida, Peter Landin, orgulhosamente bissexual, voltou-se ao ativismo político LGBTQIA+."
          />
          <TechPersonCard
            profileImg={lynneConway}
            name="Lynne Conway"
            flag={transFlag}
            bio="Lynn Conway inventou o Dynamic Instruction Scheduling (DIS) e foi pioneira na revolução do design de chips de computador através do Very Large Scale Integration (VLSI). O DIS permitiu que os computadores fossem muito mais rápidos e o livro que ela escreveu sobre VLSI e o curso que ministrou sobre isso no MIT permitiram que cientistas da computação começassem a desenvolver microprocessadores sem a intervenção de engenheiros especialistas. Isso permitiu uma explosão de inovações em design de chips nos anos 1980 e 1990, especialmente no Vale do Silício. Apesar de tudo isso, ela foi demitida da IBM ao passar por sua transição de gênero. Conway torna-se, então, não apenas importante para a história da tecnologia, mas também uma relevante ativista pelos direitos transgêneros."
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
