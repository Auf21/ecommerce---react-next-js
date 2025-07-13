import './card.css';

import Popular_01 from '../../assets/images/popular-01.jpg'
const card = props => {
    return (
        <div className='most-popular-item'>
            <div className='card-wrapper'>
                <img className='most-popular-item-iamge' src={Popular_01} />
                <div className='most-popular-item-content'>
                    <div> <h4 className='most-popular-item-title'> Fortnite<br /></h4>
                        <span>sandbox</span></div>
                    <ul>
                        <li>4.8</li>
                        <li>2.3M</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

card.propTypes = {

}

export default card
