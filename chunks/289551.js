function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return r
        }
    });
    var i = n("777639");

    function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.getRootNavigationRef)();
        return (null == e ? void 0 : e.isReady()) === !0 ? null == e ? void 0 : e.getCurrentRoute() : void 0
    }
}