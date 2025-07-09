const vscode = require("vscode");

/**
 * Called when the extension is activated.
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log("✅ Sanskrit Language Extension activated.");

  try {
    const disposable = vscode.commands.registerCommand("sanskrit.hello", () => {
      vscode.window.showInformationMessage("🕉 जय संस्कृतम्! 🚀");
    });

    context.subscriptions.push(disposable);
  } catch (err) {
    console.error("💥 Error registering command 'sanskrit.hello':", err);
  }
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
