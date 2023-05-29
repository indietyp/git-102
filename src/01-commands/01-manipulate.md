# Manipulating the Git History

There are a few commands that one can use to manipulate the git history. The most important ones are:

* [`git commit --amend`](#git-commit---amend)
* `git rebase`
* `git reset`
* `git revert`
* `git cherry-pick`
* `git squash`

This chapter will not cover `git rebase` as it is already covered in
the [Merging and Rebasing](../01-commands/02-merging-and-rebasing.md) chapter.

```admonish danger

Manipulating the git history is a dangerous operation. It should only be done if you know what you are doing. 
If you are unsure, ask someone for help.

You should only manipulate your git history **before** you push it to a remote repository. 
Once you have pushed your changes, you should not manipulate the history anymore. 
If you do, you will have to force push your changes. 
This will overwrite the history of the remote repository. This can cause a wide range of unintended side effects.

```

## `git commit --amend`

The `git commit --amend` command can be used to change the last commit. It can be used to:

* Change the commit message
* Add (or remove) files to the last commit
* Change the content of files in the last commit

Common options for the `git commit --amend` command are:
* `-m <message>`: Change the commit message
* `--no-edit`: Do not change the commit message
* `--allow-empty`: Allow an empty commit

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks

1. Create a new branch `<name>/amend` from the `main` branch, where `<name>` is your name. You can use the `git switch`
   command.

   ```bash,reveal
   git switch -c <name>/amend main
   git push -u origin <name>/amend
   ```

2. Create a new file `<name>.txt` where `<name>` is your name and add some text to it. Commit the file with the
   message "add
   &lt;name>.txt" and push the branch to the remote repository.

   ```bash,reveal
   echo "Hello World" > <name>.txt
   git add <name>.txt
   git commit -m "add <name>.txt"
   ```

3. How does the commit history look like?

   ```bash,reveal
    git log --oneline --graph --all
    ```

4. You want to change the commit message to "add &lt;name>.txt and add name". Use the `git commit --amend` command to
   change the commit message.

   ```bash,reveal
   git commit --amend
   ```

5. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```

6. How does the diff of the last commit look like?

   ```bash,reveal
   git show
   ```

7. You forgot to add your name to the file. Add your name to the file and commit the changes. Use
   the `git commit --amend`
   command.

   ```bash,reveal
   echo "My name is <name>" >> <name>.txt
   git add <name>.txt
   git commit --amend
   ```

8. How does the commit history look like now?

   ```bash,reveal
    git log --oneline --graph --all
    ```

9. How does the diff of the last commit look like now?

   ```bash,reveal
   git show
   ```

10. Push your changes to the remote repository.

     ```bash,reveal
     git push origin <name>/amend
     ```

11. (Optional) Remove the `<name>.txt` from the last commit. Use the `git commit --amend` command.

    ```bash,reveal
    git rm <name>.txt
    git commit --amend --allow-empty
    ```

    > **Note:** The `--allow-empty` option is required because otherwise git will not allow you to create a commit that
    has no changes.

12. (Optional) How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

13. (Optional) Try to push your changes to the remote repository. What happens?

    ```bash,reveal
    git push origin <name>/amend
    ```

14. (Optional) Fix the problem by force pushing your changes to the remote repository. (This will overwrite the history)

    ```bash,reveal
    git push --force-with-lease origin <name>/amend
    ```

    > **Note:** The `--force-with-lease` option is a safer alternative to the `--force` option. It will only overwrite
    the remote branch if the remote branch is in the same state as the local branch. This prevents you from overwriting
    changes that were made by someone else.
