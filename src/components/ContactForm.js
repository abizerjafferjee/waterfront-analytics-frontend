import React, {useState} from 'react'

import ProjectStart from "./ContactForms/ProjectStart";
import ContactDetails from "./ContactForms/ContactDetails";
import ProjectType from "./ContactForms/ProjectType";
import ProjectSpecifications from "./ContactForms/ProjectSpecifications";
import ProjectCategory from "./ContactForms/ProjectCategory";
import ProjectTechnology from "./ContactForms/ProjectTechnology";


const defaultTechnologySuggestions = [
    {id:'snowflake', name:'snowflake'},
    {id: 'aws', name: 'aws'},
    {id: 'azure', name: 'azure'},
    {id: 'stitch', name: 'stitch'}
]

const defaultCategorySuggestions = [
    {id:'data_warehouse', name:'data warehouse'},
    {id:'data_lake', name:'data lake'},
    {id:'data_integration', name:'data_integration'},
    {id:'event_tracking', name:'event_tracking'},
    {id:'kpi_measurement', name:'kpi_measurement'},
    {id:'business_intelligence', name:'business intelligence'},
    {id:'machine_learning', name:'machine learning'},
    {id:'natural_language_processing', name:'natural language processing'},
    {id:'batch_processing', name:'batch_processing'},
    {id:'stream_processing', name:'stream_processing'},
    {id:'data_science', name:'data science'},
    {id:'learning', name:'learning'}
]

function ContactForm({className}) {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [role, setRole] = useState('')

    const [validName, setValidName] = useState(null)
    const [validEmail, setValidEmail] = useState(null)
    const [validCompany, setValidCompany] = useState(null)
    const [validRole, setValidRole] = useState(null)

    const [projectType, setProjectType] = useState('new')
    const [projectSpecification, setProjectSpecification] = useState('no')
    const [projectStart, setProjectStart] = useState('immediately')
    const [technologyTags, setTechnologyTags] = useState([])
    const [technologySuggestions, setTechnologySuggestions] = useState(defaultTechnologySuggestions)
    const [categoryTags, setCategoryTags] = useState([])
    const [categorySuggestions, setCategorySuggestions] = useState(defaultCategorySuggestions)

    const [step, setStep] = useState(1)

    function handleSubmit(event) {
        event.preventDefault()

        fetch('https://api.waterfrontanalytics.com/api/leads/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                company: company,
                role: role
            })
        })
        .then(function(response) {
            setStep(7)
        })
        .catch(function(response){
            return null
        })
    }

    function handleTechnologyDelete(i) {
        const selectedTag = technologyTags[i]
        setTechnologyTags(technologyTags.filter((tag, index) => index !== i))
        setTechnologySuggestions([...technologySuggestions, selectedTag])
    }

    function handleTechnologyAddition(tag) {
        setTechnologyTags([...technologyTags, tag])
        setTechnologySuggestions(technologySuggestions.filter(t => t.id !== tag.id))
    }

    function handleCategoryDelete(i) {
        const selectedTag = categoryTags[i]
        setCategoryTags(categoryTags.filter((tag, index) => index !== i))
        setCategorySuggestions([...categorySuggestions, selectedTag])
    }

    function handleCategoryAddition(tag) {
        setCategoryTags([...categoryTags, tag])
        setCategorySuggestions(categorySuggestions.filter(t => t.id !== tag.id))
    }

    function handleChange(event) {
        const {id, name, value} = event.target
        if (id === 'contact-name') {
            setName(value)
        } else if (id === 'contact-email') {
            setEmail(value)
        } else if (id === 'contact-company') {
            setCompany(value)
        } else if (id === 'contact-role') {
            setRole(value)
        } else if (name === 'contact-project-type') {
            setProjectType(value)
        } else if (name === 'contact-project-specifications') {
            setProjectSpecification(value)
        } else if (name === 'contact-project-start') {
            setProjectStart(value)
        }
    }

    function validateField(fieldName) {

        switch(fieldName) {
            case 'name':
                const vName = name !== ''
                setValidName(vName)
                break
            case 'email':
                const eValid = !!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
                setValidEmail(eValid)
                break
            case 'company':
                const vCompany = company !== ''
                setValidCompany(vCompany)
                break
            case 'role':
                const vRole = role !== ''
                setValidRole(vRole)
                break
            default:
                break
        }
    }

    function formValidation(step) {
        if (step === 1) {
            validateField('name')
            validateField('email')
            validateField('company')
            validateField('role')

            return validName && validEmail && validCompany && validRole;
        }
        return true
    }

    function nextStep(event) {
        event.preventDefault()
        const allow = formValidation(step)
        if (allow) {
            setStep(step => (step+1))
        }
    }

    function previousStep(event) {
        event.preventDefault()
        const allow = formValidation(step)
        if (allow) {
            setStep(step => (step-1))
        }
    }

    switch(step) {
        case 1:
            return (
                <ContactDetails
                    previousStep={previousStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    name={name}
                    email={email}
                    role={role}
                    company={company}
                    validName={validName}
                    validEmail={validEmail}
                    validCompany={validCompany}
                    validRole={validRole}
                    handleSubmit={handleSubmit}
                />
            )
        case 2:
            return (
                <ProjectType
                    previousStep={previousStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    value={projectType}
                />
            )
        case 3:
            return (
                <ProjectSpecifications
                    previousStep={previousStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    value={projectSpecification}
                />
            )
        case 4:
            return (
                <ProjectStart
                    previousStep={previousStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    value={projectStart}
                />
            )
        case 5:
            return (
                <ProjectCategory
                    previousStep={previousStep}
                    nextStep={nextStep}
                    handleAddition={handleCategoryAddition}
                    handleDelete={handleCategoryDelete}
                    tags={categoryTags}
                    suggestions={categorySuggestions}
                />
            )
        case 6:
            return (
                <ProjectTechnology
                    previousStep={previousStep}
                    nextStep={nextStep}
                    handleAddition={handleTechnologyAddition}
                    handleDelete={handleTechnologyDelete}
                    tags={technologyTags}
                    suggestions={technologySuggestions}
                    handleSubmit={handleSubmit}
                />
            )
        case 7:
            return (
                <div className="text-center section-subtitle">
                    Thanks for submitting the form. We'll be in touch shortly.
                </div>
            )
        default:
            return(
                <div></div>
            )
    }
}

export default ContactForm