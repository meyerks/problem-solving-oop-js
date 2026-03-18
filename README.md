# OOP Scheduling & Resource Allocation (JavaScript)

This repository contains a collection of Object-Oriented Programming (OOP) exercises in JavaScript focused on real-world scheduling and resource allocation problems.

The tasks simulate interview-style scenarios where predefined data models are provided, and the main goal is to implement business logic based on constraints.

---

## 🎯 Goal

- Practice solving OOP-based problems using existing code structures
- Improve ability to read and work with predefined classes
- Focus on clean, simple, and readable logic
- Prepare for technical interviews (HackerRank / pair coding format)

---

## 🧠 Key Concepts

- Resource allocation (e.g. flights → gates)
- Constraint-based logic
- Time interval overlap
- Working with timestamps
- Avoiding duplication of logic
- Maintaining consistent state

---

## 📂 Tasks

### 01 — Basic Scheduling
Assign flights to the first available gate.

Focus:
- simple iteration
- basic state updates

---

### 02 — Scheduling with Time Conflicts
Assign flights while avoiding time conflicts on the same gate.

Focus:
- time comparison
- conflict detection

---

### 03 — Scheduling with Constraints
Assign flights with additional constraints (e.g. compatibility rules).

Focus:
- combining multiple conditions
- clean validation logic

---

### 04 — Gate Assignment with Aircraft Type and Time Buffer
Realistic interview-style problem.

- Gates support specific aircraft types
- Each flight occupies a gate with a buffer:
    - 15 minutes before arrival
    - 15 minutes after departure
- Flights cannot overlap within buffered intervals

Focus:
- working with timestamps
- interval overlap logic
- implementing business logic without helper methods
- using data-only classes

---

## ⚙️ Approach

Most tasks follow the same pattern:

1. Iterate through items (e.g. flights)
2. Try available resources (e.g. gates)
3. Validate constraints
4. Assign when valid
5. Keep logic simple and readable

---

## 💬 Interview Mindset

These tasks are designed to reflect real interview expectations:

- Read existing code before writing logic
- Use provided structures instead of reinventing them
- Avoid overengineering
- Explain your reasoning clearly

Example explanation:

> I iterate through flights and try to assign each one to the first gate that satisfies all constraints.  
> I validate compatibility and time intervals, then update the assignment state.

---

## 🚀 Notes

- All solutions are written in JavaScript
- Time is represented as timestamps (milliseconds)
- Emphasis is on clarity rather than clever tricks
- Each task includes:
    - problem description (`task.md`)
    - implementation (`solution.js`)

---

## 📌 Why this repository

This repository is built as a structured preparation for real-world technical interviews, especially those involving:

- OOP thinking
- working with existing systems
- implementing constraint-based logic

---

## ✨ Author
Ksenija Meier-Kozlova & AI (ChatGPT)