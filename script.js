async function fetchData() {
    const res = await fetch ("http://api.weatherapi.com/v1/current.json?key=9bfdf2808a9843d3a2f143359231002&q=France&aqi=no");
    const record = await res.json();
    console.log(record);
    document.getElementById("name").innerHTML = record.location.name;
    document.getElementById("country").innerHTML= record.location.country;
    document.getElementById("region").innerHTML= record.location.region;
    document.getElementById("localtime").innerHTML= record.location.localtime;
}
fetchData();