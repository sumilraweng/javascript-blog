export const getData = async (url) => {
  try {
    const blogDataResponse = await fetch(url);

    if (blogDataResponse.ok) {
      const jsonData = await blogDataResponse.json();
      return jsonData;
    }
  } catch (err) {
    console.log(err);
  }
};
