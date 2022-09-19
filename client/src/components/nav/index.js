import { useNavigate } from "react-router-dom";
import { ReactComponent as NotificationIcon } from "../../assets/Notification.svg";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <NotificationIcon />
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </header>
  );
};

export default Nav;
