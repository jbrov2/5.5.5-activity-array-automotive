class Factory{
    constructor(location, owner){
        this.location = location
        this.owner = owner
        this.vehicles = []
    }

    //create Vehicle
    createVehicle(vehicle){
        this.vehicles.push(vehicle)
    }
    //paints the matching vehicle the specified color
    paintVehicle(vin, paintColor){
        //index of the vehicle with that vin
        let vIndex = this.vehicles.findIndex( v => v.vin === vin)
        this.vehicles[vIndex].paint(paintColor)
    }
    //how to implement list vehicles
    listVehicles(){
        return this.vehicles
    }
}