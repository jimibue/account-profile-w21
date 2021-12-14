import React, { useContext } from "react";
import { Form } from "semantic-ui-react";
import { AccountConsumer, AccountContext } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel,
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { username, membershipLevel } = this.state;
    return (
      <>
        <h1>Header: {this.props.header}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Edit Username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <Form.Select
            label="Membership Level"
            name="membershipLevel"
            value={membershipLevel}
            onChange={this.handleChange}
            options={membershipOptions}
          />
          <Form.Button color="blue">Save</Form.Button>
        </Form>
      </>
    );
  }
}

// higher order component HOC wrapping a component within another componet
// to provided data/function

// const ConnectedAccountForm = (props) => {
//   return (
//     <AccountConsumer>
//       {(value) => (
//         <AccountForm
//           username={value.username}
//           membershipLevel={value.membershipLevel}
//         />
//       )}
//     </AccountConsumer>
//   );
// };

const ConnectedAccountForm = (props) => {
  const account = useContext(AccountContext);
  return (
    <AccountForm
      {...props}
      username={account.username}
      membershipLevel={account.membershipLevel}
    />
  );
};

const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
  { key: "p", text: "Platinum", value: "Platinum" },
];

export default ConnectedAccountForm;
