import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import CharacterList from "./pages/CharacterList";
import RotationPage from "./pages/RotationPage";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/:character" element={<RotationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
