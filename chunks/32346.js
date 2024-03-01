function(e, t, n) {
    "use strict";
    let s, i, r;
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var a = n("917351"),
        o = n.n(a),
        d = n("446674"),
        u = n("913144"),
        l = n("49111");
    let f = _();

    function _() {
        return {
            recentCustomStatuses: [],
            currentDefaultStatus: null
        }
    }
    class c extends d.default.PersistedStore {
        initialize(e) {
            f = {
                ..._(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return f
        }
        getCurrentHangStatus() {
            return s
        }
        getCustomHangStatus() {
            return i
        }
        getRecentCustomStatuses() {
            return f.recentCustomStatuses
        }
        getCurrentDefaultStatus() {
            return f.currentDefaultStatus
        }
        getHangStatusActivity() {
            return null == s ? null : r
        }
    }
    c.displayName = "HangStatusStore", c.persistKey = "HangStatusStore";
    var g = new c(u.default, {
        LOGOUT: function() {
            f = _()
        },
        UPDATE_HANG_STATUS: function(e) {
            let {
                status: t,
                saveAsDefault: n
            } = e;
            s = t, i = null, n && (f.currentDefaultStatus = {
                status: t,
                customHangStatus: i,
                expiresAt: Date.now() + 288e5
            }), r = {
                type: l.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: s
            }
        },
        UPDATE_HANG_STATUS_CUSTOM: function(e) {
            let {
                status: t,
                emoji: n,
                saveAsDefault: a
            } = e;
            s = l.HangStatusTypes.CUSTOM, i = {
                status: t,
                emoji: n
            };
            let d = [...f.recentCustomStatuses],
                u = d.findIndex(e => e.status === t && o.isEqual(e.emoji, n)); - 1 !== u ? d.splice(u, 1) : 7 === d.length && d.splice(6, 1), f.recentCustomStatuses = [i, ...d], a && (f.currentDefaultStatus = {
                status: s,
                customHangStatus: i,
                expiresAt: Date.now() + 288e5
            }), r = {
                type: l.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: s,
                details: t,
                emoji: n
            }
        },
        CLEAR_HANG_STATUS: function(e) {
            let {
                saveAsDefault: t
            } = e;
            s = null, i = null, t && (f.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + 288e5
            }), r = null
        }
    })
}