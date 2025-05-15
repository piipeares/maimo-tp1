import RecipeCard from "@/app/components/RecipeCard";
import parseData from "@/data/recipes";

const RecipesGrid = () => {
  return (
    <div className="recipes_grid">
    
    {parseData.recipes.map((recipe) => (
      <RecipeCard key={recipe.id} name = {recipe.name} image = {recipe.image} />
      ))}
    </div>
  )
}

export default RecipesGrid