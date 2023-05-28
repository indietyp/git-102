# Submodules

Submodules are a way to include one repository into another repository. This is useful if you want to include a library
or a framework into your project. The submodule is a pointer to a specific commit in the submodule repository. This
means that you can update the submodule to a newer version of the library or framework, but you can also stay on a
specific version.

## Adding a Submodule

You can add a submodule with the `git submodule add` command. The command takes two arguments, the URL of the repository
and the path where the submodule should be added. The path is relative to the current directory. The command will clone
the repository and add a pointer to the commit that the submodule is currently on to the parent repository. The
submodule is not checked out by default, you have to do this manually.

```bash
git submodule add <remote> <path>
```

## Updating a Submodule

To update a submodule, you have to go into the submodule directory and pull the changes. After that, you have to go back
to the parent repository and commit the changes.

```bash
cd <path>
git pull
cd ..
git add <path>
git commit -m "Update submodule"
```

## Deleting a Submodule

To delete a submodule, you have to remove the submodule from the `.gitmodules` file and from the `.git/config` file.
After that, you can remove the submodule directory and commit the changes.

```bash
git rm --cached <path>
rm -rf <path>
git add .gitmodules
git commit -m "Remove submodule"
```

## Cloning a Repository with Submodules

If you clone a repository that contains submodules, the submodules will not be checked out by default. You have to use a
special command to clone the repository and check out the submodules.

```bash
git clone --recurse-submodules <remote>
```

You can also use the `git submodule update` command to check out the submodules after cloning the repository.

```bash
git clone <remote>
git submodule update --init --recursive
```

## Exercise

### Setup

Create a new local repository `<name>-submodule` where `<name>` is your name. Add a file `README.md` with some text to
the repository and commit the changes.

### Tasks

1. Add the repository `git-102-sandbox` as a submodule to your repository. The path should be `git-102-sandbox`.
   Commit the changes.

   ```bash,reveal
   git submodule add https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git git-102-sandbox
   ```

2. Check out your branch `<name>/tags` (or `<name>/branches`) from the remote repository. You can use the `git switch`
   command.

   ```bash,reveal
    cd git-102-sandbox
    git switch -c <name>/tags origin/<name>/tags
    cd ..
    ```

3. How does the commit history look like?

    ```bash,reveal
    git log --oneline --graph --all
    ```

4. Update the submodule to the most recent commit.

    ```bash,reveal
    cd git-102-sandbox
    git pull
    cd ..
    ```

5. Update the submodule pointer in the parent repository and commit the changes.

    ```bash,reveal
    git add git-102-sandbox
    git commit -m "Update submodule"
    ```

6. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

As you can see the commit history of the parent repository does not change when you update the submodule. This is
because the submodule is a pointer to a specific commit in the submodule repository. If you want to update the submodule
pointer to a newer commit, you have to do this manually. Changes in the submodule repository will not show up in the
log.

## Resources

- [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules)
- [Git Submodules: Adding, Using, Removing, Updating](https://chrisjean.com/git-submodules-adding-using-removing-and-updating/)
