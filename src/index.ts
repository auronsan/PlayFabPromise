async function PlayFabPromise<PlayfabFunc, PlayfabPayload>(
  func: PlayfabFunc,
  payload: PlayfabPayload,
): Promise<any> {
  return await new Promise((resolve, reject) =>
    (func as any)(payload, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      if (!data) {
        resolve(null);
        return null;
      }
      resolve(data.data);
      return data.data;
    }),
  );
}

export default PlayFabPromise;
