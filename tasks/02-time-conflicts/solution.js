// Solution for Task 02 — Scheduling with Time Conflicts

// Approach:
// 1. Iterate through flights in the given order
// 2. Skip a flight if it is already assigned
// 3. For each flight, check gates one by one
// 4. Use the gate's own method to validate time conflicts
// 5. Assign the flight to the first gate that can accept it
// 6. Update both objects to keep the state consistent

class Flight {
    constructor(flightNumber, departureTime) {
        // Unique flight identifier
        this.flightNumber = flightNumber;

        // Departure time is used to detect scheduling conflicts
        this.departureTime = departureTime;

        // Assigned gate will be stored here after scheduling
        this.gate = null;
    }

    assignGate(gate) {
        // Save a reference to the assigned gate inside the flight
        this.gate = gate;
    }
}

class Gate {
    constructor(name) {
        // Gate identifier
        this.name = name;

        // In this version, one gate can handle multiple flights
        // as long as their departure times do not conflict
        this.flights = [];
    }

    canAccept(flight) {
        // The gate can accept the flight only if there is no
        // other flight with the same departure time already assigned
        return !this.flights.some(
            (existingFlight) => existingFlight.departureTime === flight.departureTime
        );
    }

    assignFlight(flight) {
        // Add the flight to this gate's schedule
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

        // Try gates one by one and choose the first valid one
        for (const gate of gates) {
            // Important:
            // reuse the class API instead of duplicating business logic here
            if (gate.canAccept(flight)) {
                // Update the gate schedule
                gate.assignFlight(flight);

                // Update the flight assignment
                flight.assignGate(gate);

                // Stop searching after successful assignment
                break;
            }
        }

        // If no gate can accept the flight, it remains unassigned
    }
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
    flights.map((flight) => ({
        flight: flight.flightNumber,
        gate: flight.gate ? flight.gate.name : null
    }))
);