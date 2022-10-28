import Shell from "./shell";
import Styles from "./App.module.css";
function App() {
  console.log("App");
  return (
    <div className={Styles.App}>
      <Shell />
    </div>
  );
}

export default App;
