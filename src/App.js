import "./App.css"

import { Continer } from "./components/index";
import { Header, MostPopular, Footer, Hero } from "./Sections/index";

/* ======================================================== */

const App = () => {
    return (
        <>
            <Header />
            <Continer >
                <Hero />
                <MostPopular />
            </Continer>
            <Footer />
        </>
    );
}
export default App; 