function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    });
    var a = n("748820"),
        o = n("446674"),
        l = n("95410"),
        u = n("862337"),
        c = n("913144"),
        d = n("697796"),
        f = n("766274"),
        E = n("922932"),
        p = n("773336"),
        h = n("197881");
    let _ = "BrowserHandoffStore",
        S = !1,
        m = new u.Timeout;

    function T() {
        null != i && null != r && (window.open("".concat(i, "&key=").concat(r)), E.default.focus(null, !0))
    }

    function g() {
        r = null, m.stop(), S = !1, l.default.set(_, S)
    }

    function I() {
        g()
    }
    class C extends o.default.Store {
        initialize() {
            !1 !== l.default.get(_) && (S = p.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
        }
        isHandoffAvailable() {
            return !h.ProcessArgs.isDisallowPopupsSet() && S
        }
        get user() {
            return s
        }
        get key() {
            return r
        }
    }
    C.displayName = "BrowserHandoffStore";
    var v = new C(c.default, {
        RPC_SERVER_READY: function(e) {
            i = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), T()
        },
        BROWSER_HANDOFF_BEGIN: function(e) {
            if (null != r) return !1;
            r = (0, a.v4)(), m.start(e.timeout, () => (0, d.handoffEnd)()), T()
        },
        BROWSER_HANDOFF_FROM_APP: function(e) {
            let {
                handoffKey: t,
                handoffToken: n,
                timeout: i
            } = e;
            if (null == t || null == n) return !1;
            S = !0, m.start(i, () => (0, d.handoffEnd)())
        },
        BROWSER_HANDOFF_UNAVAILABLE: g,
        BROWSER_HANDOFF_SET_USER: function(e) {
            s = new f.default(e.user)
        },
        LOGIN: I,
        LOGIN_SUCCESS: I,
        LOGOUT: I,
        REGISTER: I
    })
}