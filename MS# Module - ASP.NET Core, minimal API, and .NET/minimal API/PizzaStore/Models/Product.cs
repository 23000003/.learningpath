public class Product
{
    public string Id { get; set; }
    public string Title { get; set; }
    public string Bruh { get; set; }
    public string Hey { get; set; }

    public Product(string id, string title, string bruh, string hey)
    {
        Id = id;
        Title = title;
        Bruh = bruh;
        Hey = hey;
    }
}