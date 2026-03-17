# Task 03 — Scheduling with Constraints and Priorities

## Overview

You are extending the airport scheduling system.

Each flight has:
- a departure time
- a type: `domestic` or `international`

Each gate supports only one flight type:
- `domestic`
- `international`

A gate can accept a flight only if:
- the gate supports the flight type
- there is no time conflict with already assigned flights

Your task is to assign flights to valid gates while respecting all constraints.

---

## Provided Classes

### Flight
- `flightNumber` — unique flight identifier
- `departureTime` — scheduled departure time
- `type` — `domestic` or `international`
- `gate` — assigned gate, initially `null`
- `assignGate(gate)` — assigns a gate to the flight

### Gate
- `name` — gate identifier
- `supportedType` — type of flights the gate supports
- `flights` — array of assigned flights
- `supports(flight)` — checks whether the gate supports the flight type
- `hasConflict(flight)` — checks whether a flight with the same departure time is already assigned
- `canAccept(flight)` — returns `true` if the gate supports the flight and has no time conflict
- `assignFlight(flight)` — assigns a flight to the gate

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

- Process flights in the given order
- Assign each flight to the **first gate that can accept it**
- A gate must support the flight type
- A gate must not have a conflicting flight at the same departure time
- Each flight can only be assigned once
- If no valid gate exists, leave the flight unassigned
- Keep the object state consistent

---

## Expected Behavior

The function should assign flights using the provided object methods.  
It does not need to return a value unless explicitly required.

---

## Example

### Input

~~~javascript
const flights = [
  new Flight("AY101", "10:00", "domestic"),
  new Flight("AY102", "10:00", "international"),
  new Flight("AY103", "11:00", "domestic")
];

const gates = [
  new Gate("A1", "domestic"),
  new Gate("A2", "international")
];
~~~

### Result

- `AY101` is assigned to `A1`
- `AY102` is assigned to `A2`
- `AY103` is assigned to `A1`

---

## Notes

- Prefer using `gate.canAccept(flight)` instead of repeating validation logic manually
- Focus on correct object interaction
- Avoid unnecessary abstractions or overengineering
- Keep the solution readable and maintainable