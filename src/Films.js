import React from 'react';
import Card from 'react-bootstrap/Card';

const Films = () => {
    return (
        <div><br />
           <h1>Liste des Films</h1>

           <Card style={{ width: '16rem' }} border='danger'>
<Card.ImgOverlay>
      <Card.Img variant="top" className="img-fluid" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allocine.fr%2Fseries%2Fficheserie_gen_cserie%3D22146.html&psig=AOvVaw2KzfijnIgjx00AKCMGEE7X&ust=1703084212001000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiG16Phm4MDFQAAAAAdAAAAABAD"/>
      
      <Card.Body>
       <Card.Title style={{ fontFamily: 'Motivion Regular' }}> <h3>The Witcher</h3></Card.Title>
        <Card.Text>
         
        </Card.Text>
        <Card.Text>
        <h5> Ranking : <b>250</b> </h5>
        
        </Card.Text>
        
      </Card.Body>
      
      <Card.Body>
        <Card.Link href="#">Description</Card.Link>
        <Card.Link href="#">Trailer </Card.Link>
      </Card.Body>
      </Card.ImgOverlay>
    </Card>
        </div>
    );
}

export default Films;
