const vscode = require("vscode");

function activate(context) {
  console.log("✅ Sanskrit Language Extension activated.");

  let disposable = vscode.commands.registerCommand("sanskrit.hello", () => {
    vscode.window.showInformationMessage("🕉 जय संस्कृतम्! 🚀");
  });

  context.subscriptions.push(disposable);
}

function deactivate() {
  console.log("👋 Sanskrit Extension deactivated.");
}

module.exports = {
  activate,
  deactivate
};
