document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll("[include-html]");
    let total = elements.length;
    let loaded = 0;

    elements.forEach(el => {
        const file = el.getAttribute("include-html");

        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;

                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = data;

                const scripts = tempDiv.querySelectorAll("script");

                scripts.forEach(oldScript => {
                    const newScript = document.createElement("script");

                    if (oldScript.src) {
                        newScript.src = oldScript.src;
                    } else {
                        newScript.textContent = oldScript.textContent;
                    }

                    document.body.appendChild(newScript);
                });

                loaded++;

                // Trigger event after all components finish loading
                if (loaded === total) {
                    document.dispatchEvent(new Event("componentsLoaded"));
                }
            })
            .catch(err => {
                el.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
                loaded++;
                if (loaded === total) {
                    document.dispatchEvent(new Event("componentsLoaded"));
                }
            });
    });

});
