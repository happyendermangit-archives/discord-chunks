function(e, t, n) {
    "use strict";

    function i() {}

    function r() {
        return !1
    }

    function s() {
        return arguments.length > 0 && void 0 !== arguments[0] && arguments[0], !1
    }
    n.r(t), n.d(t, {
        getRootNavigationRefIfInExperiment: function() {
            return i
        },
        isInMainTabsExperiment: function() {
            return r
        },
        useInMainTabsExperiment: function() {
            return s
        }
    })
}