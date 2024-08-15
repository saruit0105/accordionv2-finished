import "./styles.css";
import { useState } from "react";
const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currOpen, setIsOpen] = useState(null);

  function toggleOpen(num) {
    currOpen === num ? setIsOpen(null) : setIsOpen(num);
  }
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          title={item.title}
          num={i}
          currOpen={currOpen}
          onToggleOpen={toggleOpen}
        >
          {" "}
          {item.text}{" "}
        </AccordionItem>
      ))}
      <AccordionItem
        title="Test"
        num={22}
        key="test1"
        currOpen={currOpen}
        onToggleOpen={toggleOpen}
      >
        <p>Allows react developers to: </p>
        <ul>
          <li> Break up UI into components </li>
          <li> Make components reusuable </li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, text, currOpen, onToggleOpen, children }) {
  const isOpen = num === currOpen;
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={(e) => onToggleOpen(num)}
    >
      <p className="number"> {num < 9 ? `0${num + 1}` : `${num + 1}`} </p>
      <p className="title">{title}</p>
      {isOpen ? (
        <p className="icon" onClick={(e) => onToggleOpen()}>
          -
        </p>
      ) : (
        <p className="icon">+</p>
      )}

      {isOpen && <div className="content-box"> {children} </div>}
    </div>
  );
}
