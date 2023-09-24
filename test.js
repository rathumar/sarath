const { openBrowser, goto, write, click } = require('taiko');
const { repl } = require('taiko/recorder');
const assert = require('assert').strict;
(async () => {
  try {
    await openBrowser({headless: false});
    await goto("google.com");
    // remove this line if you run headless, because the cookie consent will not appear
    await write("taiko test automation");

    await click("Google Search");
    // Launchs the REPL after executing 
    // the commands above
assert.equal($("#APjFqb").value, 'sarath');
    await repl(); 
  assert.ok(!await text('Facebook').exists(0,0));
  await closeBrowser();
  } catch (error) {
      console.error(error);
  } finally {
    closeBrowser();
  }
})();