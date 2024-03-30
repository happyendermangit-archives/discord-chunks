function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return i
        }
    });
    var r = n("335911"),
        o = n("439386");

    function i() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : r.default;
        return (e = t).supports(o.Features.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0
    }
}