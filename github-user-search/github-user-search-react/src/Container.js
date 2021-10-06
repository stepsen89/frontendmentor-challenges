import React, { Component, useEffect, useState } from "react";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { getUser } from "./redux/action";
import { connect } from "react-redux";

function Container({ getUser, user }) {
  // const [user, setUser] = useState({});

  // componentDidMount() {
  //   const { user } = this.props;
  //   // console.log(this.props);

  //   if (!user) {
  //     this.props.getUser("octocat");
  //     // console.log(user);
  //     // this.setState({ user });
  //     console.log("state", this.props.user);
  //   }
  // }

  useEffect(() => {
    getUser("octocat");
    console.log(user);
    // console.log(props);
  }, []);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.user !== this.props.user) {
  //     this.setState({ user: this.props.user });
  //     console.log("props in did update", this.props);
  //   }
  // }

  return (
    <div className='container'>
      <Search />
      <UserProfile user={user} />
    </div>
  );
}

function mapStateToProps(state) {
  const user = state.user;
  return { user };
}

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
