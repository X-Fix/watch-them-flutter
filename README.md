# WatchThemFlutter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Contents

- [Introduction](#introduction)
- [Caveats](#caveats)
- [Starting the App](#starting-the-app)
- [Running tests](#running-tests)
- [RxJs](#rxjs)
- [Generic answers](#generic-tests)

## Introduction

Hi there! I hope you enjoy this little project of mine

The name of the project hints at the initial idea I had for the cards/posts appearance when I thought I'd like to have some fun with the animations in this project to make it more interesting to interact with, but I also started to realise I was getting a bit carried away from the requested functionality, so I hope you at least get some satisfaction from the hover trails (like popping bubble wrap)

## Caveats

### Minimum screen size

While I tried to make sure the app was relatively responsive, I figured it would be impossible to have it fit 10 columns ergonomically on a phone-sized screen and maintain a pressable button size (and readable font size). So there is a cap on the minimum content width below which you'll have to start scrolling horizontally

### Bloated bundle

Normally, when starting a new project, I would spend more time creating a streamlined build config with only whats necessary for the app/library I'm creating. But I figured in this case an out-the-box from Angular build will do

### Inconsistent async test approach

It's been a year (and a couple NG versions) since I've sparred with Testbed so I just went with what worked here rather than spending too much time finding the perfect approach. Given some more time to re-acquaint myself, I would've improved the tests quality

## Starting the app

This one gets a bit tricky so read carefully before continuing...

To open the app in your browser, run the following:

_npm_

```shell
$ npm run start
```

_yarn_

```shell
$ yarn start
```

## Running tests

To run the tests (headless, once. Just validating they pass), run the following:

_npm_

```shell
$ npm run test
```

_yarn_

```shell
$ yarn test
```

If you need to debug:

_npm_

```shell
$ npm run test:watch
```

_yarn_

```shell
$ yarn test:watch
```

## RxJS

To view the RxJS bonus answer, checkout the branch using:

```shell
$ git checkout RxJS
```

## Generic answers

1. JWTs are pretty safe as long as no one gets hold of the secret you use to generate them. I think the most common issue specific to JWTs (and cookies) would be using JWTs with no expiration time

2. Cross-site scripting (XSS) attacks are the first thing that come to mind, ie. script(s) that get executed on the recipient's machine when parsed. Second would be cookie sniffing; eg. including a pixel with the `src` pointing to a server controlled by the bad actor for example.

   These kinds of attacks can be mitigated by sanitizing the HTML, although this is not perfect as there are many ways to get around basic sanitization methods.

3. Immutable objects are those that cannot have their values changed once defined

   - a) Pretty much all primitives (string, number, boolean)
   - b) Immutable objects are very easy to compare for differences. For example if you have a `User` object with an `age` property, when you update the user's age you assign a new copy of the user with the new age value. Then if anything needs to know if the user was updated, they can do an identity comparison between the old user object and the current one. The downside of this is that constantly replacing whole objects because of a property update can be relatively resource intensive, both from initialising new objects and from the garbage collector freeing up memory from the old objects (ie. gc thrashing)
   - c) Discipline, I guess? Avoiding mutating objects, understanding the concepts behind immutability (goes well with concepts like side effects and functional programming) Implementing tools to help enforce the correct practices like Immutable.js

4. It's already pretty quick, especially at 2.8MB initial load, but according to Lighthouse not all the JavaScript chunks are necessary for first render so I would suggest lazy-loading those. If you wanna get really gnarly: Only load CSS and HTML (SSR/pre-render and cache) required to render the login form, and a service worker that fetches (and caches) the rest of the JavaScript onload.

5. This is a bit tricky because I'm not quite sure I understand the options. I think a company supplied image is fine as long as it includes the tools I need to do my job effectively (don't ask me to write code in Notepad++). I have a hardware preference, but that's cos of the operating system that comes with it, and the performance of a machine affects my productivity more than my comfort. Ultimately I think it depends on the requirements of your role (do you handle sensitive PII, do you need to run beefy BE servers and databases locally) as those requirements are more important than one's own preference
