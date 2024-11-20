import "./globals.css";

import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Menu from "./Components/Common/Menu";

export const metadata = {
  title: "MayBell - Online furniture store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" ">
        <Header   />
        <Menu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
