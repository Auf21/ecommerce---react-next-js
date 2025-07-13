import './MostPopular.css';

import { Card } from '../../components/index';
function MostPopular() {
    return (
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>MostPopular</h4>
            </div>
            <div className='most-popular-items'>
                <Card />
            </div>
        </div>
    )
}

export default MostPopular
