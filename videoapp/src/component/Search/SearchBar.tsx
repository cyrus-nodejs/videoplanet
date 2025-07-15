import { useContext, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoContext } from '../../context/videoContext';

const SearchBar = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useContext(VideoContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm('');
    }
  };

  return (
    <div
      className="sm:mr-5 border rounded w-full md:w-auto mx-2"
      
    >
      <form onSubmit={handleSubmit} className="flex items-center w-full  sm:w-sm md:w-md ">
        <input
          className="flex-grow h-10 bg-Seasalt w-full dark:bg-Richblack outline-none"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search"
        />
        <button type="submit" className="ml-2 text-gray-500 hover:text-gray-700">
          <i className="bx bx-search text-xl"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
