# .gitattributes

The `.gitattributes` file is used to specify attributes for paths and files in your repository. It is used to specify
how Git should treat files. For example, you can specify that a file should be treated as binary, or that a file should
be ignored.

The `.gitattributes` file is a text file that is stored in the root directory of your repository. Other tools,
like `GitHub` also use this file to specify how files should be treated.

The `.gitattributes` file uses the following syntax:

```text
pattern attr1 attr2 ...
```

The same pattern rules as for the `.gitignore` file apply, expect that negative patterns are not allowed and that paths
are not recursively matched. And patterns that match a directory do not recursively match paths inside that directory.

The `pattern` is a path or file name. The `attr` is an attribute that should be applied to the path or file. There are
many different attributes that can be used. The most important ones are:

* `binary`: This attribute tells Git that the file is binary. This means that Git will not try to merge the file when
  merging branches.
* `text`: This attribute tells Git that the file is text. This means that Git will try to merge the file when merging
  branches.
* `eol`: This attribute tells Git how to handle line endings. The possible values are `lf`, `crlf` and `native`.

## Resources

* [Git documentation](https://git-scm.com/docs/gitattributes)
