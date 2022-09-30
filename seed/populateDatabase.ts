import axios from 'axios'

import type { UniversityResponse, University } from '../src/types/University'

import { db } from '../prisma'

async function clearDatabase() {
  await db.university.deleteMany()
}

async function populateDatabase() {
  // clear the database
  await clearDatabase()

  const countries = ['argentina', 'brazil', 'chile', 'colombia', 'paraguay', 'peru', 'suriname', 'uruguay']
  const url = 'http://universities.hipolabs.com/search?country='

  for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    console.log(`Fetching Data from ${country}...`)

    const { data: universities } = await axios.get<UniversityResponse[]>(url + country)


    const sanitizedUniversities: University[] = universities.map(university => {
      return {
        alpha_two_code: university.alpha_two_code,
        country: university.country,
        domains: university.domains,
        name: university.name,
        web_pages: university.web_pages,
        state_province: university['state-province']
      }
    })

    await db.university.createMany({
      data: sanitizedUniversities
    })
  }

  console.log('Database Populated!')

}

populateDatabase()