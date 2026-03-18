// Task 04 — Gate Assignment with Aircraft Type and Time Buffer

class Flight {
    constructor(flightNumber, aircraftType, arrivalTimestamp, departureTimestamp) {
        this.flightNumber = flightNumber;
        this.aircraftType = aircraftType;
        this.arrivalTimestamp = arrivalTimestamp;
        this.departureTimestamp = departureTimestamp;
    }
}

class Gate {
    constructor(name, supportedAircraftTypes) {
        this.name = name;
        this.supportedAircraftTypes = supportedAircraftTypes;
    }
}

class FlightAssignment {
    constructor(flight, gate) {
        this.flight = flight;
        this.gate = gate;
    }
}

class FlightScheduler {
    constructor() {
        this.assignments = [];
    }
}

// TODO: Implement scheduling logic
function scheduleFlights(flights, gates) {

}

const flights = [
    new Flight("AY101", "A320", 1000000, 1100000),
    new Flight("AY102", "A320", 1050000, 1150000),
    new Flight("AY103", "B737", 1200000, 1300000)
];

const gates = [
    new Gate("A1", ["A320", "B737"]),
    new Gate("A2", ["A320"])
];

const assignments = scheduleFlights(flights, gates);

console.log(
    assignments.map((assignment) => ({
        flight: assignment.flight.flightNumber,
        gate: assignment.gate.name
    }))
);