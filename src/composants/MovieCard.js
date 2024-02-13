import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MovieCard({user={}}) {
    const {title , description, Url, Ranking} = user
  return (
    

<Card style={{ width: '16rem' }} border='danger'>
<Card.ImgOverlay>
      <Card.Img variant="top" className="img-fluid" src={Url}/>
      
      <Card.Body>
       <Card.Title style={{ fontFamily: 'Motivion Regular' }}> <h3>{title}</h3></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text>
        <h5> Ranking : <b>{Ranking}</b> </h5>
        
        </Card.Text>
        <FontAwesomeIcon icon="fa-thin fa-star" />
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Description</Card.Link>
        <Card.Link href="#">Trailer </Card.Link>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
    
   
    
  );
}

export default MovieCard;