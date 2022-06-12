var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.location = location;
        this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi X:".concat(this.location.x, " Y:").concat(this.location.y, ";"));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 1, y: 2 });
taxi_1.travelTo({ x: 1, y: 3 });
