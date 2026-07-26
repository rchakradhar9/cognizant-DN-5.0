import { CalculateScore } from "./components/CalculateScore";

function App() {
  return (
    <div>
      <CalculateScore
        Name="Sai Chandhan Reddy"
        School="Narayana High School"
        total={289}
        goal={300}
      />
    </div>
  );
}

export default App;