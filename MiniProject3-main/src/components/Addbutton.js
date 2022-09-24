import Button from 'react-bootstrap/Button';
import axios from 'axios';



export   function AddButton(props){
    
    const productId = props.productId;
    
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

  return(

<Button variant="primary mr-2"onClick={()=>addproduct(productId)}>Add</Button>

  )
}




