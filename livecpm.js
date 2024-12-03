var capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalCPM = 0;
var realWPM = 0;
var backSpace = 0;
var twokeystrokes = "ăâáàạảãđéèẻẽẹêíìỉĩịôơóòỏõọưúùủũụýỳỷỹỵ";
var threekeystrokes = "ắằặẳẵấầậẩẫếềểễệốồổỗộớờởỡợứừửữự";

// Function for calculatee WPM and CPM
setInterval(function() {
    if (typeof countdown !== 'undefined' && countdown != 0) {
        var realCPM = 0;
        var x = document.getElementById("words");
        var corrects = x.getElementsByClassName("correct");

        // calculate CPM
        for (var i = 0; i < corrects.length; i++) {
            var correctword = corrects.item(i);
            for (var j = 0; j < correctword.textContent.length; j++) {
                if ((correctword.textContent.charAt(j) === correctword.textContent.charAt(j).toUpperCase()) &&
                    correctword.textContent.charAt(j).match(/[a-z]/i)) {
                    realCPM += 1;
                }
                if (twokeystrokes.includes(correctword.textContent.charAt(j))) {
                    realCPM += 1;
                } else if (threekeystrokes.includes(correctword.textContent.charAt(j))) {
                    realCPM += 2;
                }
            }
            realCPM = Math.round(realCPM + correctword.textContent.length + 1);
            finalCPM = realCPM;
        }

        // adding element for WPM Preview if no available
        var myEle = document.getElementById("wpmPreview");
        if (!myEle) {
            $('#words').before("<div id='wpmPreview'></div>");
        }

        // calculate WPM
        realWPM = Math.round((realCPM / 5) / ((60.00000001 - countdown) / 60));

        if (realWPM > 300) {
            realWPM = "300+";
        }

        // show result WPM and CPM
        $('#wpmPreview').html("<h2><b>Key Strokes: </b>" + realCPM + " - " + "<b>WPM: </b>" + realWPM + "</h2>");
    } else {
        realWPM = Math.round((finalCPM / 5) / ((60.00000001 - countdown) / 60));
        if (realWPM > 300) {
            realWPM = "300+";
        }
        $('#wpmPreview').html("<h2><b>Key Strokes: </b>" + finalCPM + " - " + "<b>WPM: </b>" + realWPM + "</h2>");
    }
}, 100);
