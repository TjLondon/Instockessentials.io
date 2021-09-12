import './SearchBox.scss'

const SearchBox = ({ placeholder, handleChange}) => (
    <div className="searchbox__container">
        <img className="search-img" src={`http://localhost:8080/Assets/Icons/search-24px.svg`} alt='search icon' />
        <input className="searchbar" type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
);
export default SearchBox