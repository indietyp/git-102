# Git 102 - Advanced Git

This is the repository for the Git 102 course. The course is part of the course offering of the IMPRS for Cell,
Developmental and Systems Biology.

The exercises listed in the different chapters do not need any access to repositories on GitLab or GitHub. However, if
you want to try out the exercises that involve forking a repository, you can use the following
repository: [Git 102 Sandbox](https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git)

This course uses the aforementioned repository as a sandbox for the exercise in the course offered by the IMPRS. You can
fork the publicly available [GitHub equivalent](https://github.com/indietyp/git-102-sandbox) of the repository on GitHub
and use it for the exercises if you do not have access to the GitLab instance of the MPI-CBG. Every mention of the
GitLab repository in this book can then be replaced with your fork of the GitHub repository.

You can do with this book whatever you want. If you find any errors or have suggestions for improvements, please open an
issue or a merge request. Thank you! :)

## Creating the book

This book uses [mdBook](https://github.com/rust-lang/mdBook) to generate a static website from markdown files. To run
any of these commands you need to have [Rust](https://www.rust-lang.org/) installed.

You can install all required dependencies with the following command:

```bash
cargo install mdbook mdbook-linkcheck mdbook-mermaid mdbook-emojicodes mdbook-admonish
```

You can then build the book with the following command:

```bash
mdbook build
```

You can also serve the book locally with the following command:

```bash
mdbook serve
```

## License

This book is licensed under the [CC0 1.0 Universal](LICENSE-CC0.md) license.

> This means you can do with it whatever you want. You don't even have to give attribution. Although, I would appreciate
> it if you did. :)
>
> This does not mean this work is given into the public domain. (Although, I would like that.) This is because it isn't
> possible to attribute something to the public domain in some jurisdictions. (e.g. Germany)

All software in this repository is dual-licensed under the [MIT](LICENSE-MIT.md) and [Apache 2.0](LICENSE-APACHE.md)
licenses.
