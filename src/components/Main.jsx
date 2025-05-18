import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import VerbToBe from "../pages/VerbToBe";
import VerbToHave from "../pages/VerbToHave";
import PersonalPronouns from "../pages/PersonalPronouns";

export default function Main() {
  return (
    <>
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
    </>
  );
}
