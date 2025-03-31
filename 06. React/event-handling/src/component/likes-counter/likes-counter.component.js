import { useState } from "react";

export function LikesCounter() {
  const [counter, setCounter] = useState(0);

  function handleLike() {
    setCounter(counter + 1);
  }

  function handleDislike() {
    setCounter(counter - 1); 
  }

  return (
    <div>
      <span data-testid="counter">{counter}</span>
      <div>
        <button data-testid="like" onClick={handleLike}>Like</button>
        <button data-testid="dislike" onClick={handleDislike}>Dislike</button>
      </div>
    </div>
  );
}
