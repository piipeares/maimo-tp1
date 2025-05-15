import Image from "next/image";

const RecipeCard = ({ name, image }) => {
  return (
    <div className="recipe_card">
      <Image src={image} width={300} height={300} alt={name} />
      <h3 className="recipe_name">{name}</h3>
      <button className="recipe_button">Ver receta</button>
    </div>
  );
};

export default RecipeCard;



