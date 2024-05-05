# VGArchived: Video Game Listing

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },

```

**NOTE: This repository will be permanently archived in favor of porting the entire codebase to React and Django. You can check out and contribute to the [new repository](https://github.com/ShySpaceSheep/reactjs-vgarchived) as soon as it becomes publicly available!** 

# Project Description

![image](https://github.com/ShySpaceSheep/csit327F1-projectPT/assets/82251402/b6a94978-5abe-44ee-ad25-4825b22439f7)

The project utilizes ReactJS and Springboot to make a transactional website with Supabase. In our case, we've decided to create VGArchived, a [MyAnimeList](https://myanimelist.net/) clone but for tracking games! 

![image](https://github.com/ShySpaceSheep/csit327F1-projectPT/assets/82251402/fb44fbc4-4f70-4049-88e1-19762faf1050)
*How many games have you played in your life?*

It's time to ditch the ol' excel sheet or text document for tracking your games and start using our website. It's simple and easy to pick up as well! Just search the game and add it to your list and update it accordingly however you like it to be.

## Features
VGArchived for the most part has been inspired by MyAnimeList so expect most of the features to be relatively the same.

- Account management
- Browse different games in our database.
- Add, edit, and delete games in your list.
- Create and share collection of games for recommendation.
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
