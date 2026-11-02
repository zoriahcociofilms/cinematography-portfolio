#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
expected_user='zoriahcociofilms'
repo="$expected_user/cinematography-portfolio"
login="$(gh api user --jq .login)"
if [[ "$login" != "$expected_user" ]]; then
  echo "Stopped: authenticate as $expected_user before publishing."
  exit 1
fi
if [[ -e .git ]]; then
  echo 'Stopped: a Git checkout already exists. Review its remote before publishing manually.'
  exit 1
fi
if gh repo view "$repo" >/dev/null 2>&1; then
  echo "Stopped: $repo already exists. Nothing has been overwritten."
  exit 1
fi
npm run test:config
npm run build
user_id="$(gh api user --jq .id)"
git init -b main
git config --local user.name 'Zoriah Cocio'
git config --local user.email "$user_id+$expected_user@users.noreply.github.com"
git add .
git commit -m 'Build editorial cinematography portfolio'
gh repo create "$repo" --public --description 'Zoriah Cocio — Cinematographer & Visual Storyteller. Wildlife, documentary, and commercial filmmaking.' --source . --remote origin
git -c credential.helper= -c 'credential.helper=!gh auth git-credential' push -u origin main
gh api --method POST "repos/$repo/pages" -f build_type=workflow
echo "Source pushed. Verify the Actions run and live site: https://$expected_user.github.io/cinematography-portfolio/"
