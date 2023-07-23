import { NextApiRequest, NextApiResponse } from 'next'
import Database from "../../../database/db";
import enablePublicAccess  from '../../../cors-middleware'

const AvoDetail = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        await enablePublicAccess(req, res)

        const db =  new Database()
        const avoId = req.query.id as string

        const avo = await db.getById(avoId)

        res.status(200).json(avo)
        
    } catch (error) {
        console.log(error)
        res.statusCode = 500
        res.end(
            JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
        )
    }
}

export default AvoDetail