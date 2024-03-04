function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("917351"),
        s = n.n(i),
        r = n("446674"),
        a = n("913144"),
        o = n("271938");
    let l = Object.freeze([]),
        u = {};

    function d(e) {
        u = {}, e.sessions.forEach(e => {
            u[e.sessionId] = e
        })
    }
    class c extends r.default.Store {
        initialize() {
            this.waitFor(o.default)
        }
        getSessions() {
            return u
        }
        getSession() {
            let e = o.default.getSessionId();
            return null != e ? this.getSessionById(e) : null
        }
        getRemoteActivities() {
            let e = o.default.getSessionId(),
                t = s.find(u, t => t.active && t.sessionId !== e);
            return null != t ? t.activities : l
        }
        getSessionById(e) {
            return u[e]
        }
        getActiveSession() {
            return s.find(u, e => {
                let {
                    active: t
                } = e;
                return t
            })
        }
    }
    c.displayName = "SessionsStore";
    var f = new c(a.default, {
        CONNECTION_OPEN: d,
        SESSIONS_REPLACE: d
    })
}