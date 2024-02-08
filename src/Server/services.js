import axios from 'axios';

const BASE_URL = 'https://api.unsplash.com/';
const API_KEY=process.env.REACT_APP_API_KEY
const fetchPhotosData = (searchParams) => {
  
  return axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query: searchParams,
      per_page:30,
      client_id:`${API_KEY}`,
    },
  });
};

const fetchCollectionsData = () => {
  
return axios.get(`${BASE_URL}/collections`, {
    params: {
      per_page:30,
      client_id:`${API_KEY}`,
    },
  });
};

const getFormattedPhotoData = (data) => {

  const {
    id,
    created_at,
    alt_description,
    urls: { full },
    user: { name ,profile_image},
    related_collections:{results},
    links: { download },

  } = data;
  const collectionInfo = results.map((result) => {
    return {
      id: result.id,
      title: result.title,
      cover:result.cover_photo.urls.small
    };
  });
  const {small}=profile_image;
  return { id,created_at, alt_description, full, name,collectionInfo,small,download,results};
};
const getFormattedCollections  = (data) => {
  const {
     id,
     title, 
     total_photos,
     preview_photos,
     links:{photos},
  } = data;
  const covers = preview_photos.slice(0, 3).map(photo => photo.urls.regular);
   return { id, title, total_photos,covers,photos };
}

const getFormattedCollectionsdata =async()=>{
  const collectionsresp = await fetchCollectionsData();
  const formattedCollection =collectionsresp.data.map(getFormattedCollections);
  return formattedCollection
}
const getFormattedPhotosData = async (searchParams) => {
  console.log(API_KEY);
  const photoResponse = await fetchPhotosData(searchParams);
 
  const photoIds = photoResponse.data.results.map((photo) => photo.id);

  const formattedPhotosData = await Promise.all(
    photoIds.map(async (id) => {
      const response = await axios.get(`${BASE_URL}/photos/${id}`, {
        params: {
          client_id:`${API_KEY}`,
        },
      });
      return getFormattedPhotoData(response.data);
    })
  );

 
  return formattedPhotosData;
};
 const  getFormattedCollectionPhotosData = async (collectionId) => {
  const photoResponse = await axios.get(`${BASE_URL}/collections/${collectionId}/photos`, {
    params: {
      per_page:30,
      client_id:`${API_KEY}`,
    },
  });
  const collectionPhotos = photoResponse.data;
 
  const photoIds = collectionPhotos.map((photo) => photo.id);

  const formattedPhotosData = await Promise.all(
    photoIds.map(async (id) => {
      const response = await axios.get(`${BASE_URL}/photos/${id}`, {
        params: {
          client_id:`${API_KEY}`,
        },
      });
      return getFormattedPhotoData(response.data);
    })
  );

 
  return formattedPhotosData;
};


export default getFormattedPhotosData;
export {getFormattedCollectionsdata,getFormattedCollectionPhotosData};