import Layout from "@pages/Layout";
import { paths } from "./path";
import Homepage from "@pages/home/Homepage";
import { Route, Routes } from "react-router-dom";
import NotFound from "@pages/notfound/NotFound";
import FoodMenu from "@pages/foodmenu/FoodMenu";
import Bakery from "@pages/bakery/Bakery";
import HallRental from "@pages/hallRentals/HallRental";
import ContactUs from "@pages/contact/ContactUs";
import FoodDetails from "@pages/foodmenu/foodMenuDetails/FoodDetails";
import HallDetails from "@pages/hallRentals/hallDetails/HallDetails";

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path={paths.Index} element={<Layout />}>
    <Route path={paths.Index} element={<Homepage />} />
    <Route path={paths.foodmenu} element={<FoodMenu />} />
    <Route path={`${paths.foodmenu}/:id`} element={<FoodDetails />} />
    <Route path={paths.Bakery} element={<Bakery />} />
    <Route path={paths.hallRentals} element={<HallRental />} />
    <Route path={`${paths.hallRentals}/:id`} element={<HallDetails />} />
    <Route path={paths.contactUs} element={<ContactUs />} />
  
    </Route>
  

    {/* NOT FOUND */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;