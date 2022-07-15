Order fullfilment challenge is built with node.js & express.js

1. install the dependencies "npm install"
2. install middleware "npm install body-parser"
3. run the code "npm run dev"
4. to test you can run the following curl command in the terminal code:

curl --location --request POST 'localhost:5000/process-orders' \
--header 'Content-Type: application/json' \
--data-raw '{

    "orderIds": [1122]

}'
