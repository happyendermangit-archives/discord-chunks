function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    });
    var r = n("130670");

    function a(e) {
        var t = (0, r.default)(e),
            n = e.offsetWidth,
            a = e.offsetHeight;
        return 1 >= Math.abs(t.width - n) && (n = t.width), 1 >= Math.abs(t.height - a) && (a = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: n,
            height: a
        }
    }
}