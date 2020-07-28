const execa = require('execa');

async function run(...flags) {
  const { stdout } = await execa('mdmod', flags, {
    cwd: __dirname,
  });
  return stdout;
}

function strip(str) {
  return str.replace(/\n?<!--[\w\W]+?-->\n?/g, '').trim();
}

it('replace', async () => {
  const out = await run('input.md', '--dry-run');
  expect(strip(out)).toBe(`- [Hello](#hello)`);
});
