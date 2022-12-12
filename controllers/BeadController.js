const {Bead} = require('../models')

const CreateBead = async (req, res) => {
    try {
        const bead = await Bead.create(req.body)
        res.send(bead)
    } catch (error) {
        throw error
    }
}

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
const DeleteBead = async (req, res) => {
    try {
      let beadId = parseInt(req.params.bead_id)
      await Bead.destroy({where: { id: beadId}})
      res.send({ message: `Deleted Comment with an id of ${beadId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateBead,
    GetAllBeads,
    GetBeadDetails,
    UpdateBead,
    DeleteBead
}