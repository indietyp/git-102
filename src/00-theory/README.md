# Theory

`git` is a VCS (version control system) that is based on a DAG (directed acyclic graph) of commits. This chapter will
explain what that means and how it works.

```admonish info title="Exercise"

For this chapter please create a new empty repository on your local machine and initialize it with `git init`.

```

## What is a VCS?

A VCS is a system that keeps track of changes to files. It allows you to go back to previous versions of files and to

## What is a commit?

A commit is a snapshot of the current state of the repository. It contains a reference to the previous commit, a message
and a reference to the current state of the repository.

## What is a graph?

A graph is a mathematical structure that consists of nodes and edges. The edges of a directed graph are directed and can
only be traversed in one direction. A graph is acyclic if there are no cycles in the graph, i.e. there is no path from a
node to itself.

## Basic Terminology

* **Blob**: A file in the repository
* **Tree**: A directory in the repository
* **Commit**: Pointer to a tree alongside metadata (author, message, etc.) about the commit
* **Refs**: Point, or refer to, other objects in the graph (commits, tags, etc.) using a human readable name

## What is a blob?

A blob is a file in the repository. It is stored as a compressed object in the `.git/objects` directory. The name of the
file is the SHA-1 hash of the contents of the file.

You can create a blob using `git hash-object -w <file>`. The `-w` flag tells git to write the blob to the repository.

```admonish info collapsible=true title="Exercise"

Create a file `test.txt` with the contents `Hello World!`.

1. What is the output of `git hash-object test.txt`?
2. What is in the `.git/objects` directory?
3. Commit the blob to the repository. 
4. What is in the `.git/objects` directory now?
5. Can you find the blob of the file in the `.git/objects` directory?
6. (Extra): Can you decode the contents of the blob? (Tipp: `git cat-file` or `pigz -d < <file>`)
7. What is the output of `git ls-files -s test.txt`?
8. What is the output of `git cat-file -p <hash>`?
9. What is the output of `git cat-file -t <hash>`?
10. What is the output of `git cat-file -s <hash>`?
11. What is the ouptut of `git hash-object test.txt` now?
```

### Trivia

* The SHA-1 hash of the empty file is `e69de29bb2d1d6434b8b29ae775ad8c2e48c5391`.
* The SHA-1 hash of the file `test.txt` with the contents `Hello World!` is `557db03de997c86a4a028e1ebd3a1ceb225be238`.
* The blob is compressed using DEFLATE (RFC 1951).
* The contents of a blob are `blob <size>\0<contents>`, where `<size>` is the size of the contents in bytes and
  `<contents>` is the contents of the file.

### Why is this important?

The blob is the most basic building block of a git repository. It is the smallest unit of change and is used to store a
file in the repository. It is important to understand how it works and how it is stored in the repository.

### Deduplication

Git uses a technique called deduplication to save space. If you create a blob with the same contents as another blob, it
will be stored only once in the repository. This is because the name of the blob is the SHA-1 hash of the contents of
the file. If the contents are the same, the name will be the same and the blob will be stored only once.

```admonish info collapsible=true title="Exercise"

Create a file `test2.txt` with the contents `Hello World!`.

1. What is the output of `git hash-object test2.txt`?
2. What is in the `.git/objects` directory?
3. Commit the blob to the repository.
4. What is in the `.git/objects` directory now?
5. What is the output of `git ls-files -s test2.txt`?
```

## What is a tree?

A tree is a directory in the repository. It is stored as a compressed object in the `.git/objects` directory. The name
of the tree is the SHA-1 hash of the contents of the tree.

You can create a tree using `git write-tree`.

```admonish info collapsible=true title="Exercise"

Create a directory `test` with a file `greeting.txt` with the contents `How are you?`.

1. Stage the file `greeting.txt`.
2. What is the output of `git write-tree --prefix=test/`?
4. What is in the `.git/objects` directory?
5. (Extra): Can you decode the contents of the tree? (Tipp: `git cat-file tree <hash>` or `pigz -d < <file>`)
6. What is the output of `git ls-tree <hash>`?

```

### Trivia

* The SHA-1 hash of the tree `test` with the file `test.txt` with the contents `How are you?` is
  `796fd7884e7f9ede232e60d13ba9b08deb6a659b`.

### Why is this important?

The tree is the second most basic building block of a git repository. It is used to store a directory in the repository.
It is important to understand how it works and how it is stored in the repository.

### Deduplication

Git uses a technique called deduplication to save space. If you create a tree with the same contents as another tree, it
will be stored only once in the repository. This is because the name of the tree is the SHA-1 hash of the contents of
the file. If the contents are the same, the name will be the same and the tree will be stored only once.

```admonish info collapsible=true title="Exercise"

Create a directory `test2` with a file `greeting.txt` with the contents `How are you?`.

1. Stage the file `greeting.txt`.
2. What is the output of `git write-tree --prefix=test2/`?
3. What is in the `.git/objects` directory?
4. Do you encounter something unexpected?

```

## What is a commit?

A commit is a pointer to a tree alongside metadata (author, message, etc.) about the commit. It is stored as a
compressed object in the `.git/objects` directory. The name of the commit is the SHA-1 hash of the contents of the
commit.

## What is a ref?

A ref is a pointer to an object in the graph. It is stored as a file in the `.git/refs` directory. The name of the ref
is the name of the file. The contents of the file is the SHA-1 hash of the object.

