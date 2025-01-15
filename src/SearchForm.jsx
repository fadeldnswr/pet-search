import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target.elements.search.value;
    if(!searchValue) return;
    setSearchTerm(searchValue);
  }

  return (
    <section>
      <h1 className='title'>Where's Your Pet?</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input 
        type='text' 
        name='search' 
        placeholder='Search your pet' 
        className='form-input search-input'>
        </input>
        <button type='submit' className='btn'>Search</button>
      </form>
    </section>
  )
}

export default SearchForm;