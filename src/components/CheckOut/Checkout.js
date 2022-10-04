import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../redux/Cart/CartSelector";
import {
   removeCartItem,
   addProduct,
   reduceCartItem,
} from "../../redux/Cart/CartActions";
import { createStructuredSelector } from "reselect";
import { CheckoutWrapper, CartWrapper, Bottom } from "./CheckoutStyles";

const mapState = createStructuredSelector({
   cartItems: selectCartItems,
   total: selectCartTotal
});

const Checkout = () => {
   const { cartItems, total } = useSelector(mapState);
   const dispatch = useDispatch();

   const handleRemoveCartItem = (documentID) => {
      dispatch(removeCartItem({ documentID }));
   };

   const handleAddProduct = (intrestedproduct) => {
      dispatch(addProduct(intrestedproduct));
   };

   const handleReduceCartItem = (intrestedproduct) => {
      dispatch(reduceCartItem(intrestedproduct));
   };

   return (
      <CheckoutWrapper>
         <h1>Checkout</h1>
         <CartWrapper>
            <table>
               <tbody>
                  <tr>
                     <table>
                        <tbody>
                           <tr>
                              {/* <table>
                                 <tr> */}
                                    <th>Product</th>
                                    <th>Description</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                 </tr>
                                 {cartItems.map((item, index) => {
                                    return (
                                       <tr key={index}>
                                          <td>
                                             <img
                                                src={item.productThumbnail}
                                                alt={item.productName}
                                             />
                                          </td>
                                          <td>{item.productName}</td>
                                          <td className="quantity">
                                             <span
                                                id="btn"
                                                onClick={() => {
                                                   handleReduceCartItem(item);
                                                }}
                                             >{`<`}</span>
                                             {item.quantity}
                                             <span
                                                id="btn2"
                                                onClick={() => {
                                                   handleAddProduct(item);
                                                }}
                                             >{`>`}</span>
                                          </td>
                                          <td>{item.productPrice}</td>
                                          <td>
                                             <button
                                                onClick={() =>
                                                   handleRemoveCartItem(
                                                      item.documentID
                                                   )
                                                }
                                             >
                                                remove
                                             </button>
                                          </td>
                                       </tr>
                                    );
                                 })}
                              {/* </table>
                           </tr> */}
                        </tbody>
                     </table>
                  </tr>
               </tbody>
            </table>
         </CartWrapper>
         <Bottom>
            <h3>TOTAL: <span id="naira">N</span> {total}</h3>
            <button>Checkout</button>
         </Bottom>
      </CheckoutWrapper>
   );
};

export default Checkout;
