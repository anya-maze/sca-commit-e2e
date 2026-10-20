# sca-commit-e2e

Fixture service for the Maze commit-scan SCA end-to-end test. It pins
dependency versions with public CVEs so a dependency scan of a build commit
reports findings.

The `publish` workflow builds the image from this repository and pushes
`ghcr.io/anya-maze/sca-commit-e2e:1.0.0-<commit sha>` on every push to `main`.
