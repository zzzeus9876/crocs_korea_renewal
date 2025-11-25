import './App.scss';
import { Route, Routes } from 'react-router-dom';
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
import OrderHistory from './pages/OrderHistory';
=======
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
import Header from './components/Header';
import CrocsClubPopup from './components/CrocsClubPopup';
import UserInfo from './pages/UserInfo';
import Nonmember from './pages/Nonmember';
import ComeAsPopup from './components/ComeAsPopup';
import { useEffect } from 'react';
import { loginAuthStore } from './store/loginStore';
import ProductListPage from './pages/ProductListPage';
import CrocsProductDetail from './pages/CrocsProductDetail';
import Store from './pages/Store';
import WishList from './pages/WishList';
import JibbitzProductDetail from './pages/JibbitzProductDetail';
import JibbitzProductListPage from './pages/JibbitzProductListPage';
import JibbitzCollaboProductDetail from './pages/JibbitzCollaboProductDetail';
import Cart from './pages/Cart';
<<<<<<< HEAD
import Order from './components/Order/Order';
=======
// import Order from './components/Order/Order';
import WishList from './pages/WishList';
import OrderHistory from './pages/OrderHistory';
import Cart from './pages/Cart';
import JibbitzProductDetail from './pages/JibbitzProductDetail';
import JibbitzProductListPage from './pages/JibbitzProductListPage';
import ProductListPage from './pages/ProductListPage';
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)

function App() {
    const { user, loading, checkSession, initAuthListener } = loginAuthStore();

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
            <Header />
            <Routes>
                <Route index element={<Main />} />
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
                <Route path="/jibbitz" element={<JibbitzProductListPage />} />
                <Route path="/collabs" element={<Collabs />} />
                <Route path="/promotion" element={<Promotion />} />
                <Route path="/Brand" element={<Brand />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
                <Route path="/crocsclub" element={<CrocsClubPopup />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/nonmember" element={<Nonmember />} />
                <Route path="/comaspopup" element={<ComeAsPopup />} />
                <Route path="/product/:id" element={<CrocsProductDetail />} />
                <Route path="/orderhistory" element={<OrderHistory />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/jibbitz" element={<JibbitzProductListPage />} />
                <Route path="/jibbitz/:id" element={<JibbitzProductDetail />} />
                <Route path="/collabo/:id" element={<JibbitzCollaboProductDetail />} />
                <Route path="/cart" element={<Cart />} />
<<<<<<< HEAD
                <Route path="/order" element={<Order />} />
=======
                <Route path="/jibbitz/:cate/:id" element={<JibbitzProductListPage />} />
                <Route path="/product/:id" element={<JibbitzProductDetail />} />
                <Route path="/jibbitz/:id" element={<JibbitzProductDetail />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/orderhistory" element={<OrderHistory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
>>>>>>> e38f4cb (2025-11-25(화) 초원 - v02)
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
