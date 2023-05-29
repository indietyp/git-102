# Stashing Changes

Sometimes you are working on a feature, but you need to switch to another branch to fix a bug or add another feature.
You can commit your changes, but you might not want to do that yet. You can use `git stash` to temporarily store your
changes and restore them later.

The stash is a stack, this means that you can store multiple stashes and restore them in the order they were created. In
computer science this is called a LIFO (last in, first out) stack.

The stash is local only, this means that it is not shared with other users. This means that if you want to share your
changes with other users, you have to commit them.

Stashes live outside of the commit history, this means that they are not part of the commit history, this makes it
perfect for storing temporary changes, changes that are not ready to be committed yet or like mentioned above can be
used when you need to switch to another branch. This way you can carry your changes to the other branch and continue to
work on them.

When using the stash to switch to another branch, you need to do the following steps:

1. Create a new stash
2. Switch to the other branch
3. Apply the stash

The following command creates a new stash:

```bash
git stash
```

The following command applies the latest stash:

```bash
git stash apply
```

The following command applies a specific stash:

```bash
git stash apply stash@{1}
```

The following command lists all stashes:

```bash
git stash list
```

The following command deletes the latest stash:

```bash
git stash drop
```

The following command deletes a specific stash:

```bash
git stash drop stash@{1}
```

The following command deletes all stashes:

```bash
git stash clear
```

## Exercise

### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

### Tasks

(This is a collaborative exercise, you can work in groups of 2-3 people.)

1. Create a new branch called `<name>/stash` where `<name>` is your name, e.g. `alice/stash`

   ```bash,reveal
   git switch -c <name>/stash main
   git push -u origin <name>/stash
   ```
   
2. Create a new file called `scratch.txt` and add the text `Hello World` to it.

   ```bash,reveal
   echo "Hello World" > scratch.txt
   ```
   
3. Commit and push the changes.

   ```bash,reveal
   git add scratch.txt
   git commit -m "Add scratch.txt"
   git push
   ```
   
4. Wait for your group members to finish the previous steps.

5. Fetch the changes from the remote repository.

   ```bash,reveal
   git fetch --all
   ```

6. Create a new file called `<name>.txt` and add some text to it. (For example: `Hello my name is <name>`)

   ```bash,reveal
   echo "Hello my name is <name>" > <name>.txt
   ```

7. Add the file to the staging area.

   ```bash,reveal
   git add <name>.txt
   ```
   
8. Choose a group member to switch to, you want to work on their branch, and add your `<name>.txt` file to their branch.

9. Stash your changes.

   ```bash,reveal
   git stash
   ```
   
10. How does your working directory look like now?

    ```bash,reveal
    ls
    ```
    
11. Switch to the branch of the group member you want to work on.

    ```bash,reveal
    git switch <name>/stash
    ```
    
12. How does your working directory look like now?

    ```bash,reveal
    ls
    ```
    
13. Apply the stash.

    ```bash,reveal
    git stash apply
    ```
    
14. How does your working directory look like now?

    ```bash,reveal
    ls
    ```
    
15. How does your staging area look like now?

    ```bash,reveal
    git status
    ```
    
16. Commit and push the changes.

    ```bash,reveal
    git commit -m "Add <name>.txt"
    git push
    ```
   
17. Wait for your group members to finish the previous steps.


## Resources

- [Git Stash](https://git-scm.com/docs/git-stash)
- [Git Stash Tutorial](https://www.atlassian.com/git/tutorials/saving-changes/git-stash)
