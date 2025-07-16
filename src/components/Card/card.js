import './card.css';
import { FaStar, FaDownload } from "react-icons/fa";
import Popular_01 from '../../assets/images/popular-01.jpg'
const card = (props) => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-iamge' src={props.image} />
                <div className='most-popular-item-content'>
                    <div> <h4 className='most-popular-item-title'> {props.title}<br /></h4>
                        <span>{props.category}</span></div>
                    <ul>
                        <li><span style={{ "color": "var(  --color-icons)" }}  > <FaStar /></span> <span>{props.rate}</span></li>
                        <li><span style={{ "color": "var(  --color-primary)" }} > <FaDownload /> </span> <span>{props.download}</span></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

card.propTypes = {

}

export default card
