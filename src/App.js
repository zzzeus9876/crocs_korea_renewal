import './App.scss';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
// import New from './pages/New';
// import Women from './pages/Women';
// import Men from './pages/Men';
// import Kids from './pages/Kids';
import Collabs from './pages/Collabs';
import Brand from './pages/Brand';
import Login from './pages/Login';
import Join from './pages/Join';
// import Footer from './components/Footer';
import Header from './components/Header';
import CrocsClubPopup from './components/CrocsClubPopup';
import UserInfo from './pages/UserInfo';
import Nonmember from './pages/Nonmember';
import ComeAsPopup from './components/ComeAsPopup';
import { loginAuthStore } from './store/loginStore';
import JibbitzCollaboProductDetail from './pages/JibbitzCollaboProductDetail';
import Order from './components/Order/Order';
import WishList from './pages/WishList';
import OrderHistory from './pages/OrderHistory';
import Cart from './pages/Cart';
import CartSidebar from "./components/CartSidebar";
// import RecentProducts from "./pages/RecentProducts";
import RecentSidebar from "./components/RecentSidebar";
import JibbitzProductDetail from './pages/JibbitzProductDetail';
import JibbitzProductListPage from './pages/JibbitzProductListPage';
import ProductListPage from './pages/ProductListPage';
// import CustomerService from './components/CustomerService';

import CrocsProductDetail from './pages/CrocsProductDetail';
import Promotion from './pages/Promotion';
import StoreLocator from './components/StoreLocator';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isRecentOpen, setIsRecentOpen] = useState(false);
    const location = useLocation();
    const { user, loading, checkSession, initAuthListener } = loginAuthStore();

    // 페이지 이동 시 장바구니 닫기 + 최근본상품 닫기
    useEffect(() => {
        setIsCartOpen(false);
        setIsRecentOpen(false);
    }, [location.pathname]);

    // Firebase 세션 복원
    useEffect(() => {
        initAuthListener();
    }, [initAuthListener]);

    // 1분마다 세션 만료 체크
    useEffect(() => {
        const timer = setInterval(() => {
            checkSession();
        }, 60000);
        return () => clearInterval(timer);
    }, [checkSession]);

    if (loading) return <h3>로딩 중...</h3>;

    return (
        <div className="App">
            <Header onCartClick={() => setIsCartOpen(true)} onRecentClick={() => setIsRecentOpen(true)} />
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <RecentSidebar isOpen={isRecentOpen} onClose={() => setIsRecentOpen(false)} />
            <Routes>
                <Route index element={<Main />} />
                <Route path="/jibbitz" element={<JibbitzProductListPage />} />
                <Route path="/collabs" element={<Collabs />} />
                <Route path="/promotion" element={<Promotion />} />
                {/* <Route path="/store" element={<Store />} /> */}
                <Route path="/Brand" element={<Brand />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
                <Route path="/crocsclub" element={<CrocsClubPopup />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/nonmember" element={<Nonmember />} />
                <Route path="/comaspopup" element={<ComeAsPopup />} />x
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/order" element={<Order />} />
                {/* <Route path='./recent' element={<RecentProducts />} /> */}
                <Route path="/jibbitz/:cate/:id" element={<JibbitzProductListPage />} />
                <Route path="/jibbitz/:id" element={<JibbitzProductDetail />} />
                <Route path="/product/:id" element={<JibbitzCollaboProductDetail />} />
                <Route path="/orderhistory" element={<OrderHistory />} />
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
                {/* <Route path="/cscenter" element={<CustomerService />} /> */}
                <Route path="/product/:id" element={<CrocsProductDetail />} />
                <Route path="/store" element={<StoreLocator />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
