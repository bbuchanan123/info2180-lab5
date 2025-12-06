console.log("JS is running");

window.onload = function() {

    const lookupBtn = document.getElementById("lookup");
    const resultDiv = document.getElementById("result");

    lookupBtn.addEventListener("click", function(e) {
        e.preventDefault();

        const country = document.getElementById("country").value;

        // Open AJAX request
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "world.php?country=" + encodeURIComponent(country), true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    });
};
