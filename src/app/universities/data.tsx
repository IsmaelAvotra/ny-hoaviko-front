export async function getUniversities(searchTerm = '') {
  const response = await fetch(
    `http://localhost:8076/api/v1/universities?univName=${searchTerm}`
  )
  return response.json()
}
