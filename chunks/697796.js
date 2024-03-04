function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handoffBegin: function() {
            return s
        },
        handoffEnd: function() {
            return r
        },
        handoffFromApp: function() {
            return a
        },
        handoffUnavailable: function() {
            return o
        },
        handoffSetUser: function() {
            return l
        }
    });
    var i = n("913144");

    function s() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        i.default.dispatch({
            type: "BROWSER_HANDOFF_BEGIN",
            timeout: e
        })
    }

    function r(e, t) {
        i.default.dispatch({
            type: "BROWSER_HANDOFF_END",
            handoffToken: e,
            fingerprint: t
        })
    }

    function a(e) {
        let {
            handoffKey: t,
            handoffToken: n,
            handoffSource: s,
            timeout: r = 1e4
        } = e;
        i.default.dispatch({
            type: "BROWSER_HANDOFF_FROM_APP",
            handoffKey: t,
            handoffToken: n,
            handoffSource: s,
            timeout: r
        })
    }

    function o() {
        i.default.dispatch({
            type: "BROWSER_HANDOFF_UNAVAILABLE"
        })
    }

    function l(e) {
        i.default.dispatch({
            type: "BROWSER_HANDOFF_SET_USER",
            user: e
        })
    }
}