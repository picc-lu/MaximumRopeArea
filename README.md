# Maximum Rope Area

> Inspired by [Erich Friedman’s Maximum Fence Area](https://erich-friedman.github.io/packing/fence/).

This project explores the **Maximum Rope Area** problem:
Given **n** pieces of perfectly flexible, inextensible soft rope, each of length **1**, you may arrange the ropes in any way you like to enclose the largest possible total area. Ropes can be bent into any shape, tied together end-to-end, but may not cross or overlap.

## 🌐 Live Website

The project is hosted via GitHub Pages. You can view the latest best-known configurations here:
**[https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/](https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/)**
*(Please replace the URL with your actual GitHub Pages link)*

## 🤝 How to Contribute

We welcome contributions of new configurations or improved exact bounds for any value of *n*!

You can submit your solution in two ways:

### Option 1: Submit a Pull Request (Recommended)
1. Fork this repository.
2. Add your configuration to the `ropeData` array in `js/script.js`.
3. If you have an image (e.g., `4.png`), upload it to the `data/` folder.
4. Commit your changes and submit a Pull Request. Please make sure to include your name in the `note` field so you get credit!

*Example of adding a new configuration for n = 4:*

    { n: 10, exact: "YOUR ANSWER or null", approx: "YOUR ANSWER", image: "data/10.png", note: "[Your Name]", date: "submit date" },

### Option 2: Send an Email
If you are not familiar with GitHub, you can simply send your configuration, mathematical bounds, and images via email to:
📧 **707291056@qq.com**

Please include:
- The number of ropes (*n*)
- The exact area (if known)
- The approximate area (to 5 decimal places)
- A brief description or proof of the configuration
- Any diagrams or images

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).