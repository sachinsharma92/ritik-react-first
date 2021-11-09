// Custom Compnents
import HeaderPrimary from "../../components/headerPrimary";

// Styles
import "./styles.scss";

function HomeScreen() {
  return (
    <div className="homepage-style">
        <HeaderPrimary/>
      <div className="heading-style">Welcome to my homepage</div>
    </div>
  );
}

export default HomeScreen;
