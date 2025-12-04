const { danger, message, fail } = require('danger');

// Fail: Empty description
if (!danger.github.pr.body || danger.github.pr.body.length < 10) {
  fail('❌ Add a proper PR description.');
}

// Fail: Missing lockfile update
const modified = danger.git.modified_files;
if (modified.includes('package.json') && !modified.includes('yarn.lock')) {
  fail('❌ You changed package.json but not yarn.lock.');
}

// Fail: Too many lines of code
if (danger.github.pr.additions > 700) {
  fail('❌ PR is too large. Split it into smaller parts.');
}

message('✔ Danger checks finished');
