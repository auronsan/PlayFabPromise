
const PlayFabPromise = async (func, payload) => {
  return await new Promise((resolve, reject) =>
    func(payload, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      if(!data) {
        resolve(null);
        return null
      }
      resolve(data.data);
      return data.data;
    }),
  );
};

export default PlayFabPromise
