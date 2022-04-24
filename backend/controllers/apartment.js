const { Apartment } = require("../models/apartment")

async function getAllApartments(req, res){
    const apartments = await Apartment.find({})
    return await res.status(200).json(apartments)
}

// !Done
async function getApartmentsByCityName(req, res){
    try {
        const city_id = req.params.city_id
        const params = { city: city_id }
        if(req.query.type) params.type = req.query.type
        const apartment = await Apartment.find(params)
        if(apartment) return await res.json(apartment)
        return await res.send('No romm in this city')
    } catch (error) {
        
    }
}

// !Done
async function getApartmentById(req, res){
    try {
        const id = req.params.id
        const apartment = await Apartment.findById(id)
        if(apartment) return await res.json(apartment)
        return await res.json({message: 'no apartments'})

    } catch (error) {
        return await res.json(error)
        
    }
}

// !Done
async function getAllReservedApartments(req, res){
    try {
        let reserved = req.query.reserved || true
        const apartments = await Apartment.find({ reserved: reserved})
        if(apartments) return await res.json(
            {
                count: apartments.length,
                data: apartments
            }
            )
        return await res.json({message: 'no reserved apartments'})
    } catch (error) {
        return await res.json(error)
    }
}

// !Done
async function getAllRentedApartments(req, res){
    try {
        let rented = req.query.rented || true
        const apartments = await Apartment.find({ rented: rented})
        if(apartments) return await res.json(
            {
                count: apartments.length,
                data: apartments
            }
            )
        return await res.json({message: 'no rented apartments'})
    } catch (error) {
        return await res.json(error)
    }
}

async function getAllEmptyApartments(req, res){
    try {
       
        const apartments = await Apartment.find({ rented: false, reserved: false})
        if(apartments) return await res.json(
            {
                count: apartments.length,
                data: apartments
            }
            )
        return await res.json({message: 'no empty apartments'})
    } catch (error) {
        return await res.json(error)
    }
}
async function getAllOpenApartments(req, res){
    try {
        let open = req.query.open || true
        const apartments = await Apartment.find({ open: open})
        if(apartments) return await res.json(
            {
                count: apartments.length,
                data: apartments
            }
            )
        return await res.json({message: 'no open apartments'})
    } catch (error) {
        return await res.json(error)
    }
}

async function createApartment(req, res){
    try {
    const data = req.body
    const apartment = await Apartment.create(data)
    return await res.status(201).json(apartment)
    } catch (error) {
        return await res.status(404).json(error)
    }
    
}

async function deleteApartments(req, res){

    try {
        const ids = req.body.ids
        const deleted = []
        for(let id of ids){
            const apartment = await Apartment.findById(id)
            if(city) {
                deleted.push(apartment)
                apartment.delete()
            }
        }
        return await res.json({
            successfully: true,
            items: deleted
        })
    } catch (error) {
        return await res.json(error)
    }
}

async function bookApartments(req, res){
    try {
        const ids = req.body.ids
        const booked = []
        for(let id of ids){
            const apartment = await Apartment.findById(id)
            apartment.reserved = true
            apartment.save()
            booked.push(apartment)
        }
        return await res.json(
            {
                count: booked.length,
                booked,
            }
        )
    } catch (error) {
        
    }
}
module.exports = {
    getAllEmptyApartments,
    getAllOpenApartments,
    getAllRentedApartments,
    getAllReservedApartments,
    getAllApartments,
    getApartmentById,
    getApartmentsByCityName,
    createApartment,
    deleteApartments,
    bookApartments
}