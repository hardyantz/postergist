import Navbar from './navbar'
import Footer from './footer'
import Header from './header'
import "../../app/globals.css";

export default function Layout({ children }) {
    return (
        <main>
          <div className="text-slate-700">
            <Header />
            {children}
            <Footer />
          </div>
        </main>
      );
}