# Setup

This is the setup required for the git-201 class.

## Prerequisites

* terminal
* git
* any code editor (terminal preferred)

<div class="tabbed-blocks">

```bash,macos
# only install homebrew if not previously installed
if command -v brew &> /dev/null; then /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"; fi

brew install git

# Choose one from below, paste into terminal WITHOUT # (Recommendation: vim)
# brew install vim
# brew install neovim
# brew install nano
# brew install emacs
# brew install visual-studio-code
```

```bash,debian
sudo apt update
sudo apt install git

# Choose one from below, paste into terminal WITHOUT # (Recommendation: vim)
# sudo apt install vim
# sudo apt install neovim
# sudo apt install nano
# sudo apt install emacs
# for visual studio code please visit: https://code.visualstudio.com/docs/setup/linux
```

```bash,centos
sudo yum install git
```

</div>

Depending on your chosen code editor you can open any file like this:

<div class="tabbed-blocks">

```bash,vim
vim <file name>
```

```bash,neovim
neovim <file name>
```

```bash,nano
nano <file name>
```

```bash,emacs
emacs -nw <file name>
```

```bash,code
code <file name>
```

</div>

## Setting up your name

This is optional, and only needs to be done, if git was not configured in `git-101`.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Setting up the workspace

[//]: # (Tasks for this should be in actions)


Clone the following repository: <https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox>

~~~admonish info collapsible=true title="Hint"


```bash
git clone git@git.mpi-cbg.de:scicomp/teaching/git-102-sandbox.git
# Cloning into 'git-102-sandbox'...
# remote: Enumerating objects: 3, done.
# remote: Counting objects: 100% (3/3), done.
# remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
# Receiving objects: 100% (3/3), done.
```

~~~

Go into the created repository, this will be the workspace we will use for further development.

~~~admonish info collapsible=true title="Hint"


```bash
cd git-102-sandbox
pwd
# /Users/bmahmoud/git-102-sandbox
```

~~~

## About this book

This book is written in markdown, and is rendered using [mdbook](https://github.com/rust-lang/mdBook), it uses a custom
extension to render code blocks in tasks blurred in the beginning, and only show the code when the user clicks on the
block. This is done to avoid spoilers, and to allow the user to try to solve the task before looking at the solution.

You can hover over the code blocks to see the hidden code, or click on the code block to show the hidden code. At the
top left (if there are any code blocks) is an eye icon, which allows you to toggle the visibility of all code blocks.

If you find this effect annoying, you can disable it by using the following console
command: `localStorage.setItem('hideCode', false)`, you then need to reload the page. (You can also
use `Ctrl + Shift + R` or `Alt + Shift + R`)
