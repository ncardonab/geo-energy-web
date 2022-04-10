export const getAsset = async (url) => {
  try {
    const response = await fetch(`https://igcp636-api.herokuapp.com/${url}`);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return { data, error: null };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: error.message,
    };
  }
};
