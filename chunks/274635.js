function(t, r, n) {
    "use strict";
    var e = n("859514"),
        i = n("868822");
    e({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return i(URL.prototype.toString, this)
        }
    })
}