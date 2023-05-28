# Investigating the Repository

There are a few commands that one can use to investigate a repository. The most important ones are:

* `git log` (covered in `Git 101` course)
* `git show` (covered in `Git 101` course)
* `git grep`
* `git bisect`
* `git blame`
* `git diff` and `git range-diff`

This chapter will not cover `git log` and `git show` as they were already covered in the `Git 101` course.

## `git grep`

`git grep` is a command that can be used to search for a string in the repository. It is similar to the `grep` command,
but it only searches in the tracked files of the repository.

```bash
git grep <search string>
```

These are the most common options:

* `-n` or `--line-number`: Show the line numbers of the matches.
* `-i` or `--ignore-case`: Ignore case when searching.
* `-E` or `--extended-regexp`: Use extended regular expressions.
* `-v` or `--invert-match`: Invert the match.
* `-h` or `--no-filename`: Do not show the file names.
* `-H` or `--with-filename`: Show the file names.
* `-c` or `--count`: Show the number of matches.
* `-f` or `--file`: Use the next argument as a file with search strings.

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks

1. Create a new branch `<name>/grep` and push the branch to the remote repository.

    ```bash,reveal
    git switch -c <name>/grep main
    git push -u origin <name>/grep
    ```

2. Create a new file `<name>.txt` where `<name>` is your name and add an arbitrary text to it.
   Ideally, text text should contain a word multiple times over multiple lines.
   If you have no idea what to write, you can use a [lorem ipsum generator](https://loremipsum.io/).

3. Add the file to the repository and commit the file.

    ```bash,reveal
    git add grep.txt
    git commit -m "Add grep.txt"
    ```

4. Search for a word in your initial `<name>.txt` file. What is the output?
   (If you used a lorem ipsum generator, you can search for `Lorem`.)
   Be aware that the search is case sensitive!

    ```bash,reveal
    git grep <word>
    ```

5. Now repeat the search, but show the line numbers of the matches.

    ```bash,reveal
    git grep -n <word>
    ```

6. Create a new file `<name>.2.txt`, add the same text as in `<name>.txt`.
   Do **not** add the file to the repository.

7. What do you expect to happen when you search for the word in the repository?

8. Repeat the search for the word in the repository. What is the output?

    ```bash,reveal
    git grep <word>
    ```

9. Now add the file to the repository (do **not** commit) and repeat the search. What is the output?

    ```bash,reveal
    git add <name>.2.txt
    git grep <word>
    ```

   The file is now tracked by git and will be searched. Remember from the `Git 101` course that a tracked file is a file
   that is in the repository and has been added to the staging area.

10. Change the initial `<name>.txt` file and remove the word from the file.

11. What do you expect to happen when you search for the string `grep` in the repository?

12. Search for the string `grep` in the repository. What is the actual output?

     ```bash,reveal
     git grep <word>
     ```

    Different from `grep`, `git grep` only searches in the tracked files of the repository. Once a file is tracked, it
    will be searched. Even if we haven't added the changes to the staging area or committed them.

13. Commit your changes.

    ```bash,reveal
    git add -A
    git commit -m "Commit all changes"
    ```

14. Remove the `<name>.2.txt` file and commit the changes.

    ```bash,reveal
    git rm <name>.2.txt
    git commit -m "Remove <name>.2.txt"
    ```

15. What do you expect to happen when you search for your word in the repository?

16. Search for your word in the repository. What is the output?

    ```bash,reveal
    git grep <word>
    ```

    The file is no longer tracked by git and will not be searched. Remember from the `Git 101` course that an untracked
    file is a file that is not in the repository or has not been added to the staging area.

## `git bisect`

`git bisect` is a command with a multitude of use cases. For example you can use it to find a commit that introduced a
bug, where a new feature was added or where a performance regression was introduced. This chapter will only cover the
use case of finding a commit that introduced a bug.

This command is usually used if we do not know which line of code introduced the bug. `bisect` relies on the fact that
git commits should be small in size and should only contain a single change. If we follow this rule, we can
easily use `git bisect` to find the commit that introduced the bug.

`git bisect` requires a start and an end commit. The start commit is where we know that the bug is not present and the
end commit is where we know that the bug is present. `git bisect` will then check out the middle commit between the two
commits. This command uses binary search, a search algorithm that divides the search space in half with each iteration.
We then check if the bug is present in the middle commit. If the bug is present, we know that the bug was introduced in
the first half of the search space. If the bug is not present, we know that the bug was introduced in the second half of
the search space. We then repeat the process with the half of the search space where the bug was introduced. We repeat
this process until we find the commit that introduced the bug. While quite efficient, this command is quite tedious to
use in large repositories. To make this process easier, we can use the `git bisect run` command.

### `git bisect` workflow

#### The long way

1. Initiate the binary search.

    ```bash
    git bisect start
    ```

2. Specify the start and end commit.

    ```bash
    git bisect bad <end commit>
    git bisect good <start commit>
    ```

3. bisect will now check out the middle commit between the two commits. Check if the bug is present.
4. If the bug is present, run `git bisect bad`. If the bug is not present, run `git bisect good`.
5. Repeat steps 3 and 4 until you find the commit that introduced the bug.
6. When Git has detected the error, it will provide a message that `SHA is the first bad commit.`
7. Run `git bisect reset` to reset the repository to the original state.

#### The short way

1. Initiate the binary search.

    ```bash
    git bisect start <bad commit> <good commit>
    ```

2. `git bisect run <command>` - This command will run the command on each commit that is checked out by `git bisect`.
   The command should return `0` if the bug is present and `1` if the bug is not present. This command will then
   automatically find the commit that introduced the bug.

3. `git bisect reset` - This command will reset the repository to the original state.

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

#### Tasks

1. Create a new branch `<name>/bisect` and check it out.

    ```bash,reveal
    git checkout -b <name>/bisect main
    ```

2. It seems that the `fibonacci` function in `lib/fibonacci.py` is not working correctly. Find the commit that
   introduced the bug.

3. Fix the bug. You can use the `git bisect` command to find the commit that introduced the bug. Either use the long
   way or the short way.

   // TODO: hint
   Hint: You can use the command `python3 -m unittest` to run the tests.

4. Commit your changes.

    ```bash,reveal
    git add -A
    git commit -m "Fix fibonacci function"
    ```

