const {Template} = require('../models')

const GetAllTemplates = async (req,res) => {
    try {
        const allTemplates = await Template.findAll()
        res.send(allTemplates)
    } catch (error){
        throw error
    }
}


const GetTemplateDetails = async (req, res) => {
    try {
        const templateDetails = await Template.findbyPk(req.params.template_id)
        res.send(templateDetails)
    } catch (error) {
        throw error
    }

}

const UpdateTemplate = async (req, res) => {
    try {
        const templateId = parseInt(req.params.template_id)
        const updatedTemplate = await Template.update(req.body, {
            where: { id: templateId},
            returning: true
        })
        res.send(updatedTemplate)
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
    GetAllTemplates,
    GetTemplateDetails,
    UpdateTemplate
}