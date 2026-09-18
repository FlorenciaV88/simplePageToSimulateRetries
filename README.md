# TestRigor Click Retry Playground

An interactive web fixture designed to test and validate click retry behaviors in **testRigor** (specifically the **"When to trigger click retry:"** configuration feature).

## Test Purpose
This environment simulates a common scenario in complex web applications where the first click on a button does not produce an immediate change in the interface (e.g., requiring a second attempt or a dependent action). It allows you to verify:
1. The default behavior (**"Only on the next command"**).
2. The extended behavior (**"On any step after click regardless how far out"**).
3. The correct emission of log warnings (*warning logs*) when a subsequent command fails and triggers a retry of the preceding click.

## Application Logic
- The **"Open Modal"** button deliberately ignores the first click (injecting no elements into the DOM).
- Starting from the second click, the script dynamically injects the modal and its input field (`input`) into the DOM.
- This forces an immediate typing command (`enter "John" into "Name"`) to fail on the first attempt if the modal hasn't been opened yet, compelling the testRigor engine to execute its retry policy.

## Usage
Originally deployed to Netlify for integration testing with testRigor suites.
