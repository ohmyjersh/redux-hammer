import RequestHandler from './RequestHandler';
import ResponseValidator from './ResponseValidator';

const makeApiRequest = (url, method, body) => {
  var requestBody =
    method.toLowerCase() !== 'get'
      ? {
          body: JSON.stringify(body),
        }
      : null;

  return fetch(url, {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...requestBody,
  });
};

const apiRequest = async (url, method, body, statusCodes) => {
  return await RequestHandler(
    url,
    method,
    body,
    statusCodes,
    ResponseValidator,
    makeApiRequest
  );
};

export const Post = async (url, body) =>
  await apiRequest(url, 'POST', body, [200, 201]);
export const Put = async (url, body) =>
  await apiRequest(url, 'PUT', body, [200, 201]);
export const Get = async url => await apiRequest(url, 'GET', null, [200]);
export const Delete = async url => await apiRequest(url, 'DELETE', null, [200]);
