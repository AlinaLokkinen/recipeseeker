# Recipe Seeker

Recipe Seeker is a React-based web application for browsing and viewing recipes. Users can search for recipes, view detailed instructions, ingredients, and watch related cooking videos.

The app will also have a randomizer to help a user choose a recipe without having to browse all the available choices.

The app was created as part of my thesis to practice modern web development using React and Tailwind.

## Features

- **Browse Recipes:** Search and view recipes fetched from an external API.
- **Detailed View:** See recipe name, category, image, ingredients, and instructions.
- **Video Instructions:** If available, watch cooking instructions on YouTube.
- **Random recipes:** Have the app choose a recipe for you, based on your choice of category.
- **Responsive UI:** Styled with Tailwind CSS for a modern look.


### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/alinaLokkinen/recipeseeker.git
   cd recipeseeker
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your API URL:
   ```
   VITE_API_URL=https://www.themealdb.com/api/json/v1/1/
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage

- Browse recipes by category.
- Click on a recipe to view details.
- Ingredients and instructions are listed.
- Let the app choose a recipe for you based on your choice of category
- If a YouTube video is available, it is shown in the recipe info.

## Technologies

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Themealdb API](https://www.themealdb.com/api.php)

## File Structure

```
src/
  components/
    Categorylist.jsx
    Home.jsx
    Navbar.jsx
    Randomizer.jsx
    Recipe.jsx
    Recipelist.jsx
  App.css
  App.jsx
  Main.jsx
```

## License

This project is licensed under the MIT License.

---

**Created by Alina Lokkinen**