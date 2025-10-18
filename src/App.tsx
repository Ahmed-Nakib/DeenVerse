
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IslamicSearchPage from "./component/IslamicSearchPage";
import KnowledgeCardList from "./component/ItemList";
import Footer from "./component/Footer";
import ItemDetailsPage from "./component/ItemDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* মূল হোম পেজ */}
        <Route
          path="/"
          element={
            <>
              <IslamicSearchPage />
              <KnowledgeCardList />
              <Footer />
            </>
          }
        />

        {/* item details page */}
        <Route path="/item/:id" element={<ItemDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
