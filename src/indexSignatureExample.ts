class WarehouseInventory {

    [productId: number]: string;
}
// its important to note that these can be any data type(string, number, Object, etc)
let poztedInventory = new WarehouseInventory();

poztedInventory[1231]= "Screwdriver";
poztedInventory[12356] = "hammer";
poztedInventory[125656] = "saw";