import { Badge, Card, Col } from "react-bootstrap";

const SingleBook = ({ book, changeSelected, selected }) => {
  return (
    <Col>
      <Card className={selected === book.asin ? "item-selected" : ""} onClick={() => changeSelected(book.asin)}>
        <Card.Img variant="top" src={book.img} alt="{book.title}" />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>
            <Badge bg="info">€{book.price}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
