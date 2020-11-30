# Code assessment: Auto Loan

## To Start

In the project directory, install dependencies by running:

### `yarn` or `npm install`

Once the dependencies are installed you can run:

### `yarn emulate`

If you are using npm, run `npm run build` and then `firebase emulators:start`\

This will start the Firebase emulator that serves the project and it's API.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Design Docs

Dependencies used

- I used `create-react-app` to get a React project up-and-running.
- At first, I brought in the **Google Firebase library** thinking that I would have to handle user account creation (Firebase has a great library for Auth as well as a NoSQL database). I stuck with it because the Functions library made creating a REST API easy.
- **Formik** is a useful tool for forms and validation, **Yup** is an optionaly dependency that allowed me to make a validation schema and to display validation errors.
- **Bootstrap** is a quick way to make a UI. I added a swatch from _bootswatch.com_ so it would not be so boring.
- _React Router_ was needed for routing to the different views.

Structure:

- At the top-level in `App.js,` I placed the styles and implemented routing. This makes the most sense.
- In the `LoanFormPage`, I created the page layer that contains the markup, and had to refactor the form component to make it easier to read.
- In the `LoanForm` component, it is comprised of the Formik ‘boiler-plate’ using a validation schema (easiest to implement).

* I created the `InputGroup` component to reduce repitition. I realized that there is a Formik specific way to make designer components, and that may have a performance benefit. The `InputGroup `displays errors well, and handles key press events.
* After the user submits validated data and the API request is succesful, the pages routes over to a component called Result.js. The status of _`qualified`_ is delivered via props, and determines which view is shown: either `Qualified` or `Disqualified`. This logic was effective in my opinion and quick to implement.
* If the user is _disqualified_, they see the appropriate markup and the message from the API.
* If _qualified_, they are delivered to an account sign up page consisting of a Formik form again with inputs that validate according to a schema, and an alert tells them if they have successfully created an account.
