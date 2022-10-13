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
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut egestas sapien. Sed venenatis sit amet ante vitae lobortis. Morbi elementum tristique est, eu posuere sem ultrices sit amet. Aliquam blandit rutrum elit nec condimentum. Vivamus at egestas risus, pellentesque aliquet ligula. Curabitur interdum posuere ex, non convallis urna convallis id. Sed vitae volutpat lectus, a laoreet magna. Aliquam id turpis et nunc malesuada aliquam. Sed lobortis a orci sed congue. Vestibulum eget semper diam, nec sodales est. Donec vel dapibus libero. Integer luctus nunc ac leo tincidunt sagittis. Nunc consequat nulla eget odio interdum ullamcorper. Vivamus turpis dui, consequat at mauris nec, ultricies scelerisque nisl. Phasellus aliquam, dui ac dapibus malesuada, felis leo venenatis nulla, sed rhoncus lacus velit non purus. Duis quis egestas dui, sed accumsan ex."
          />
          <TechPersonCard
            profileImg={alanTuring}
            name="Alan Turing"
            flag={gayFlag}
            bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut egestas sapien. Sed venenatis sit amet ante vitae lobortis. Morbi elementum tristique est, eu posuere sem ultrices sit amet. Aliquam blandit rutrum elit nec condimentum. Vivamus at egestas risus, pellentesque aliquet ligula. Curabitur interdum posuere ex, non convallis urna convallis id. Sed vitae volutpat lectus, a laoreet magna. Aliquam id turpis et nunc malesuada aliquam. Sed lobortis a orci sed congue. Vestibulum eget semper diam, nec sodales est. Donec vel dapibus libero. Integer luctus nunc ac leo tincidunt sagittis. Nunc consequat nulla eget odio interdum ullamcorper. Vivamus turpis dui, consequat at mauris nec, ultricies scelerisque nisl. Phasellus aliquam, dui ac dapibus malesuada, felis leo venenatis nulla, sed rhoncus lacus velit non purus. Duis quis egestas dui, sed accumsan ex."
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
