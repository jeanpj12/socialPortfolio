import { SideProfile } from "./components/SideProfile";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/Routes";
import { Modal } from "./modal";
import { useEffect, useState } from "react";
import { FormLogin } from "./components/FormLogin";
import { FormSignUp } from "./components/FormSignUp";
import { Loading } from "./components/Loading";
import ReactGA from "react-ga4";
import { SideAds } from "./components/SideAds";

function App() {
  const analyticsCode = process.env.GTAG_ID;
  console.log(analyticsCode);
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (analyticsCode) ReactGA.initialize(analyticsCode);
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "App.jsx",
    });
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {loginModal && (
        <Modal title="Login" closeModal={setLoginModal}>
          <FormLogin setLoading={setLoading} />
        </Modal>
      )}

      {signUpModal && (
        <Modal title="Login" closeModal={setSignUpModal}>
          <FormSignUp setLoading={setLoading} />
        </Modal>
      )}

      <div className={styles.container}>
        <Router>
          <SideProfile
            openLoginModal={setLoginModal}
            openSingUpModal={setSignUpModal}
            setLoading={setLoading}
          />
          <div className={styles.content}>
            <Routes>
              {routes.map((route) => {
                const Component = route.component;
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={<Component />}
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
        <SideAds />
      </div>
    </div>
  );
}

export default App;
