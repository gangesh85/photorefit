import Services from "./Services";

const logedin = false

const Home = () => {
  if (logedin) {
    return <p>show user details</p>;
  } else {
    return (
      <div>
        <Services />
      </div>
    );
  }
};
export default Home;
