require 'json'
require 'open-uri'

puts "destroying old ingredients"
Ingredient.destroy_all


puts "Creating ingredients"
url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
ingredients_serialized = open(url).read
ingredients = JSON.parse(ingredients_serialized)

ingredients["drinks"].each do |ingredient|
  new_ingredient = Ingredient.create!(
    name: ingredient['strIngredient1']
  )
  puts "created ingredient with id #{new_ingredient.id}"
end

puts "Finished"
