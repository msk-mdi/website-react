import Header from "./components/header";
import Footer from "./components/footer";
import SliderPizza from "./components/slidersPizza";
import SliderPasta from "./components/slidersPasta";
import SliderSalade from "./components/slidersSalade";
import Video from "./components/video/index";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SliderPizza></SliderPizza>
      <SliderPasta></SliderPasta>
      <SliderSalade></SliderSalade>
      <Video></Video>
      <Footer></Footer>
    </div>
  );
}

export default App;
