// class mobile{
//     constructor (){
//         this.model = "T2"
//         this.brand = ""
//         this.batteryCapacity = ""
//         this.screenType = ""
//         this.processor = "Unknown"
//         this.getDetails = function (){console.log(this.batteryCapacity, this.brand, this.model);}
//     }
// }

// const vivoT1 = new mobile()

// vivoT1.model = "T1"
// vivoT1.brand = "Vivo"
// vivoT1

// const mi = new mobile()
// mi.brand = "XIOMI"
// mi.model = "Redmi Note 4"

// vivoT1.getDetails()

class Laptop{
    constructor(){
        this.Brand=""
        this.Model=""
        this.HardDisk=""
        this.RAM=""
        this.Battery=""
        this.getdetails=function(){console.log(this);}
        }
    }


const HP=new Laptop

HP.Brand="hp"
HP.Model="Window 10"
HP.RAM="8GB"

console.log(HP.getdetails());