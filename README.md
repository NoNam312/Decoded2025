# Decoded2025

## 🚀 About Decoded
Decoded is an annual **Semester 1** workshop designed for beginner programmers to dive into **React** by building modular and reusable **React Widgets**.

Throughout the workshop, students gain hands-on experience in designing and implementing interactive widgets. Those eager to push their skills further can participate in **Hackiethon**, a hackathon where they collaborate and build exciting projects using React.

📌 **All details are available on Notion:** [Decoded Notion Page](https://plum-soda-d5f.notion.site/Decoded-1bc996f226c88037a95dc1222f53a1a1)

---

## 🛠️ Getting Started with React

### Step 1: Install Node.js
React requires **Node.js**, which comes bundled with **npm (Node Package Manager)**.

📝 **Download & Install the latest LTS version from:** [Node.js Official Website](https://nodejs.org/en)

### Step 2: Verify Installation
Once installed, check if Node.js and npm are installed properly by running the following commands in your terminal:

```sh
node -v  # Displays Node.js version
npm -v   # Displays npm version
```

### Step 3: Set Up the Project
1. **Download the project folder as a ZIP file** from the provided link.
2. **Extract the ZIP file** to your desired location.
3. **Open the extracted folder** in **Visual Studio Code**.
4. **Open the terminal** in VS Code and run the following commands:

```sh
npm install  # Installs dependencies
npm run dev  # Starts the development server
```

This will launch the React app in your default browser.

---

## 🔧 Troubleshooting (Windows)
If **Node.js isn’t recognized in your terminal**, you may need to manually add it to your system's **PATH**:

1. Open **Environment Variables** (Search for "Environment Variables" in the Start Menu).
2. Under **System Variables**, find `Path` and click **Edit**.
3. Click **New** and add the path to Node.js (e.g., `C:\Program Files\nodejs\`).
4. Click **OK** and restart your terminal.
5. Verify the installation again by running:

```sh
node -v
npm -v
```

---

## 🔧 Troubleshooting (Mac)
If you are on **Mac**, installation and setup are mostly the same. However, if you face issues, try the following:

1. **Ensure Node.js is installed** by running:

```sh
brew install node  # If Homebrew is installed
```

2. If `npm install` fails due to permission errors, try running:

```sh
sudo npm install --legacy-peer-deps
```

3. If the development server doesn't start, use:

```sh
rm -rf node_modules package-lock.json
npm install
npm run dev
```

This ensures dependencies are properly installed and refreshed.

---

🚀 **Happy Coding!** 🎉
