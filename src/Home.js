import "./Home.css";
import Calculator from './views/calculator/Calculator.js';
import MathQuestions from './views/math/MathQuestions';

function Home() {
  return (

      <div>
      <div class="split left">
        <MathQuestions/>
      </div>
      <div class="split right">
        <h2 class="calculator-title">Calculator</h2>
        <Calculator/>
      </div>
    </div>
  );
}

export default Home;
