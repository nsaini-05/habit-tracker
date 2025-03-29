import Habits from "./components/Habits/Habits";
import Header from "./components/Header/Header";
import InputForm from "./components/InputForm/InputForm";
import { HabitsProvider } from "./contexts/HabitsContext";
function App() {
  return (
    <HabitsProvider>
      <div className="centered-container">
        <InputForm />
        <main className="main-container">
          <Header />
          <Habits />
        </main>
      </div>
    </HabitsProvider>
  );
}

export default App;
