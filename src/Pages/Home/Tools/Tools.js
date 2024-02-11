import { useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <section className="py-2 py-sm-5">
      <div className="container">
        <h2 className="text-center section-title">Tools</h2>.
        <div className="row justify-content-center g-2">
          {tools.map((tool) => (
            <div key={tool._id} className="col">
              <Card style={{ minWidth: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={tool.img}
                  height={250}
                  className="object-fit-contain"
                />
                <Card.Body>
                  <Card.Title>{tool.name}</Card.Title>
                  <Card.Text>{tool.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>
                    Minimum order quantity: {tool.qty}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Available Quantity: {tool.availableQty}
                  </ListGroup.Item>
                  <ListGroup.Item>Price: {tool.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button variant="primary">Place Order</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
