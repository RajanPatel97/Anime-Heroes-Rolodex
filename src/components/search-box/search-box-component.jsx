import './search-box-component.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search-box'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
)
