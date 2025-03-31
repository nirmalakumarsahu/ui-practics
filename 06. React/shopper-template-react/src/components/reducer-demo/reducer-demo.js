import { useReducer } from "react";

let initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "JOIN":
      return { count: state.count + 1 };
    case "EXIT":
      return { count: state.count - 1 };
  }
}

export function ReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function JoinClick() {
    dispatch({ type: "JOIN" });
  }

  function ExitClick() {
    dispatch({ type: "EXIT" });
  }

  return (
    <div className="container-fluid">
      <h2>
        Live <span className="bi bi-youtube"></span> Video Streaming
      </h2>
      <h4> {state.count} Watching</h4>
      <button onClick={JoinClick} className="btn btn-primary me-2">
        Join
      </button>
      <button onClick={ExitClick} className="btn btn-danger">
        Exist
      </button>
    </div>
  );
}
