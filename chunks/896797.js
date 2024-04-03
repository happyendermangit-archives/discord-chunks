function(e, t, n) {
    "use strict";
    n.r(t);
    var r, s = n("442837"),
        i = n("433517"),
        a = n("570140"),
        l = n("981631");

    function o(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let u = {
            lastViewedPath: null,
            lastViewedNonVoicePath: null
        },
        d = u,
        c = "LAST_VIEWED_PATH";
    class p extends(r = s.default.PersistedStore) {
        initialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
            d = null != e ? e : u
        }
        get defaultRoute() {
            return l.Routes.ME
        }
        get lastNonVoiceRoute() {
            var e;
            return null !== (e = d.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
        }
        get fallbackRoute() {
            return l.Routes.ME
        }
        getState() {
            return d
        }
    }
    o(p, "displayName", "DefaultRouteStore"), o(p, "persistKey", "DefaultRouteStore"), o(p, "migrations", [() => {
        let e = i.Storage.get(c, null);
        return i.Storage.remove(c), {
            lastViewedPath: e
        }
    }]), t.default = new p(a.default, {
        SAVE_LAST_ROUTE: function(e) {
            let {
                path: t
            } = e;
            return d.lastViewedPath = t, !0
        },
        SAVE_LAST_NON_VOICE_ROUTE: function(e) {
            let {
                path: t
            } = e;
            return d.lastViewedNonVoicePath = t, !0
        }
    })
}