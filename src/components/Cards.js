import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'

function Posts(props) {
  return (
    <div className='main-div'>
    <Card style={{ width: '85vw',height:'60vh'}} className="cardstylling">
      <Card.Img variant="top" src="./download.jpeg" />
      {/* <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body> */}
    </Card>
    <div>
    <h1 className='post-title'><b>{props.title}</b></h1>
    <p className='post-des'>
      {props.Post}
    </p>
    </div>
    </div>
  );
}

export default Posts;