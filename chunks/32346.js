function(e, t, n) {
    "use strict";
    let i, s, r;
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("222007");
    var a = n("917351"),
        o = n.n(a),
        l = n("446674"),
        u = n("913144"),
        d = n("49111");
    let c = f();

    function f() {
        return {
            recentCustomStatuses: [],
            currentDefaultStatus: null
        }
    }
    class _ extends l.default.PersistedStore {
        initialize(e) {
            c = {
                ...f(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return c
        }
        getCurrentHangStatus() {
            return i
        }
        getCustomHangStatus() {
            return s
        }
        getRecentCustomStatuses() {
            return c.recentCustomStatuses
        }
        getCurrentDefaultStatus() {
            return c.currentDefaultStatus
        }
        getHangStatusActivity() {
            return null == i ? null : r
        }
    }
    _.displayName = "HangStatusStore", _.persistKey = "HangStatusStore";
    var h = new _(u.default, {
        LOGOUT: function() {
            c = f()
        },
        UPDATE_HANG_STATUS: function(e) {
            let {
                status: t,
                saveAsDefault: n
            } = e;
            i = t, s = null, n && (c.currentDefaultStatus = {
                status: t,
                customHangStatus: s,
                expiresAt: Date.now() + 288e5
            }), r = {
                type: d.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: i
            }
        },
        UPDATE_HANG_STATUS_CUSTOM: function(e) {
            let {
                status: t,
                emoji: n,
                saveAsDefault: a
            } = e;
            i = d.HangStatusTypes.CUSTOM, s = {
                status: t,
                emoji: n
            };
            let l = [...c.recentCustomStatuses],
                u = l.findIndex(e => e.status === t && o.isEqual(e.emoji, n)); - 1 !== u ? l.splice(u, 1) : 7 === l.length && l.splice(6, 1), c.recentCustomStatuses = [s, ...l], a && (c.currentDefaultStatus = {
                status: i,
                customHangStatus: s,
                expiresAt: Date.now() + 288e5
            }), r = {
                type: d.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: i,
                details: t,
                emoji: n
            }
        },
        CLEAR_HANG_STATUS: function(e) {
            let {
                saveAsDefault: t
            } = e;
            i = null, s = null, t && (c.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + 288e5
            }), r = null
        }
    })
}