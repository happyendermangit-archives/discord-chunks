function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var r = n("681446");

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, r.getRootNavigationRef)();
        return (null == e ? void 0 : e.isReady()) === !0 ? null == e ? void 0 : e.getCurrentRoute() : void 0
    }
}