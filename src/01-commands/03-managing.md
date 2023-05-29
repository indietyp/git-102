# Managing the Repository

There are a few commands that are used to manage branches. The ones we will cover in this section are:

* `git clean`
* `git reflog`

## `git clean`

The `git clean` command can be used to remove untracked files from the working directory. This can be useful if you want
to remove files that are not needed anymore. For example, if you have a build script that creates a binary file, you can
use `git clean` to remove the binary file.

The `git clean` command has a few options that can be used to control which files are removed. The most important ones
are:

* `-n` or `--dry-run`: This option tells Git to not actually remove any files, but to only show which files would be
  removed.
* `-f` or `--force`: This option tells Git to remove the files without asking for confirmation.
* `-d` or `--directory`: This option tells Git to also remove directories.
* `-x` or `--exclude`: This option tells Git to exclude files that match a certain pattern. This can be useful if you
  want to remove all files except for a few.
* `-X` or `--exclude-from`: This option tells Git to exclude files that match a pattern from a file. This can be useful
  if you want to remove all files except for a few.

### Exercise

#### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

(Using the sandbox repository is optional, you can also use your own repository, in that case you do not need to create
a new branch.)

#### Tasks

1. Create a new branch called `<name>/clean` where `<name>` is your name, e.g. `alice/clean`

   ```bash,reveal
   git switch -c <name>/clean main
   ```

2. Create a new file called `scratch.txt` and add the text `Hello World` to it.

   ```bash,reveal
   echo "Hello World" > scratch.txt
   ```

3. Run `git clean` with the `-n` option to see which files would be removed.

   ```bash,reveal
   git clean -n
   ```

4. Check if the file `scratch.txt` is still there.

   ```bash,reveal
   ls
   ```

5. Run `git clean`

   ```bash,reveal
   git clean
   ```

6. Check if the file `scratch.txt` is still there.

   ```bash,reveal
   ls
   ```

## `git reflog`

The `git reflog` command can be used to show the `git log` history, but also includes commits that are not referenced by
a branch or tag. This can be useful if you want to recover a commit that was removed by accident.

It is important to note that the `git reflog` history is not shared between machines, it is local only. This means that
if you clone a repository, the `git reflog` history will be empty. Additionally the `git reflog` has a limited history,
by default saves the history for 90 days (30 days for commits that are not referenced by a branch or tag).

You can configure the `git reflog` history to have a longer history. This is done
by setting the `gc.reflogExpire` and `gc.reflogExpireUnreachable` options. The `gc.reflogExpire` option controls how
long the history is kept and the `gc.reflogExpireUnreachable` option controls how long the history is kept for commits
that are not referenced by a branch or tag. The values are specified in days. The following command sets the history to
be kept for 1 year:

```bash
git config gc.reflogExpire 365
git config gc.reflogExpireUnreachable 365
```

To never expire the history, you can set the values to `never`:

```bash
git config gc.reflogExpire never
git config gc.reflogExpireUnreachable never
```

An exercise for recovering a commit from the `git reflog` history is included in
the [`git reset`](./01-manipulate.md#git-reset).
