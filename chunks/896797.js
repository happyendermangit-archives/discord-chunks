function(e, t, i) {
    "use strict";
    i.r(t);
    var s, n = i("442837"),
        l = i("433517"),
        r = i("570140"),
        a = i("981631");

    function o(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }
    let d = {
            lastViewedPath: null,
            lastViewedNonVoicePath: null
        },
        u = d,
        c = "LAST_VIEWED_PATH";
    class _ extends(s = n.default.PersistedStore) {
        initialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
            u = null != e ? e : d
        }
        get defaultRoute() {
            return a.Routes.ME
        }
        get lastNonVoiceRoute() {
            var e;
            return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : a.Routes.ME
        }
        get fallbackRoute() {
            return a.Routes.ME
        }
        getState() {
            return u
        }
    }
    o(_, "displayName", "DefaultRouteStore"), o(_, "persistKey", "DefaultRouteStore"), o(_, "migrations", [() => {
        let e = l.Storage.get(c, null);
        return l.Storage.remove(c), {
            lastViewedPath: e
        }
    }]), t.default = new _(r.default, {
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