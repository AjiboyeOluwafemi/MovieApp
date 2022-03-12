const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "9b39d4d923092d3b8a24f0daff9613dd",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
