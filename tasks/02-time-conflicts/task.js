class Flight {
    constructor(flightNumber, departureTime) {
        this.flightNumber = flightNumber;
        this.departureTime = departureTime;
        this.gate = null;
    }

    assignGate(gate) {
        this.gate = gate;
    }
}

class Gate {
    constructor(name) {
        this.name = name;
        this.flights = [];
    }

    canAccept(flight) {
        return !this.flights.some(
            f => f.departureTime === flight.departureTime
        );
    }

    assignFlight(flight) {
        this.flights.push(flight);
    }
}

function scheduleFlights(flights, gates) {

}

const flights = [
    new Flight("AY101", "10:00"),
    new Flight("AY102", "10:00"),
    new Flight("AY103", "11:00")
];

const gates = [
    new Gate("A1"),
    new Gate("A2")
];

scheduleFlights(flights, gates);

console.log(
    flights.map(f => ({
        flight: f.flightNumber,
        gate: f.gate ? f.gate.name : null
    }))
);