# Hooks

Git can also be extended with custom code. This is done with so-called hooks. Hooks are scripts that are executed at
certain points in the Git workflow. For example, you can have a hook that is executed before a commit is created. This
can be used to run tests or to check for code style violations. Hooks are stored in the `.git/hooks` directory of your
Git repository. You can find a list of all available hooks in
the [Git documentation](https://git-scm.com/docs/githooks).

Hooks are not part of the repository, so they are not shared with other users. This means that if you want to use hooks
in a team, you have to make sure that everyone has the same hooks installed. This can be done by adding the hooks to the
repository and then installing them on each machine. This can be done with the following command:

```bash
git config core.hooksPath .githooks
```

This command tells Git to look for hooks in the `.githooks` directory. The name of the directory can be chosen freely.

There are also tools that can help you manage hooks. The most popular are:

* [husky](https://typicode.github.io/husky/#/)
* [pre-commit](https://pre-commit.com/)
* [overcommit](https://github.com/sds/overcommit)

Python projects tend to use pre-commit, while javascript projects tend to use husky.

## Pre-commit

Pre-commit is a tool that allows you to manage hooks in a Git repository. It is written in Python and can be installed
with pip:

```bash
pip install pre-commit
```

After the installation, you can initialize pre-commit in your repository with the following command:

```bash
pre-commit install
```

This will create a `.pre-commit-config.yaml` file in your repository. This file contains the configuration for
pre-commit.
It defines which hooks should be executed and how they should be executed.

Common and recommended hooks are:

* [black](https://github.com/psf/black): Code formatter for Python
* [isort](https://github.com/PyCQA/isort): Sorts imports in Python files
* [ruff](https://github.com/astral-sh/ruff-pre-commit): Checks for common mistakes in Python code
* [typos](https://github.com/crate-ci/typos): Checks for common spelling mistakes in your code

The configuration for these hooks looks like this:

```yaml
repos:
  # Some commons hooks for Python projects.
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v2.3.0
    hooks:
      - id: check-yaml
        stages: [ commit ]
      - id: check-json
        stages: [ commit ]
      - id: check-toml
        stages: [ commit ]
      - id: check-merge-conflict
        stages: [ commit ]
      - id: check-case-conflict
        stages: [ commit ]
      - id: detect-private-key
        stages: [ commit ]
      - id: check-added-large-files
        stages: [ commit ]
      - id: check-ast
        stages: [ commit ]
      - id: check-byte-order-marker
        stages: [ commit ]
      - id: check-executables-have-shebangs
        stages: [ commit ]
      - id: mixed-line-ending
        stages: [ commit ]
      - id: trailing-whitespace
        stages: [ commit ]
      - id: check-case-conflict
        stages: [ commit ]

  - repo: https://github.com/psf/black
    rev: 23.3.0
    hooks:
      - id: black
        # It is recommended to specify the latest version of Python
        # supported by your project here, or alternatively use
        # pre-commit's default_language_version, see
        # https://pre-commit.com/#top_level-default_language_version
        language_version: python3.8

  - repo: https://github.com/pycqa/isort
    rev: 5.12.0
    hooks:
      - id: isort

  - repo: https://github.com/astral-sh/ruff-pre-commit
    # Ruff version.
    rev: v0.0.270
    hooks:
      - id: ruff

  - repo: https://github.com/crate-ci/typos
    rev: v1.14.11
    hooks:
      - id: typos
```

## Husky

Husky is a tool that allows you to manage hooks in a Git repository. It internally makes use of `core.hooksPath` and is
written in Javascript. It can be installed in your project with the following command:

```bash
npx husky-init && npm install
# or pnpm dlx husky-init && pnpm install
# or yarn dlx husky-init --yarn2 && yarn
```

```admonish note

While pre-commit is language agnostic, husky is not. It is mainly used for Javascript projects. 
If you want to use it in any project that uses a different programming language, you will still have to install it with 
npm or yarn. It will also, always create a `package.json` (which is only used in Javascript projects)
and a `node_modules` directory. 

```

This will add a `prepare` script to your `package.json` file. Every new user that clones your repository will have to
run this script to install husky. This can be done with the following command:

```bash
npm run prepare
# or pnpm run prepare
# or yarn prepare
```

You can then add hooks to your repository with the following command:

```bash
npx husky add .husky/pre-commit "npm test"
```

All hooks mentioned in the [Git documentation](https://git-scm.com/docs/githooks) are supported. Simply choose the name
of the hook you want to use and execute the corresponding command. For example, if you want to add a hook that is run on
every commit, you can use the following command:

```bash
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
