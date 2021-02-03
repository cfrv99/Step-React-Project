import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

export const CreateModal = ({ modalShow, toggleModal,getModalData,...props }) => {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    let textFromInput = event.target.value;
    //console.log(textFromInput);
    setText(textFromInput);
  };
  const handleFormSubmit = () => {
    getModalData(text);
    toggleModal();
  };
  return (
    <div>
      <Modal isOpen={modalShow} toggle={toggleModal} className="">
        <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={2}>
                Email
              </Label>
              <Col sm={10}>
                <Input
                  onChange={handleOnChange}
                  type="text"
                  name="email"
                  id="exampleEmail"
                  placeholder="with a placeholder"
                />
              </Col>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit" onClick={handleFormSubmit}>
            Save
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          
        </ModalFooter>
        
      </Modal>
    </div>
  );
};
