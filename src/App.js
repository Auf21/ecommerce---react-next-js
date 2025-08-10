import "./App.css"

import { Continer } from "./components/index";
import { Header, MostPopular, GammingLibrary, Footer, Hero } from "./Sections/index";

/* ======================================================== */

const App = () => {
    return (
        <>
            <Header />
            <Continer >
                <Hero />
                <MostPopular />
                <GammingLibrary />
            </Continer>
            <Footer />
        </>
    );
}
export default App; 