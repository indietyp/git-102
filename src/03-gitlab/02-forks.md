# Forks

Forks are copies of a repository. They are used to allow you to make changes to a project without affecting the original
project. Forks are also used to propose changes to someone else's project.

They are not part of Git, they are a feature of various Git hosting services like GitLab and GitHub.

You can create a fork by clicking the fork button on the GitLab/GitHub website. This will create a copy of the
repository in your account. You can then clone this repository to your computer and make changes to it.

Forks are linked to the original repository, this means that you can easily pull changes from the original repository
into your fork.

Forks are often used to propose changes to someone else's project. You can do this by creating a fork of the project,
making your changes and then creating a merge request. The owner of the original repository can then review your changes
and decide if they want to merge them into their repository. This is because you cannot push changes to a repository
that you do not have permissions to do so.

The workflow for creating a fork is slightly different depending on the platform you are using, if you are using GitLab
or GitHub
then you can follow the instructions in the linked resources below.

## Exercise

### Tasks

1. Create a fork of the [protected repository](https://git.mpi-cbg.de/scicomp/teaching/git-102-protected.git) on GitLab.
2. Clone the fork to your computer.
3. Create a new branch called `<name>/forks` where `<name>` is your name, e.g. `alice/forks`
4. Create a new file called `<name>.txt` where `<name>` is your name, e.g. `alice.txt` and write an interesting fact
   about you. (If you don't want to share anything about yourself then you can write anything you want)
5. Commit and push your changes.
6. Create a merge request to merge your changes into the `main` branch of the original repository.

## Resources

- [GitLab: Project forking workflow](https://docs.gitlab.com/ee/user/project/repository/forking_workflow.html)
- [GitHub: Fork a repo](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)
