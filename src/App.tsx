import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectedItem = (item: string) => {
    setSelectedItem(item);
    console.log(item);
    console.log(alertVisible);
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
        {alertVisible && (
          <Alert
            children={selectedItem}
            onClose={() => setAlertVisibility(false)}
          />
        )}
        <Button onClick={() => setAlertVisibility(true)}>go!</Button>
      </div>
    </>
  );
}

export default App;
