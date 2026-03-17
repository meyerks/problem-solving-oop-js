// Solution for Task 03 — Scheduling with Constraints and Priorities

// Approach:
// 1. Iterate through flights in the given order
// 2. Skip a flight if it is already assigned
// 3. For each flight, check gates one by one
// 4. Use the gate's own method to validate both:
//    - type compatibility
//    - departure time conflict
// 5. Assign the flight to the first gate that can accept it
// 6. Update both the gate and the flight to keep state consistent

class Flight {
    constructor(flightNumber, departureTime, type) {
        // Unique flight identifier
        this.flightNumber = flightNumber;

        // Departure time is used for conflict validation
        this.departureTime = departureTime;

        // Flight type can be "domestic" or "international"
        this.type = type;

        // Assigned gate will be stored here after scheduling
        this.gate = null;
    }

    assignGate(gate) {
        // Save a reference to the assigned gate inside the flight
        this.gate = gate;
    }
}

class Gate {
    constructor(name, supportedType) {
        // Gate identifier
        this.name = name;

        // This gate can only serve one flight type
        this.supportedType = supportedType;

        // List of flights already assigned to this gate
        this.flights = [];
    }

    supports(flight) {
        // Check whether the gate supports this flight type
        return this.supportedType === flight.type;
    }

    hasConflict(flight) {
        // Check whether another flight with the same departure time
        // is already assigned to this gate
        return this.flights.some(
            (existingFlight) => existingFlight.departureTime === flight.departureTime
        );
    }

    canAccept(flight) {
        // A gate can accept the flight only if:
        // 1. the flight type is supported
        // 2. there is no departure time conflict
        return this.supports(flight) && !this.hasConflict(flight);
    }

    assignFlight(flight) {
        // Add the flight to the gate's schedule
        this.flights.push(flight);
    }
}

function scheduleFlights(flights, gates) {
    // Process flights one by one in the given order
    for (const flight of flights) {
        // Defensive check:
        // skip this flight if it already has a gate assigned
        if (flight.gate !== null) {
            continue;
        }

        // Try gates one by one and choose the first valid option
        for (const gate of gates) {
            // Important:
            // keep the scheduling function simple by delegating validation
            // to the Gate class through canAccept()
            if (gate.canAccept(flight)) {
                // Update the gate schedule
                gate.assignFlight(flight);

                // Update the flight assignment
                flight.assignGate(gate);

                // Stop searching after successful assignment
                break;
            }
        }

        // If no valid gate exists, the flight remains unassigned
    }
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
    flights.map((flight) => ({
        flight: flight.flightNumber,
        gate: flight.gate ? flight.gate.name : null
    }))
);