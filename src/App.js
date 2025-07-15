import React from "react";
import "./App.css";
{
  /* where the nav.css used to be*/
}
import "/styles/footer.css";
import "/styles/about.css";
import "/styles/account.css";
import "/styles/contact.css";
import "/styles/home.css";
import "/styles/shopping.css";
import "/styles/whatsnew.css";

import Footer from "/src/components/footer";
import Nav from "/src/components/nav";
import About from "/pages/about";
import Account from "/pages/account";
import Contact from "/pages/contact";
import Home from "/pages/home";
import Shopping from "/pages/shopping";
//import Hero from "/src/components/whatsnew";
//import Troll from "/src/components/troll";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="Main">
        <Nav />
        <Footer />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
