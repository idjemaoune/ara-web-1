import axios from "axios";
import * as types from "./playbooksActionsTypes";

export function getPlaybooks() {
  return (dispatch, getState) => {
    const { apiURL } = getState().config;
    return axios.get(`${apiURL}/api/v1/playbooks`).then(response => {
      dispatch({
        type: types.FETCH_PLAYBOOKS,
        playbooks: response.data.results
      });
      return response;
    });
  };
}
