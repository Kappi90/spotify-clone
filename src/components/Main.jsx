import RandomArtist from "./RandomArtist";
import TopMain from "./TopMain";

const Main = () => {
  return (
    <div className='col-12 col-md-9 offset-md-3 mainPage'>
      <TopMain />
      <RandomArtist />
    </div>
  );
};

export default Main;
