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
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
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
  const [modal,setModal]=useState(false)
  const toggle=()=>setModal(!modal)
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
      <Button color="warning" onClick={handle_count}>
        cout down
      </Button>
      <div className={flag ? "hook1 active" : "hook1"}>
        <h1>Hook 1</h1>
        <p>Flag: {flag ? "true" : "false"}</p>
      </div>
      <div className="meo" ref={sidebarRef}></div>
      <Button
        color="primary"
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
      <div>
        <Button color="danger" onClick={toggle}>
          show modal
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}
