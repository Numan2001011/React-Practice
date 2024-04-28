import { useState } from "react";

function DynamicList() {
  let items: string[] = ["Noman", "Mahmud", "Abeer", "Rakib"];
  const msgNotFound: string = "Item not found";
  function ShowMessage(message: string) {
    return items.length === 0 && <p>{message}</p>;
  }

  // const myEvent = (event: MouseEvent) => {
  //   console.log("Nothing");
  // };
  const [selectedIndex, setSelectedIndex] = useState(-1);//To change the state of a function dynamically
  return (
    <>
      <h1>Dynamic List</h1>

      {ShowMessage(msgNotFound)}

      <ul className="list-group">
        {items.map((varItem, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={varItem}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {varItem}
          </li>
        ))}
      </ul>
    </>
  );
}
export default DynamicList;
