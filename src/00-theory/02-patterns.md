# Patterns

## Monorepo

## Commit Naming Conventions

### Conventional Commits

## Branch Naming Conventions

### Git Flow

First popularized in this [blog post](https://nvie.com/posts/a-successful-git-branching-model/), it is by far the most
complex branch naming convention, used by many different repositories and sometimes seen as overcomplicated.

![](https://nvie.com/img/git-model@2x.png)

Reposities:

* TODO

### Feature

Simplified model of git-flow, branch names are divided by `/` to create groups, there are 3 groups in total (third one
is optional):

Format: `{work-type}/{2-3 word summary}/{story or ticket id}`

* `work-type`: feature, refactor, bugfix, hotfix, etc.
* `story or ticket id` (if it exists) from the used ticketing app, (e.g. Jira, GitLab issued, etc.)

Examples:

* `feature/webgl-rework`

Repositories:

* TODO

### Contributor Branches

Branch names are divided by `/` to create groups, the first group is the identifier of the user that owns the branch,
after this a contributor is free to decide the structure, one might want to use categorize further by type or project.

Examples:

* `bm/deer/impl-core`

Repositories:

* [HASH]

## Stacked Pull/Merge Requests

[//]: # (TODO: naming conventions)
