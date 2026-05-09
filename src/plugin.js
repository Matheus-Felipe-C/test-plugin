// plugin.js
// The build step generates this file from the compiled Svelte output.
// Commit it; the GitHub→Amplenote plugin will bundle it into the note.
import getCounterHTML from "./counter-embed.js";

const plugin = {
  // ── Trigger: adds "Counter" to the quick-open menu ─────────────────────
  appOption: {
    "Counter": {
      async run(app) {
        await app.openSidebarEmbed(1 /* aspect ratio – ignored for sidebar */);
      },
    },
  },

  // ── Also insertable inline in a note ───────────────────────────────────
  insertText: {
    "Insert counter": {
      async run(app) {
        await app.context.replaceSelection(
          `<object data="plugin://${app.context.pluginUUID}" data-aspect-ratio="1" />`
        );
        return null;
      },
    },
  },

  // ── Renders the Svelte app inside the embed iFrame ─────────────────────
  renderEmbed(app, ...args) {
    return getCounterHTML();
  },

  // ── Receives calls from window.callAmplenotePlugin() in the embed ───────
  async onEmbedCall(app, action, ...args) {
    if (action === "countChanged") {
      const [count] = args;
      // Example: persist the count as a note setting
      await app.setSetting("lastCount", String(count));
      return `Saved count: ${count}`;
    }
  },
};

export default plugin;