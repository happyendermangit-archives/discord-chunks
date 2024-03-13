function(t, r, e) {
    "use strict";
    var n = e("859514"),
        o = e("868822");
    n({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function() {
            return o(URL.prototype.toString, this)
        }
    })
}