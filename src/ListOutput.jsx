import List from "./List";
function ListOutput() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h2>Animals: </h2>
      <List animals={animals} />
    </>
  );
}

export default ListOutput;
