# Tags

Tags are quite similar to branches, but they are used for different purposes. While branches are used to develop new
features, tags are used to mark specific points in history as being important. This is usually used to mark releases (
e.g. `v1.0.0`), but can also be used to mark other important points in history. While they are also refs, they are
different in the sense that they do not move with the newest commit, but always point to the same commit.

This enables some interesting use cases, e.g. you can use tags to mark specific commits as being important, e.g. you can
tag a commit as being a release, or you can tag a commit as being a specific version of a package. This is often used in
software development, as it allows end-users to inspect the state of the repository at the time of the release.

## A Detour - Semantic Versioning

As mentioned above, tags are often used to mark specific versions of a package. While you can use any versioning scheme
you want, and you can use tags for any purpose you want, it is often a good idea to use a well-known versioning scheme.
This makes it easier for people to understand what a specific tag means.

The most common versioning scheme is [Semantic Versioning](https://semver.org/), sometimes better known as semver. Many
programming languages like Python, JavaScript, Rust, etc. have tools that can automatically check if a version is valid.

Semantic versioning says that a specific version should be of the format: `MAJOR.MINOR.PATCH`, where you increment:

* `MAJOR` when you make an incompatible API change
* `MINOR` when you add functionality in a backwards compatible manner
* `PATCH` when you make backwards compatible bug fixes

If you are not familiar with the term API, it stands for Application Programming Interface and is a way to describe how
users can interact with your code. This can be a library, a command line tool, a web service, etc. An API change is a
change to the way users interact with your code, e.g. you change the name of a function, you change the name of a
command line argument, you change the name of a web service endpoint, etc.

The `MAJOR` version `0` is special and indicates that the package is in development and that the API is not stable yet,
the API of the package can change at any time.

A git tag that follows the semver scheme would look like this: `v0.3.0`. The `v` is not part of the version, but is used
to indicate that this is a version tag. Monorepos (repositories that contain multiple packages) often use the package
name in front of the version, e.g. `error-stack@v0.3.0`.

## Variants of Tags

There are two variants of tags, annotated and lightweight tags. Lightweight tags are just a pointer to a commit, while
annotated tags are a full git object. This means that annotated tags contain more information, e.g. the tagger, the
date, and a message. Annotated tags are usually used for releases, while lightweight tags are used for other purposes.

## Creating Tags

You can create a tag with the `git tag` command. If you do not specify a commit, the tag will be created on the most
recent commit. You can create an annotated tag by adding the `-a` flag, and you can specify a message with the `-m`
flag.

```bash
git tag v0.1.0 # create a lightweight tag
# or
git tag -a v0.1.0 -m "Initial release" # create an annotated tag
```

To create a tag on a specific commit, you can specify the commit hash or a branch name.

```bash
git tag v0.1.0 1234567 # create a tag on the commit with the hash 1234567
# or
git tag v0.1.0 main # create a tag on the commit that the branch main points to
```

## Exercise

### Setup

If you did not already, clone the repository for this course:

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

Create a new branch `<name>/tags` from the `main` branch, where `<name>` is your name. You can use the `git switch`.

```bash
git switch -c <name>/tags main
```

### Tasks

1. Create a new file `<name>.txt` where `<name>` is your name and add some text to it. Commit the file and push the
   branch to the remote repository.

2. How does the commit history look like?

   ```bash,reveal
   git log --oneline --graph --all
   ```

3. Create a new tag `<name>@v0.1.0` on the most recent commit.

   ```bash,reveal
   git tag <name>@v0.1.0
   ```
   
4. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```
   
5. Modify the file `<name>.txt` and commit the changes.

6. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```
   
7. Push your changes to the remote repository.

   ```bash,reveal
   git push origin <name>/tags
   ```
   
8. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```
   
9. Inspect the remote repository on GitLab. How does the commit history look like? Do you spot something odd?

10. Tags are not pushed to the remote repository by default. Push the tag to the remote repository.

    ```bash,reveal
    git push origin <name>@v0.1.0
    ```
    
11. Inspect the remote repository on GitLab. How does the commit history look like now?

12. Wait for everyone to finish task 11.

13. Fetch all changes from the remote repository.

    ```bash,reveal
    git fetch
    ```
    
14. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

## Resources

* [Git Tag Documentation](https://git-scm.com/docs/git-tag)
* [Semantic Versioning](https://semver.org/)
* [Git Tag Tutorial](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag)
