# Pet Food Prices

### How to install dependencies (using Bower and NPM) using:
1. In the `/lib` subdirectory, run `bower install`, and run `npm install`

### How to run the web server:
1. In the `seasonal-sales` directory, run `http-server`

### Objective: Create and display JSON files for both dog food and cat food</h2>

1. Use handlebars template to build div displaying all brands of dog food.
    11. Brand (dog_brands.name)
    1. Type (dog_brands.types.type)
        1. Since each ‘dog_brands’ has multiple ‘type’, the hbs template may require nested {{#each}} statements.
    1. Size (dog_brands.types.volumes.name)
    1. Price (dog_brands.types.volumes.price)
1. Bind dog food JSON file to hbs template for dog food.
1. Create similarly structured JSON file for cat food based on grid provided.
1. Use handlebars template to build div displaying all brands of cat food.
1. Bind cat food JSON file to hbs template for cat food.