// dangerfile.js
import { danger, warn, message } from 'danger';

if (!danger.github.pr.body || danger.github.pr.body.length < 10) {
  warn('Please add a proper PR description.');
}

message('Danger.js ran successfully!');
