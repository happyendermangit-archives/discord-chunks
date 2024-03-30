function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handoffBegin: function() {
            return o
        },
        handoffEnd: function() {
            return i
        },
        handoffFromApp: function() {
            return a
        },
        handoffSetUser: function() {
            return s
        },
        handoffUnavailable: function() {
            return u
        }
    });
    var r = n("629815");

    function o() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        r.default.dispatch({
            type: "BROWSER_HANDOFF_BEGIN",
            timeout: e
        })
    }

    function i(e, t) {
        r.default.dispatch({
            type: "BROWSER_HANDOFF_END",
            handoffToken: e,
            fingerprint: t
        })
    }

    function a(e) {
        var t = e.handoffKey,
            n = e.handoffToken,
            o = e.handoffSource,
            i = e.timeout;
        r.default.dispatch({
            type: "BROWSER_HANDOFF_FROM_APP",
            handoffKey: t,
            handoffToken: n,
            handoffSource: o,
            timeout: void 0 === i ? 1e4 : i
        })
    }

    function u() {
        r.default.dispatch({
            type: "BROWSER_HANDOFF_UNAVAILABLE"
        })
    }

    function s(e) {
        r.default.dispatch({
            type: "BROWSER_HANDOFF_SET_USER",
            user: e
        })
    }
}