## How do blobs play together with commits?

Git creates objects for everything it needs to track. This includes blobs, trees, commits and refs. When a file is
added (via `git add`) to the index it automatically creates a blob for it. When a commit is created (via `git commit`)
it creates a commit object with a tree object, that tree object will then reference the blob we have added previously.

## History

Every git repository contains a history of commits, which in itself are snapshots of the repository. The commits
always (except for the first commit) have at least a single parent. We can abstract over that fact and assume that the
git commit history is a graph of different nodes that represent snapshots. This allows us to see which commits have
affected later commits and the path taken to reach a specific commit.

`git` has the ability to display the graph using `git log --graph --decorate --oneline`. There are also many other ways
to display the graph, such as graphical tools like `gitk` or `gitg`.

```admonish info collapsible=true title="Exercise"

Execute `git log --graph --all --decorate --oneline` in your repository of choice.

```

### Why is this important?

The commit history is the most important part of a git repository. It is the history of changes that have been made to a
repository. It is important to understand how it works and how it is stored in the repository.

The history is especially important when working in a team. It allows you to see what changes have been made and by who.
git also allows you to have diverging histories, which will be covered in the next chapter.

### Exercise

Let's create a more elaborate example to see how the commit history works.

1. Create a new empty git repository with any name you like.
2. Create a new file `README.md` and commit it with the message: `first commit`

```admonish info collapsible=true title="How does the graph look like now?"

<pre>

* <span style="color:#A50">7fca5db</span><span style="color:#A50"> (</span><b><span style="color:#0AA">HEAD -> </span></b><b><span style="color:#0A0">main</span></b><span style="color:#A50">)</span> first commit

</pre>

```

3. Create a new file `docs/setup.md` detailing how to setup the repository and commit it with the message: `add setup
   instructions` (Tip: Don't overthink it, you can also just write gibberish)

```admonish info collapsible=true title="How does the graph look like now?"

* <span style="color:#A50">d2aec01</span><span style="color:#A50"> (</span><b><span style="color:#0AA">HEAD -> </span></b><b><span style="color:#0A0">main</span></b><span style="color:#A50">)</span> add setup instructions
* <span style="color:#A50">7fca5db</span> first commit

```

4. Create a two new commits:
   1. `start setup script`
   2. `create main.py script`

```admonish info collapsible=true title="How does the graph look like now?"

* <span style="color:#A50">665e2e3</span><span style="color:#A50"> (</span><b><span style="color:#0AA">HEAD -> </span></b><b><span style="color:#0A0">main</span></b><span style="color:#A50">)</span> create main.py script
* <span style="color:#A50">751be6c</span> start setup script
* <span style="color:#A50">d2aec01</span> add setup instructions
* <span style="color:#A50">7fca5db</span> first commit

```

## Referring to Revisions

* The first few characters of a SHA (usually 4-6 characters, but can be less)
* The name of any ref, like `main` - the SHA referred to by the ref
* `<ref>@{n}` - entry `n` in the reflog for `<ref>`
* `@` - HEAD
* `<rev>@{date}` - `<rev>` at the given date; found using the reflog
* `@{n}` - nth prior version of the current branch
* `<rev>^` and `<rev>^n` - nth parent of `<rev>`; `^` and `^1` is the first parent, `^0` is the commit itself
* `<rev>~` and `<rev>~n` - nth generation ancestor of `<rev>` following first parents only
* `:/<text>` - youngest commit with message text matching regex `<text>`
* `<rev>^{/<text>}` - youngest commit with message text matching regex `<text>` accessible from `<rev>`

Note that suffixes can be combined, e.g. `main@{yesterday}^2^{/fixup}`, or e.g. `HEAD^2~3^` is the first parent of the
third ancestor of the second parent of `HEAD`.

Some Git commands accept ranges of commits; the double and triple dot syntax is useful for specifying these:

* `<rev1>..<rev2>` - all commits reachable from `rev2` but not reachable from `rev1`
    * Same as `^rev1 rev2` (aka `rev2 --not rev1`)
* `<rev1>...<rev2>` - all commits reachable from either `rev1` or `rev2`, but not both
    * Same as `r1 r2 --not $(git merge-base --all r1 r2)`

## Plumbing Commands

You are not expected to know these commands, but they are useful to know when debugging git repositories.

* `git cat-file <rev>` - Provide content or type and size information for repository objects. `-t` for type, `-s` for
  size, `-p` for pretty-print
* `git ls-files -s` - Show information about files in the index and the working tree.
* `git rev-parse <rev>` - can turn a revision into a SHA that the revision points to
* `git rev-list <rev>` - can turn revision lists like `A..B` and `A...B` into a list of commits
* `git merge-base <rev> <rev2>` - Find as good common ancestors as possible for a merge

## Resources

* [Git Internals - Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)
* [Git Internals - Git References](https://git-scm.com/book/en/v2/Git-Internals-Git-References)
* [Git Internals - Packfiles](https://git-scm.com/book/en/v2/Git-Internals-Packfiles)
* [Git Internals - The Refspec](https://git-scm.com/book/en/v2/Git-Internals-The-Refspec)
* [Git Workshop Reference](https://github.com/git-school/workshop-reference)
* [Git Internals - Plumbing and Porcelain](https://git-scm.com/book/en/v2/Git-Internals-Plumbing-and-Porcelain)
* [Visualizing Git](https://git-school.github.io/visualizing-git/)
