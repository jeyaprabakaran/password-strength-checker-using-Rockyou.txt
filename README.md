# Password Strength Checker

## Project Description
The Password Strength Checker is a web application designed to help users evaluate the strength of their passwords in real-time. It checks passwords against common weak passwords and provides feedback on password complexity, encouraging users to create secure passwords. The project features an easy-to-use interface.

## Features
- **Password Strength Analysis**: 
  - Detects weak passwords using the popular `rockyou.txt` list.
  - Evaluates password strength based on length, numbers, mixed case letters, and special characters.
- **Visual Feedback**:
  - A dynamic strength indicator changes color and width based on password quality.
- **User-Friendly Interface**:
  - Clean, centered design with a background video for an enhanced user experience.

## File Structure
- `index.html`: Contains the HTML structure of the web application.
- `style.css`: Contains the CSS styling, including layout and visual elements.
- `script.js`: Contains JavaScript functions for password strength checking and loading the weak passwords list.
- `rockyou.txt`: A file containing a list of common weak passwords to check against (not included due to size restrictions; may be added as needed).

## How to Use
1. **Open the Project**: Open `index.html` in a web browser.
2. **Input Credentials**: Enter a username and password in the form provided.
3. **Check Password Strength**: Click "Check Strength" to see the strength level of your password.
4. **Visual Indicator**: The strength bar below the form will update in color and width based on the password's strength.

## Technical Information
- **Frontend Technologies**: HTML, CSS, JavaScript.
- **Password Checking**: JavaScript checks the password strength using common patterns and compares it to entries in `rockyou.txt`.
- **Dependencies**: No external libraries are required; the application is fully implemented with vanilla JavaScript, HTML, and CSS.

## License
This project is open-source and available under the MIT License.

## Author
Developed by 
1.Jeyaprabakaran S
2.Vishwanatha Sriram M
3.Albin Tenny
4.Sasidharan 

Contributions and feedback are welcome!

---

