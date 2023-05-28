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
