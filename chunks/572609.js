function(t, e, r) {
    "use strict";
    var n = r("24033");
    t.exports = function() {
        var t = n(this),
            e = "";
        return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
    }
}