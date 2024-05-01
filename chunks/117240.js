function(e, t, n) {
    "use strict";
    let i, r, s;
    n.r(t);
    var a, o, l, u, d = n("153832"),
        _ = n("442837"),
        c = n("433517"),
        E = n("846519"),
        I = n("570140"),
        T = n("899742"),
        f = n("598077"),
        S = n("12647"),
        h = n("358085"),
        A = n("374023");
    let m = "BrowserHandoffStore",
        N = !1,
        p = new E.Timeout;

    function O() {
        null != i && null != r && (window.open("".concat(i, "&key=").concat(r)), S.default.focus(null, !0))
    }

    function R() {
        r = null, p.stop(), N = !1, c.Storage.set(m, N)
    }

    function C() {
        R()
    }
    class g extends(u = _.default.Store) {
        initialize() {
            !1 !== c.Storage.get(m) && (N = h.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
        }
        isHandoffAvailable() {
            return !A.ProcessArgs.isDisallowPopupsSet() && N
        }
        get user() {
            return s
        }
        get key() {
            return r
        }
    }
    l = "BrowserHandoffStore", (o = "displayName") in(a = g) ? Object.defineProperty(a, o, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[o] = l, t.default = new g(I.default, {
        RPC_SERVER_READY: function(e) {
            i = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), O()
        },
        BROWSER_HANDOFF_BEGIN: function(e) {
            if (null != r) return !1;
            r = (0, d.v4)(), p.start(e.timeout, () => (0, T.handoffEnd)()), O()
        },
        BROWSER_HANDOFF_FROM_APP: function(e) {
            let {
                handoffKey: t,
                handoffToken: n,
                timeout: i
            } = e;
            if (null == t || null == n) return !1;
            N = !0, p.start(i, () => (0, T.handoffEnd)())
        },
        BROWSER_HANDOFF_UNAVAILABLE: R,
        BROWSER_HANDOFF_SET_USER: function(e) {
            s = new f.default(e.user)
        },
        LOGIN: C,
        LOGIN_SUCCESS: C,
        LOGOUT: C,
        REGISTER: C
    })
}