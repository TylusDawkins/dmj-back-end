const {Template} = require('../models')

const CreateTemplate = async (req, res) => {
    try {
        const Template = await Template.create(req.body)
        res.send(Template)
    } catch (error) {
        throw error
    }
}

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

const DeleteTemplate = async (req, res) => {
    try {
      const templateId = parseInt(req.params.template_id)
      await Template.destroy({where: { id: templateId}})
      res.send({ message: `Deleted Comment with an id of ${templateId}`})
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateTemplate,
    GetAllTemplates,
    GetTemplateDetails,
    UpdateTemplate,
    DeleteTemplate
}