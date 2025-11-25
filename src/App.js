import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Brand from './pages/Brand';
import Login from './pages/Login';
import Join from './pages/Join';
// import Footer from './components/Footer';
import Header from './components/Header';
import CrocsClubPopup from './components/CrocsClubPopup';
import UserInfo from './pages/UserInfo';
import Nonmember from './pages/Nonmember';
import ComeAsPopup from './components/ComeAsPopup';
import { useEffect } from 'react';
import { loginAuthStore } from './store/loginStore';
// import CustomerService from './components/CustomerService';
import ProductListPage from './pages/ProductListPage';
import CrocsProductDetail from './pages/CrocsProductDetail';
import Store from './pages/Store';

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
                <Route path="/store" element={<Store />} />
                <Route path="/Brand" element={<Brand />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/:cate/:subcategory?" element={<ProductListPage />} />
                <Route path="/crocsclub" element={<CrocsClubPopup />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/nonmember" element={<Nonmember />} />
                <Route path="/comaspopup" element={<ComeAsPopup />} />
                {/* <Route path="/cscenter" element={<CustomerService />} /> */}
                <Route path="/product/:id" element={<CrocsProductDetail />} />
            </Routes>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
