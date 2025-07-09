const vscode = require("vscode");

/**
 * Called when the extension is activated.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("✅ Sanskrit Language Extension activated.");

  // Register a simple command for the command palette
  const disposable = vscode.commands.registerCommand("sanskrit.hello", () => {
    vscode.window.showInformationMessage("🕉 जय संस्कृतम्! 🚀");
  });

  // Push command to subscriptions so it gets disposed automatically
  context.subscriptions.push(disposable);
}

/**
 * Called when the extension is deactivated.
 */
function deactivate() {
  console.log("👋 Sanskrit Language Extension deactivated.");
}

module.exports = {
  activate,
  deactivate
};
