import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { useEffect } from 'react';
import { ListFilm } from './ListFilm';


function UserForm() {

    const [formValues, setFormValues] = useState({
  
        title : "",
        description : "",
        Url : "",
        Ranking : "",

      })
  
  
    const [users, setUsers] = useState([])
  
    const Nformchange = (event) => {
      const { title, value } = event.target;
  
      setFormValues({ ...formValues, title : value });
  }
  const Pformchange = (event) => {
    const { description, value } = event.target;
  
    setFormValues({ ...formValues, description : value });
  }
  const Rformchange = (event) => {
    const { Ranking, value } = event.target;

    setFormValues({ ...formValues, Ranking : value });
}
const Iformchange = (event) => {
  const { Url, value } = event.target;

  setFormValues({ ...formValues, Url : value });
}
  
    const formsubmit = (event) => {
    event.preventDefault();
    
    console.log(formValues);
    setUsers([...users, formValues]);
   
   }
  
   useEffect(() => {
    console.log("myUseEffect");
    console.log(users)
  }, [users]);
  
  
  
    return (
      <div><br /><br />
<Form className='container' onSubmit={formsubmit}>

        <Form.Group className="mb-3" as={Col} md="4" controlId="formBasicEmail">
        <h2>Ajouter Un film </h2><br />
          
          <Form.Control type="text" placeholder="Entrer le nom du Film" onChange={Nformchange} name="title" value={formValues?.title} /><br />
          
          <Form.Control type="text" placeholder="Entrer la description" name="description" onChange={Pformchange} value={formValues?.description} /><br />
          
          <Form.Control type="text" placeholder="Entrer l'url de l'image" onChange={Iformchange} name="img" value={formValues?.Url} /><br />
    
          <Form.Control type="text" placeholder="Entrer la note" name="ranking" onChange={Rformchange} value={formValues?.Ranking} /><br />
         
  
        <Button variant="primary" type="submit">
         Ajouter le film
        </Button>
        </Form.Group>

        
      </Form>
      <div className='Container'>

      <ListFilm users={users}/>
      </div>
      
      </div>
          
      
         
          
    );
  }
  
  export default UserForm;