function Evaluate() {
         
    const units = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300];
    const distances = [150, 250, 250, 300, 450, 450, 450, 600, 600, 600, 600, 600, 800, 800, 800];

    var u = document.getElementById("units").value;
    var d = document.getElementById("distance").value;

    const result = () => {
        for (let i = 0; i < units.length; i++) {
            if (u <= units[i] && d >= distances[i]) {
                return "Combo"
            }
            if (i != 0) {
                if (u > units[i - 1] && u <= units[i] && d >= distances[i]) {
                    return "Combo";
                }
            }
        }
        return "No Combo"
    }
    document.getElementById("result").innerHTML = result();
    document.getElementById("url").style.visibility = "visible";
}