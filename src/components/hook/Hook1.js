import React, { useRef, useState } from "react";
import "./hook1.css";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Input,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default function Hook1() {
  const [flag, setFlag] = useState(true);
  const [count, setcount] = useState(10);
  const sidebarRef = useRef();
  const handle_count = () => {
    setcount(count - 1);
    setcount((preState) => preState - 1);
    setcount((sotruoc) => sotruoc - 1);
  };
  return (
    <>
      <Nav>
        <NavItem>
          <NavLink active href="#">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Products</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
      <h1>cout: {count}</h1>
      <Button color="warning" onClick={handle_count}>cout down</Button>
      <div className={flag ? "hook1 active" : "hook1"}>
        <h1>Hook 1</h1>
        <p>Flag: {flag ? "true" : "false"}</p>
      </div>
      <div className="meo" ref={sidebarRef}></div>
      <Button color="primary"
        onClick={() => {
          setFlag(!flag);
          sidebarRef.current.classList.toggle("active");
        }}
      >
        change flag
      </Button>
      <div>
        <Input invalid />
      </div>
      <Alert color="primary">Hello world</Alert>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card‘s content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
}
