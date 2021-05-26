import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { fetchProduct } from '../../redux/products/actions';
import {changeSectionClass} from '../../redux/products/actions';


const SingleSection = (props) => {
    const sections = []
    const dispatch = useDispatch()
    if(props.products.length !== 0){
        for (let i = 0; i < props.products.length; i++) {
            if (props.products[i].title === props.type && sections.length < 4 && props.products[i].name !== 'Eastern Shoes'){
                sections.push(
                    <div className="item" key={"item_" + props.products[i].id}>
                        <div className='image-container'>
                            <Link to='/singleProduct'>
                                <img src={props.products[i].image} alt={props.products[i].name} loading="lazy"
                                    id={props.products[i].id}
                                    onClick={e => {
                                            dispatch(fetchProduct(e.target.id))
                                            window.scrollTo(0,0)
                                        }
                                        }/>
                            </Link>
                        </div>
                        <Link to='/singleProduct'>
                            <h2 
                                id={props.products[i].id}
                                onClick={e =>{
                                    dispatch(fetchProduct(e.target.id))
                                    window.scrollTo(0,0)
                                }}
                            >
                                {props.products[i].name}
                            </h2>
                        </Link>
                        <h3 className="brand">brand: {props.products[i].brand}</h3>
                        <span className="price">${props.products[i].price}</span>
                        <span className="old_price">${props.products[i].oldPrice}</span>
                        <div className="stars">
                            {
                                Array.from({length: 5}, (_, index) => {
                                    return(
                                        <span key={index}>
                                            {
                                                props.products[i].stars >= index + 1 ? <BsStarFill/> :
                                                props.products[i].stars >= index + .5 ? <BsStarHalf/> :
                                                <BsStar/>
                                            }
                                        </span>
                                    )
                                })
                            }
                        </div>
                        <p>{props.products[i].description}</p>
                    </div>
                )
            }
        }
    }
    return (
        <section className="single-section">
            <h2>{props.sectionName} Section</h2>
                {sections}
            <Link to={props.loadMore} onClick={() => dispatch(changeSectionClass(props.type))} className="load_more">more ---&raquo;</Link>
        </section>
    );
}
const mapStateToProps = (state) => {
    return{
        products: state.products
    }
}
export default connect(mapStateToProps)(SingleSection);

