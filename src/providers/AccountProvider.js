import React from "react";

// Setup the initial context (use this with the useContext hook)
export const AccountContext = React.createContext();

// Create a consumer (older pre hook way of doind this)
export const AccountConsumer = AccountContext.Consumer;

class AccountProvider extends React.Component {
  state = {
    username: "fooman77",
    membershipLevel: "Gold",
    dateJoined: "12/21/21",
  };

  render() {
    return (
      <AccountContext.Provider value={this.state}>
        {this.props.children}
      </AccountContext.Provider>
    );
  }
}

export default AccountProvider;
