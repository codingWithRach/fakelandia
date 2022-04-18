# Justice for Fakelandia

## Introduction

The faraway country of Fakelandia has decided to modernise their justice system with a fancy new technology: "websites".

Fakelandia is a happy place with a low crime rate, but it's important to each citizen that justice is seen to be served, so they'd like a website to keep abreast of the latest justice developments - and they've specifically asked for YOU to help out.

*This lab won't lead you step-by-step through each line of code*, but it will lead you through all of the stages of building the app.

You're going to be building the app entirely from scratch, so you'll get to use your own creativity to decide what a good solution looks like as you bring the designs to life.

This is your chance to show off everything you've learned about building React applications, so feel free to be creative and have some fun. 

Remember the importance of:

* Writing tests for your components
* Using BEM to write scalable, reusable CSS
* Keeping your components small and refactoring them into sub-components where necessary
* Using hooks to store state, make API calls, and pass data down to sub-components through contexts

## Crimes and Misdemeanours

The Fakelandians have asked for a site that lets them browse lists of crimes committed today, and also for functionality that helps citizens confess to their own crimes. 

As a non-citizen, you might not be aware that there are only four possible crimes in Fakelandia:

* Mild Public Rudeness
* Speaking in a Lift
* Not Eating Your Vegetables
* Supporting Manchester United

Despite the clear severity of some of these awful crimes, the Fakelandians refer to them all as "misdemeanours".

## Creating your application

To create your application, run the following command in an empty folder:

```
npx create-react-app . --template typescript 
```

Note: If you run into problems i.e. 

    "You are running `create-react-app` 4.0.3, which is behind the latest release (5.0.0).

    We no longer support global installation of Create React App."

Try the command 

```
npx create-react-app@latest {Your project name} --template typescript
```


This will setup a fresh React app for you, with everything for TypeScript already enabled.

Followed by:

```
npm start & npm test
```

You should then be able to access the default application by opening the browser and visiting

[http://localhost:3000](http://localhost:3000)

## Let's get started

Time to start building the app the Fakelandians want. Let's start with the homepage in [activity 1](./docs/activity_1.md).
