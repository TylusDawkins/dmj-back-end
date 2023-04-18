const {Subscriber} = require('../models')

const CreateSubscriber = async (req, res) => {
    try {
        const subscriber = await subscriber.create(req.body)
        res.send(subscriber)
    } catch (error) {
        throw error
    }
}

const GetAllSubscribers = async (req,res) => {
    try {
        const allSubscribers = await Subscriber.findAll()
        res.send(allSubscribers)
    } catch (error){
        throw error
    }
}


const GetSubscriberDetails = async (req, res) => {
    try {
        const subscriberDetails = await Subscriber.findbyPk(req.params.subscriber_id)
        res.send(subscriberDetails)
    } catch (error) {
        throw error
    }

}

const UpdateSubscriber = async (req, res) => {
    try {
        const subscriberId = parseInt(req.params.Subscriber_id)
        const updatedSubscriber = await Subscriber.update(req.body, {
            where: { id: subscriberId},
            returning: true
        })
        res.send(updatedSubscriber)
    } catch (error) {
        throw error
    }
}
const DeleteSubscriber = async (req, res) => {
    try {
      let subscriberId = parseInt(req.params.Subscriber_id)
      await Subscriber.destroy({where: { id: subscriberId}})
      res.send({ message: `Deleted Comment with an id of ${subscriberId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateSubscriber,
    GetAllSubscribers,
    GetSubscriberDetails,
    UpdateSubscriber,
    DeleteSubscriber
}