const {Shipment} = require('../models')

const CreateShipment = async (req, res) => {
    try {
        const shipment = await Shipment.create(req.body)
        res.send(shipment)
    } catch (error) {
        throw error
    }
}

const GetAllShipments = async (req,res) => {
    try {
        const allShipments = await Shipment.findAll()
        res.send(allShipments)
    } catch (error){
        throw error
    }
}

const GetShipmentDetails = async (req, res) => {
    try {
        const shipmentDetails = await Shipment.findbyPk(req.params.shipment_id)
        res.send(shipmentDetails)
    } catch (error) {
        throw error
    }

}

const UpdateShipment = async (req, res) => {
    try {
        const shipmentId = parseInt(req.params.shipment_id)
        const updatedShipment = await Shipment.update(req.body, {
            where: { id: shipmentId},
            returning: true
        })
        res.send(updatedShipment)
    } catch (error) {
        throw error
    }
}

const DeleteShipment = async (req, res) => {
    try {
      const shipmentId = parseInt(req.params.shipment_id)
      await Shipment.destroy({where: { id: shipmentId}})
      res.send({ message: `Deleted Comment with an id of ${shipmentId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateShipment,
    GetAllShipments,
    GetShipmentDetails,
    UpdateShipment,
    DeleteShipment
}