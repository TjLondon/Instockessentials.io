import './SearchBar.scss'

const SearchBar = () => {
    return (
    <div className='search'>
         <input className='search__bar' 
         type='search' 
         placeholder='Search...'/>
    </div>
    )
}

export default SearchBar