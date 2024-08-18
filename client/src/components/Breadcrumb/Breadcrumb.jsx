import { useLocation, Link } from "react-router-dom";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrumb">
      {pathnames.map((pathname, index) => {
        const path = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={index}>{pathname}</span>
        ) : (
          <Link key={index} to={path}>
            {`${pathname} / `}
          </Link>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
