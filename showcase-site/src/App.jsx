import './App.css';
import ProgressBarWidget from "./widgets/progress-bar";
import WeatherWidget from "./widgets/weather-widget";
import CurrencyWidget from "./widgets/currency-widget";
import ImageSlider from "./widgets/image-slider";

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: 'url(/stars.png)', 
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      display: 'flex', 
      flexDirection: 'column'
    }}>
      <div className="text-center py-10 relative">
        {/* Use absolute positioning for the outline text to create overlap */}
        <h1 className="outline-text absolute inset-0 flex items-center justify-center">
          SHOWCASE
        </h1>
        <h2 className="main-title relative z-10">
          Decoded Widget Showcase
        </h2>
      </div>
      
      <div className="flex flex-col items-center gap-16 pb-16">
        <div className="w-full max-w-3xl">
          <ProgressBarWidget />
        </div>
        <div className="w-full max-w-3xl">
          <WeatherWidget />
        </div>
        <div className="w-full max-w-3xl">
          <CurrencyWidget />
        </div>
        <div className="w-full max-w-3xl">
          <ImageSlider />
        </div>
      </div>
    </div>
  );
}

export default App;