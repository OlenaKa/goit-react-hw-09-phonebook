import img from "./contactsimg.png";
const HomeView = ({ isAuthenticated }) => (
  <div className="heroContainer">
    <h1 className="main-title">Manage your contacts here</h1>
    <img src={img} alt="phone book"></img>
  </div>
);

export default HomeView;
