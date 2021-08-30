# ship-composer
Design your custom ship, and order it online

## Introduction
The project aims to demonstrate auth architectural skills through solving a simple problem of Business Entity CRUD actions

#### Notes:
Due to limiation of time, the implementation of architecture rules may differ from the documentation. However the documenation clarifies very well what would have been done if we were in production mode.

The server side is far from perfect, and adds some layers that may not really be unnecessary for the coding challenge purpose. However it can demonstrate a scalable architecture in case if it is applied for a real business app.

Worthless to mention that all that scaffold code could be generated using infrastructure as a code approach, but due to time limiation I wanted to show the final output of this base.

## Server Side:
Divide & Conquer is an effective approach not only for solving real life problems, but also for solving technical porblems. The goal is to always break down your issues into granular level, so you can conquer(solve) them easily.

The server side architecture is following [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) rules which applies seperation of concern(Divide & Conquer paradigm)

The architecture was propsed by [Uncle BoB](https://www.google.com/search?q=Robert+C.+Martin&rlz=1C5CHFA_enDE964DE964&oq=Robert+C.+Martin&aqs=chrome..69i57.243j0j7&sourceid=chrome&ie=UTF-8) and is followed by many Engineers, and is proven to be a successful model that can with many Business Cases, disregarding Business size, or Business category

The architecture is micro-service friendly, which assumes that each business entity API can be tested, built, and deployed separately without any coupling, or dependency of other entities, or services. However this architecture can still be used in a module based monolith API

API Gateway -> Validator -> Handler -> Controller -> UseCase -> Presenter

## Client Side

The client side project is forked from previous templates that I used in side projects, and is inspired from the following project:
https://github.com/akveo/ngx-admin

Even though not all features are used here (like Auth/Guards, Advanced Navigation .. etc), but it can be easily changed in future to enable these modules and make it functional with very little effort

## Documentation

Each project has its own README.md file wich explains how to set the project up, and running

