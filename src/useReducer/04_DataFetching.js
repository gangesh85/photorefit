import React, { useEffect, useReducer } from "react";
import axios from 'axios'

const initialState = {
  loading: false,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetch_success":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "fetch_error":
      return {
        loading: false,
        post: {},
        error: "Some thing went wrong",
      };

    default:
      return state;
  }
};

function DataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((Response) => {
        dispatch({type: 'fetch_success', payload: Response.data});
      })
      .catch(error => {
        dispatch({type: 'fetch_error'})
      });
  });

  return(
    <div>
        {state.loading ? 'Loadind..' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetching;
