import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed,  } from './components';



const App = () => {
  
return (
  <BrowserRouter>
    <div className="container mx-auto bg-neutral-950">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </div>
  </BrowserRouter>
)
};

export default App;
