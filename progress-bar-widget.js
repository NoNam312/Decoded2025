(function () {
    const widgetId = "progress-bar-widget";
    if (document.getElementById(widgetId)) return;

    const container = document.createElement("div");
    container.id = widgetId;
    const shadow = container.attachShadow({ mode: "open" });

    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Silkscreen&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link); 

    const style = document.createElement("style");
    style.textContent = `   
        :host {
            --theme-background: rgba(18, 18, 18, 0);
            --theme-accent: black;
            font-family: "Silkscreen", sans-serif;
            color: var(--theme-accent);
        }

        * { 
            margin: 0px;
        }

        .main-container {
            height: 10vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: var(--theme-background);
        }

        #progress-text {
            font-size: 3vh;
            margin-top: -3vh; 
        }

        .progress-bar-container {
            height: 3.5vh;
            width: 75%;    
            border: var(--theme-accent) solid;
            border-width: .7vh .8vw;
        }

        #progress-bar-fill {
            margin: 0.5vh;
            height: 2.5vh;
            width: 0%; /* changed later via script */
            background: repeating-linear-gradient(
                135deg,
                var(--theme-accent),
                var(--theme-accent) 1vh,
                rgba(0, 0, 0, 0) 1vh,
                rgba(0, 0, 0, 0) 2vh
            );
            transition: width 3.5s;
        }
    `;

    const content = document.createElement("div");
    content.className = "main-container";
    content.innerHTML = `
        <p id="progress-text">0000 is now 00.0000% complete.</p>
        <div class="progress-bar-container">
            <div id="progress-bar-fill"></div>
        </div>
    `;

    shadow.appendChild(style);
    shadow.appendChild(content);
    document.body.appendChild(container);

    function getPercentage() {
        const now = new Date();
        const startOfThisYear = new Date(now.getFullYear(), 0, 1);
        const startOfNextYear = new Date(now.getFullYear() + 1, 0, 1);
        return (((now - startOfThisYear) / (startOfNextYear - startOfThisYear)) * 100).toFixed(5);
    }

    function updateProgressBar() {
        const percentComplete = getPercentage();
        shadow.getElementById("progress-bar-fill").style.width = `${percentComplete}%`;
        shadow.getElementById("progress-text").textContent = `${new Date().getFullYear()} is now ${percentComplete}% complete.`;
    }

    updateProgressBar();
    setInterval(updateProgressBar, 1000);
})();
