# Releases

Releases are a way to mark a specific commit as a release, and to provide a download link for the source code. Releases
are usually used to mark a new version of the software, but can also be used to mark a specific commit as a release.
They are bound to a specific commit via a tag.

While not part of Git, releases are a feature of various Git hosting services like GitLab and GitHub.

There are two ways to create a release:

* Create a tag, then navigate to the tags page and create a release from there. (Click on the pencil icon next to the
  tag), by writing any release description you will automatically create a release.

* Navigate to the releases page and create a release from there.
    1. If you haven't yet create a release, you will need to navigate to `Deployments` -> `Releases` first.
    2. If you have created a release before, you can access the releases page from the rocket icon at the repository
       overview page.

**Important:** If you remove the tag, the release will also be removed.

If you publish a library (to for example PyPi), you should also create a release with the exact same version number at
the exact same commit that was uploaded to your package registry of choice.

Release should be created on the main branch, and not on feature branches.

## Exercise

### Tasks

1. Create a new tag for the [sandbox repository](https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git) at the
   current commit, with the name `<name>@v0.0.1`, where `<name>` is your name.

   You can either create the tag from the command line, or from the GitLab UI. We have discussed how to create tags from
   the command line in the tags section of [Demystifying Git](../00-theory/01-tags.md). If you already created a tag in
   the CLI before it is recommended to use the GitLab UI to create the tag instead. (at least once, just to see how it
   works)

2. Create a release for the [sandbox repository](https://git.mpi-cbg.de/scicomp/teaching/git-102-sandbox.git) at the
   current commit.

3. Checkout the releases page and explore the release you just created.

## References

* [GitLab Documentation: Releases](https://docs.gitlab.com/ee/user/project/releases/)
* [GitHub Documentation: Releases](https://docs.github.com/en/github/administering-a-repository/about-releases)
