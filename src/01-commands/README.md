# Commands

There are two types of git commands: **porcelain** and **plumbing**. Porcelain commands are the ones that you use on a
daily basis, like `git add` or `git commit`. Plumbing commands are the ones that are used to build the porcelain
commands, like `git hash-object` or `git update-index`.

Imagine git being your toilet, you sit and use the porcelain every-day, but you don't need to know how the plumbing
works.

Plumbing commands are usually used by git developers, but sometimes they can be useful for us too. We used them in
the [Demystifying Git](../00-theory/README.md) section to understand how git works internally. Plumbing commands predate
porcelain commands, as git was first built as a set of shell scripts instead of a fully fledged user-friendly
application.

To make it easier to understand which commands are included in which course and which are excluded, we will list them
here, prefixed with the following emoji:

* :x: - not covered
* :question: - not covered, but might be useful
* :school_satchel: - covered in `Git 101` course
* :white_check_mark: - covered in this course

The following commands are considered porcelain commands:

* :school_satchel: [`git add`](https://git-scm.com/docs/git-add) - Add file contents to the index
    * Covered in `Git 101` course
* :x: [`git am`](https://git-scm.com/docs/git-am) - Apply a series of patches from a mailbox
    * Not covered in this course, as it is a niche command
* :x: [`git archive`](https://git-scm.com/docs/git-archive) - Create an archive of files from a named tree
    * Not covered in this course, as it is a niche command
* :white_check_mark: [`git bisect`]() - Use binary search to find the commit that introduced a bug
    * Covered in this course
* :school_satchel: [`git branch`](https://git-scm.com/docs/git-branch) - List, create, or delete branches
    * Covered in `Git 101` course
* :x: [`git bundle`](https://git-scm.com/docs/git-bundle) - Move objects and refs by archive
    * Not covered in this course, as it is a niche command
* :school_satchel: [`git checkout`](https://git-scm.com/docs/git-checkout) - Switch branches or restore working tree files
    * Covered in `Git 101` course
* :white_check_mark: [`git cherry-pick`]() - Apply the changes introduced by some existing commits
    * Covered in this course
* :x: [`git-citool`](https://git-scm.com/docs/git-citool) - Graphical alternative to git-commit
    * Not covered in this course, as it is not topically relevant
* :white_check_mark: [`git clean`]() - Remove untracked files from the working tree
    * Covered in this course
* :school_satchel: [`git clone`](https://git-scm.com/docs/git-clone) - Clone a repository into a new directory
    * Covered in `Git 101` course
* :school_satchel: [`git commit`](https://git-scm.com/docs/git-commit) - Record changes to the repository
    * Covered in `Git 101` course
* :question: [`git describe`](https://git-scm.com/docs/git-describe) - Give an object a human readable name based on an available
  ref
    * Not covered in this course, as it is a niche command.
* :school_satchel: [`git diff`](https://git-scm.com/docs/git-diff) - Show changes between commits, commit and working tree, etc
    * Covered in this and `Git 101` course
* :school_satchel: [`git fetch`](https://git-scm.com/docs/git-fetch) - Download objects and refs from another repository
    * Covered in `Git 101` course
* :x: [`git format-patch`](https://git-scm.com/docs/git-format-patch) - Prepare patches for e-mail submission
    * Not covered in this course, as it is a niche command
* :question: [`git gc`](https://git-scm.com/docs/git-gc) - Cleanup unnecessary files and optimize the local repository
    * Not covered in this course, as it is a niche command
* :white_check_mark: [`git grep`]() - Print lines matching a pattern
    * Covered in this course
* :x: [`git gui`](https://git-scm.com/docs/git-gui) - A portable graphical interface to Git
    * Not covered in this course, as it is not topically relevant
* :school_satchel: [`git init`](https://git-scm.com/docs/git-init) - Create an empty Git repository or reinitialize an existing one
    * Covered in `Git 101` course
* :school_satchel: [`git log`](https://git-scm.com/docs/git-log) - Show commit logs
    * Covered in `Git 101` course
* :x: [`git maintenance`](https://git-scm.com/docs/git-maintenance) - Start a repository maintenance run
    * Not covered in this course, as it is a niche command
* :white_check_mark: [`git merge`]() - Join two or more development histories together
    * Covered in this course
* :school_satchel: [`git mv`](https://git-scm.com/docs/git-mv) - Move or rename a file, a directory, or a symlink
    * Covered in `Git 101` course
* :question: [`git notes`](https://git-scm.com/docs/git-notes) - Add or inspect object notes
    * Not covered in this course, as it is a niche command
* :school_satchel: [`git pull`](https://git-scm.com/docs/git-pull) - Fetch from and integrate with another repository or a local branch
    * Covered in `Git 101` course
* :white_check_mark: [`git range-diff`]() - Compare two commit ranges (e.g. two versions of a branch)
    * Covered in this course
* :white_check_mark: [`git rebase`]() - Reapply commits on top of another base tip
    * Covered in this course
* :white_check_mark: [`git reset`]() - Reset current HEAD to the specified state
    * Covered in this course
* :white_check_mark: [`git revert`]() - Revert some existing commits
    * Covered in this course
* :school_satchel: [`git rm`](https://git-scm.com/docs/git-rm) - Remove files from the working tree and from the index
    * Covered in `Git 101` course
* :question: [`git shortlog`](https://git-scm.com/docs/git-shortlog) - Summarize git log output
    * Not covered in this course, as it is a niche command, use `git log --oneline --graph --all` instead
* :school_satchel: [`git show`](https://git-scm.com/docs/git-show) - Show various types of objects
    * Covered in this and `Git 101` course
* :question: [`git sparse-checkout`](https://git-scm.com/docs/git-sparse-checkout) - Initialize and modify the sparse-checkout
    * Not covered in this course, as it is mainly used for monorepos.
* :white_check_mark: [`git stash`]() - Stash the changes in a dirty working directory away
    * Covered in this course
* :school_satchel: [`git status`](https://git-scm.com/docs/git-status) - Show the working tree status
    * Covered in `Git 101` course
* :white_check_mark: [`git submodule`](../00-theory/03-submodules.md) - Initialize, update or inspect submodules
    * Covered in [`Demystifying Git`](../00-theory/README.md).
* :school_satchel: `git switch` - Switch branches
    * Covered in `Git 101` course
* :white_check_mark: [`git tag`](../00-theory/01-tags.md) - Create, list, delete or verify a tag object signed with GPG
    * Covered in [`Demystifying Git`](../00-theory/README.md).
* :question: [`git worktree`](https://git-scm.com/docs/git-worktree) - Manage multiple working trees
    * Not covered in this course, as it is a niche command

Snippet of auxiliary commands:

* :school_satchel: [`git config`](https://git-scm.com/docs/git-config) - Get and set repository or global options
    * Covered in `Git 101` course
* :school_satchel: [`git help`](https://git-scm.com/docs/git-help) - Display help information about Git
    * Covered in `Git 101` course
* :school_satchel: [`git version`](https://git-scm.com/docs/git-version) - Show version information
    * Covered in `Git 101` course
* :white_check_mark: [`git reflog`](https://git-scm.com/docs/git-reflog) - Manage reflog information
    * Covered in this course as part of the `git reset` command
* :white_check_mark: [`git remote`](../00-theory/04-multiple-remotes.md) - Manage set of tracked repositories
    * Covered in [`Demystifying Git`](../00-theory/README.md).
* :white_check_mark: [`git blame`]() - Show what revision and author last modified each line of a file
    * Covered in this course
