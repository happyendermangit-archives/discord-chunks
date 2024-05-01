function(e, t, n) {
    "use strict";
    let i, r, a;
    n.r(t), n("47120");
    var s, o = n("392711"),
        l = n.n(o),
        u = n("442837"),
        d = n("570140"),
        _ = n("981631");

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let E = I();

    function I() {
        return {
            recentCustomStatuses: [],
            currentDefaultStatus: null
        }
    }
    class T extends(s = u.default.PersistedStore) {
        initialize(e) {
            E = {
                ...I(),
                ...null != e ? e : {}
            }
        }
        getState() {
            return E
        }
        getCurrentHangStatus() {
            return i
        }
        getCustomHangStatus() {
            return r
        }
        getRecentCustomStatuses() {
            return E.recentCustomStatuses
        }
        getCurrentDefaultStatus() {
            return E.currentDefaultStatus
        }
        getHangStatusActivity() {
            return null == i ? null : a
        }
    }
    c(T, "displayName", "HangStatusStore"), c(T, "persistKey", "HangStatusStore"), t.default = new T(d.default, {
        LOGOUT: function() {
            E = I()
        },
        UPDATE_HANG_STATUS: function(e) {
            let {
                status: t,
                saveAsDefault: n
            } = e;
            i = t, r = null, n && (E.currentDefaultStatus = {
                status: t,
                customHangStatus: r,
                expiresAt: Date.now() + 288e5
            }), a = {
                type: _.ActivityTypes.HANG_STATUS,
                name: "Hang Status",
                state: i
            }
        },
        UPDATE_HANG_STATUS_CUSTOM: function(e) {
            let {
                status: t,
                emoji: n,
                saveAsDefault: s
            } = e;
            i = _.HangStatusTypes.CUSTOM, r = {
                status: t,
                emoji: n
            };
            let o = [...E.recentCustomStatuses],
                u = o.findIndex(e => e.status === t && l().isEqual(e.emoji, n)); - 1 !== u ? o.splice(u, 1) : 7 === o.length && o.splice(6, 1), E.recentCustomStatuses = [r, ...o], s && (E.currentDefaultStatus = {
                status: i,
                customHangStatus: r,
                expiresAt: Date.now() + 288e5
            }), a = {
                type: _.ActivityTypes.HANG_STATUS,
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
            i = null, r = null, t && (E.currentDefaultStatus = {
                status: null,
                customHangStatus: null,
                expiresAt: Date.now() + 288e5
            }), a = null
        }
    })
}