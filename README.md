# 🕉 Sanskrit Icon Theme for VS Code

This extension provides a **custom file icon** for `.sans` files used in the [Sanskrit Programming Language](https://github.com/prakhardoneria/sanskrit-lang). 

Because VS Code doesn’t let language extensions define icons directly (hella skill issue), this theme adds a beautiful Devanagari 🕉️ icon to make your `.sans` files stand out like Vedic gold.

## 🔥 Features

- ✅ Custom file icon for `.sans` files
- ✅ Works alongside any syntax-highlighting/language extension
- ✅ SVG-based crisp icon support
- ✅ Built for use with the Sanskrit Programming Language

## 📦 How to Use

1. Clone or download this repo:

   ```bash
   git clone https://github.com/PrakharDoneria/sans-vscode-pack.git
   cd sans-vscode-pack
   npm install
   ```

2. Launch the extension:

   * Open the folder in VS Code
   * Press `F5` to open the **Extension Development Host**

3. In the new window:

   * Press `Ctrl+Shift+P`
   * Run: `File Icon Theme: Sanskrit Icon Theme`

4. Open a `.sans` file.
   🎉 You should now see your custom icon in the Explorer sidebar.

## 🧪 Example

```plaintext
📁 examples/
├── hello.sans      <-- 👀 Now has a Sanskrit icon!
├── fibonacci.sans
```

## 📁 File Icon Preview

![Sanskrit icon in file explorer](./icons/sanskrit.svg)

> Want to change the icon? Replace `icons/sanskrit.svg` with your own. Use SVG for best quality.

## 🛠 Related Extensions

* [Sanskrit Language Support](https://github.com/prakhardoneria/sanskrit-lang) – Syntax highlighting, REPL, and compiler support.

## 💡 Pro Tips

* You can package this icon theme and install it via `.vsix`:

  ```bash
  npm install -g vsce
  vsce package
  code --install-extension sanskrit-icon-theme-*.vsix
  ```

## 🔗 License

MIT – Use it, fork it, Sanskrit-ify the universe.

---

Made with 🕉 by [@prakhardoneria](https://github.com/prakhardoneria)