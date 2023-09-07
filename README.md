# Rick and Morty Product Shop

## Description

This is a project created for a Take-Home Coding Test. It's objective is to implement a product listing page with shopping cart. It has to use React with TypeScript, but the rest is up to me.

So I'm going to create a Rick and Morty shop where user can buy, filter or search different kind of products.

## Tools

This is a list of all the tools that I used during the development of the project.

- ViteJS (React + TS + [SWC](https://swc.rs/))
- [Zustand](https://github.com/pmndrs/zustand) (App Store)
- Eslint
- Prettier
- Sweet Alert 2.

## Challenges / Decisions

While I was working io the project, the first important decision I had to make was to choose with which framework would I work. 🤔

Since create-react-app deprecation, the main React tools that are being used (and recommended by React docs) are NextJS, ViteJS, and Gatsby (if you want to work with GraphQL).

Thus my decision had to be one of them... **So I choosed to work with ViteJS.** Basically because I was more familiar to that framework than the others, and it is more similar to the old create-react-app.

> In my opinion, NextJs is easier to work with SSR and it would be better for this project. But as it is a test and it won't need SSR, I choosed ViteJS.

During the project installation I had some issues with the eslint/prettier config. When using `npx eslint --init` and choosing a popular style guide for my code, I had some errors. For a long time I didn't had to initialize eslint with a ViteJs project from scratch, which is why I had to look for them and find which main warnings where better to disable. 😡

After configuring the project, I had to decide another important thing. **How I will manage the global state??**

> I had in mind three options, again. Zustand, React Context and Redux.

To help me to decide which would I use, I analyzed which was better in each case.

- Zustand

  - Simple tool, easy to work.
  - 0 boilerplate.
  - Its size is very small.
  - No immutability.
  - It lets you create the store the way you want.
  - Easy to scale, but not for big projects.

- Redux

  - A lot of boilerplate.
  - Immutability.
  - Needs too much writting for small changes.
  - Better for medium projects.
  - You have to create the store as they mark in the docs.

- React Context
  - Simple to use.
  - Don't need to install anything.
  - It is better for states that doesn't change a lot.

After analyzing these tools, I decided to choose Zustand.

The reason was that I hadn't a lot of time to work with the project, so I tried to avoid losing time with the boilerplate due to the deadline. If in a future we would like to add some new feature, it would be easier to add it using Zustand as well. And lastly, I didn't use React Context because the "Cart state" will have many changes and it could affect the app performance.

...

## How do I initiate the project?

Having the project zip, you only have to extract files. After that, you only have to do:

```
   $ npm i
   $ npm run dev
```

Now, you'll see something like this:

```
VITE v4.4.9  ready in 591 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

If you click on the link, you will be able to see the project.
