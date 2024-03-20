function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var a = n("446674"),
        i = n("913144"),
        l = n("692038"),
        r = n("42203"),
        s = n("697218"),
        u = n("449008"),
        d = n("299039");
    let o = {};

    function c(e) {
        var t;
        let n = r.default.getChannel(null == e ? void 0 : e.channel_id);
        if (null == n || !n.isForumPost()) return !1;
        let a = o[n.id];
        return d.default.compare(null == e ? void 0 : e.id, null == a ? void 0 : null === (t = a.message) || void 0 === t ? void 0 : t.id) > -1
    }

    function _(e, t) {
        let n = null == t ? null : (0, l.createMessageRecord)(t);
        return o[e] = {
            loaded: !0,
            message: n
        }, !0
    }

    function f(e) {
        return o[e]
    }

    function E(e) {
        var t;
        return null === (t = o[e]) || void 0 === t ? void 0 : t.message
    }

    function g(e) {
        let {
            threads: t,
            mostRecentMessages: n
        } = e;
        t.forEach(e => _(e.id, null)), null == n || n.filter(u.isNotNullish).forEach(e => {
            _(e.channel_id, e)
        })
    }
    class p extends a.default.Store {
        initialize() {
            this.waitFor(r.default, s.default)
        }
        getMessageState(e) {
            return !(e in o) && (o[e] = {
                loaded: !1,
                message: null
            }), o[e]
        }
    }
    p.displayName = "ForumPostRecentMessageStore";
    var S = new p(i.default, {
        CONNECTION_OPEN: function() {
            o = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || !c(e.message)) return !1;
            e.message.channel_id === d.default.castMessageIdAsChannelId(e.message.id) ? _(e.message.channel_id, null) : _(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (!c(e.message) || e.message.channel_id === e.message.id) return !1;
            ! function(e, t) {
                let n = function(e) {
                        return o[e]
                    }(e),
                    a = E(e);
                null != n && null != a && (o[e] = {
                    ...n,
                    message: (0, l.updateMessageRecord)(a, t)
                })
            }(e.message.channel_id, e.message)
        },
        MESSAGE_DELETE: function(e) {
            return function(e, t) {
                let n = E(e);
                return (null == n ? void 0 : n.id) === t && (delete o[e], !0)
            }(e.channelId, e.id)
        },
        LOAD_FORUM_POSTS: function(e) {
            let {
                threads: t
            } = e;
            for (let e in t) _(e, t[e].most_recent_message)
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: g,
        LOAD_THREADS_SUCCESS: g
    })
}