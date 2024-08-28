//object holds key and value
const conf={
    appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    tinyApiKey: String(import.meta.env.VITE_TINY_APIKEY)
}

export default conf;

// production apps mai config variable ka use krte hai
// br br import.meta.enV.vite_appwrite_url nhi krna pde..kuki hoskta hai environment variable load he na ho toh usse application crash hoskti hia
// environment variable sara ka sara string mai hona chahiye
//aage koi crash na ho isliye alg se config.js mai yh kam krdete hai