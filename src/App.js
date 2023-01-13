import './App.css';
import Link from './component/Home/Link/Link';
import Footer from './component/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import CommonElements from './component/CommonElements/CommonElements';
import AuthProvider from './component/Contex/AuthProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<CommonElements />} />
          <Route path="/" element={<CommonElements />} />

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
