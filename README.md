# Koinbase

## Summary

[Koinbase][Koinbase] is full stack single-page web application similar to Coinbase, one of the largest digital currency exchange. It's been built using using Ruby on Rails (version 6) and mainly React.js/Redux on the frontend. Koinbase is hosted on a Heroku server as of Jan. 10th 2020, here are the following main feature a users can do:

* Create an account
* Log in and out 
* Follow tradable crypto assets in real time
* Add and remove crypto assets from their personal watchlist
* Search a list of available crypto assets to follow
* View a graphic representation of these assets

Feel free to explore [Koinbase][Koinbase] or get in touch with me [here](#contact).
### Landing Page

![landing](./images/landing.png)

## Overall Structure

### Hosting
The app is hosted on [Heroku][Heroku] as of Jan. 2020

### Database
The app is using [PostgreSQL][PostgreSQL] as its database.

### Back end 
The app relies on Ruby on Rails (v.6) on the back end with a postgreSQL database. The Back end is design to be RESTful complaint.

### Front end
The front end is built using in JavaScript and mainly the [React.js][React] and [Redux][Redux] framework.

### Libraries
Koinbase uses:
- [React.js][React]
- [Redux][Redux]
- [Recharts][Recharts]

## Features & Implementation
As stated Koinbase uses React/Redux on the frontend, so an obvious choice for navigating the app was to leverage the power of the React-Router library for the fontend routing. Let's explore the different routes and features more in depth:

### User Authentication
User authentication both for registration and sign up has been implemented using Bcrypt for hashing sensitive data and follows best practice such as not storing passwords to the database.

#### Registration 
![Registration](./images/registration.png)

#### Sign In
![Login](./images/login.png)




## Future Improvements:

* [ ] Host on AWS using Docker
* [ ] fully refactor for higher scalability
* [ ] Audit for better security and best practice

## Feedbacks and Questions <a id="contact"></a>

Feel free to reach out if you have any questions, critiques or feedbacks you'd like to share, it is always appreciated.
my [email](mailto:bobandredev@gmail.com)


[Koinbase]: http://www.easynametoremember.herokuapp.com/
[Heroku]: https://www.heroku.com/
[PostgreSQL]: https://www.postgresql.org/
[Recharts]:http://recharts.org/en-US/
[React]:https://facebook.github.io/react/
[Redux]:https://redux.js.org/
