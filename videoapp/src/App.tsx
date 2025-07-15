import './App.css';
import './index.css';

import Feed from './component/Feed/Feed';
import SearchFeed from './component/Search/SearchFeed';
import ChannelDetail from './component/Channel/ChannelDetail';
import VideoDetail from './component/Video/VideoDetail';
import ErrorPage from './component/ErrorPage';
import Layout from './component/Layout';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Feed /> },
        { path: 'video/:id', element: <VideoDetail /> },
        { path: 'channel/:id', element: <ChannelDetail /> },
        { path: 'search/:searchTerm', element: <SearchFeed /> },
      ]
    }
  ]);

  return (
    <div className=' transition-colors duration-500 bg-Seasalt dark:bg-Richblack text-Richblack dark:Seasalt'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;