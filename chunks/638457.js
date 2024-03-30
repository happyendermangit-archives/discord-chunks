function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("131951"),
        r = n("65154");

    function s() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default;
        return (e = t).supports(r.Features.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0
    }
}