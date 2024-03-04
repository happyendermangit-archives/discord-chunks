function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("377253");
    let a = {},
        o = {},
        l = {};

    function u(e) {
        if (null == e) return !1;
        let t = o[e];
        if (null == t) return !1;
        let n = r.default.getMessage(e, t.messageId);
        if (null == n) return !1;
        a[e] = {
            channel: t.channel,
            message: n,
            shouldMention: t.shouldMention,
            showMentionToggle: t.showMentionToggle
        }, delete o[e]
    }

    function d() {
        a = {}, o = {}, l = {}
    }
    class c extends i.default.Store {
        initialize() {
            this.waitFor(r.default)
        }
        getPendingReply(e) {
            return a[e]
        }
        getPendingReplyActionSource(e) {
            return l[e]
        }
    }
    c.displayName = "PendingReplyStore";
    var f = new c(s.default, {
        CREATE_PENDING_REPLY: function(e) {
            let {
                channel: t,
                message: n,
                shouldMention: i = !0,
                showMentionToggle: s = !0,
                source: r
            } = e;
            a[t.id] = {
                channel: t,
                message: n,
                shouldMention: i,
                showMentionToggle: s
            }, l[t.id] = r
        },
        CREATE_SHALLOW_PENDING_REPLY: function(e) {
            let {
                channel: t,
                messageId: n,
                shouldMention: i = !0,
                showMentionToggle: s = !0
            } = e;
            o[t.id] = {
                channel: t,
                messageId: n,
                shouldMention: i,
                showMentionToggle: s
            }
        },
        SET_PENDING_REPLY_SHOULD_MENTION: function(e) {
            let {
                channelId: t,
                shouldMention: n
            } = e;
            t in a && (a[t] = {
                ...a[t],
                shouldMention: n
            }), t in o && (o[t] = {
                ...o[t],
                shouldMention: n
            })
        },
        DELETE_PENDING_REPLY: function(e) {
            let {
                channelId: t
            } = e;
            delete a[t], delete o[t]
        },
        CONNECTION_OPEN: d,
        LOGOUT: d,
        MESSAGE_DELETE: function(e) {
            var t, n, i;
            let {
                id: s,
                channelId: r
            } = e;
            if ((null === (n = a[r]) || void 0 === n ? void 0 : null === (t = n.message) || void 0 === t ? void 0 : t.id) === s) delete a[r], delete l[r];
            else {
                if ((null === (i = o[r]) || void 0 === i ? void 0 : i.messageId) !== s) return !1;
                delete o[r], delete l[r]
            }
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            u(t)
        },
        LOAD_MESSAGES_SUCCESS: function(e) {
            let {
                channelId: t
            } = e;
            u(t)
        }
    })
}