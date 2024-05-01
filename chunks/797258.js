function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, s, a, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("314897");
    let c = Object.freeze([]),
        E = {};

    function I(e) {
        E = {}, e.sessions.forEach(e => {
            E[e.sessionId] = e
        })
    }
    class T extends(a = u.default.Store) {
        initialize() {
            this.waitFor(_.default)
        }
        getSessions() {
            return E
        }
        getSession() {
            let e = _.default.getSessionId();
            return null != e ? this.getSessionById(e) : null
        }
        getRemoteActivities() {
            let e = _.default.getSessionId(),
                t = l().find(E, t => t.active && t.sessionId !== e);
            return null != t ? t.activities : c
        }
        getSessionById(e) {
            return E[e]
        }
        getActiveSession() {
            return l().find(E, e => {
                let {
                    active: t
                } = e;
                return t
            })
        }
    }
    s = "SessionsStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = s, t.default = new T(d.default, {
        CONNECTION_OPEN: I,
        SESSIONS_REPLACE: I
    })
}