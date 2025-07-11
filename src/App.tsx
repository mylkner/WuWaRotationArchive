import { HashRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import CharacterList from "./pages/CharacterList";
import RotationPage from "./pages/RotationPage";

function App() {
    return (
        <HashRouter basename="/WuWaRotationArchive">
            <Header />
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/:character" element={<RotationPage />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
