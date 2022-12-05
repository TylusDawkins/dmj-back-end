const { User } = require('../models')

const GetUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.puppies_id)
      res.send(user)
    } catch (error) {
      throw error
    }
  }
  
  const CreateUser = async (req, res) => {
    try {
      let userBody = {
        ...req.body
      }
      let user = await User.create(userBody)
      res.send(user)
    } catch (error) {
      throw error
    }
  }
  
const UpdateUser = async (req,res) =>{
  try {
    const userId = parseInt(req.params.user_id)
    const updatedUser = await User.update(req.body, {
        where: { id: userId},
        returning: true
    })
    res.send(updatedUser)
} catch (error) {
    throw error
}
}

const DeleteUser = async (req, res) => {
  try {
    let user_id = parseInt(req.params.user_id)
    await User.destroy({where: { id: user_id}})
    res.send({ message: `Deleted Comment with an id of ${user_id}`})
  } catch (error) {
    throw error
  }
}

  module.exports = {
    GetUser,
    CreateUser,
    UpdateUser,
    DeleteUser
  }