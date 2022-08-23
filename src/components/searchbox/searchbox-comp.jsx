import {ReactComponent as SearchIcon} from '../../assets/search.svg'

import './searchbox.scss'

const SearchBoxComp = () => {
  return (
    <div className='search-bar'>
        <SearchIcon className='search-icon'/>
        <input placeholder='Search' type='search' />
    </div>
  )
}

export default SearchBoxComp