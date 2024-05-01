function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("786761"),
        d = n("592125"),
        _ = n("594174"),
        c = n("823379"),
        E = n("709054");
    let I = {};

    function T(e) {
        var t;
        let n = d.default.getChannel(null == e ? void 0 : e.channel_id);
        if (null == n || !n.isForumPost()) return !1;
        let i = I[n.id];
        return E.default.compare(null == e ? void 0 : e.id, null == i ? void 0 : null === (t = i.message) || void 0 === t ? void 0 : t.id) > -1
    }

    function f(e, t) {
        let n = null == t ? null : (0, u.createMessageRecord)(t);
        return I[e] = {
            loaded: !0,
            message: n
        }, !0
    }

    function S(e) {
        return I[e]
    }

    function h(e) {
        var t;
        return null === (t = I[e]) || void 0 === t ? void 0 : t.message
    }

    function A(e) {
        let {
            threads: t,
            mostRecentMessages: n
        } = e;
        t.forEach(e => f(e.id, null)), null == n || n.filter(c.isNotNullish).forEach(e => {
            f(e.channel_id, e)
        })
    }
    class m extends(s = o.default.Store) {
        initialize() {
            this.waitFor(d.default, _.default)
        }
        getMessageState(e) {
            return !(e in I) && (I[e] = {
                loaded: !1,
                message: null
            }), I[e]
        }
    }
    a = "ForumPostRecentMessageStore", (r = "displayName") in(i = m) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new m(l.default, {
        CONNECTION_OPEN: function() {
            I = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || !T(e.message)) return !1;
            e.message.channel_id === E.default.castMessageIdAsChannelId(e.message.id) ? f(e.message.channel_id, null) : f(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (!T(e.message) || e.message.channel_id === e.message.id) return !1;
            ! function(e, t) {
                let n = function(e) {
                        return I[e]
                    }(e),
                    i = h(e);
                null != n && null != i && (I[e] = {
                    ...n,
                    message: (0, u.updateMessageRecord)(i, t)
                })
            }(e.message.channel_id, e.message)
        },
        MESSAGE_DELETE: function(e) {
            return function(e, t) {
                let n = h(e);
                return (null == n ? void 0 : n.id) === t && (delete I[e], !0)
            }(e.channelId, e.id)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            for (let e in t) f(e, t[e].most_recent_message)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: A,
        LOAD_THREADS_SUCCESS: A
    })
}