function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var i = n("693051");

    function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, i.getRootNavigationRef)(),
            t = (null == e ? void 0 : e.isReady()) === !0 ? null == e ? void 0 : e.getCurrentRoute() : void 0;
        return t
    }
}