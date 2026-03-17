class Flight {
    constructor(flightNumber) {
        this.flightNumber = flightNumber;
        this.gate = null;
    }

    assignGate(gate) {
        this.gate = gate;
    }

    isAssigned() {
        return this.gate !== null;
    }
}

class Gate {
    constructor(name) {
        this.name = name;
        this.currentFlight = null;
    }

    isFree() {
        return this.currentFlight === null;
    }

    assignFlight(flight) {
        this.currentFlight = flight;
    }
}

function scheduleFlights(flights, gates) {

}

const flights = [
    new Flight("AY101"),
    new Flight("AY102"),
    new Flight("AY103")
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