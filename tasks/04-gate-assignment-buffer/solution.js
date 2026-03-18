// Solution for Task 04 — Gate Assignment with Aircraft Type and Time Buffer

// Approach:
// 1. Iterate through flights in the given order
// 2. For each flight, check gates one by one
// 3. Validate aircraft type compatibility
// 4. Validate time conflict using a 15-minute buffer
// 5. If valid, create a FlightAssignment and store it
// 6. Return all created assignments

class Flight {
    constructor(flightNumber, aircraftType, arrivalTimestamp, departureTimestamp) {
        // Unique flight identifier
        this.flightNumber = flightNumber;

        // Aircraft type, for example A320 or B737
        this.aircraftType = aircraftType;

        // Arrival and departure times are already provided as timestamps in milliseconds
        this.arrivalTimestamp = arrivalTimestamp;
        this.departureTimestamp = departureTimestamp;
    }
}

class Gate {
    constructor(name, supportedAircraftTypes) {
        // Gate identifier
        this.name = name;

        // List of aircraft types supported by this gate
        this.supportedAircraftTypes = supportedAircraftTypes;
    }
}

class FlightAssignment {
    constructor(flight, gate) {
        // Stores the relationship between a flight and a gate
        this.flight = flight;
        this.gate = gate;
    }
}

class FlightScheduler {
    constructor() {
        // Stores all successful assignments
        this.assignments = [];
    }
}

function scheduleFlights(flights, gates) {
    // 15 minutes in milliseconds
    const BUFFER = 15 * 60 * 1000;

    // Use a scheduler object to store assignments
    const scheduler = new FlightScheduler();

    // Process flights in the given order
    for (const flight of flights) {
        // Try each gate and assign the flight to the first valid one
        for (const gate of gates) {
            // Check whether the gate supports the aircraft type
            const supportsType = gate.supportedAircraftTypes.includes(flight.aircraftType);

            if (!supportsType) {
                continue;
            }

            // Calculate the buffered interval for the current flight
            const newStart = flight.arrivalTimestamp - BUFFER;
            const newEnd = flight.departureTimestamp + BUFFER;

            // Check conflicts only against assignments already made for the same gate
            const hasConflict = scheduler.assignments.some((assignment) => {
                // Ignore assignments that belong to other gates
                if (assignment.gate !== gate) {
                    return false;
                }

                const existingFlight = assignment.flight;

                // Calculate the buffered interval for an already assigned flight
                const existingStart = existingFlight.arrivalTimestamp - BUFFER;
                const existingEnd = existingFlight.departureTimestamp + BUFFER;

                // Two intervals overlap if each one starts before the other one ends
                return newStart < existingEnd && newEnd > existingStart;
            });

            // If there is no conflict, create a new assignment
            if (!hasConflict) {
                scheduler.assignments.push(new FlightAssignment(flight, gate));
                break;
            }
        }

        // If no gate fits, the flight remains unassigned
    }

    return scheduler.assignments;
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