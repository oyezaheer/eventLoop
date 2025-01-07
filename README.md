

### About the project

Event Loop Explorer is a tool that helps to understand how JavaScript code is executed in the browser.
It visualizes the Call Stack, Web APIs, Tasks, Microtasks, and Render phase.



### Known limitations & simplifications:

- Javascript code is parsed to AST using acorn parser, and then order of events are generated.
  All default examples are working as expected, you can try to modify the code and see how it is working.
  However, not all cases are covered.
  Async/await, complex Promises, SetInterval, assignment operators will not work as expected.
- Render phase is usually triggered every 16.66ms (60fps), but in this project it is simplified to just every second Event Loop circle.
  We are counting every circle as 360ms for simplicity, so render phase is triggered every 720ms.
- UI is not mobile-friendly, please use desktop devices only.


