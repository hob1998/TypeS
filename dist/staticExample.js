"use strict";
class Rides {
    start() { Rides._activeRides++; }
    stop() { Rides._activeRides--; }
    static get activeRides() { return Rides._activeRides; }
}
Rides._activeRides = 0;
const Driver1 = new Rides();
Driver1.start();
const Driver2 = new Rides();
Driver1.start();
console.log(Rides.activeRides);
//# sourceMappingURL=staticExample.js.map