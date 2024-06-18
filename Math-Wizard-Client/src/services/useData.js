import { courses } from '../utils/data'

export const fetchData = async ({ id }) => {
  const options = {
    method: 'POST',
    body: courses[0],
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxSjBGVkNSQkNSTkE1WThFQ1Y0OEpDRVZWIiwidXNlcm5hbWUiOiJSaWt1bmUifQ.hyT4yVT7mP5wUyqO1QBvA3yYdFDJHFt3KTs3P1eSlfc'
    }
  }

  const domain = 'https://codearmer-math-wizard-64.deno.dev'
  try {
    const courses = await fetch(`${domain}/api/courses/`, options)
    console.error('courses', courses)
    const data = await courses.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
