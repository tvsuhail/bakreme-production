const data = await response.json();

return {
  statusCode: response.status,
  body: JSON.stringify({
    status: response.status,
    raw: data
  })
};
