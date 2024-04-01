export async function getUniversities() {
  const response = await fetch(`http://localhost:8076/api/v1/universities`)
  const data = await response.json()
  return data
}
