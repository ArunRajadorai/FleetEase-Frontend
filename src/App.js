import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './component/loader';
import LogoDark from './assets/images/logo-dark.png';
import LogoLight from './assets/images/logo-light.png';
import LogoWhite from './assets/images/logo-white.png';
import fleetlogo from './assets/images/fleetEase/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// All Headers
const Header1 = React.lazy(() => import('./layouts/header/Header1'));


// All Footers
const FooterNew01 = React.lazy(() => import('./layouts/footer/footer-new-01'));


// Back to Top
const BackTop = React.lazy(() => import('./component/back-top'));

const ModernHome3 = React.lazy(() => import('./pages/modern-home3/index'));

const CarGrid = React.lazy(() => import('./pages/car/car-grid'));
const CarDetails = React.lazy(() => import('./pages/car/car-details'));

const Error404 = React.lazy(() => import('./pages/error404/error404'));

const TypoGraphy = React.lazy(() => import('./pages/typography'));


const AddCar = React.lazy(() => import('./pages/add-car'));



//FleetEase
const RefurbService = React.lazy(() => import('./fleetease/pages/refurb/refurb-service'));
const Profile = React.lazy(() => import('./fleetease/pages/profile/profile'));
const FilterCarGrid =React.lazy(()=> import('./pages/car/filter-cargrid'));
const ChatPage =React.lazy(()=> import('./fleetease/pages/chat-ui/chatpage'));
const Login =React.lazy(()=> import('./fleetease/pages/login/login'));

function App() {
  const location = useLocation();
  const hideFooter = location.pathname !== '';

  return (
    <Suspense fallback={<Loader />}>
      <div className="main-wrapper">


        <Routes>
          <Route path="/" element={<Header1 className="header-transprent" siteLogo={fleetlogo} />}>

            {/* Home */}

            <Route index path="/" element={<ModernHome3 />} />

            <Route path="/modern-home3" element={<ModernHome3 />} />
            {/* FleetEase */}
            <Route path="/refurb-service" element={<RefurbService />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/filter-cargrid" element={<FilterCarGrid />} />
            <Route path="/chat-customer" element={<ChatPage />} />
            <Route path="/login-signup" element={<Login />} />


            {/* Pages */}

            <Route path="/car-grid" element={<CarGrid />} />
            <Route path="/car-details/:id" element={<CarDetails />} />

            <Route path="/*" element={<Error404 />} />

            <Route path="/typography" element={<TypoGraphy />} />

            <Route path="/add-car" element={<AddCar />} />


          </Route>



        </Routes>

        {/* All Footer */}
        {hideFooter && (
          <Routes>
            {/* Footer Default */}
            <Route path="/*" element={<FooterNew01 />} />{' '}

          </Routes>
        )}

        {/* Back to Top */}
        <BackTop />
      </div>
    </Suspense>
  );
}

export default App;
