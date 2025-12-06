window.addEventListener('load', function() {
    const lookupBtn = document.getElementById("lookup");
    const resultDiv = document.getElementById("result");

    lookupBtn.addEventListener("click", function(e) {
        e.preventDefault();

        let country = document.getElementById("country").value.trim();
        let lookupType = document.getElementById("lookupCities").checked ? "cities" : "country";

        if (country === "") {
            resultDiv.innerHTML = "<p>Please enter a country name.</p>";
            return;
        }

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "world.php?country=" + encodeURIComponent(country) + "&lookup=" + lookupType);
        xhr.onload = function () {
            if (xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            } else {
                resultDiv.innerHTML = "<p>Error loading results.</p>";
            }
        };
        xhr.send();
    });
});