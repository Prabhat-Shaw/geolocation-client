export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  return response.json().then(json => {
    return Promise.reject({
      status: response.status,
      ok: false,
      statusText: response.statusText,
      body: json,
    });
  });
};

const parseJSON = response => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const handleError = error => {
  error.response = {
    status: 0,
    statusText:
      'Cannot connect. Please make sure you are connected to internet.',
  };
  throw error;
};

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: RequestInit,
): Promise<{} | { err: ResponseError }> {
  return fetch(url, options)
    .catch(handleError) // handle network issues
    .then(checkStatus)
    .then(parseJSON)
    .catch(error => {
      throw error;
    });
}
