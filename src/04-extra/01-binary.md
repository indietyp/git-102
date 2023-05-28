# Binary File Support

Git was primarily designed for code, in fact, it was originally designed for the Linux kernel. This means that it is not
very good at handling binary files. Binary files are files that are not human readable, such as images, videos, and
other media files. They are also used for storing large data files.

Even if your file has text in it, there's a good chance it isn't a text file. For example, Microsoft Word documents are
not text files, they are binary files. This is because they contain formatting information and other metadata that is
not human readable.

Large files should be tracked using [LFS](02-lfs.md), but what about other binary files?

While Git does not natively support binary file formats, you can still track them. However, you will not be able to see
the changes in the diff. This is because Git does not know how to display the changes in a human readable way.

However, there are ways to get around this. You can specify different diff tools for different file types. For example,
you can use a tool like [diff-pdf](https://vslavik.github.io/diff-pdf/) to view the differences between two PDF files.

To specify a diff tool, you can use the `diff` attribute in your `.gitattributes` file. For example, to specify that all
PDF files should be diffed using `diff-pdf` you can add the following line to your `.gitattributes` file:

```
*.pdf diff=pdf
```

You then need to specify the `pdf` diff tool in your `.gitconfig` file (if you want to use it globally) or
in `.git/config`, if you want to use it for a specific repository.

```
[diff "pdf"]
    command = diff-pdf
    
[diff "docx"]
    textconv = pandoc --to=markdown
```

## Common Diff Tools

Here are some common diff tools that you can use for different file types:

* [diff-pdf](https://vslavik.github.io/diff-pdf/) - PDF files
* [pandoc](https://pandoc.org/) - `docx` and `odt` files (needs to use `textconv` instead of `command`)
* [unoconv](https://github.com/unoconv/unoconv) - `xls`, `xlsx`, `ods`, `ppt`, `pptx`, `odp` files

## Graphical Diff Tools

Diff tools like the excellent Kaleidoscope already have built-in support for binary files. Although a lot easier to use,
they are not free.

To find the right diff tool for you, you can search for "diff tool" on your favorite search engine and if it is worth to
invest in a paid tool is up to you.


## References

* [Git Attributes](https://git-scm.com/book/en/v2/Customizing-Git-Git-Attributes)
* [Kaleidoscope](https://www.kaleidoscopeapp.com/)
* [Git Difftool and Binary Files](https://ten0s.github.io/blog/2020/04/19/git-difftool-and-binary-files)
* [How can I diff binary files in git?](https://superuser.com/questions/706042/how-can-i-diff-binary-files-in-git)
