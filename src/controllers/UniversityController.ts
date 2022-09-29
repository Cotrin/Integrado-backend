import { Request, Response } from 'express'

import type { University } from '../types/University'

import { db } from '../../prisma'


export async function getAllUniversities(req: Request, res: Response) {
    const { country, page = '1' }: { country?: string, page?: string } = req.query

    const universities = await db.university.findMany({
        select: {
            id: true,
            name: true,
            country: true,
            state_province: true
        },
        where: {
            country: {
                equals: country,
                mode: 'insensitive'
            }
        },
        take: 20,
        skip: (Number(page) - 1) * 20,
    })

    const response = {
        page: Number(page),
        universities,
        amount: universities.length
    }

    res.json(response)
}

export async function getUniversityById(req: Request, res: Response) {
    const { id } = req.params

    const university = await db.university.findUnique({
        where: {
            id
        }
    })

    if (!university) {
        return res.status(404).json({
            error: "University Not Found"
        })
    }

    res.json(university)
}

export async function addUniversity(req: Request, res: Response) {
    const { alpha_two_code, web_pages, name, country, domains, state_province } = req.body

    // Validations
    if (!alpha_two_code || !web_pages || !name || !country || !domains) {
        return res.status(400).json({
            error: 'Missing required information',
            alpha_two_code: alpha_two_code ?? null,
            web_pages: web_pages ?? null,
            name: name ?? null,
            country: country ?? null,
            domains: domains ?? null,
        })
    }

    if (alpha_two_code.length !== 2) {
        return res.status(400).json({ error: 'Country abbreviation needs to be 2 characters long' })
    }

    const alreadyExists = await db.university.findFirst({
        where: {
            country,
            state_province,
            name,
        }
    })

    if (alreadyExists) {
        return res.status(400).json({ error: 'University already exists' })
    }

    const university: University = {
        alpha_two_code,
        web_pages,
        name,
        country,
        domains,
        state_province
    }

    const newUniversity = await db.university.create({
        data: university
    })

    res.status(201).json({
        message: 'Created University',
        newUniversity
    })
}

export async function updateUniversity() {

}

export async function deleteUniversity() {

}