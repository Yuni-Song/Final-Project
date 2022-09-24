import Button from 'react-bootstrap/Button';
import axios from 'axios';

export function Removebutton(props){

    const productId = props.productId;

    async function removeproduct(productId) {
        let user = JSON.parse(localStorage.getItem('user'));
        const URI=`http://127.0.0.1:3001/cart/${user.id}/products`;
        try{
          let res = await axios.delete(`${URI}/${productId}`)
          console.log(res);
        }catch(err){
          console.log(err);
        }
        window.location.reload();
       
      }
  

return(

<Button variant="primary" onClick={()=>removeproduct(productId)}>Remove</Button>

)



}