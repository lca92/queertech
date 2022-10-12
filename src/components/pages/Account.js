import UserForm from "../UserForm";
import SideMenu from "../SideMenu";
import "./Account.css";

const Account = () => {
  return (
    <div className="accountPage">
      <div>
        <UserForm />
      </div>
      <div>
        <div>
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default Account;
