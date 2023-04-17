export function getDefaultHeaders(): Headers {
  const accessToken = null;
  let headers: Record<string, string> = {
    accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (accessToken) {
    headers = {
      ...headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  return new Headers(headers);
}

export async function callApi<T>(
  url: string,
  request?: RequestInit,
): Promise<{
  success: boolean;
  data?: T;
}> {
  const fetchResponse = await fetch(url, request);

  if (!fetchResponse.ok) {
    return {
      success: false,
    };
  }

  const result = await fetchResponse.json();

  return {
    success: true,
    data: result.data as T,
  };
}
