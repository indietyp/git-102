# Help

## There are too many branches in my terminal, what can I do?

This is most likely because everyone pushed their branch to the remote repository. This is totally fine! But it can
clutter up your overview.

This is why we prefix our branches with our name. This way you can easily filter out the branches you don't want to see
while using `git log` or `git branch`.

```bash
git log --oneline --graph --all --decorate --branches="<name>"
```

