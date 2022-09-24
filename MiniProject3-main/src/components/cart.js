import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import React from "react";
import axios from "axios";
import { Removebutton } from "./Removebutton";
function TotalPrice(cartItems) {
  let total = 0;

  cartItems.cart.map((item) => {
    total += item.price * item.productNumber;
  });

  return total;
}

export function Cartelement(props) {
  const prodid = props.prodid;
  const [info, setInfo] = React.useState(0);
  React.useEffect(() => {
    const URI = "http://127.0.0.1:3001/product";
    axios
      .get(`${URI}/${prodid}/`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        setInfo(response.data);
      });
  }, [prodid]);

  if (!info) return null;

  console.log(info);

  return (
    <>
      <td>{info.productName}</td>
      <td>{info.price} DKK</td>
    </>
  );
}

export function Cart() {
  let user = JSON.parse(localStorage.getItem("user"));

  const [cartItems, setCart] = React.useState(null);

  React.useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user)
      axios
        .get(`http://127.0.0.1:3001/cart/${user.id}`, {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then((response) => {
          setCart(response.data);
        });
  }, []);
  if (!cartItems) return null;

  return (
    <>
      <section classNameName="cart_area section_padding">
        <div class="container">
          <div class="cart_inner">
            <div class="table-responsive">
              <table className="table">
                <h5 scope="col">{user.firstName}</h5>
                {/* If there are no products in the basket No Items added will be displayed */}
                {cartItems.cart.length === 0 ||
                  (!cartItems && <Card> No items added </Card>)}

                {cartItems.cart.map((carty) => (
                  <div key={carty.productId}>
                    {" "}
                    <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <Cartelement prodid={carty.productId} />

                        <td>
                          <div class="product_count">{carty.productNumber}</div>
                        </td>
                        <td>
                          <Button variant="primary mr-1">
                            <Removebutton productId={carty.productId} />
                          </Button>
                        </td>
                      </tr>
                      <tr></tr>
                    </tbody>
                  </div>
                ))}

                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td>{TotalPrice(cartItems)}</td>
                </tr>
                <tr>
                  <td>
                    <div>
                      <Button variant="primary mr-2">
                        Proceed to Checkout
                      </Button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function NotLoggedIn() {
  return <h1>Please sign up.</h1>;
}

export function Areloggedin() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user === null) {
    return <NotLoggedIn />;
  }

  return <Cart />;
}
