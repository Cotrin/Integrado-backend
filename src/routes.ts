import { prisma } from "@prisma/client";
import { Router } from "express";

import { getAllUniversities } from './controllers/UniversityController'

const routes = Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Teste Integrado Backend' })
})

routes.get('/universities', getAllUniversities)


export default routes
