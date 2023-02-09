import { createClient } from "next-sanity"

export const projectId = "jo41sjfw"
export const dataset = "production" 
const apiVersion = "2022-11-15"

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})