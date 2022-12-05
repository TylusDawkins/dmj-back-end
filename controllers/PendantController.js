const {Pendant} = require('../models')

const GetAllPendants = async (req,res) => {
    try {
        const allPendants = await Pendant.findAll()
        res.send(allPendants)
    } catch (error){
        throw error
    }
}


const GetPendantDetails = async (req, res) => {
    try {
        const PendantDetails = await Pendant.findbyPk(req.params.pendant_id)
        res.send(PendantDetails)
    } catch (error) {
        throw error
    }

}

const UpdatePendant = async (req, res) => {
    try {
        const pendantId = parseInt(req.params.oendant_id)
        const updatedPendant = await Pendant.update(req.body, {
            where: { id: pendantId},
            returning: true
        })
        res.send(updatedPendant)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllPendants,
    GetPendantDetails,
    UpdatePendant
}