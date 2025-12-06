window.onload = function() {

    const lookupCountry = document.getElementById("lookup-country");
    const lookupCities = document.getElementById("lookup-cities");
    const resultDiv = document.getElementById("result");

    function performLookup(type) {
        const country = document.getElementById("country").value.trim();

        let xhr = new XMLHttpRequest();
        xhr.open("GET", "world.php?country=" + encodeURIComponent(country) + "&lookup=" + type, true);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resultDiv.innerHTML = xhr.responseText;
            }
        };

        xhr.send();
    }

    lookupCountry.addEventListener("click", function(e) {
        e.preventDefault();
        performLookup("country");
    });

    lookupCities.addEventListener("click", function(e) {
        e.preventDefault();
        performLookup("cities");
    });
};

