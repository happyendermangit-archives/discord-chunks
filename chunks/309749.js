function(t, e, n) {
    "use strict";
    var r = n("147018"),
        i = n("926515");
    r({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return i(URL.prototype.toString, this)
        }
    })
}