# Unexpected Token Error in Express.js Middleware

This repository demonstrates an uncommon error in Express.js middleware where modifying the request object (`req`) unexpectedly leads to an 'Unexpected token' error.  The issue arises from improper handling of the request body, particularly when using body-parsing middleware.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `node bug.js`.

You should encounter an unexpected token error.

## Solution

The solution involves ensuring the middleware function correctly parses the request body before attempting to modify it.  The `bugSolution.js` file shows the corrected code.