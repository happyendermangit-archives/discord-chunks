function(e, t, n) {
    "use strict";
    var r = n("748795");
    e.exports = function(e) {
        return r(e, "[[StartIndex]]") && r(e, "[[EndIndex]]") && e["[[StartIndex]]"] >= 0 && e["[[EndIndex]]"] >= e["[[StartIndex]]"] && String(parseInt(e["[[StartIndex]]"], 10)) === String(e["[[StartIndex]]"]) && String(parseInt(e["[[EndIndex]]"], 10)) === String(e["[[EndIndex]]"])
    }
}