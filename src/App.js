import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Habits from "./components/Habits";
function App() {

  const test = {
    title: "Calistenia",
    category: "Academia",
    difficulty: "Dificil",
    frequency: "Todo dia",
    achieved: false,
    how_much_achieved: "75%",
}

  return (
    <>
      <GlobalStyle />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />


    <Habits habits = {test}/>
    </>
  );
}

export default App;
