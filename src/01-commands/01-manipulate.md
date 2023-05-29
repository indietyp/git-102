# Manipulating the Git History

There are a few commands that one can use to manipulate the git history. The most important ones are:

* [`git commit --amend`](#git-commit---amend)
* `git rebase`
* [`git reset`](#git-reset)
* [`git revert`](#git-revert)
* [`git cherry-pick`](#git-cherry-pick)
* [`git squash`](#git-squash)

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

The `git commit --amend` command can be used to change the last commit. This includes:

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
   message "add &lt;name>.txt".

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
   the `git commit --amend` command.

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

## `git reset`

The `git reset` command can be used to reset the current branch to a previous commit.

There are three different modes for the `git reset` command:

* `--soft`: All the changes that were made in the commits between the current commit and the specified commit are
  preserved in the staging area. The branch pointer (HEAD) is reset to the specified commit.
* `--mixed`: All the changes that were made in the commits between the current commit and the specified commit are
  preserved in the working directory (**not** the staging area). The index and the branch pointer (HEAD) are reset to
  the specified commit.
* `--hard`: All the changes that were made in the commits between the current commit and the specified commit are
  discarded. The index, the working directory and the branch pointer (HEAD) are reset to the specified commit.

```admonish danger

`git reset --hard` will discard all changes that were made in the commits between the current commit and the specified 
commit. This carries the risk of losing data. Use with caution. It should only be used if you know what you are doing
and you know 100% that you do not need the changes anymore.

(In some cases the `reflog` command can be used to recover lost commits. However, this is not always possible.)

```

### `git reflog`

The `git reflog` command can be used to show the history of the `HEAD` pointer. This includes all the commits that were
made in the current branch.

```bash
git reflog
```

This also includes commits that were discarded by the `git reset` command, the `git commit --amend` command and
the `git rebase` command.

Unlike actual commits, the reflog entries will be deleted after a certain amount of time. The default time is 90 days.
This means that if you want to recover a commit that was discarded more than 90 days ago, it might not be possible.

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks

1. Create a new branch `<name>/reset` from the `main` branch, where `<name>` is your name. You can use the `git switch`
   command.

   ```bash,reveal
   git switch -c <name>/reset main
   git push -u origin <name>/reset
   ```

2. Create a new file `<name>.txt` where `<name>` is your name and add some text to it. Commit the file with the message
   "add &lt;name>.txt".

   ```bash,reveal
   echo "Hello World" > <name>.txt
   git add <name>.txt
   git commit -m "add <name>.txt"
   ```

3. How does the commit history look like?

   ```bash,reveal
   git log --oneline --graph --all
   ```

4. You want to reset the branch to the previous commit. Use the `git reset` command to reset the branch to the previous
   commit. Use the `--soft` option.

   ```bash,reveal
   git reset --soft HEAD~1
   ```

   > **Note:** The `HEAD~1` argument means the commit before the current commit. You can also use the commit hash of the
   last commit.

5. How does the commit history look like now?

   ```bash,reveal
    git log --oneline --graph --all
    ```

6. How does the staging area look like now?

   ```bash,reveal
   git status
   ```

7. How does the working directory look like now?

   ```bash,reveal
   ls
   ```

8. Rollback to step 2, by creating a new commit with the message "add &lt;name>.txt".

   ```bash,reveal
   git commit -m "add <name>.txt"
   # as you can see, we do not need to add the file again, 
   # because it is already in the staging area (due to the --soft option)
   ```

9. Verify that the commit history is the same as in step 2.

   ```bash,reveal
   git log --oneline --graph --all
   ```

10. Use the `git reset` command to reset the branch to the previous commit. Use the `--mixed` option.

    ```bash,reveal
    git reset --mixed HEAD~1
    ```

11. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

12. How does the staging area look like now?

    ```bash,reveal
    git status
    ```

13. How does the working directory look like now?

    ```bash,reveal
    ls
    ```

14. Rollback to step 2, by creating a new commit with the message "add &lt;name>.txt".

    ```bash,reveal
    git add <name>.txt
    git commit -m "add <name>.txt"
    # as you can see we need to add the file again,
    # because it is not in the staging area anymore (due to the --mixed option)
    ```

15. Verify that the commit history is the same as in step 2.

    ```bash,reveal
    git log --oneline --graph --all
    ```

16. Use the `git reset` command to reset the branch to the previous commit. Use the `--hard` option.

    ```bash,reveal
    git reset --hard HEAD~1
    ```

17. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

18. How does the staging area look like now?

    ```bash,reveal
    git status
    ```

19. How does the working directory look like now?

    ```bash,reveal
    ls
    ```

    As you can see, the file `<name>.txt` is gone. This is because the `--hard` option was used. The `--hard` option
    will reset the working directory to the state of the specified commit.

20. (Optional) Recover the file `<name>.txt` by using the `git reflog` command.

    ```bash,reveal
    git reflog
    git restore --source <commit-hash> <name>.txt
    ```

    > **Note:** The `git restore` command can be used to restore files from a previous commit. The `<commit-hash>` is
    the hash of the commit where the file was still present. (You can also use the `HEAD@{<number>}` syntax to specify a
    commit instead of the commit hash. `<number>` is the number of the commit in the reflog.)

21. Ensure that the file `<name>.txt` is present again.

    ```bash,reveal
    ls
    ```

22. Push the changes to the remote repository.

    ```bash,reveal
    git add <name>.txt
    git commit -m "add <name>.txt"
    git push origin <name>/reset
    ```

## `git revert`

The `git revert` command can be used to revert a commit. This means that a new commit will be created that undoes the
specified commit.

```bash
git revert <commit-hash>
```

The common options for the `git revert` command are:

- `--no-edit`: Do not open the editor to edit the commit message.
- `--no-commit`: Do not create a new commit. Instead, add the changes to the staging area.

```admonish note

Contrary to the `git reset` command, the `git revert` command does not change the commit history. Instead, it creates a
new commit that undoes the specified commit. This means that the commit history will contain both the original commit
and the revert commit. Therefore the `git revert` command is safe to use on commits that have already been pushed to the
remote repository.

```

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

#### Tasks

1. Create a new branch `<name>/revert` from the `main` branch, where `<name>` is your name. You can use the `git switch`
   command.

   ```bash,reveal
   git switch -c <name>/revert main
   git push -u origin <name>/revert
   ```

2. Locate the commit hash of the commit that added the `markdown.md` file. You can use the `git log` command.

   ```bash,reveal
   git log --oneline
   ```

3. Revert the commit that added the `markdown.md` file. Use the `git revert` command.

   ```bash,reveal
    git revert <commit-hash>
    ```

4. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```

5. How does the staging area look like now?

   ```bash,reveal
   git status
   ```

6. How does the working directory look like now?

   ```bash,reveal
   ls
   ```

7. (Optional) Revert the revert commit.

   ```bash,reveal
   git revert HEAD
   ```

8. Push the changes to the remote repository.

   ```bash,reveal
    git push origin <name>/revert
    ```

## `git cherry-pick`

The `git cherry-pick` command can be used to apply a commit from another branch to the current branch. This means that a
new commit will be created that contains the changes of the specified commit.

```bash
git cherry-pick <commit-hash>
```

The common options for the `git cherry-pick` command are:

* `--no-commit`: Do not create a new commit. Instead, add the changes to the staging area.

```admonish note

`cherry-pick` does not change the commit history. Instead, it creates a new commit that contains the changes of the
specified commit, like `git revert` it is safe to use on commits that have already been pushed to the remote repository.

```

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

#### Tasks

This is a group exercise. You can work together with your neighbour.

1. Create a new branch `<name>/cherry-pick` from the `main` branch, where `<name>` is your name. You can use the `git
   switch` command.

   ```bash,reveal
   git switch -c <name>/cherry-pick main
   git push -u origin <name>/cherry-pick
   ```

2. You know the drill, create a new file `<name>.txt` and add it to the staging area.

   ```bash,reveal
   echo "<name>" > <name>.txt
   git add <name>.txt
   ```

3. Commit and push the changes with the message "add <name>.txt".

   ```bash,reveal
   git commit -m "add <name>.txt"
   git push origin <name>/cherry-pick
   ```

4. Wait for your neighbour to push their changes.

5. Fetch the changes from the remote repository.

   ```bash,reveal
   git fetch
   ```

6. Locate the commit hash of the commit that added the `<name>.txt` file. You can use the `git log` command.

   ```bash,reveal
   git log --oneline --graph --all
   ```

   (Hint: The commit hash should be the same as the one in your neighbour's branch.)

7. Cherry-pick the commit that added the `<name>.txt` file of your neighbour. Use the `git cherry-pick` command.

   ```bash,reveal
   git cherry-pick <commit-hash>
   ```

8. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```

9. Confirm that the `<name>.txt` file of your neighbour is present.

   ```bash,reveal
   ls
   ```

10. Push the changes to the remote repository.

    ```bash,reveal
    git push origin <name>/cherry-pick
    ```

## `git squash`

`git squash` is more of a concept than a command and describes the process of combining multiple commits into a single
commit, there are multiple ways to achieve a squash.

1. `git reset` and `git commit`
2. `git rebase`
3. `git merge --squash`

### `git reset` and `git commit`

Using a combination of the `git reset` and `git commit` commands, it is possible to combine multiple commits into a
single commit.

```bash
git reset --soft <commit-hash>
git commit
```

Remember from [`git reset`](#git-reset) that the `--soft` option of the `git reset` command will reset the HEAD to the
specified commit, but will keep the changes in the staging area. We can then create a new commit that contains the
staged changes.

### `git rebase`

The `git rebase` command can be used to rewrite the commit history of a branch. This means that the commits of a branch
can be changed, for example by combining multiple commits into a single commit.

```bash
git rebase -i <commit-hash>
# -i stands for interactive
```

The `git rebase` command will open an editor with a list of commits that will be rebased. The commits can be reordered
or combined by changing the order of the commits or by combining multiple commits into a single commit.

The commands for an interactive rebase are outlined in the editor, but we will go into more detail in the next section.

### `git merge --squash`

This command is particularly popular in repositories that prefer a clean commit history, these repositories often squash
all commits of a single merge request into a single commit before merging the merge request.

```bash
git merge --squash <branch-name>
```

(It essentially combines `git merge`, `git reset` and `git commit` commands.)

### Exercise

In this exercise, we will only use the `git reset` and `git commit` commands to squash commits.

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks

1. Create a new branch `<name>/squash` from the `main` branch, where `<name>` is your name. You can use the `git switch`
   command.

   ```bash,reveal
   git switch -c <name>/squash main
   git push -u origin <name>/squash
   ```

2. You know the drill, create a new file `<name>.txt` and commit it.

   ```bash,reveal
   echo "<name>" > <name>.txt
   git add <name>.txt
   git commit -m "add <name>.txt"
   ```

3. Modify the `<name>.txt` file and commit it.

   ```bash,reveal
   echo "<name> <name>" > <name>.txt
   git add <name>.txt
   git commit -m "modify <name>.txt"
   ```

4. How does the commit history look like?

   ```bash,reveal
   git log --oneline --graph --all
   ```

5. Squash the last two commits into a single commit. Use the `git squash` command.

   ```bash,reveal
   git reset --soft HEAD~2
   git commit 
   ```

6. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```

7. Push the changes to the remote repository.

   ```bash,reveal
   git push origin <name>/squash
   ```

8. (Optional): What would happen if you squash to commits that have already been pushed to the remote repository?
   (Click to reveal)

   <div class="reveal no-hover">

   In that case the remote repository would reject the push, because the commit history would be different,
   like `git reset` you would have to force push the changes.

   </div>


## Resources

- [`git cherry-pick`](https://git-scm.com/docs/git-cherry-pick)
- [`git merge --squash`](https://git-scm.com/docs/git-merge#Documentation/git-merge.txt---squash)
- [`git revert`](https://git-scm.com/docs/git-revert)
- [`git reset`](https://git-scm.com/docs/git-reset)
- [Git: Reset Demystified](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)
- [Atlassian: Git Cherry-pick](https://www.atlassian.com/git/tutorials/cherry-pick)
- [Atlassian: Git Reset](https://www.atlassian.com/git/tutorials/undoing-changes/git-reset)
- [Atlassian: Git Revert](https://www.atlassian.com/git/tutorials/undoing-changes/git-revert)
- [Tower: Squash](https://www.git-tower.com/learn/git/faq/git-squash)
