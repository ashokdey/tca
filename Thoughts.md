# Assignment

What I understood anout the problem is making API calls together to build a combined hotel object for both the ```HotelDetails``` and ```HotelList``` containers.

## Environment

- I have used ```Create React App``` to save time.
- I have used ```Ant Design``` for UI
- I did built a Strater Kit in 2017 which uses HMR, I used it last year but did not use it because it's not updated, you can have a look at it here: [Starter Kit](https://github.com/knaxus/react-simple-starter)

## Note on UI

- I find myself comfortable with Design Systems
- I tried to have a basic Mockup and used Ant-Design to Buid it

## File Structure

- Components: To store the reusable UI elements
- Pages: Arranged in terms of pages like listing, details pages where components are being used

## Filenames

I prefer to use ```.jsx``` for the files where I have to deal with React components. I do so for the following reasons:

- Better intellisesnse
- My IDE setup provides quick code-snippets which helps in productivity, like auto closing of tags is one of the addons I use in VS Code

## Why I haven't used

### Redux

- I did not find it a good reason to use redux here, adding an extra library here. I find it a good idea to keep things simple and try to avoid libraries.

- Given an option, I would like to learn and use the Context API and MobX

### Style Components

- I am yet to explore it. I used to code HTML/CSS back in 2012 to 2014, I am re-visiting them again.  Most of the styling and layouts were handled by **Ant Design**, I prefer to work with Design Systems

- I have good undestanding of Layout, Grids, UI and UX

### About UI / UX

- I tried my best to keep the user informed like use of loading indicators and 404 page.
- I tried to keep the mockup of Treebo

### About the Code

- Components
  - They are reusable UI blocks
  - Search & Reviews are dummy and only completes the UI of the page also showing the reusablity
- Pages
  - They are collection of the pages we have in view
  - They use components
  - An entity inside page like ```HotelDetails`` can have files like component, container, actions, reducer, and so on.
- Utils
  - It contains the helper functions that can be re-used

### A word on ```resolveAPICalls```

This is a util method that returns a Promise, this can be used to get the data from the either single or multiple urls.
This util method can be further refactored to use as an stand alone API caller, can be further converted into independed reducers as well.

I avoid doing few of the above things because I am still learning them. But I know there is a scope to improve it.

### Others

- I only added ```moment``` just for the dummy comments and make the UI similar to a hotel detail page.