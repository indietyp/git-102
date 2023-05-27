# Patterns

There are many different patterns for git repositories, this section will describe some of them.

Branch patterns have already been discussed in the [branching section](./01-branches.md), so this section will focus on
other patterns.

## Monorepo

The monorepo, initially popularized by Google, is a repository that contains multiple projects. This is in contrast to
the more common approach of having one repository per project.

Like everything, monorepos have advantages and disadvantages. The main advantage is that it is easier to share code and
to depend on different projects, but especially the latter can also be a disadvantage, as it can lead to tight coupling
between projects. Initially setting up a monorepo can also be more difficult than setting up multiple repositories, but
sharing of common infrastructure (like Continous Integration of Deployment) can make it easier to set up new projects in
an existing monorepo. Another disadvantage is that it is more difficult to set up different permissions for different
projects, as well as long checkout times.

Over the last few years, monorepos have become more popular, especially in the JavaScript and Rust ecosystem, where they
are used by many different projects, including Babel, React, Rust, and Angular.

> Over the last few years, long checkout times have been partially mitigated by the introduction of sparse checkouts, a
> feature that allows you to only checkout a subset of the files in a repository.

To support this trend many programming languages have introduced tools to help with managing monorepos, some of the most
popular ones are:

* [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) - A tool that helps with managing JavaScript
  projects with multiple packages.
* [Cargo Workspaces](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html) - A tool that helps with managing
  Rust projects with multiple packages.
* [Go Modules](https://blog.golang.org/using-go-modules) - A tool that helps with managing Go projects with multiple
  packages.

> For those python users out there, unlike most other language, there is no official tool for managing monorepos, but
> there are some unofficial ones like [rye](https://github.com/mitsuhiko/rye).

### Tools to manage Monorepos

There are many tools (especially in the JavaScript ecosystem) that help with managing monorepos, some of the most
popular ones are:

* [Lerna](https://lerna.js.org/) - A tool that helps with managing JavaScript projects with multiple packages.
* [nx](https://nx.dev/) - A tool that helps with managing monorepos with multiple projects, especially in the Angular
  ecosystem.
* [turborepo](https://turborepo.dev/) - A tool that helps with managing monorepos with multiple projects, especially in
  the React ecosystem.
* [moonrepo](https://moonrepo.dev/) - A tool that helps with managing monorepos with multiple projects, tries to be
  language agnostic.

## Commit Naming Conventions

There are many different commit naming conventions, this section will describe some of them. One general rule is that
commit messages should be written in the imperative mood, e.g. "Add feature" instead of "Added feature". This is because
the commit message is a command to the reader, not a description of what has been done.

### Semantic Commit Messages

The most popular commit naming convention is
the [semantic commit message](https://seesparkbox.com/foundry/semantic_commit_messages), it is quite simple and easy to
use.

Format: `{type}({scope}): {subject}`

Where the type can be one of the following:

* `feat` - A new feature
* `fix` - A bug fix
* `docs` - Documentation only changes
* `style` - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* `test` - Adding missing or correcting existing tests
* `chore` - Changes to the build process or auxiliary tools and libraries such as documentation generation
* `ci` - Changes to the CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

What makes this popular is that it is incredibly simple and easy to use and flexible, if you think one of the existing
types is insufficient, you can just add a new one. The name should be short and concise, but it should also be clear
what the commit does.

The scope is optional, but it can be used to further specify the commit, e.g. `feat(webgl): add new shader`.

> Personal Note: I use this convention for all my projects. I often limit myself to: `feat`, `ci`, `test`, `fix`, `docs`
> and `chore`. I often omit the scope, but I use it when I think it is necessary.

### Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) is a specification for commit messages, it builds
on top of the semantic commit message specification and adds a few more rules.

The commit message should be structured as follows:

```text
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Where the type can be one of the following:

* `fix` - A bug fix
* `feat` - A new feature
* `BREAKING CHANGE` - A breaking change (major version bump)
* Others are allowed, but not defined by the specification.

The scope is optional, but it can be used to further specify the commit, e.g. `feat(webgl): add new shader`.

The description should be a short description of the change, it should be written in the imperative mood, e.g. "Add new
feature" instead of "Added new feature".

Commit messages with a `!` after the type/scope are considered to be breaking changes, e.g. `feat!: add new feature`,
and are used to draw attention to a specific commit.

There are many tools that support this specification, including:

* [commitlint](https://commitlint.js.org/) - A tool that checks if commit messages conform to the specification.
* [commitizen](http://commitizen.github.io/cz-cli/) - A tool that helps with writing commit messages that conform to the
  specification.
* [standard-version](https://github.com/conventional-changelog/standard-version) - A tool that helps with versioning
  projects that conform to the specification and generating changelogs.
* [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) -
  A commitlint configuration that checks if commit messages conform to the specification.

## Stacked Pull/Merge Requests

A stacked pull/merge request is a pull/merge request that is based on another pull/merge request. This is useful when
developing a new feature that depends on another feature that is still in development. The following example illustrates
this:

1. Alice creates a new branch `feature-a` and starts working on a new feature.
2. Alice creates a pull/merge request for `feature-a`.
3. Bob creates a new branch `feature-b` and starts working on a new feature that depends on `feature-a`.
4. Bob creates a pull/merge request for `feature-b` based on `feature-a`.
5. Alice finishes `feature-a` and merges it into the main branch.
6. Bob rebases `feature-b` on the main branch.
7. Bob finishes `feature-b` and merges it into the main branch.
8. Alice deletes the `feature-a` branch.
9. Bob deletes the `feature-b` branch.

## Resources

* [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
* [A Note About Git Commit Messages](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
* [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
* [Semantic Commit Messages](https://seesparkbox.com/foundry/semantic_commit_messages)
* [Commit Message Guidelines](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53)
* [Commit Message Format](https://git-scm.com/docs/git-commit#_discussion)
