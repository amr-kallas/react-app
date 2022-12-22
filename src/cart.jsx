import { useDispatch, useSelector } from "react-redux";
import './cart.css'
import { clear, deleteCart } from "./react-redux-talkit/cartSlice";
function Cart(){
    const cart=useSelector((state)=>state.cart);
    const Dispatch=useDispatch();
    console.log(cart)
    const total=cart.reduce((acc,product)=>{
        acc+=product.price *product.quantity;
        return acc;
    },0)
    return(
        <>
        <h2>Welcome To Cart</h2>
        <p>Total Price:{total}</p>
        <button className="clear" onClick={()=>{
            Dispatch(clear())
        }}>Clear Cart</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
                <tbody>
                    {cart.map((product)=>{
                        return(
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td><img src={product.image}/></td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td><button className="delete" onClick={()=>{
                            Dispatch(deleteCart(product))
                        }}>Delete</button></td>
                    </tr>
                        )
                    })}
                    
                </tbody>            
        </table>
        </>

    )
}
export default Cart;