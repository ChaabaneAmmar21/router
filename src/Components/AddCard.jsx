import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Btton from "react-bootstrap/Button";

import Rating from "@mui/material/Rating";



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal(props) {
  const [rating, setRating] = React.useState(0);
  const [title, settitle] = React.useState("");
  const [posterURL, setPosterURL] = React.useState("");
  const [ description, setdescription] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <Button onClick={handleOpen}>
        <h2>+Add Film</h2>
      </Button>


      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "100%" }}>
          <div>
            <Button
              onClick={handleClose}
              style={{ color: "red", float: "right" }}
            >
              <b>Close</b>
            </Button>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>Add New Film</h4>
            <Form style={{ width: "50%" }}>
              <Form.Group>
                <Form.Label>Enter your full name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="name Film"
                  required
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter description:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description Film"
                  required
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Enter URL:</Form.Label>
                <Form.Control
                  required
                  type="url"
                  placeholder="Enter Url"
                  value={posterURL}
                  onChange={(e) => {
                    setPosterURL(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    required
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />{" "}
                </Box>
              </Form.Group>
              <br></br>
              <Btton
                style={{ width: "100%" }}
                className="primary"
                onClick={() =>
                  props.Addfilm({ title, description, posterURL, rating },handleClose)
                }
              >
                Add film
              </Btton>
            </Form>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
