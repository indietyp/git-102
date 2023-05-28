# Merge Request

Merge requests (also called pull requests) are a way to propose changes to a repository.

They are not part of Git, they are a feature of various Git hosting services like GitLab and GitHub.

Merge requests are used in many repositories to allow users to propose changes to the project. Instead of directly
merging into the main branch, merge requests act as a way to review and test changes before they are merged into the
main branch.

The workflow is typically as follows:

1. Create a new branch, if you do not have direct access to the repo, first fork the repository and then create a new
   branch in your fork.
2. Make your changes in the new branch.
3. Create a merge request into the main branch, if you use stacked merge requests then you can create a merge request
   into the branch that you want to merge into.
4. One of the responsible maintainers will review your changes and either merge them or request changes.
5. If changes are requested then you can make the changes in the same branch and push them to the remote. The merge
   request will automatically update.
6. Before merging the changes, the maintainer will typically run some tests to make sure that the changes work as
   expected.
7. Once the changes are merged, the branch can be deleted.

Merge requests are not only used for proposing changes (as a list of commits), but they are also used as a place to
discuss the changes. This is done by adding comments to the merge request. Code reviews (where another person reviews
the diff of changes) are also done in merge requests.

## Exercise

### Setup

If you haven't already, clone the repository from GitLab and go into the repository directory.

```bash
git clone https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git
```

### Tasks

1. Create a new branch called `<name>/merge-request` where `<name>` is your name, e.g. `alice/merge-request`

   ```bash,reveal
   git switch -c <name>/merge-request main 
   git push -u origin <name>/merge-request
   ```

2. Copy the file `introduction/template.md` to a new file called `<name>.md` where `<name>` is your name, e.g.
   `alice.md`

   ```bash,reveal
   cp introduction/template.md introduction/<name>.md
   vi introduction/<name>.md
   ```

3. Fill in the template with some information about yourself. (If you don't want to share anything about yourself then
   you can write anything you want)

4. Commit and push your changes.

5. Head into the GitLab repository and create a merge request to merge your changes into the `main` branch.
    1. Click on the `Merge Requests` tab.
    2. Click on the `New merge request` button.
    3. Select your branch as the source branch and the `main` branch as the target branch.
    4. Click on the `Compare branches and continue` button.
    5. Fill in the title and description of the merge request.
    6. Click on the `Submit merge request` button.

6. Assign your desk neighbour as the reviewer of the merge request.

7. Wait for your desk neighbour to review your changes and merge the merge request. Review the changes that your desk
   neighbour made to your merge request.

   This is a playground! Be creative and have fun! You can request changes, add comments, etc. to the merge request
   before approving it. This is the perfect opportunity to try out merge requests and see how they work.

   (If you don't have a desk neighbour, or are doing this after the course, then you can assign me as the reviewer, my
   username is `bmahmoud`)
