# rot13-api

API - Challenge

1. Make an API `/api/rot13/<some word>` that will read the <some word> and encode it with rot13 encoding before returning it to the user.

2. Once that's working, make another endpoint `/api/rot13` that's a POST that takes in a JSON request with the word like `{"word": <some word>}`, does the encoding and sends back the response.

3. Lastly, add an API endpoint `/api/catfacts/<some number between 0-3>` that gets a number (the one specified) of cat facts from https://meowfacts.herokuapp.com/ and returns them as one response to the user as an array. For example, `/api/catfacts/2` would return:
["fact1", "fact2"]

If the number is outside of the range, send back an error. The facts cannot be the same so you should also check for this.
