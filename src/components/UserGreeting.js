import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (this.state.isLoggedIn && <div>Welcome, Linda!</div>);
    // return (
    //   this.state.isLoggedIn ?
    //   (<div>Welcome, Linda!</div>) :
    //   (<div>Welcome, Guest!</div>)
    // );
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome, Linda!</div>;
    // } else {
    //   message = <div>Welcome, Guest!</div>;
    // }
    // return <div>{message}</div>
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <div>Welcome, Linda!</div>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div>Welcome, Guest!</div>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <div>Welcome, Linda!</div>
    //     <div>Welcome, Guest!</div>
    //   </div>
    // );
  }
}

export default UserGreeting;