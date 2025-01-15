import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';
import { useGlobalContext } from './context';

const url = "https://api.unsplash.com/search/photos?client_id=pRSamj_mSNnOlgzpSaFoWlPLMAEXcufVbsecW-LLavI";

const Gallery = () => {
  const {searchTerm} = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });

  if(response.isLoading) {
    return (
      <section className='image-container'>
        <h4 style={{marginLeft: "500px"}}>Loading...</h4>
      </section>
    )
  }

  if(response.isError) {
    return (
      <section className='image-container'>
        <h4 style={{marginLeft: "500px"}}>There was an error...</h4>
      </section>
    )
  }

  const results = response.data.results
  if(results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No images found...</h4>
      </section>
    )
  }

  return (
    <section className='image-container'>
      {results.map((item) => {
        const url = item?.urls?.regular;
        const {id, alt_description} = item;
        return (
          <img src={url} key={id} alt={alt_description} className='img'/>
        )
      })}
    </section>
  )
}

export default Gallery;