import NavBar from "./NavBar";

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div>{children}</div>
  </>
);

export default Layout;
