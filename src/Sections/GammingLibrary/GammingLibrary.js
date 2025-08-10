import './GammingLibrary.css';
import { GammingLibraryCard, SectionHeader, SectionWrapper } from '../../components/./index';
import GammingLibraryData from '../../Data/GammingLibraryData';

const GammingLibrary = () => {

    /*  const cards = GammingLibraryData.map(card => {
         return <Card key={card.id} image={card.image} title={card.title} category={card.category} download={card.download} />
     }) */

    return (
        <>        <SectionWrapper>
            <SectionHeader> MostPopular </SectionHeader>
            <div className='most-popular-items'>
                <GammingLibraryCard />
            </div>

        </SectionWrapper>
        </>
    )
}

export default GammingLibrary
