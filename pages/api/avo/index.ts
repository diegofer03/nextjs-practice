import { IncomingMessage, ServerResponse } from "http";
import Database from "../../../database/db";
import enablePublicAccess  from '../../../cors-middleware'

const allAvos = async (req: IncomingMessage, res: ServerResponse) => {
    try {

        await enablePublicAccess(req, res)

        const db =  new Database()
        const all = await db.getAll()
        const length = all.length

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({length, data: all}))
        
    } catch (error) {
        console.log(error)
        res.statusCode = 500
        res.end(
            JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
        )
    }
}

export default allAvos