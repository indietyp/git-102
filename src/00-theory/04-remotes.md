# Remotes

Remotes are repositories that are not on your local machine. You can use remotes to push your changes to a remote server
or to pull changes from a remote server. You can also use remotes to share your changes with other users

## Multiple remotes

You can add multiple remotes to a repository. This is useful if you want to push your changes to multiple remote
repositories. You can also use this to pull changes from multiple remote repositories. This is especially useful when
you fork a repository and want to pull changes from the original repository.

## Adding a remote

You can add a remote with the `git remote add` command. The command takes two arguments, the name of the remote and the
URL

```bash
git remote add <name> <url>
```

## Removing a remote

You can remove a remote with the `git remote remove` command. The command takes one argument, the name of the remote.

```bash
git remote remove <name>
```

## Renaming a remote

You can rename a remote with the `git remote rename` command. The command takes two arguments, the old name of the

```bash
git remote rename <old-name> <new-name>
```

## Changing the default remote

You can change the default remote with the `git push -u` command. The command takes two arguments, the name of
the remote and the name of the branch.

```bash
git push -u <name> <branch>
```

## Listing remotes

You can list all remotes with the `git remote` command. The command takes one optional argument, the name of the remote.

```bash
git remote
git remote -v
```

## Exercise

### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

Because we cloned the repository from GitLab, the remote repository is already added to our local repository. You can
see this with the `git remote` command.

```bash,reveal
git remote
```

### Tasks

1. Create a new branch `<name>/multiple-remotes` and push the branch to the remote repository.

    ```bash,reveal
    git switch -c <name>/multiple-remotes
    git push -u origin <name>/multiple-remotes
    ```

2. Fork the repository `git-102-sandbox` on GitLab. For more information on how to fork a repository, see
   the [chapter on GitLab forks](../03-gitlab/02-forks.md). Add the fork as a remote to your repository. The name of the
   remote should be `fork`. Push your changes to the fork.

    ```bash,reveal
    git remote add fork <url>
    git push fork main
    ```

3. List all remotes. How many remotes are there? What are the names of the remotes?

    ```bash,reveal
    git remote
    ```

4. Create a new file `<name>.txt` where `<name>` is your name and add some text to it. Commit the file and push the
   branch to the remote repository.

    ```bash,reveal
    git add <name>.txt
    git commit -m "Add <name>.txt"
    git push
    ```

5. Look at the commit history of your local repository. How does the commit history look like?

   ```bash,reveal
   git log --oneline --graph --all
   ```

6. Look at the commit history in our sandbox repository on GitLab. How does the commit history look like? Did you push
   the changes to the sandbox repository?

7. Look at your fork on GitLab. How does the commit history look like? Did you push the changes to the fork?

8. Push your changes to the `fork` remote.

    ```bash,reveal
    git push fork <name>/multiple-remotes
    ```

9. Look at the commit history of your fork on GitLab. Did something change?

10. Remove the `fork` remote.

    ```bash,reveal
    git remote remove fork
    ```

11. List all remotes. How many remotes are there? What are the names of the remotes?

    ```bash,reveal
    git remote
    ```

## Resources

- [Git documentation: git-remote](https://git-scm.com/docs/git-remote)
- [Git documentation: git-push](https://git-scm.com/docs/git-push)
