import AppHeader from './components/Header'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CategoriesScreen from './pages/CategoriesScreen';
import EditCategoryScreen from './pages/EditCategoryScreen';
import NewCategoryScreen from './pages/NewCategoryScreen';
import WelcomePage from './pages/WelcomePage';
import SubcategoriesScreen from './pages/SubcategoriesScreen';
import EditSubcategoryScreen from './pages/EditSubcategoryScreen';
import NewSubcategoryScreen from './pages/NewSubcategoryScreen';
import ItemsScreen from './pages/ItemsScreen';
import EditItemScreen from './pages/EditItemScreen';
import NewItemScreen from './pages/NewItemScreen';


function App() {
  return (
    <> 
    <BrowserRouter>
    <AppHeader />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="categories" element={<CategoriesScreen />} />
          <Route path="categories/:categoryID" element={<EditCategoryScreen />} />
          <Route path="categories/new" element={<NewCategoryScreen />} />
          <Route path="subcategories" element={<SubcategoriesScreen />} />
          <Route path="subcategories/:subcategoryID" element={<EditSubcategoryScreen />} />
          <Route path="subcategories/new" element={<NewSubcategoryScreen />} />
          <Route path="items" element={<ItemsScreen />} />
          <Route path="items/:itemID" element={<EditItemScreen />} />
          <Route path="items/new" element={<NewItemScreen />} />
          <Route path="*" element={<WelcomePage />} />
        </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
