# Lives Lived Frontend

This is the React frontend that goes with the [Lives Lived API backend](https://github.com/miapelino/lives-lived-api). I converted the React Component classes to functional componenents with hooks. Specific changes include the implementation of useState() to replace constructor functions and state declarations and useEffect() to replace componentDidMount() and componentDidUpdate().

It uses reactstrap, which creates Bootstrap components, to create a responsive data table that displays all data from a table in a database. It has a modal form for adding and editing items, a delete and edit button in each item row, and a button to download the entire database table into a CSV file using react-csv.

## Instructions

**1. Clone this repo**

```
git clone https://github.com/miapelino/lives-lived-client.git
```

**2. NPM install React and dependencies**

```
npm install
```

## Notes

I created this project while following olinations's tutorial [here](https://medium.com/@olinations/build-a-crud-template-using-react-bootstrap-express-postgres-9f84cc444438?source=friends_link&sk=51028bf98ff92bc659d3edbb539a82bb).
