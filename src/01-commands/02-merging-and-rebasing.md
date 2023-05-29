# Merging and Rebasing

In the previous chapter [Demytifying Git](../00-theory/README.md) we learned about branches. In this chapter we will
learn how to merge and rebase branches.

Why do we need to merge and rebase branches? Well, we need to merge branches to combine the work of multiple people. In
most cases, if one has finished working on a feature, the feature branch will be merged into the main branch. This way
the work of multiple people can be combined into one branch.

Fundamentally there are two ways to combine branches, merging and rebasing. Both have their advantages and disadvantages
and we will discuss them in this chapter.

Merging and rebasing is triggered by the `git merge` and `git rebase` commands, not only that, but if you pull changes
from a remote repository, you are also merging or rebasing.

## Merging

Merging is the process of combining two branches into one. The result of a merge is a new commit that has two parents,
the commit of the current branch and the commit of the branch that is being merged.

Essentially there are two types of merges, fast-forward merges and non-fast-forward merges. A fast-forward merge is a
merge where the current branch is a direct ancestor of the branch that is being merged. In this case, Git can simply
move the branch ref to the commit of the branch that is being merged. If the current branch is not a direct ancestor of
the branch that is being merged (both branches has diverged), Git will create a new commit with two parents.

### Merge Conflicts

When merging two branches, it is possible that there are conflicts.
A conflict occurs when the same part of a file has been changed in both branches. Git will try to merge the changes
automatically, but if it cannot, it will mark the file as conflicted and it is up to the user to resolve the conflict.

This is done by editing the file and removing the conflict markers. The conflict markers look like this:

```text
<<<<<<< HEAD
This is the content of the file in the current branch.
=======
This is the content of the file in the branch that is being merged.
>>>>>>> <branch>
```

The `HEAD` marker indicates the current branch, the `<branch>` marker indicates the branch that is being merged. The
text between the markers is the content of the file.

When manually resolving a conflict, it is important to remove the markers, otherwise the file will remain conflicted and
may stop working. (For example, if the file is a Python script, `<<<<<<< HEAD` is not valid Python code.)

### Merge Strategies

While merging is a simple concept, there are multiple ways to merge branches. These are called merge strategies and are
specified via `-s`. The following strategies are available:

* `ort`: The default merge strategy. This strategy is the most powerful and is able to handle most merge conflicts. It
  is also the slowest strategy. `ort` only works with two parents. (i.e. it cannot merge more than two branches at once)
* `recursive`: This was the default merge strategy before Git 2.18. It is faster than `ort`, but cannot handle all
  merge conflicts. `recursive` only works with two parents. (i.e. it cannot merge more than two branches at once)
* `resolve`: This strategy is faster than `recursive` and tries to detect `criss-cross` merge ambiguities. `resolve`
  only works with two parents and does not handle renames.
* `octopus`: This strategy is the fastest, but cannot handle merge conflicts. `octopus` can merge more than two
  branches at once.
* `ours`: This strategy does not merge anything, but instead keeps the current branch. Effectively it discards all
  changes from the other branches being merged.
* `subtree`: This strategy is a modified version of `ort` and is used to merge subtrees. It is not used for normal
  merges.

In most cases, the default strategy is sufficient.

The `ort` strategy also has plenty of configuration options, that in 99% of cases do not need to be changed. If you are
interested in the details, you can read the [documentation](https://git-scm.com/docs/merge-strategies).

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks - Fast Forward Merge

1. Create a new branch called `<name>/merge` and switch to it.

   ```bash, reveal
   git switch -c <name>/merge main
   git push -u origin <name>/merge
   ```

2. Create a new file called `<name>.txt` and add some content to it. Be creative. :)

   ```bash,reveal
   echo "This is a <name> file." > scratch.txt
   git add <name>.txt
   git commit -m "Add <name>.txt"
   ```

3. Create a new branched called `<name>/merge-modify` and switch to it.

   ```bash,reveal
   git switch -c <name>/merge-modify main
   git push -u origin <name>/merge-modify
   ```

4. Modify the `<name>.txt` file and add some more content to it.
   Maybe add some more context, or your favorite quote. :) It's up to you! (Or you can be as boring as the example
   chosen here.)

   ```bash,reveal
   echo "This is some other content" >> <name>.txt
   git add <name>.txt
   git commit -m "Modify <name>.txt"
   ```

5. How does the commit history look like?

   ```bash,reveal
   git log --oneline --graph --all
   ```

6. Merge the `<name>/merge-modify` branch into the `<name>/merge` branch.

   ```bash,reveal
   git switch <name>/merge
   git merge <name>/merge-modify
   ```

7. What was the output of the merge command? (Click to reveal)

   ```text,reveal,no-hover
   Updating db2e52f..0c9488b
   Fast-forward
    <name>.txt | 1 +
    1 file changed, 1 insertion(+)
   ```   

