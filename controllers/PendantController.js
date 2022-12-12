const {Pendant} = require('../models')

const CreatePendant = async (req, res) => {
    try {
        const pendant = await Pendant.create(req.body)
        res.send(pendant)
    } catch (error) {
        throw error
    }
}

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
        const pendantId = parseInt(req.params.pendant_id)
        const updatedPendant = await Pendant.update(req.body, {
            where: { id: pendantId},
            returning: true
        })
        res.send(updatedPendant)
    } catch (error) {
        throw error
    }
}

const DeletePendant = async (req, res) => {
    try {
      const pendantId = parseInt(req.params.pendant_id)
      await Pendant.destroy({where: { id: pendantId}})
      res.send({ message: `Deleted Comment with an id of ${pendantId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreatePendant,
    GetAllPendants,
    GetPendantDetails,
    UpdatePendant,
    DeletePendant
}