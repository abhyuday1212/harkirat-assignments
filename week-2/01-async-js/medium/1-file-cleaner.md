## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```


import fs from 'fs'

fs.readFile("file1.txt", "utf-8", function (err, str) {
    try {
        console.log("Original Data :", str);
        const cd = str.trim().replace(/\s+/g, ' ');
        console.log("Modified Data :", cd);
    } catch {
        console.log(err);
    }
})