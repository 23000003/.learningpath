## Dependencies
``dotnet add package Swashbuckle.AspNetCore --version 6.5.0``
``dotnet add package Microsoft.EntityFrameworkCore.InMemory --version 8.0``

## Set up SQLITE

``dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 8.0``
``dotnet tool install --global dotnet-ef``
``dotnet add package Microsoft.EntityFrameworkCore.Design --version 8.0``

**Migrate**
``dotnet ef migrations add <Migration Name>``
**Update**
``dotnet ef database update``