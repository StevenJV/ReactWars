function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  // if (items.length === 0)
  //   return (
  //     <>
  //       <h1>Cities</h1>
  //       <p>No items found.</p>
  //     </>
  //   );

  const getMessage = () => {
    return items.length === 0 ? <p>No items found.</p> : null;
  };

  return (
    <>
      <h1>Cities</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
