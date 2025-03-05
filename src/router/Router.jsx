import { Navigate, Route, Routes} from 'react-router-dom';
import LoginPage from '../pages/loginPage';
import Dashboard from '../pages/Dashboard';
import SignUpPage from '../pages/SignUpPage';
const defaultNavigate = <Navigate to="/" replace />;

const Router = () => {
    return (
        <Routes>
            <Route path='*' element={defaultNavigate}/>
            <Route path='sign-in' element={<LoginPage/>} />
            <Route path='sign-up' element={<SignUpPage/>} />
            <Route path='dashboard' element={<Dashboard/>} />
        </Routes>
    );
};

export default Router;