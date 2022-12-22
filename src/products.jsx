import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchProduct } from "./react-redux-talkit/productSlice"
import './products.css'
import { add } from "./react-redux-talkit/cartSlice"

function Products(){
    const product=useSelector((state)=>state.product);
    const cart=useSelector((state)=>state.cart)
    console.log(cart)
    const Dispatch=useDispatch()
    useEffect(()=>{
        Dispatch(fetchProduct());
    },[])
    return(
        <div className="containers">
            {product.map((pro)=>{
                return(
                    <div className="box" key={pro.id}>
                        <img src={pro.image} />
                        <h4>{pro.title}</h4>
                        <p className="des">{pro.description.slice(0,60)}...</p>
                        <p className="price">{pro.price}$</p>
                        <button onClick={()=>{
                            Dispatch(add(pro))
                            console.log(cart)
                        }}>Add Cart</button>
                    </div>
                )
            })}
        </div>
    )

}
export default Products