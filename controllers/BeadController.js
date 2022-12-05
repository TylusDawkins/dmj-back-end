const {Bead} = require('../models')

const GetAllBeads = async (req,res) => {
    try {
        const allBeads = await Bead.findAll()
        res.send(allBeads)
    } catch (error){
        throw error
    }
}


const GetBeadDetails = async (req, res) => {
    try {
        const beadDetails = await Bead.findbyPk(req.params.bead_id)
        res.send(beadDetails)
    } catch (error) {
        throw error
    }

}

const UpdateBead = async (req, res) => {
    try {
        const beadId = parseInt(req.params.bead_id)
        const updatedBead = await Bead.update(req.body, {
            where: { id: beadId},
            returning: true
        })
        res.send(updatedBead)
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllBeads,
    GetBeadDetails,
    UpdateBead
}