function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        handoffBegin: function() {
            return r
        },
        handoffEnd: function() {
            return s
        },
        handoffFromApp: function() {
            return a
        },
        handoffSetUser: function() {
            return l
        },
        handoffUnavailable: function() {
            return o
        }
    });
    var i = n("570140");

    function r() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e4;
        i.default.dispatch({
            type: "BROWSER_HANDOFF_BEGIN",
            timeout: e
        })
    }

    function s(e, t) {
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
            handoffSource: r,
            timeout: s = 1e4
        } = e;
        i.default.dispatch({
            type: "BROWSER_HANDOFF_FROM_APP",
            handoffKey: t,
            handoffToken: n,
            handoffSource: r,
            timeout: s
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