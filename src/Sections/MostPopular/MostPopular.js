import './MostPopular.css';
import Popular_01 from '../../assets/images/popular-01.jpg'
import Popular_02 from '../../assets/images/popular-02.jpg'
import Popular_03 from '../../assets/images/popular-03.jpg'
import Popular_04 from '../../assets/images/popular-04.jpg'
import { Card } from '../../components/index';
function MostPopular() {
    return (
        <div className='section-wrapper'>
            <div className='section-header'>
                <h4>MostPopular</h4>
            </div>
            <div className='most-popular-items'>
                <Card image={Popular_01} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_02} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_03} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_04} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_01} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_02} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_03} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
                <Card image={Popular_04} title="fortnite" category=" sandbox" rate="3.8" download="3.8m" />
            </div>
        </div>
    )
}

export default MostPopular
