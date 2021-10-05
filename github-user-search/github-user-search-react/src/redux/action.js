import axios from "axios";

export function getUser(username) {
  return (dispatch) => {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log("test");
        dispatch({
          type: "FETCH_USER",
          payload: response,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
