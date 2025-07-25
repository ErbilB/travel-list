export function Stats({ item }) {
  if (!item.length) {
    return (
      <p className="stats">
        <em>Start adding items🙌</em>{" "}
      </p>
    );
  }

  const numItems = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  let percentagePacked = 0;
  percentagePacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You are ready to go🏖️"
          : `You have ${numItems} items on your list, and you already packed
        ${numPacked} %${percentagePacked}`}
      </em>
    </footer>
  );
}
