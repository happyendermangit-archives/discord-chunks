function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r, a, s, o = n("442837"),
        l = n("570140"),
        u = n("375954");
    let d = {},
        _ = {},
        c = {};

    function E(e) {
        if (null == e) return !1;
        let t = _[e];
        if (null == t) return !1;
        let n = u.default.getMessage(e, t.messageId);
        if (null == n) return !1;
        d[e] = {
            channel: t.channel,
            message: n,
            shouldMention: t.shouldMention,
            showMentionToggle: t.showMentionToggle
        }, delete _[e]
    }

    function I() {
        d = {}, _ = {}, c = {}
    }
    class T extends(s = o.default.Store) {
        initialize() {
            this.waitFor(u.default)
        }
        getPendingReply(e) {
            return d[e]
        }
        getPendingReplyActionSource(e) {
            return c[e]
        }
    }
    a = "PendingReplyStore", (r = "displayName") in(i = T) ? Object.defineProperty(i, r, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : i[r] = a, t.default = new T(l.default, {
        CREATE_PENDING_REPLY: function(e) {
            let {
                channel: t,
                message: n,
                shouldMention: i = !0,
                showMentionToggle: r = !0,
                source: a
            } = e;
            d[t.id] = {
                channel: t,
                message: n,
                shouldMention: i,
                showMentionToggle: r
            }, c[t.id] = a
        },
        CREATE_SHALLOW_PENDING_REPLY: function(e) {
            let {
                channel: t,
                messageId: n,
                shouldMention: i = !0,
                showMentionToggle: r = !0
            } = e;
            _[t.id] = {
                channel: t,
                messageId: n,
                shouldMention: i,
                showMentionToggle: r
            }
        },
        SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
            let {
                channelId: t,
                shouldMention: n
            } = e;
            t in d && (d[t] = {
                ...d[t],
                shouldMention: n
            }), t in _ && (_[t] = {
                ..._[t],
                shouldMention: n
            })
        },
        DELETE_PENDING_REPLY: function(e) {
            let {
                channelId: t
            } = e;
            delete d[t], delete _[t]
        },
        CONNECTION_OPEN: I,
        LOGOUT: I,
        MESSAGE_DELETE: function(e) {
            var t, n, i;
            let {
                id: r,
                channelId: a
            } = e;
            if ((null === (n = d[a]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === r) delete d[a], delete c[a];
            else {
                if ((null === (i = _[a]) || void 0 === i ? void 0 : i.messageId) !== r) return !1;
                delete _[a], delete c[a]
            }
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            E(t)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t
            } = e;
            E(t)
        }
    })
}