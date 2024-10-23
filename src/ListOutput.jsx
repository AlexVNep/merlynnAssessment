function ListOutput() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h2>Animals: </h2>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
}

export default ListOutput;
