/* eslint-disable @typescript-eslint/no-explicit-any */
import { loadData, saveData } from '../utils/storage';
import { FEDERATED_TOKEN } from '../utils/constants';

export const customFetch = (uri: string, options: any): Promise<Response> => {
  // This reference to the refreshingPromise will let us check later on if we are executing getting the refresh token.
  let refreshingPromise: Promise<any> | null = null;

  if (
    options &&
    options.headers &&
    options.headers.authorization &&
    options.headers.authorization !== `Bearer ${loadData(FEDERATED_TOKEN)}`
  ) {
    options.headers.authorization = `Bearer ${loadData(FEDERATED_TOKEN)}`;
  }

  const request = fetch(uri, options);

  // The apolloHttpLink expects that fetch function will return a promise.
  return request
    .then((response) => {
      return { initialResponse: response.clone(), json: response.json() as any };
    })
    .then((res) => {
      const { initialResponse, json } = res;

      // If it has the error for 401 we execute the next steps in the re-auth flow
      return json.then((resJSON: any) => {
        if (resJSON.errors && resJSON.errors.length && resJSON.errors[0].message === '401: Unauthorized') {
          if (!refreshingPromise) {
            const uriNoQueryParams = uri.split('?')[0];
            const query = {
              operationName: null,
              query:
                'mutation {\n  login(email: "user@api.net", password: "6C9E2E84-20D8-4004-AA9C-DC7E4072EFE8")\n}\n',
              variables: {},
            };
            const options: RequestInit = {
              method: 'POST',
              headers: new Headers({
                'content-type': 'application/json',
              }),
              body: JSON.stringify(query),
            };

            refreshingPromise = fetch(uriNoQueryParams, options)
              .then((res) => {
                if (res.ok) {
                  return res.json().then((resJSON) => {
                    //saveData(FEDERATED_TOKEN, resJSON.data.login);

                    // Return the new access token as a result of the promise
                    return resJSON.data.login;
                  });
                } else {
                  // If the re-authorization request fails, handle it here.
                  return res.json().then((resJSON) => {
                    console.error(resJSON);
                  });
                }
              })
              .catch((err) => {
                // handle error
              });
          }

          return refreshingPromise
            .then((newAccessToken) => {
              // After execution, set it to null
              refreshingPromise = null;
              options.headers.authorization = `Bearer ${newAccessToken}`;

              return fetch(uri, options);
            })
            .catch((err) => err);
        }
        return new Promise((resolve, reject) => {
          resolve(res.initialResponse);
        });
      });
    });
};
