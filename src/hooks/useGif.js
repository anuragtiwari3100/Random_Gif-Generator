import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

  async function fetchData(tag) {
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`  : url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  
  

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    fetchData('car');
  },[] )

  return {gif, loading, fetchData};
};

export default useGif;

/*

git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/anuragtiwari3100/Random_Gif-Generator.git
git push -u origin main
*/
