function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("42887"),
        s = n("353927");

    function r() {
        var e;
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.default;
        return (e = t).supports(s.Features.MEDIAPIPE) && Object.values(e.getVideoDevices()).length > 0
    }
}