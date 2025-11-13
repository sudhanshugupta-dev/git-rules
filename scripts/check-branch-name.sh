#!/bin/bash
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ ! "$BRANCH" =~ ^feature\/[a-zA-Z0-9._-]+$ ]]; then
  echo "❌ Invalid branch name: $BRANCH"
  echo "Branch names must start with 'feature/' (e.g., feature/login-screen)"
  exit 1
fi

echo "✅ Branch name valid: $BRANCH"
