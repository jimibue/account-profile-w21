import { useContext } from "react";
import { AccountContext } from "../providers/AccountProvider";

const Home = () => {
  const account = useContext(AccountContext);
  const changeUser = () => {
    account.updateAccount({ username: "changed", membershipLevel: "Gold" });
  };
  return (
    <div>
      <h1>Home</h1>
      <p>username: {account.username} </p>
      <p onClick={changeUser}>changeuser</p>
    </div>
  );
};

export default Home;
