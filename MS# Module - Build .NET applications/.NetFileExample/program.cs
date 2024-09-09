// 📂 stores
//     📄 sales.json
//     📄 totals.txt
//     📂 201
//        📄 sales.json
//        📄 salestotals.json
//        📄 inventory.txt
//     📂 202

// To read through and list the names of the top-level directories, use the Directory.EnumerateDirectories function.
IEnumerable<string> listOfDirectories = Directory.EnumerateDirectories("stores");

foreach (var dir in listOfDirectories) {
    Console.WriteLine(dir);
}

// Outputs:
// stores/201
// stores/202


//To list the names of all of the files in a directory, you can use the Directory.EnumerateFiles function.
IEnumerable<string> files = Directory.EnumerateFiles("stores");

foreach (var file in files)
{
    Console.WriteLine(file);
}

// Outputs:
// stores/totals.txt
// stores/sales.json


// Find all *.txt files in the stores folder and its subfolders
IEnumerable<string> allFilesInAllFolders = Directory.EnumerateFiles("stores", "*.txt", SearchOption.AllDirectories);

foreach (var file in allFilesInAllFolders)
{
    Console.WriteLine(file);
}

// Outputs:
// stores/totals.txt
// stores/201/inventory.txt



using System.IO;
using System.Collections.Generic;

var salesFiles = FindFiles("stores");

foreach (var file in salesFiles)
{
    Console.WriteLine(file);
}

IEnumerable<string> FindFiles(string folderName)
{
    List<string> salesFiles = new List<string>();

    var foundFiles = Directory.EnumerateFiles(folderName, "*", SearchOption.AllDirectories);

    foreach (var file in foundFiles)
    {
        // The file name will contain the full path, so only check the end of it
        if (file.EndsWith("sales.json"))
        {
            salesFiles.Add(file);
        }
    }

    return salesFiles;
}
// Outputs
// stores\sales.json
// stores\201\sales.json
// stores\202\sales.json
// stores\203\sales.json
// stores\204\sales.json



Console.WriteLine(Directory.GetCurrentDirectory()); //Determine the current directory


//To help you use the correct character, the Path class contains the DirectorySeparatorChar field.
Console.WriteLine($"stores{Path.DirectorySeparatorChar}201"); //Special path characters

// returns:
// stores\201 on Windows
//
// stores/201 on macOS


// Join Paths : For instance, if you want to get the path to the stores/201 folder, you can use the Path.Combine function to do that.
Console.WriteLine(Path.Combine("stores","201")); // outputs: stores/201


Console.WriteLine(Path.GetExtension("sales.json")); // outputs: .json


//The Path class contains many different methods that do various things. 
// You can get the most information about a directory or a file by using the DirectoryInfo or FileInfo classes, respectively.
string fileName = $"stores{Path.DirectorySeparatorChar}201{Path.DirectorySeparatorChar}sales{Path.DirectorySeparatorChar}sales.json";

FileInfo info = new FileInfo(fileName);

Console.WriteLine($"Full Name: {info.FullName}{Environment.NewLine}Directory: {info.Directory}{Environment.NewLine}Extension: {info.Extension}{Environment.NewLine}Create Date: {info.CreationTime}"); // And many more
