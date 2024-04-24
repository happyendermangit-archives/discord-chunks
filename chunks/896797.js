function(e, t, l) {
    "use strict";
    l.r(t);
    var n, a = l("442837"),
        i = l("433517"),
        s = l("570140"),
        r = l("981631");

    function d(e, t, l) {
        return t in e ? Object.defineProperty(e, t, {
            value: l,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = l, e
    }
    let o = {
            lastViewedPath: null,
            lastViewedNonVoicePath: null
        },
        u = o,
        c = "LAST_VIEWED_PATH";
    class _ extends(n = a.default.PersistedStore) {
        initialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o;
            u = null != e ? e : o
        }
        get defaultRoute() {
            return r.Routes.ME
        }
        get lastNonVoiceRoute() {
            var e;
            return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : r.Routes.ME
        }
        get fallbackRoute() {
            return r.Routes.ME
        }
        getState() {
            return u
        }
    }
    d(_, "displayName", "DefaultRouteStore"), d(_, "persistKey", "DefaultRouteStore"), d(_, "migrations", [() => {
        let e = i.Storage.get(c, null);
        return i.Storage.remove(c), {
            lastViewedPath: e
        }
    }]), t.default = new _(s.default, {
        SAVE_LAST_ROUTE: function(e) {
            let {
                path: t
            } = e;
            return u.lastViewedPath = t, !0
        },
        SAVE_LAST_NON_VOICE_ROUTE: function(e) {
            let {
                path: t
            } = e;
            return u.lastViewedNonVoicePath = t, !0
        }
    })
}