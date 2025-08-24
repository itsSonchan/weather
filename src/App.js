import "./styles.css";
import Search from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <footer>
        Find this project on{" "}
        <a
          href="https://github.com/itsSonchan/weather"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </footer>
    </div>
  );
}
