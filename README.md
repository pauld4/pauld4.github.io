# pauld4.github.io

My github.io site that contains small portions of my work in HTML and JavaScript. I enjoy writing my own JavaScript code, but will use AI to help create a foundation for the JavaScript code. AI is also used to help with the CSS and layout.

Index.html >>
The homepage to the site, includes a menu with 3 buttons.

Login.html, Account.html, Recoveraccount.html, Newaccount.html, Logout.html >>
A JavaScript login page, storing usernames and passwords in the user's client with localstorage. User enters their login information (admin/password1) to log in, and are brought to the account.html page to view their account information. Clicking "logout" removes their current login information and brings them to the login.html page. Recoveraccount.html is used to recover lost passwords and accounts, and newaccount.html is used to create new accounts.

Lights.html >>
A JavaScript game using the HTML canvas and continually draws a new image to the screen and responds to input using a game loop. Try to make all the squares blue within 3 clicks. It is possible to make all the squares white, but will require more clicks.

Insmenu.html, Insform.html, Insdb.html, Insthank.html >>
Sample lead generation pages for health insurance brokers where users can input data using insform.html and view the current "user" information using insdb.html. After submitting a form, the user is sent to insthank.html showing a "thank you" message and a link back to the main menu, insmenu.html. Future improvements include ensuring incorrect birth dates are not used (dates such as February 30th), and that cities, states, and zip codes match (incorrect locations such as New York City, MA 12345). When loading any of these pages, 50 random users are generated that are stored in the "database", or localstorage.
