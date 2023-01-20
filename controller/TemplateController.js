const templatemodel = require("../model/template")
   
// creating a template
const template = async(req, res) => {
    const Template = new templatemodel ({
        template_name: req.body.template_name,
        subject: req.body.subject,
        body: req.body.body
    
    })

    try {
        const TemplateToSave = await Template.save();
        res.status(200).json(TemplateToSave)
    }
    catch (error) {
        res.status(400).json({message:"something went wrong"})
    }
};

//get all templates
const templateAll = async(req, res) => {
    try {
        const Template = await templatemodel.find();
        res.json(Template)
    }
    catch (error) {
        res.status(500).json({message: "something went wrong"})
    }
};

// template/:id
const templateid = async(req,res) => {
    try {
        const Template = await templatemodel.findById(req.params.id);
        res.json(Template)
    }
    catch(error) {
        res.status(500).json({message: "something went wrong"})
    }
};

//updating template/:id

const updateid = async(req, res) => {
    try {
        const {template_name, subject, body} = req.body;
        const id = req.params.id;
    
        const result = await templatemodel.findByIdAndUpdate(id, {template_name, subject, body}, {new: true})
        res.send(result)
    }
    catch (error) {
        res.status(500).json({message: "something went wrong"});
    }
    };

//deleting template
const deleteid = async(req, res) => {
    try {
        const id = req.params.id;
        const Template = await templatemodel.findByIdAndDelete(id)
        res.send(`template with ${Template.template_name} has been deleted...`)
    }

    catch (error) {
        res.status(400).json({message: "something went wrong"})
    }

}

module.exports = { template, templateAll, templateid, updateid, deleteid };




































/**
 * const template = async (req, res) =>  {
    const { template_name, subject, body} = req.body;
    try {
        const result = await template.create({
            template_name: template_name,
            subject: subject,
            body: body
        });
    }

    catch(error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"})
    }
};
 */

