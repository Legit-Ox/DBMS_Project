import Navbar from "./navbar3";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex-col p-2">{children}</div>
    </div>
  );
};

export default Layout;
