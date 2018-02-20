export default (response, statusCodes) => {
    if (!statusCodes.includes(response.status) || !response.ok) {
      throw new Error({ status: response.status, message: response.statusText });
    }
  };
  