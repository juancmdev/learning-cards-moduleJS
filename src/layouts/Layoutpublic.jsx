import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import VerbToBe from "../pages/VerbToBe";
import VerbToHave from "../pages/VerbToHave";
import PersonalPronouns from "../pages/PersonalPronouns";
import Main from "../components/Main";

export default function Layoutpublic() {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Routes>
        <Route element={<Home />}>
          <Route path="Home" element={<Home />} />
        </Route>
        <Route element={<VerbToBe />}>
          <Route path="VerbToBe" element={<VerbToBe />} />
        </Route>
        <Route element={<VerbToHave />}>
          <Route path="VerbToHave" element={<VerbToHave />} />
        </Route>
        <Route element={<PersonalPronouns />}>
          <Route path="PersonalPronouns" element={<PersonalPronouns />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
