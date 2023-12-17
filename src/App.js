import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const currentYear = new Date().getFullYear();
    const githubLink = 'https://github.com/Mohamed-Amr7';
    return (
        <div>
            <Header text={"Movie Search App"}/>
            <main></main>
            <Footer text={"Movie Search App"} currentYear={currentYear} githubLink = {githubLink}/>
        </div>
    );
}

export default App;
