import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import React from 'react'
import { AddButton } from './Addbutton';
import { Removebutton } from './Removebutton';

export function IndividualProduct(props){

    async function removeproduct(productId) {
      let user = JSON.parse(localStorage.getItem('user'));
      const URI=`http://127.0.0.1:3001/cart/${user.id}/products`;
      try{
        let res = await axios.delete(`${URI}/${productId}`)
        console.log(res);
      }catch(err){
        console.log(err);
      }
     
    }
  
  
  
  
     async function addproduct(productId,productNumber=1) {
      let user = JSON.parse(localStorage.getItem('user'));
    
      const adder = {
        "productId":productId,
        "productNumber":productNumber
      
    }
    let response = await axios.post(`http://127.0.0.1:3001/cart/${user.id}`
    , adder);
    console.log(response);
  }
  
  
   
    let url =document.location+'';
    console.log(url);
    let arg= url.split("?");
    console.log(arg[1]);
  
    const prodid=arg[1];
    
    const [info, setInfo] = React.useState(0);
     React.useEffect(() => {
    
     const URI="http://127.0.0.1:3001/product"
      axios.get(`${URI}/${prodid}/`,{
       headers: {
         'Access-Control-Allow-Origin': '*',
       }}).then((response) => {
       setInfo(response.data);
      
    
     });
   }, [prodid]);
   
   if (!info) return null;
    
   
     console.log(info);
  
    return(
  
  

  <Container>
    <h4>
    <Badge bg="dark">{info.category}</Badge>
  </h4>
    <CardGroup>
  <Row>
    <Col><Card   style={{ width: '25rem' }}>
   <a href="#"> <Card.Img variant="top" src={info.imagePath} /></a>
    <Card.Body>
    
      <Card.Title >{info.productName}</Card.Title>
      <Card.Text>
      Price {info.price}
      </Card.Text>
      
    </Card.Body>
  </Card></Col>

    <Col>
    <Card   style={{ width: '18rem' }}>
  
    <Card.Body>
      <Card.Text style={{ marginBottom: '13rem', marginTop: '2rem' }}>
      Description {info.description}
      </Card.Text>
      
    <div class="col"></div>
    <AddButton productId={info.productId}/>
  <Removebutton productId={info.productId} />
    </Card.Body>
  </Card>

   </Col>
     
    
  </Row>
  </CardGroup>
</Container>
  
    )
  
  
  }
  
    