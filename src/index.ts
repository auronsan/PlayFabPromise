
const PlayFabPromise = async (func, payload) => {
  return await new Promise((resolve, reject) =>
    func(payload, (err, { data }) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
      return data;
    }),
  );
};

export default PlayFabPromise
