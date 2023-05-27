# Actions

There are two types of git commands: **porcelain** and **plumbing**. Porcelain commands are the ones that you use on a
daily basis, like `git add` or `git commit`. Plumbing commands are the ones that are used to build the porcelain
commands, like `git hash-object` or `git update-index`.

Imagine git being your toilet, you sit and use the porcelain every-day, but you don't need to know how the plumbing
works.

Plumbing commands are usually used by git developers, but sometimes they can be useful for us too. We used them in
the [Demystifying Git](../00-theory/README.md) section to understand how git works internally. Plumbing commands predate
porcelain commands, as git was first built as a set of shell scripts instead of a fully fledged user-friendly
application.

The following commands are considered porcelain commands:

* `git add` - Add file contents to the index
    * Covered in `Git 101` course
* [`git am`](https://git-scm.com/docs/git-am) - Apply a series of patches from a mailbox
    * Not covered in this course, as it is a niche command
* [`git archive`](https://git-scm.com/docs/git-archive) - Create an archive of files from a named tree
    * Not covered in this course, as it is a niche command
* [`git bisect`]() - Use binary search to find the commit that introduced a bug
    * Covered in this course
* `git branch` - List, create, or delete branches
    * Covered in `Git 101` course
* [`git bundle`](https://git-scm.com/docs/git-bundle) - Move objects and refs by archive
    * Not covered in this course, as it is a niche command
* `git checkout` - Switch branches or restore working tree files
    * Covered in `Git 101` course
* [`git cherry-pick`]() - Apply the changes introduced by some existing commits
    * Covered in this course
* [`git-citool`](https://git-scm.com/docs/git-citool) - Graphical alternative to git-commit
    * Not covered in this course, as it is not topically relevant
* [`git clean`]() - Remove untracked files from the working tree
    * Covered in this course
* `git clone` - Clone a repository into a new directory
    * Covered in `Git 101` course
* `git commit` - Record changes to the repository
    * Covered in `Git 101` course
* [`git describe`](https://git-scm.com/docs/git-describe) - Give an object a human readable name based on an available
  ref
    * Not covered in this course, as it is a niche command.
* [`git diff`]() - Show changes between commits, commit and working tree, etc
    * Covered in this and `Git 101` course
* `git fetch` - Download objects and refs from another repository
    * Covered in `Git 101` course
* [`git format-patch`](https://git-scm.com/docs/git-format-patch) - Prepare patches for e-mail submission
    * Not covered in this course, as it is a niche command
* [`git gc`](https://git-scm.com/docs/git-gc) - Cleanup unnecessary files and optimize the local repository
    * Not covered in this course, as it is a niche command
* [`git grep`]() - Print lines matching a pattern
    * Covered in this course
* [`git gui`](https://git-scm.com/docs/git-gui) - A portable graphical interface to Git
    * Not covered in this course, as it is not topically relevant
* `git init` - Create an empty Git repository or reinitialize an existing one
    * Covered in `Git 101` course
* `git log` - Show commit logs
    * Covered in `Git 101` course
* [`git maintenance`](https://git-scm.com/docs/git-maintenance) - Start a repository maintenance run
    * Not covered in this course, as it is a niche command
* [`git merge`]() - Join two or more development histories together
    * Covered in this course
* `git mv` - Move or rename a file, a directory, or a symlink
    * Covered in `Git 101` course
* [`git notes`](https://git-scm.com/docs/git-notes) - Add or inspect object notes
    * Not covered in this course, as it is a niche command
* `git pull` - Fetch from and integrate with another repository or a local branch
    * Covered in `Git 101` course
* [`git range-diff`]() - Compare two commit ranges (e.g. two versions of a branch)
    * Covered in this course
* [`git rebase`]() - Reapply commits on top of another base tip
    * Covered in this course
* [`git reset`]() - Reset current HEAD to the specified state
    * Covered in this course
* [`git revert`]() - Revert some existing commits
    * Covered in this course
* `git rm` - Remove files from the working tree and from the index
    * Covered in `Git 101` course
* [`git shortlog`](https://git-scm.com/docs/git-shortlog) - Summarize git log output
    * Not covered in this course, as it is a niche command, use `git log --oneline --graph --all` instead
* `git show` - Show various types of objects
    * Covered in this and `Git 101` course
* [`git sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout) - Initialize and modify the sparse-checkout
    * Not covered in this course, as it is mainly used for monorepos.
* [`git stash`]() - Stash the changes in a dirty working directory away
    * Covered in this course
* `git status` - Show the working tree status
    * Covered in `Git 101` course
* [`git submodule`](../00-theory/03-submodules.md) - Initialize, update or inspect submodules
    * Covered in [`Demystifying Git`](../00-theory/README.md).
* `git switch` - Switch branches
    * Covered in `Git 101` course
* [`git tag`](../00-theory/01-tags.md) - Create, list, delete or verify a tag object signed with GPG
    * Covered in [`Demystifying Git`](../00-theory/README.md).
* [`git worktree`](https://git-scm.com/docs/git-worktree) - Manage multiple working trees
    * Not covered in this course, as it is a niche command 

Snippet of auxiliary commands:

* `git config` - Get and set repository or global options
    * Covered in `Git 101` course
* `git help` - Display help information about Git
    * Covered in `Git 101` course
* `git version` - Show the version of Git
    * Covered in `Git 101` course
* [`git reflog`](https://git-scm.com/docs/git-reflog) - Manage reflog information
    * Covered in this course as part of the `git reset` command
* [`git remote`](../00-theory/04-multiple-remotes.md) - Manage set of tracked repositories
    * Covered in [`Demystifying Git`](../00-theory/README.md).
* [`git blame`]() - Show what revision and author last modified each line of a file
    * Covered in this course
* [`git bisect`]() - Use binary search to find the commit that introduced a bug
    * Covered in this course
