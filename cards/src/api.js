import axios from 'axios';

const searchImages =async (term) =>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
  
    headers:{Authorization:'Client-ID itdk7r2PyGxznWZI7_zxzTBFcOnMkwHRiAcTIW6G6uI'},
    params:{query:term}
    })
   
      return response.data.results;
      };

      export default searchImages;
  