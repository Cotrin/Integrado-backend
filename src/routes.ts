import { prisma } from "@prisma/client";
import { Router } from "express";

import { getAllUniversities, getUniversityById } from './controllers/UniversityController'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Teste Integrado Backend' })
})

routes.get('/universities', getAllUniversities)

routes.get('/universities/:id', getUniversityById)


export default routes
