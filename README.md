# ember-test

This small app demostrates a bug in the combination of Ember < v3.20 and ember-cli-qunit 5.x.

To see the bug in action, run:

```
ember test
```

and verify that the `willDestroyElement` hooks are not run.

The tl;dr is: if you want to use ember-cli-qunit 5.x make sure you are also at least Ember v3.20. The tests will pass at lower Ember versions, but tests are not properly cleaned up and context will leak.

UPDATE:
The bug is specfic to @ember/test-helpers and was introduced in https://github.com/emberjs/ember-test-helpers/pull/1278/files
