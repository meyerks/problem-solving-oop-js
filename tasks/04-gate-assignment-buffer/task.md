# Task 04 — Gate Assignment with Aircraft Type and Time Buffer

## Overview

You are given a simplified airport gate assignment system.

The classes `Flight`, `Gate`, `FlightAssignment`, and `FlightScheduler` are already implemented as data models.

Your task is to implement the scheduling logic.

Each flight must be assigned to a suitable gate based on:
- aircraft type compatibility
- gate availability in time
- a 15-minute buffer before arrival and after departure

---

## Provided Classes

### Flight
- `flightNumber` — unique flight identifier
- `aircraftType` — type of the aircraft
- `arrivalTimestamp` — arrival time in milliseconds
- `departureTimestamp` — departure time in milliseconds

### Gate
- `name` — gate identifier
- `supportedAircraftTypes` — array of supported aircraft types

### FlightAssignment
- `flight` — assigned flight
- `gate` — assigned gate

### FlightScheduler
- `assignments` — array of created flight assignments

---

## Task

Implement the following function:

~~~javascript
function scheduleFlights(flights, gates)
~~~

---

## Input

- `flights` — an array of `Flight` objects
- `gates` — an array of `Gate` objects

---

## Requirements

A flight can be assigned to a gate only if:

1. The gate supports the flight’s `aircraftType`
2. The gate is available during the required buffered time interval

---

## Time Constraints

Each flight occupies a gate during the following interval:

- from `arrivalTimestamp - 15 minutes`
- to `departureTimestamp + 15 minutes`

Two flights cannot be assigned to the same gate if their buffered intervals overlap.

---

## Expected Behavior

- Process flights in the given order
- Assign each flight to the **first suitable gate**
- If no gate is available, leave the flight unassigned
- Store assignments as `FlightAssignment` objects
- Return the created assignments

---

## Example

### Input

~~~javascript
const flights = [
  new Flight("AY101", "A320", 1000000, 1100000),
  new Flight("AY102", "A320", 1050000, 1150000)
];

const gates = [
  new Gate("A1", ["A320", "B737"])
];
~~~

### Result

- `AY101` is assigned to `A1`
- `AY102` is not assigned because its buffered interval overlaps with the first flight

---

## Notes

- Time is already provided as timestamps in milliseconds
- Use a 15-minute buffer before arrival and after departure
- Since the provided classes do not contain business logic, all validation should be implemented inside `scheduleFlights`
- Keep the solution simple and readable