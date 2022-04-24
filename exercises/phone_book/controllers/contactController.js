

let contacts = [
    {
        "id": 1,
        "name": "idris muhammad",
        "number": "345-6556878"
    },
    {
        "id": 2,
        "name": "umar muhammad",
        "number": "345-6556878"
    },
    {
        "id": 3,
        "name": "nura muhammad",
        "number": "57-7756878"
    },
    {
        "id": 4,
        "name": "jafar muhammad",
        "number": "35-7676878"
    }
]

const getAllContact = async (req, res) => {
    await res.json(contacts)
}

const getContact = async (req, res) => {
    const contact = contacts.find(contact => contact.id == req.params.id)
    if(contact)
        await res.json(contact)
    else{
        res.status(404).send("contact can't be found")
    }
}

const deleteContact = async (req, res) => {
    contacts = contacts.filter(contact => contact.id != req.params.id)
    await res.json(contacts)
    
}
const addContact = async (req, res) => {
    const contact = req.body
    // validating req.body
    if(contacts.find(contact => contact.name === req.body.name)) return await res.status(201).send('Name already Exist')
    if (contacts.find(contact => contact.number === req.body.number)) return await res.status(201).send('number already Exist')
    if(req.body.name === '' || req.body.name === undefined || req.body.number === '' || req.body.number === undefined ) return await res.status(401).send('error saving contact, number or name is missing')
    
    // it's 20% possible we can get duplicate id's
    // so let's generate unique id's
    // by increasing the latest id by 1
    const generateId = () => {
        const maxId = contacts.length > 0 ? Math.max(...contacts.map(cont => cont.id)) : 0
        return maxId + 1
        // return maxId
    }
    // let id = Math.floor(Math.random() * 1000)
    // contact.id = id
    contact.id = generateId()
    contacts.push(contact)
    await res.json(contact)   
}

const updateContact = async (req, res) => {
    // geting contact id
    const id = req.params.id
    // getting contact by id
    let contact = contacts.find(cnt => cnt.id == id)
    if (contact) {
        // index ( position ) of contact in Contacts
        let index = contacts.indexOf(contact)
        // keys to update
        const keys = Object.keys(req.body)
        for (let key of keys) {
            contact[key] = req.body[key]
        }
        contacts[index] = contact
        await res.json(contact)
    } else {
        await res.send('Contacts cant be found')
    }
}
module.exports = {
    getAllContact,
    getContact,
    contacts,
    addContact,
    deleteContact,
    updateContact
}