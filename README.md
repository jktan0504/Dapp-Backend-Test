## Changes Made

1. Input Validation using class-validator:
Installed the class-validator and class-transformer libraries.
Created a new file user.validator.ts to define the validation rules for the user registration using class-validator decorators.
Updated the authController.ts file to use the UserDto class for validation and return the validation errors if any.

2. Pre-save Hook on Mongoose Schema:
Added a pre-save hook to the UserSchema in the user.model.js file.
The pre-save hook checks if the password field has been modified, and if so, it hashes the password using the bcryptjs library before saving the user document.

---
