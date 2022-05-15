import React, { useEffect, useState } from "react";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { getUser } from "./redux/action";
import { connect } from "react-redux";
import { Formik } from "formik";

function Container({ getUser, user }) {
  // const [user, setUser] = useState({});
  const [value, setValue] = useState({});

  useEffect(() => {
    getUser("octocat");
    setValue({ searchTerm: user.login });
  }, []);

  useEffect(() => {
    getUser(value.searchTerm)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log("err", err));
  }, [value]);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.user !== this.props.user) {
  //     this.setState({ user: this.props.user });
  //     console.log("props in did update", this.props);
  //   }
  // }

  function handleUserSearch(e) {
    e.preventDefault();
    setValue(e);
  }

  return (
    <div className="container">
      {/* <Search onChange={handleUserSearch} error={false} /> */}
      <Formik
        component={Search}
        initialValues={{ searchTerm: "" }}
        onSubmit={(value) => {
          setValue(value);
        }}
      />
      <UserProfile user={user} error />
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
