function(e, t, n) {
    "use strict";
    n.r(t);
    var i, r = n("442837"),
        a = n("570140"),
        s = n("41776"),
        o = n("222677"),
        l = n("598077"),
        u = n("592125"),
        d = n("594174");

    function _(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let c = {};
    class E {
        static ensure(e, t, n) {
            var i, r;
            let a = "".concat(e, ":").concat(t.name, ":").concat(null !== (i = t.id) && void 0 !== i ? i : "", ":").concat(n);
            return c[a] = null !== (r = c[a]) && void 0 !== r ? r : new E
        }
        constructor() {
            _(this, "users", void 0), _(this, "fetched", void 0), this.fetched = !1, this.users = {}
        }
    }

    function I(e) {
        let {
            type: t,
            messageId: n,
            userId: i,
            emoji: r,
            reactionType: a
        } = e, s = E.ensure(n, r, a);
        if ("MESSAGE_REACTION_ADD" === t) {
            let e = d.default.getUser(i);
            null != e && (s.users[i] = e)
        } else delete s.users[i]
    }
    class T extends(i = r.default.Store) {
        getReactions(e, t, n, i, r) {
            let a = E.ensure(t, n, r);
            if (!a.fetched) {
                let l = u.default.getChannel(e),
                    d = null != l ? l.getGuildId() : null;
                if (null != d && s.default.isLurking(d)) return;
                o.getReactors({
                    channelId: e,
                    messageId: t,
                    emoji: n,
                    limit: i,
                    type: r
                }), a.fetched = !0
            }
            return a.users
        }
    }
    _(T, "displayName", "MessageReactionsStore"), t.default = new T(a.default, {
        CONNECTION_OPEN: function() {
            c = {}
        },
        MESSAGE_REACTION_ADD: I,
        MESSAGE_REACTION_REMOVE: I,
        MESSAGE_REACTION_ADD_USERS: function(e) {
            let {
                messageId: t,
                users: n,
                emoji: i,
                reactionType: r
            } = e, a = E.ensure(t, i, r);
            n.forEach(e => a.users[e.id] = new l.default(e))
        }
    })
}