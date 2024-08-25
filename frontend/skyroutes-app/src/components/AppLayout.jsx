import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function AppLayout({ setIsAuthenticated, setIsAdmin }) {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  console.log(isLoading);
  return (
    <div>
      {isLoading && <Loader />}
      <Nav setIsAuthenticated={setIsAuthenticated} setIsAdmin={setIsAdmin} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
