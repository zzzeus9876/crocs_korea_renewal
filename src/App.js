import './App.scss';
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main';
<<<<<<< HEAD
=======
// import New from './pages/New';
// import Women from './pages/Women';
// import Men from './pages/Men';
// import Kids from './pages/Kids';
import Collabs from './pages/Collabs';
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
import Brand from './pages/Brand';
import Login from './pages/Login';
import Join from './pages/Join';
<<<<<<< HEAD
<<<<<<< HEAD
import OrderHistory from './pages/OrderHistory';
=======
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
=======
// import Footer from './components/Footer';
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
import Header from './components/Header';
import CrocsClubPopup from './components/CrocsClubPopup';
import UserInfo from './pages/UserInfo';
import Nonmember from './pages/Nonmember';
import ComeAsPopup from './components/ComeAsPopup';
import { loginAuthStore } from './store/loginStore';
<<<<<<< HEAD
import ProductListPage from './pages/ProductListPage';
import CrocsProductDetail from './pages/CrocsProductDetail';
import Store from './pages/Store';
import WishList from './pages/WishList';
import JibbitzProductDetail from './pages/JibbitzProductDetail';
import JibbitzProductListPage from './pages/JibbitzProductListPage';
import JibbitzCollaboProductDetail from './pages/JibbitzCollaboProductDetail';
<<<<<<< HEAD
import Cart from './pages/Cart';
<<<<<<< HEAD
import Order from './components/Order/Order';
=======
=======
import JibbitzCollaboProductDetail from './pages/JibbitzCollaboProductDetail';
>>>>>>> 93debeb (2025-11-25(화) 초원 - v03)
// import Order from './components/Order/Order';
=======
import Order from './components/Order/Order';
>>>>>>> 19a7efd (2025-11-25(화) 지인 - v03)
import WishList from './pages/WishList';
import OrderHistory from './pages/OrderHistory';
import Cart from './pages/Cart';
import CartSidebar from "./components/CartSidebar";
// import RecentProducts from "./pages/RecentProducts";
import RecentSidebar from "./components/RecentSidebar";
import JibbitzProductDetail from './pages/JibbitzProductDetail';
import JibbitzProductListPage from './pages/JibbitzProductListPage';
import ProductListPage from './pages/ProductListPage';
<<<<<<< HEAD
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
=======
// import CustomerService from './components/CustomerService';

import CrocsProductDetail from './pages/CrocsProductDetail';
<<<<<<< HEAD
import Store from './pages/Store';
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
=======
import Promotion from './pages/Promotion';
<<<<<<< HEAD
>>>>>>> 62a1c80 (2025-11-25(화) 채아 - v03)
=======
import StoreLocator from './components/StoreLocator';
>>>>>>> 420c130 (2025-11-25(화) 채아 - v04)

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
<<<<<<< HEAD
<<<<<<< HEAD
                <Route path="/store" element={<Store />} />
                <Route path="/Brand" element={<Brand />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
=======
                {/* <Route path="/new" element={<New />} /> */}
                {/* <Route path="/women" element={<Women />} /> */}
                {/* <Route path="/men" element={<Men />} /> */}
                {/* <Route path="/kids" element={<Kids />} /> */}
                {/* <Route path="/jibbitz" element={<Jibbitz />} /> */}
=======
>>>>>>> 420c130 (2025-11-25(화) 채아 - v04)
                <Route path="/jibbitz" element={<JibbitzProductListPage />} />
                <Route path="/collabs" element={<Collabs />} />
                <Route path="/promotion" element={<Promotion />} />
                {/* <Route path="/store" element={<Store />} /> */}
                <Route path="/Brand" element={<Brand />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
<<<<<<< HEAD
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
=======
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
                <Route path="/crocsclub" element={<CrocsClubPopup />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/nonmember" element={<Nonmember />} />
<<<<<<< HEAD
                <Route path="/comaspopup" element={<ComeAsPopup />} />
<<<<<<< HEAD
                <Route path="/product/:id" element={<CrocsProductDetail />} />
=======
                <Route path="/product/:id" element={<JibbitzCollaboProductDetail />} />
                <Route path="/wishlist" element={<WishList />} />
>>>>>>> 420c130 (2025-11-25(화) 채아 - v04)
                <Route path="/orderhistory" element={<OrderHistory />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/jibbitz" element={<JibbitzProductListPage />} />
                <Route path="/jibbitz/:id" element={<JibbitzProductDetail />} />
                <Route path="/collabo/:id" element={<JibbitzCollaboProductDetail />} />
                <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
                <Route path="/order" element={<Order />} />
=======
=======
                <Route path="/comaspopup" element={<ComeAsPopup />} />x
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/order" element={<Order />} />
                {/* <Route path='./recent' element={<RecentProducts />} /> */}
>>>>>>> ae3dd3a (2025-11-25(화) 지인 - v01)
                <Route path="/jibbitz/:cate/:id" element={<JibbitzProductListPage />} />
                <Route path="/jibbitz/:id" element={<JibbitzProductDetail />} />
                <Route path="/product/:id" element={<JibbitzCollaboProductDetail />} />
                <Route path="/orderhistory" element={<OrderHistory />} />
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
<<<<<<< HEAD
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
=======
                {/* <Route path="/cscenter" element={<CustomerService />} /> */}
                <Route path="/product/:id" element={<CrocsProductDetail />} />
<<<<<<< HEAD
>>>>>>> da04fa9 (2025-11-25(화) 채아 - v01)
=======
                <Route path="/store" element={<StoreLocator />} />
>>>>>>> 420c130 (2025-11-25(화) 채아 - v04)
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
