# Task 01 — Basic Flight Scheduling

## Overview

You are given a simplified airport system with two entities: **Flight** and **Gate**.

Each flight should be assigned to a gate.  
Each gate can hold only **one assigned flight**.

Your task is to implement a function that assigns flights to available gates.

---

## Provided Classes

### Flight
- `flightNumber` — unique flight identifier
- `gate` — assigned gate, initially `null`
- `assignGate(gate)` — assigns a gate to the flight
- `isAssigned()` — returns `true` if the flight already has a gate

### Gate
- `name` — gate identifier
- `currentFlight` — assigned flight, initially `null`
- `isFree()` — returns `true` if the gate has no assigned flight
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
- For each flight, assign it to the **first available gate**
- A gate can only hold **one flight**
- If no gate is available, leave the flight unassigned
- Keep object state consistent:
    - update the gate
    - update the flight

---

## Expected Behavior

The function should assign flights directly through the provided object methods.  
It does not need to return a value unless explicitly required by the implementation.

---

## Example

### Input

~~~javascript
const flights = [
  new Flight("AY101"),
  new Flight("AY102"),
  new Flight("AY103")
];

const gates = [
  new Gate("A1"),
  new Gate("A2")
];
~~~

### Result

- `AY101` is assigned to `A1`
- `AY102` is assigned to `A2`
- `AY103` remains unassigned

---

## Notes

- Keep the solution simple and readable
- Do not introduce extra classes or abstractions
- Use the provided methods instead of modifying object fields directly