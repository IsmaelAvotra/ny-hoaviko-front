export async function getPrograms(searchTerm = '') {
  const response = await fetch(
    `http://localhost:8076/api/v1/programs?programName=${searchTerm}`
  )
  return response.json()
}
