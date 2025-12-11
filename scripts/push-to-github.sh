#!/usr/bin/env bash
set -euo pipefail

# Usage:
# ./scripts/push-to-github.sh "commit message"
# or just: ./scripts/push-to-github.sh

COMMIT_MSG="${1:-chore: update project (automated push)}"

# Ensure we are in the repo root (script should be run from project root)
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Error: not inside a git repository. cd into d:\\kaif-website\\my-ecommerce and try again."
  exit 1
fi

# Determine current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ -z "$CURRENT_BRANCH" ] || [ "$CURRENT_BRANCH" = "HEAD" ]; then
  echo "Error: unable to determine current branch."
  exit 1
fi

echo "Branch: $CURRENT_BRANCH"

# Fetch remote changes
echo "Fetching origin..."
git fetch origin

# Ensure working tree is clean or allow auto-commit
if [ -n "$(git status --porcelain)" ]; then
  echo "Uncommitted changes detected. Staging all changes and creating a commit."
  git add .

  # Only create commit if there are staged changes
  if ! git diff --cached --quiet; then
    git commit -m "$COMMIT_MSG"
    echo "Committed local changes."
  else
    echo "No changes staged after git add. Nothing to commit."
  fi
else
  echo "Working tree clean."
fi

# Rebase onto remote branch to avoid non-fast-forward push
echo "Rebasing onto origin/$CURRENT_BRANCH..."
set +e
git rebase "origin/$CURRENT_BRANCH"
REBASE_EXIT=$?
set -e

if [ $REBASE_EXIT -ne 0 ]; then
  echo ""
  echo "Error: rebase failed (likely due to merge conflicts)."
  echo "Resolve conflicts manually, then run:"
  echo "  git rebase --continue"
  echo "After successful rebase, run this script again to push."
  exit 1
fi

# Push to origin
echo "Pushing to origin/$CURRENT_BRANCH..."
git push origin "$CURRENT_BRANCH"

echo "Push successful."