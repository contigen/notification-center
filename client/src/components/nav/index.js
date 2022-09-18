import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const handleLogOut = (ev) => {
    ev.preventDefault();
    localStorage.removeItem("username");
    navigate(`/`);
  };
  return (
    <header className="flex">
      <b>NC.</b>
      <div>
        <span>icon</span>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </header>
  );
};

export default Nav;
