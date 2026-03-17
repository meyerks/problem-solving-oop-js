// Solution for Task 01 — Basic Flight Scheduling

// Approach:
// 1. Iterate through flights in the given order
// 2. Skip a flight if it is already assigned
// 3. For each unassigned flight, find the first free gate
// 4. Update both the gate and the flight to keep state consistent

class Flight {
    constructor(flightNumber) {
        // Unique flight identifier
        this.flightNumber = flightNumber;

        // The assigned gate is stored here after scheduling
        this.gate = null;
    }

    assignGate(gate) {
        // Save a reference to the assigned gate inside the flight
        this.gate = gate;
    }

    isAssigned() {
        // A flight is considered assigned if it already has a gate
        return this.gate !== null;
    }
}

class Gate {
    constructor(name) {
        // Gate identifier, for example A1 or B2
        this.name = name;

        // In this basic version, a gate can hold only one flight total
        this.currentFlight = null;
    }

    isFree() {
        // The gate is free only if no flight has been assigned yet
        return this.currentFlight === null;
    }

    assignFlight(flight) {
        // Save a reference to the assigned flight inside the gate
        this.currentFlight = flight;
    }
}

function scheduleFlights(flights, gates) {
    // Process flights one by one in the given order
    for (const flight of flights) {
        // Defensive check:
        // skip this flight if it already has a gate assigned
        if (flight.isAssigned()) {
            continue;
        }

        // Try to assign the flight to the first free gate
        for (const gate of gates) {
            if (gate.isFree()) {
                // Update the gate state
                gate.assignFlight(flight);

                // Update the flight state
                flight.assignGate(gate);

                // Stop searching once the flight has been assigned
                break;
            }
        }

        // If no gate is free, the flight remains unassigned
    }
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
    flights.map((flight) => ({
        flight: flight.flightNumber,
        gate: flight.gate ? flight.gate.name : null
    }))
);