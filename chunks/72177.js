function(e, t, n) {
    "use strict";
    let i, s, r;
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var a = n("748820"),
        o = n("446674"),
        l = n("95410"),
        u = n("862337"),
        d = n("913144"),
        c = n("697796"),
        _ = n("766274"),
        f = n("922932"),
        E = n("773336"),
        h = n("197881");
    let g = "BrowserHandoffStore",
        m = !1,
        p = new u.Timeout;

    function S() {
        null != i && null != s && (window.open("".concat(i, "&key=").concat(s)), f.default.focus(null, !0))
    }

    function T() {
        s = null, p.stop(), m = !1, l.default.set(g, m)
    }

    function v() {
        T()
    }
    class I extends o.default.Store {
        initialize() {
            !1 !== l.default.get(g) && (m = E.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
        }
        isHandoffAvailable() {
            return !h.ProcessArgs.isDisallowPopupsSet() && m
        }
        get user() {
            return r
        }
        get key() {
            return s
        }
    }
    I.displayName = "BrowserHandoffStore";
    var A = new I(d.default, {
        RPC_SERVER_READY: function(e) {
            i = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), S()
        },
        BROWSER_HANDOFF_BEGIN: function(e) {
            if (null != s) return !1;
            s = (0, a.v4)(), p.start(e.timeout, () => (0, c.handoffEnd)()), S()
        },
        BROWSER_HANDOFF_FROM_APP: function(e) {
            let {
                handoffKey: t,
                handoffToken: n,
                timeout: i
            } = e;
            if (null == t || null == n) return !1;
            m = !0, p.start(i, () => (0, c.handoffEnd)())
        },
        BROWSER_HANDOFF_UNAVAILABLE: T,
        BROWSER_HANDOFF_SET_USER: function(e) {
            r = new _.default(e.user)
        },
        LOGIN: v,
        LOGIN_SUCCESS: v,
        LOGOUT: v,
        REGISTER: v
    })
}