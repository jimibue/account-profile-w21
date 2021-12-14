import Account from "./Account";
import AccountForm from "./AccountForm";

const AccountProfile = () => {
  return (
    <div>
      <h1>AccountProfile</h1>
      <Account />
      <AccountForm header="header Here" />
    </div>
  );
};

export default AccountProfile;
