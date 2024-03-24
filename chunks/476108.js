function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var s = n("446674"),
        r = n("95410"),
        a = n("913144"),
        i = n("49111");
    let l = {
            lastViewedPath: null,
            lastViewedNonVoicePath: null
        },
        u = l,
        o = "LAST_VIEWED_PATH";
    class c extends s.default.PersistedStore {
        initialize() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
            u = null != e ? e : l
        }
        get defaultRoute() {
            return i.Routes.ME
        }
        get lastNonVoiceRoute() {
            var e;
            return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : i.Routes.ME
        }
        get fallbackRoute() {
            return i.Routes.ME
        }
        getState() {
            return u
        }
    }
    c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
        let e = r.default.get(o, null);
        return r.default.remove(o), {
            lastViewedPath: e
        }
    }];
    var d = new c(a.default, {
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