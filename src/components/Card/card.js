import './card.css';

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
                        <li>{props.rate}</li>
                        <li>{props.download}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

card.propTypes = {

}

export default card
