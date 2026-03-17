class Flight {
    constructor(flightNumber, departureTime, type) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.type = type;
        this.gate = null;
    }

    assignGate(gate) {
        this.gate = gate;
    }
}

class Gate {
    constructor(name, supportedType) {
        this.name = name;
        this.supportedType = supportedType;
        this.flights = [];
    }

    supports(flight) {
        return this.supportedType === flight.type;
    }

    hasConflict(flight) {
        return this.flights.some(
            f => f.departureTime === flight.departureTime
        );
    }

    canAccept(flight) {
        return this.supports(flight) && !this.hasConflict(flight);
    }

    assignFlight(flight) {
        this.flights.push(flight);
    }
}

function scheduleFlights(flights, gates) {

}

const flights = [
    new Flight("AY101", "10:00", "domestic"),
    new Flight("AY102", "10:00", "international"),
    new Flight("AY103", "11:00", "domestic")
];

const gates = [
    new Gate("A1", "domestic"),
    new Gate("A2", "international")
];

scheduleFlights(flights, gates);

console.log(
    flights.map(f => ({
        flight: f.flightNumber,
        gate: f.gate ? f.gate.name : null
    }))
);