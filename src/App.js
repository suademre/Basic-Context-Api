import { createContext, useContext, useState } from "react";
import "./styles.css";

export default function App() {
  const AuthContext = createContext();

  const AuthProvider = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const value = [isLogin, setIsLogin];

    return <AuthContext.Provider value={value} {...props} />;
  };

  const ChangeLogin = () => {
    const [isLogin, setIsLogin] = useContext(AuthContext);

    const ChangeLogin = () => {
      setIsLogin(!isLogin);
    };

    return (
      <button onClick={ChangeLogin}>
        {isLogin ? "cikmak icin basin" : "giris icin basin"}
      </button>
    );
  };

  const ShowUserDetail = () => {
    const [isLogin] = useContext(AuthContext);
    if (isLogin) {
      return (
        <p>You have successfully logged in. To exit, press the button again</p>
      );
    } else {
      return <p>You must login to see the details.</p>;
    }
  };

  return (
    <div className="App">
      <h3>Welcome to Context Api </h3>
      <AuthProvider>
        <ChangeLogin />
        <ShowUserDetail />
      </AuthProvider>
    </div>
  );
}
