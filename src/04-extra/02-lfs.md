# LFS

`LFS` or `Large File Storage` is a Git extension that allows you to store large files outside of your repository. This
is useful for storing binary files such as images, videos, and other media files. It is also useful for storing large
data files.

Many Git hosting providers such as GitLab and GitHub support LFS. This means that you can store your large files on the
Git hosting provider's servers.

This is important, because Git is not designed to handle large files. Remember back
to [Demystifying Git](../00-theory)
where we talked about how Git stores the entire history of your project. This means that if you have a 1GB file in your
repository then every time you clone the repository you will download the entire history of the project, including the
1GB file. This is not ideal. Especially if you have many large data files in your repository. Once tracked by Git, they
will be stored in the repository history forever!

Large File Storage is an escape hatch for this problem. It allows you to store large files outside of your repository
and only store a pointer to the file in your repository. This means that when you clone a repository you will only
download the pointer and not the actual file. This is much more efficient.

You can use LFS by installing the `git-lfs` package. You can then enable LFS for a repository by
running `git lfs install`.

To track a file with LFS you can run `git lfs track <file>`. This will add a pointer to the file in your repository and
store the actual file outside of your repository.

You can also track files with LFS by adding a `.gitattributes` file to your repository. This file allows you to specify
which files should be tracked with LFS. You can also specify which files should be tracked with LFS by default. This is
useful if you have many files that you want to track with LFS.

When you clone a repository that uses LFS you can then download the files by running `git lfs pull`.

## References

- [Git LFS](https://git-lfs.github.com/)
- [.gitattributes](https://git-scm.com/docs/gitattributes)
