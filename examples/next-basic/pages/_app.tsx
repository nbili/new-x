import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import { UserCnotext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <UserCnotext.Provider value={{ user: {}, username: "nbili" }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserCnotext.Provider>
  );
}

export default MyApp;
