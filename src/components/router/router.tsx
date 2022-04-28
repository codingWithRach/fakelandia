import { Route, Routes } from "react-router-dom";
import Confession from "../confession/confession";
import Home from "../home/home";
import MainLayout from "../main_layout/main_layout";
import Misdemeanours from "../misdemeanours/misdemeanours";
import NotFound from "../not_found/not_found";

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="misdemeanours" element={<Misdemeanours />} />
          <Route path="confession" element={<Confession />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
