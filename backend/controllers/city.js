const { City } = require("../models/city")

async function getAllCities(req, res){
    const Cities = await City.find({})
    return await res.status(200).json(Cities)
}

async function getCityByName(req, res){
    try {
        const city = await City.findOne({name: req.body.name})
        if(city) return await res.status(200).json(city)
    } catch (error) {
        
    }
}

async function getCityById(req, res){
    
}

async function getAllReservedRoomsInCity(req, res){
    
}

async function getAllRentedRoomInCity(req, res){
    
}

async function getAllEmptyCities(req, res){
    
}

async function getAllCloseCities(req, res){
    
}

async function getAllOpenCities(req, res){
    
}


async function createCity(req, res){
    try {
    const data = req.body
    const city = await City.create(data)
    return await res.status(201).json(city)
    } catch (error) {
        return await res.status(404).send('Error')
    }
    
}

async function deleteCities(req, res){

    try {
        const ids = req.body.ids
        const deleted = []
        for(let id of ids){
            const city = await City.findById(id)
            if(city) {
                deleted.push(city)
                city.delete()
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
module.exports = {
    getAllCloseCities,
    getAllEmptyCities,
    getAllOpenCities,
    getAllRentedRoomInCity,
    getAllReservedRoomsInCity,
    getAllCities,
    getCityById,
    getCityByName,
    createCity,
    deleteCities
}