import NameList from './Components/pages/NameList/Namelist';
import About from './Components/pages/Home/About/About';
import Home from './Components/pages/Home/Home';
import HeaderBar from './Components/HeaderBar/HeaderBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function Center() {
    return (
        <div>
            <h1>Center Component</h1>
            <BrowserRouter>

                <HeaderBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/namelist" element={<NameList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Center;