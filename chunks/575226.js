function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return m
        }
    });
    var l = n("866227"),
        i = n.n(l),
        a = n("446674"),
        s = n("913144"),
        r = n("299039");
    let o = {
            lastSeenNewlyAddedEmojiIds: {}
        },
        u = o,
        d = {};

    function c() {
        for (let e in d) u.lastSeenNewlyAddedEmojiIds[e] = d[e]
    }
    class f extends a.default.PersistedStore {
        initialize(e) {
            u = null != e ? e : o
        }
        getState() {
            return u
        }
        getLastSeenEmojiByGuild(e) {
            return u.lastSeenNewlyAddedEmojiIds[e]
        }
        isNewerThanLastSeen(e, t) {
            if (null == e || null == t) return !1;
            let n = this.getLastSeenEmojiByGuild(e);
            if (null == n) return !0;
            if (r.default.compare(t, n.id) > 0) return !0;
            {
                let e = i(n.lastSeen),
                    t = i().isBefore(e.add(2, "weeks"));
                return t && !n.acknowledged
            }
        }
    }
    f.displayName = "NewlyAddedEmojiStore", f.persistKey = "NewlyAddedEmojiStore", f.migrations = [e => {
        let t = e.lastSeenNewlyAddedEmojiIds,
            n = {};
        for (let e in t) {
            let l = t[e];
            n[e] = {
                id: l,
                lastSeen: Date.now(),
                acknowledged: !1
            }
        }
        return {
            lastSeenNewlyAddedEmojiIds: n
        }
    }];
    var m = new f(s.default, {
        LOGOUT: function() {
            u = o, d = {}
        },
        NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function(e) {
            var t;
            let {
                guildId: n,
                emojiId: l
            } = e, i = null !== (t = d[n]) && void 0 !== t ? t : u.lastSeenNewlyAddedEmojiIds[n];
            null == i || 0 > r.default.compare(i.id, l) ? d[n] = {
                id: l,
                lastSeen: Date.now(),
                acknowledged: !0
            } : d[n] = {
                ...i,
                acknowledged: !0
            }
        },
        NEWLY_ADDED_EMOJI_SEEN_PENDING: function(e) {
            var t;
            let {
                guildId: n,
                emojiId: l
            } = e, i = null !== (t = d[n]) && void 0 !== t ? t : u.lastSeenNewlyAddedEmojiIds[n];
            (null == i || 0 > r.default.compare(i.id, l)) && (d[n] = {
                id: l,
                lastSeen: Date.now(),
                acknowledged: !1
            })
        },
        NEWLY_ADDED_EMOJI_SEEN_UPDATED: c,
        CLEAR_CACHES: function() {
            u = o, c()
        },
        CONNECTION_CLOSED: c
    })
}