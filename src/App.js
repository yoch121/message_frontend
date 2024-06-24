import './App.css';
import TopBar from "./components/TopBar";
import {Home} from "./components/Home";
import {Route, Routes} from "react-router";
import {Chat} from "./components/Chat";

function App() {
    return (
        <div className="App">
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </div>
    );
}

export default App;
