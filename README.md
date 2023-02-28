# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

### Screenshot

!["A screenshot of the challenged done"](./images/Screenshot-%20Frontend%20Mentor%20-%20Ping%20coming%20soon%20page%20-%20.png)

### Links

- Solution URL: [my repo](https://github.com/Emmanuel-Xs/ping-coming-soon-page-master)
- Live Site URL: [a netlify app](https://velvety-froyo-f53683.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- FontAwesome Icons
- Google Fonts

### What I learned

I learnt of the `oninput eventListener` which pays attention to the changes of input element. I came across it, when I was trying to validate the email address, I tried the following when trying to validate my input element of type `email`

- Using `Html` and `CSS` only with the pattern attributes on the `email` input and the `:valid` and `:invalid` element pseudo element with some styling for errors to show or not
  - But you can use `CSS` only to prevent you from submitting the form (having in mind that i have only one error msg)
- So I tried adding some `javascript` to facilitate the process but it leads to an edge case where after submitting a form with the error msg showing, if I correct the email it won't allow me to submit the correct email.
- I just scraped the whole idea of using css validation and tried using `js` and because I know sth about `observer` and `mutationObserver` to be precise.
  - **Now the issue is to solve an edge case problem where if the user puts a wrong email and submits it, of course it will bring an error. so I want that as soon as he puts the correct email format the error message will vanish**.
  - I tried using the `mutationObserver` but it didn't work Because it focuses on `attributes` not `properties`, I tried using chatGPT to get an understand of the code and the `mutationObserver` as a whole but I haven't gotten anywhere
- Then I came across the `oninput eventListener` when i was trying to learn more about the `mutationObserver` and its `quirkiness` in a youtube channel called `Knowledge Base` by an Indian guy with the title  `HTML Detect input value change with mutationObserver` where he gave reasons why `mutationObserver` will likely not work and should use the `oninput eventListener` instead.
  - There is this youtube channel called `dcode` where i learnt more on `oninput eventListener` in his video called `What's the difference between the Input and Change Event in Javascript`.

I also had to go back and review my `grid layout` fundamentals a little bit in order for me to style the email input the submit button for the mobile version and the desktop version.

- since by default a `grid layout` put things in one column, so there is not much hassle in styling it because everything is just the way i wanted
  - but when i wanted to adjust the form elements for the desktop version, I couldn't get it right at first because we have:
    - the email input
    - the error msg
    - and the submit button

    so even if i use

    ``` css
    .desc-form {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 2fr;
    }
    ```

   It didn't work as intended because the error msg is the second element there so i had to do it like this

    ``` css
    .desc-form {
     grid-template-columns: 2fr 1fr;
      grid-template-rows: 1fr 1fr;
      grid-template-areas:
       "email button"
       "error error";
    }
    ```

I also learnt that you can use `grid` in place of `flexbox` in many places as `grid` is more convenient to use.

### Continued development

I still want to keeps on doing more challenges as they say practice makes perfect *hahaha*

### Useful resources

- [kevin powell](https://www.youtube/kevinpowell) - I learnt more about the `:valid` pseudo elements and using `CSS` only to validate your form
- [dcode](https://www.youtube/dcode) where i learnt more on `oninput eventListener` in his video called `What's the difference between the Input and Change Event in Javascript`.
- [knowledge base](https://www.youtube/knowledgebase) helped me in getting to know about the `oninput event` in his video `HTML Detect input value change with mutationObserver`

## Author

- Github - [Emmanuel Xs](https://github.com/Emmanuel-Xs)
- Frontend Mentor - [Emmanuel-Xs](https://www.frontendmentor.io/profile/Emmanuel-Xs)
- Twitter - [@Emma Nwaohiri](https://www.twitter.com/EmmaNwaohiri)
