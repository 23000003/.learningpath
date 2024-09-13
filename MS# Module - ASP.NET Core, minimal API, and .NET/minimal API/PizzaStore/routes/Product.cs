using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.Linq;

//Endpoint
public static class ProductEndpoints
{
    public static void MapProductsEndpoints(this IEndpointRouteBuilder endpoints)
    {
        // Define an in-memory data store for products
        var products = new List<Product>
        {
            new Product("1", "Ferrari", "Value 1", "Value 2"),
            new Product("2", "BMW", "Value3", "Value4"),
            new Product("3", "Ford", "Value5", "Value6"),
            new Product("4", "Mazda", "Value7", "Value8")
        };

        // Map GET endpoint to retrieve all products
        endpoints.MapGet("/products", () => products);

        // Map GET endpoint to retrieve a single product by ID
        endpoints.MapGet("/products/{id}", (string id) =>
        {
            var product = products.SingleOrDefault(p => p.Id == id);
            return product is not null ? Results.Ok(product) : Results.NotFound();
        });

        // Map POST endpoint to add a new product
        endpoints.MapPost("/products", (Product product) =>
        {
            products.Add(product);
            return Results.Created($"/products/{product.Id}", product);
        });

        // Map PUT endpoint to update an existing product by ID
        endpoints.MapPut("/products/{id}", (string id, Product updatedProduct) =>
        {
            var index = products.FindIndex(p => p.Id == id);
            if (index == -1) return Results.NotFound();
            products[index] = updatedProduct;
            return Results.Ok(updatedProduct);
        });

        // Map DELETE endpoint to remove a product by ID
        endpoints.MapDelete("/products/{id}", (string id) =>
        {
            var index = products.FindIndex(p => p.Id == id);
            if (index == -1) return Results.NotFound();
            products.RemoveAt(index);
            return Results.NoContent();
        });
    }
}