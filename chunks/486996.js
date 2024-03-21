function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("446674"),
        s = n("913144"),
        r = n("267567"),
        a = n("166257"),
        o = n("766274"),
        l = n("42203"),
        u = n("697218");
    let d = {};
    class c {
        static ensure(e, t, n) {
            var i, s;
            let r = "".concat(e, ":").concat(t.name, ":").concat(null !== (i = t.id) && void 0 !== i ? i : "", ":").concat(n);
            return d[r] = null !== (s = d[r]) && void 0 !== s ? s : new c
        }
        constructor() {
            this.fetched = !1, this.users = {}
        }
    }

    function _(e) {
        let {
            type: t,
            messageId: n,
            userId: i,
            emoji: s,
            reactionType: r
        } = e, a = c.ensure(n, s, r);
        if ("MESSAGE_REACTION_ADD" === t) {
            let e = u.default.getUser(i);
            null != e && (a.users[i] = e)
        } else delete a.users[i]
    }
    class f extends i.default.Store {
        getReactions(e, t, n, i, s) {
            let o = c.ensure(t, n, s);
            if (!o.fetched) {
                let u = l.default.getChannel(e),
                    d = null != u ? u.getGuildId() : null;
                if (null != d && r.default.isLurking(d)) return;
                a.getReactors({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    limit: i,
                    type: s
                }), o.fetched = !0
            }
            return o.users
        }
    }
    f.displayName = "MessageReactionsStore";
    var E = new f(s.default, {
        CONNECTION_OPEN: function() {
            d = {}
        },
        MESSAGE_REACTION_ADD: _,
        MESSAGE_REACTION_REMOVE: _,
        MESSAGE_REACTION_ADD_USERS: function(e) {
            let {
                messageId: t,
                users: n,
                emoji: i,
                reactionType: s
            } = e, r = c.ensure(t, i, s);
            n.forEach(e => r.users[e.id] = new o.default(e))
        }
    })
}