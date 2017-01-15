function ah_notz_easy() {
    var arr = [
        "+1",
        "+1",
        "0",
        "0",
        "0",
        "-1",
        "-1",
        "-1",
        "-2",
        "-2",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "|A| Cloaked",
        "|^| Tablet",
        "Critical Failure",
        " * Elder Sign * "
    ]
    var rand = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("zealot").innerHTML = "NotZ Easy: " + rand;
}

function ah_notz_standard() {
    var arr = [
        "+1",
        "0",
        "0",
        "-1",
        "-1",
        "-1",
        "-2",
        "-2",
        "-3",
        "-4",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "|A| Cloaked",
        "|^| Tablet",
        "Critical Failure",
        " * Elder Sign * "
    ]
    var rand = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("zealot").innerHTML = "NotZ Standard: " + rand;
}

function ah_notz_hard() {
    var arr = [
        "0",
        "0",
        "0",
        "-1",
        "-1",
        "-2",
        "-2",
        "-3",
        "-3",
        "-4",
        "-5",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "|A| Cloaked",
        "|^| Tablet",
        "Critical Failure",
        " * Elder Sign * "
    ]
    var rand = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("zealot").innerHTML = "NotZ Hard: " + rand;
}

function ah_notz_expert() {
    var arr = [
        "0",
        "-1",
        "-1",
        "-2",
        "-2",
        "-3",
        "-3",
        "-4",
        "-4",
        "-5",
        "-6",
        "-8",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "|A| Cloaked",
        "|^| Tablet",
        "Critical Failure",
        " * Elder Sign * "
    ]
    var rand = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("zealot").innerHTML = "NotZ Expert: " + rand;
}

function ah_coh_standard() {
    var arr = [
        "+1",
        "0",
        "0",
        "0",
        "-1",
        "-1",
        "-1",
        "-2",
        "-3",
        "-4",
        "-6",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "|A| Cloaked",
        "|^| Tablet",
        "Critical Failure",
        "<--O--> Clthulu Tentacles",
        " * Elder Sign * "
    ]
    var rand = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("carnevale").innerHTML = "CoH Standard: " + rand;
}

function ah_coh_hard() {
    var arr = [
        "+1",
        "0",
        "0",
        "0",
        "-1",
        "-1",
        "-3",
        "-4",
        "-5",
        "-6",
        "-7",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "(_O..O_)  Skull",
        "|A| Cloaked",
        "|^| Tablet",
        "Critical Failure",
        "<--O--> Clthulu Tentacles",
        " * Elder Sign * "
    ]
    var rand = arr[Math.floor(Math.random() * arr.length)];
    document.getElementById("carnevale").innerHTML = "CoH Hard: " + rand;
}
