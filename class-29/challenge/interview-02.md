# Interview 02

Implement Insertion Sort.

## Specifications

- Read all of the following instructions carefully. 
- Act as an interviewer, giving a candidate a code challenge.
- Score the candidate according to the [Whiteboard Rubric](https://docs.google.com/spreadsheets/d/1scthkmARfzAFZrSYAp6LA2coOaoWUWbSzMbtIU4jcHw){:target="_blank"}.
- You are free to offer suggestions or guidance (and see how they respond),  but don't solve it for the candidate.

## Feature Tasks

- Ask the candidate to write a function to implement insertion sort.
- Avoid utilizing the built-in sorting methods available in your language.
- Offer an example input array of positive and negative integers. 
- The candidate may have one or two functions: `sort`, and possibly a helper `insert`. 
- The candidate should be able to describe the properties of the algorithm they implement: 
  - Is it in-place?
    - If the insert is swapping items, it is likely in place. If it creates a new array during insertion, it is not in-place.
  - Is it stable?
    - Most likely not, depends on implementation.
  - Is it adaptable?
    - Most likely, depends on implementation.
  - What's the time and space complexity? 
    - Time: If the insertion uses binary sort to find the insertion index, O(NlogN), otherwise, likely O(N^2) 
    - Space: If it is in-place swapping items, O(1) the index to swap and insert. If it is creating a new array, O(n)

## Structure 

Familiarize yourself with the grading rubric, so you know how to score the interview. 

Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available. 

Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

Assign points for each item on the Rubric, according to how well the candidate executed on that skill. 

Add up all the points at the end, and record the total at the bottom of the page.

## Example

![insertion sort example](https://user-images.githubusercontent.com/498712/197900744-37b31041-0709-40f4-b3b0-b8da6f235ee8.png)

## Documentation

Record detailed notes on the rubric, to share with the candidate when the interview is complete. 
