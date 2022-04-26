import categoryData from "../src/category-data.json";
import Directory from "./components/directory/directory.component";

// style
import './components/category-item/category-item.styles.scss';

const App = () => {
  return (
    <Directory categoryData={categoryData} />
  );
}

export default App;
