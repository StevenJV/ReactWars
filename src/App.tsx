import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import { useState } from "react";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const handleSelectedItem = (item: string) => {
    setSelectedItem(item);
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectedItem}
        />
      </div>
      <p></p>
      <div>
        <Alert children={selectedItem} />
      </div>
    </>
  );
}

export default App;
