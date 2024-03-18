const useFetchData = () => {
  return async (href, method, data) =>
    await fetch(href, {
      method,
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
}

export default useFetchData
