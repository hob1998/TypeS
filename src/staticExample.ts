class Rides{
    private static _activeRides: number = 0;

    start() { Rides._activeRides++; }
    stop() { Rides._activeRides--;}

    static get activeRides(): number { return Rides._activeRides; }

}

const Driver1 = new Rides();
Driver1.start();

const Driver2 = new Rides();
Driver1.start();

// console.log(Driver1.activeRides());
console.log(Rides.activeRides);