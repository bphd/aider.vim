// This comment for vim-test plugin: Use denops' test() instead of built-in Deno.test()
import { assertAiderBufferShown } from "./assertions.ts";
import { assertAiderBufferAlive } from "./assertions.ts";
import { test } from "./testRunner.ts";

test("floating", "AiderRun should work", async (denops) => {
  await denops.cmd("AiderRun");
  await assertAiderBufferAlive(denops);
  await assertAiderBufferShown(denops);
});

test("vsplit", "AiderRun should work", async (denops) => {
  await denops.cmd("AiderRun");
  await assertAiderBufferAlive(denops);
  await assertAiderBufferShown(denops);
});

test("floating", "AiderAddCurrentFile should work", async (denops) => {
  await denops.cmd("AiderAddCurrentFile");
  await assertAiderBufferAlive(denops);
  await assertAiderBufferShown(denops);
});

test("vsplit", "AiderAddCurrentFile should work", async (denops) => {
  await denops.cmd("AiderAddCurrentFile");
  await assertAiderBufferAlive(denops);
  await assertAiderBufferShown(denops);
});
