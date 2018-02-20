export default async (
    url,
    method,
    body,
    statusCodes,
    responseValidator,
    requestFn
  ) => {
    let response = await requestFn(url, method, body);
  
    responseValidator(response, statusCodes);
    try {
      return await response.json();
    } catch (e) {
      return null;
    }
  };
  