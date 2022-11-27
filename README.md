# [Frontend Mentor - Manage landing page solution](https://satrop.github.io/Manage_Landing_Page/)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- See all testimonials in a horizontal slider
- Receive an error message when the newsletter sign up `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./Screenshot.png)

### Links

- [Solution URL](https://github.com/satrop/Manage_Landing_Page)
- [Live Site URL](https://satrop.github.io/Manage_Landing_Page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS with custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was my first "do it alone" React add. One thing I learned (and loved) was how to pill in data from a `.json` file I created, map over objects in the array then loop over that and populate the "info" and slider sections.

#### Pulling Data 
```js
const DataInfo = () => {
  return (
    <>
      {Data.map((post) => {
        return (
          <li id={post.id} key={post.id}>
            <div className="item-wrapper">
              <h3 className="title">{post.title}</h3>
              <p className="body">{post.content}</p>
            </div>
          </li>
        );
      })}
    </>
  );
};

```

I was supposed how easy it was to implement the [SwiperJS](https://swiperjs.com/react) in React, pulling in the data for the slider from another `.json` file was a little tricker than the info section and I would like to try having just one `.json` file next time but I need to do more research on how to wright that and how to pull in nested data. Being able to add the "**A11y**" module accessibility features to the SwiperJS was an awesome bonus that I only knew about because of build this out in React.

### Email Validation

Was also surprised how easy it was to get this simple Regex validator up and running and was happy with the validation animations I created, nothing fancy just the right amount of "pop" I think.

#### Validation Setup
```js
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError('Please insert a valid email');
      setClass('invalid');
    } else {
      setError(null);
      setClass('valid');
    }

  setMessage(event.target.value);
};
```

#### Form
```jsx
<form action="#">
  <fieldset>
    <legend className="visually-hidden">
      Email Sign Up
    </legend>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Updates in your inbox..."
      required
      value={message}
      onChange={handleChange}
      className={className}
    />
    <button type="submit" className="button">
      Go
    </button>
    {error && <div className="error">{error}</div>}
  </fieldset>
</form>
```

### Publishing React To GitHub

Not as easy as I thought! Took a bit of research to get this up and running and some new GitHub terminal code to bake into my flow. Not going to rehash what I had to do here because all the info I find on the [official GitHub pages](https://create-react-app.dev/docs/deployment/#github-pages).