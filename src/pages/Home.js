import NavBar from "../components/NavBar";
import classes from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className={classes.background}></div>
    </>
  );
};

export default Home;
