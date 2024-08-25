import { Link, useNavigate } from "react-router-dom";

function LinkButton({ children, to, styling }) {
  const navigate = useNavigate();
  // console.log(to === "-1");

  if (to === "-1")
    return <button onClick={() => navigate(-1)}>{children}</button>;

  return (
    <Link to={to} className={styling}>
      {children}
    </Link>
  );
}

export default LinkButton;
