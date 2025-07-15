import CircularProgressBar from "./CircularProgressbar";

const Loader = () =>  (
  <div className='min-height-96' >
    <div className='space-x-4 h-80 justify-center items-center'  >
      <CircularProgressBar/>
    </div>
  </div>
);

export default Loader;