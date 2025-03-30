import Habits from "./components/Habits/Habits";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import { HabitsProvider } from "./contexts/HabitsContext";
function App() {
  return (
    <HabitsProvider>
      <div className="centered-container">
        <InputForm />
        <div className="bordered-container">
          <Header />
          <Habits />
        </div>
      </div>
    </HabitsProvider>
  );
}

export default App;
