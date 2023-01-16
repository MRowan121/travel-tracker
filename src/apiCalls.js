const fetchApiUrl = (path) => {
    return fetch(`http://localhost:3001/api/v1/${path}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(`${path} error`))
  }
  
  const fetchAllData = () => {
    return Promise.all([
      fetchApiUrl('travelers'),
      fetchApiUrl('trips'),
      fetchApiUrl('destinations'),
    ])
  }

  const deleteTrip = (id) => {
    let url = `http://localhost:3001/api/v1/trips/${id}`
  
    fetch(url, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
  }

  export { fetchApiUrl, fetchAllData, deleteTrip };