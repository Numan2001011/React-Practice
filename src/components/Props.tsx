import { useState } from "react";

interface Props {
  items: (string | number)[];
  heading: string;
  onSelectItem : (item:string | number) => void;
}
function ListGroupProps({ items, heading, onSelectItem}: Props) {
  function Msg() {
    return items.length === 0 && <h3>No item found</h3>;
  }
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {Msg()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroupProps;
