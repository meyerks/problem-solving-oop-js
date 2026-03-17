# Task 02 — Scheduling with Time Conflicts

## Overview

You are working on an airport scheduling system.

Each flight has a **departure time**.  
Each gate can serve multiple flights, but it **cannot accept two flights with the same departure time**.

Your task is to assign flights to gates while avoiding time conflicts.

---

## Provided Classes

### Flight
- `flightNumber` — unique flight identifier
- `departureTime` — scheduled departure time
- `gate` — assigned gate, initially `null`
- `assignGate(gate)` — assigns a gate to the flight

### Gate
- `name` — gate identifier
- `flights` — array of assigned flights
- `canAccept(flight)` — returns `true` if the gate has no conflicting flight at the same departure time
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
- A gate cannot have two flights with the same `departureTime`
- Each flight can only be assigned once
- If no suitable gate exists, leave the flight unassigned
- Keep both sides of the assignment consistent

---

## Expected Behavior

The function should use the provided class methods to assign flights.  
It does not need to return anything unless explicitly required.

---

## Example

### Input

~~~javascript
const flights = [
  new Flight("AY101", "10:00"),
  new Flight("AY102", "10:00"),
  new Flight("AY103", "11:00")
];

const gates = [
  new Gate("A1"),
  new Gate("A2")
];
~~~

### Possible Result

- `AY101` is assigned to `A1`
- `AY102` is assigned to `A2`
- `AY103` is assigned to `A1`

---

## Notes

- Use existing methods such as `gate.canAccept(flight)`
- Do not duplicate logic that is already encapsulated inside the classes
- Keep the implementation clean and readable