function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("913527"),
        a = n.n(r),
        s = n("442837"),
        o = n("570140"),
        l = n("709054");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let d = {
            lastSeenNewlyAddedEmojiIds: {}
        },
        _ = d,
        c = {};

    function E() {
        for (let e in c) _.lastSeenNewlyAddedEmojiIds[e] = c[e]
    }
    class I extends(i = s.default.PersistedStore) {
        initialize(e) {
            _ = null != e ? e : d
        }
        getState() {
            return _
        }
        getLastSeenEmojiByGuild(e) {
            return _.lastSeenNewlyAddedEmojiIds[e]
        }
        isNewerThanLastSeen(e, t) {
            if (null == e || null == t) return !1;
            let n = this.getLastSeenEmojiByGuild(e);
            if (null == n) return !0;
            if (l.default.compare(t, n.id) > 0) return !0;
            {
                let e = a()(n.lastSeen);
                return a()().isBefore(e.add(2, "weeks")) && !n.acknowledged
            }
        }
    }
    u(I, "displayName", "NewlyAddedEmojiStore"), u(I, "persistKey", "NewlyAddedEmojiStore"), u(I, "migrations", [e => {
        let t = e.lastSeenNewlyAddedEmojiIds,
            n = {};
        for (let e in t) {
            let i = t[e];
            n[e] = {
                id: i,
                lastSeen: Date.now(),
                acknowledged: !1
            }
        }
        return {
            lastSeenNewlyAddedEmojiIds: n
        }
    }]), t.default = new I(o.default, {
        LOGOUT: function() {
            _ = d, c = {}
        },
        NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function(e) {
            var t;
            let {
                guildId: n,
                emojiId: i
            } = e, r = null !== (t = c[n]) && void 0 !== t ? t : _.lastSeenNewlyAddedEmojiIds[n];
            null == r || 0 > l.default.compare(r.id, i) ? c[n] = {
                id: i,
                lastSeen: Date.now(),
                acknowledged: !0
            } : c[n] = {
                ...r,
                acknowledged: !0
            }
        },
        NEWLY_ADDED_EMOJI_SEEN_PENDING: function(e) {
            var t;
            let {
                guildId: n,
                emojiId: i
            } = e, r = null !== (t = c[n]) && void 0 !== t ? t : _.lastSeenNewlyAddedEmojiIds[n];
            (null == r || 0 > l.default.compare(r.id, i)) && (c[n] = {
                id: i,
                lastSeen: Date.now(),
                acknowledged: !1
            })
        },
        NEWLY_ADDED_EMOJI_SEEN_UPDATED: E,
        CLEAR_CACHES: function() {
            _ = d, E()
        },
        CONNECTION_CLOSED: E
    })
}