8. How does the commit history look like now?

   ```bash,reveal
    git log --oneline --graph --all
    ```
9. How does your `<name>.txt` file look like?

   ```bash,reveal
   cat <name>.txt
   ```

10. (Optional) Push your changes

     ```bash,reveal
     git push
     ```

#### Tasks - Non-Fast Forward Merge

You can reuse the `<name>/merge` branch from the previous task.

1. If you haven't already in the previous task, create a new file called `<name>.txt`, add some content to it and commit
   it.

   ```bash,reveal
   echo "This is a file" > <name>.txt
   git add <name>.txt
   git commit -m "Add <name>.txt"
   ```

2. Push your changes.

   ```bash,reveal
   git push
   ```

3. Wait for your partner to finish the previous task.

4. Fetch all the changes from the remote repository.

   ```bash,reveal
   git fetch
   ```

5. Get to know what the branch name of your partner is.

   ```bash,reveal
   git branch
   # to get your current branch name if you are unsure
   ```

6. Merge the branch of your partner into your branch.

   ```bash,reveal
   git merge origin/<partner>/merge
   ```

7. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```

8. How does your working directory look like?

   ```bash,reveal
   ls
   ```

9. (Optional) Push your changes

   ```bash,reveal
   git push
   ```

This works because the files edited/added in your branch and the files edited/added in your partner's branch do not
overlap. If they do overlap, Git will try to merge the changes. If it cannot merge the changes automatically, it will
need to be merged manually.

#### Tasks - Merge Conflicts

You can reuse the `<name>/merge` branch from the previous task.

1. We will work with the `lib/snake.py` file, which is a Python file for a snake game. It is a very simple game, but
   it's fun to play. :) Try it out!

   ```bash,reveal
   python3 lib/snake.py
   ```

2. It seems that the game gets a bit unfair after a while. The snake goes so fast that it is nearly impossible to
   control it. Let's fix that!

   ```bash,reveal
   vim lib/snake.py
   ```

   It seems that the culprit is on the line `187 - 190`. The `sleep` function is called with a value
   of `0.4 * multiplier`, where the multiplier is the number of times the snake has eaten food.

   There are many ways to fix this, for example by adding a constant value to the multiplier, or by multiplying with a
   greater value, or by just setting the upper limit to a certain value. It's up to you!

   Try to play around with some values and see what works best for you. :)

   If Python is new to you, no worries, in the future we will have a Python course. For now, you can just try to replace
   either `10` or `0.4` with a higher value.

   ```python,reveal
   length = len(snake.coords)
   multiplier = min(length - 4, 10) / 10
   multiplier = 1.0 - multiplier
   # this will make it so that the snake will never go faster than 0.2 seconds
   time.sleep(0.2 * multiplier + 0.2)
   ```

   > This is a very crude implementation, there are many different improvements we can do, but for now this will do. :)

3. Commit your changes.

   ```bash,reveal
   git add lib/snake.py
   git commit -m "Make the snake go slower"
   ```

4. Wait for your partner to finish the previous task.

5. Fetch all the changes from the remote repository.

   ```bash,reveal
   git fetch
   ```

6. Try to merge the changes from your partner into your branch.

   ```bash,reveal
   git merge origin/<partner>/merge
   ```

7. What was the output of the merge command? (Click to reveal)

   ```text,reveal,no-hover
   Auto-merging lib/snake.py
   CONFLICT (content): Merge conflict in lib/snake.py
   Automatic merge failed; fix conflicts and then commit the result.
   ```

8. How does the commit history look like now?

   ```bash,reveal
    git log --oneline --graph --all
    ```

9. Fix the merge issue, try to discuss with your partner, which approach is best and choose the best one (or try to
   incorporate both).

10. Make sure that the program still works as intended.

    ```bash,reveal
    python3 lib/snake.py
    ```

11. Add and commit your changes.

    ```bash,reveal
    git add lib/snake.py
    git commit -m "Fix merge conflict"
    ```

12. (Optional) Push your changes

    ```bash,reveal
    git push
    ```

13. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

## Rebasing

Rebasing is another way of combining two branches. It is similar to merging, but instead of creating a new commit, it
takes the commits from the other branch and puts them on top of the current branch. This is useful if you want to keep
the commit history linear. Conflicts can still occur, but instead of having to resolve them in a merge commit, you have
to resolve them in each commit.

There are multiple ways to rebase, but we will only look at interactive rebasing.

### Interactive Rebasing

Interactive rebasing is a way of rebasing where you can choose which commits to keep, which commits to squash and which
commits to edit.

When you enter interactive rebasing, you will be presented with a list of commits. You can then choose what to do with
each commit. The options are explained in the table below.

| Option   | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| `pick`   | Keep the commit as is                                                       |
| `reword` | Keep the commit, but change the commit message                              |
| `edit`   | Keep the commit, but allow to edit the commit                               |
| `squash` | Combine the commit with the previous commit                                 |
| `fixup`  | Combine the commit with the previous commit, but discard the commit message |
| `drop`   | Discard the commit                                                          |

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks - Merging with Rebasing

1. Create a new branch called `<name>/rebase` and switch to it.

   ```bash, reveal
   git switch -c <name>/rebase main
   git push -u origin <name>/rebase
   ```

2. We will work with the `lib/sphere.py`, a program that draws a sphere. It is a very simple program, but it's fun to
   play with. :) Try it out!

   ```bash,reveal
   python3 lib/sphere.py
   ```

3. Try to change some of the parameters in the `lib/sphere.py` file and see what happens.

   Maybe try to change the `radius` variable, or draw a new sphere, it is up to you! Have fun! Be creative! :)

   ```bash,reveal
   vim lib/sphere.py
   ```

4. Run the program again to see the changes.

   ```bash,reveal
   python3 lib/sphere.py
   ```

5. Commit and push your changes.

   ```bash,reveal
   git add lib/sphere.py
   git commit -m "Change the radius of the sphere"
   git push
   ```

6. Wait for your partner to finish the previous task.

7. Fetch all the changes from the remote repository.

   ```bash,reveal
   git fetch
   ```

8. Try to rebase your changes on top of the changes from your partner.

   ```bash,reveal
   git rebase origin/<partner>/rebase
   ```

9. What was the output of the rebase command? (Click to reveal)

   ```text,reveal,no-hover
    Auto-merging lib/sphere.py
    CONFLICT (content): Merge conflict in lib/sphere.py
    error: could not apply 1f1b1b3... Change the radius of the sphere
    hint: Resolve all conflicts manually, mark them as resolved with
    hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
    hint: You can instead skip this commit: run "git rebase --skip".
    hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
    Could not apply 1f1b1b3... Change the radius of the sphere
    ```

10. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

11. Try to fix the rebase issue, try to discuss with your partner, which approach is best and choose the best one (or
    try to incorporate both).

12. Continue the rebase.

    ```bash,reveal
    git add lib/sphere.py # like the hint suggests, we need to add the file again
    git rebase --continue
    ```

13. Make sure that the program still works as intended.

    ```bash,reveal
    python3 lib/sphere.py
    ```

14. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

15. (Optional) Push your changes

    ```bash,reveal
    git push
    ```

16. How does the commit history look like now?

    ```bash,reveal
    git log --oneline --graph --all
    ```

### Tasks - Rebasing existing commits

1. Create a new branch called `<name>/rebase-interactive` and switch to it.

   ```bash, reveal
   git switch -c <name>/rebase-interactive main
   git push -u origin <name>/rebase-interactive
   ```

2. Create three different commits that change the `<name>.txt` file. (number them 1, 2 and 3)

   ```bash,reveal
   vim <name>.txt
   git add <name>.txt
   git commit -m "Change the <name>.txt file (1)"
   ```

3. How does the commit history look like now?

   ```bash,reveal
   git log --oneline --graph --all
   ```

4. Try to rebase interactively, and squash the two latest commits into one, and rename the oldest commit.

   ```bash,reveal
   git rebase -i HEAD~3
   ```

5. What options did you choose? (Click to reveal)

   ```text,reveal,no-hover
   reword 1f1b1b3 Change the <name>.txt file (1)
   pick 2f1b1b3 Change the <name>.txt file (2)
   squash 3f1b1b3 Change the <name>.txt file (3)
   ```

6. Once you finish, close the editor, you will now be asked to change the commit message. This will open another editor.

7. (Optional) Push your changes

   ```bash,reveal
   git push
   ```

## Pulling

When pulling, you are fetching and merging at the same time.

This means that if changes occur on the remote branch, you will need to merge those changes into your local branch. This
can lead to merge conflicts (like discussed in the previous section). The only difference between the tasks and this is
that the changes we're trying to merge are not any changes from our partner, but changes from the remote repository.

Behind the scenes you can either use `merge` or `rebase` to combine the changes. You can configure which one to use by
setting the `pull.rebase` configuration option.

```bash
git config pull.rebase true
```

### Scary Warning

When you pull changes for the first time (and you have not configured `pull.rebase`), Git will ask you to choose between
the different merge strategies. Don't be afraid, if you don't know what to choose, simply
choose `git config pull.rebase false`, which is the default.

```
warning: Pulling without specifying how to reconcile divergent branches is
discouraged. You can squelch this message by running one of the following
commands sometime before your next pull:

  git config pull.rebase false  # merge (the default strategy)
  git config pull.rebase true   # rebase
  git config pull.ff only       # fast-forward only

You can replace "git config" with "git config --global" to set a default
preference for all repositories. You can also pass --rebase, --no-rebase,
or --ff-only on the command line to override the configured default per
invocation.
```
