function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("368995"),
        u = n("573574"),
        s = n("428009"),
        l = n("935741"),
        c = n("208454");

    function f(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _(e, t, n) {
        return t && d(e.prototype, t), n && d(e, n), e
    }

    function E(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function p(e) {
        return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function m(e, t) {
        return (m = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var y = {},
        I = function() {
            function e() {
                f(this, e), E(this, "users", void 0), E(this, "fetched", void 0), this.fetched = !1, this.users = {}
            }
            return _(e, null, [{
                key: "ensure",
                value: function(t, n, r) {
                    var o, i, a = "".concat(t, ":").concat(n.name, ":").concat(null !== (o = n.id) && void 0 !== o ? o : "", ":").concat(r);
                    return y[a] = null !== (i = y[a]) && void 0 !== i ? i : new e
                }
            }]), e
        }();

    function h(e) {
        var t = e.type,
            n = e.messageId,
            r = e.userId,
            o = e.emoji,
            i = e.reactionType,
            a = I.ensure(n, o, i);
        if ("MESSAGE_REACTION_ADD" === t) {
            var u = c.default.getUser(r);
            null != u && (a.users[r] = u)
        } else delete a.users[r]
    }
    var O = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && m(e, t)
        }(o, e);
        var t, n, r = (t = o, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = p(t);
            if (n) {
                var a = p(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function o() {
            return f(this, o), r.apply(this, arguments)
        }
        return _(o, [{
            key: "getReactions",
            value: function(e, t, n, r, o) {
                var i = I.ensure(t, n, o);
                if (!i.fetched) {
                    var s = l.default.getChannel(e),
                        c = null != s ? s.getGuildId() : null;
                    if (null != c && a.default.isLurking(c)) return;
                    u.getReactors({
                        channelId: e,
                        messageId: t,
                        emoji: n,
                        limit: r,
                        type: o
                    }), i.fetched = !0
                }
                return i.users
            }
        }]), o
    }(o.default.Store);
    E(O, "displayName", "MessageReactionsStore"), t.default = new O(i.default, {
        CONNECTION_OPEN: function() {
            y = {}
        },
        MESSAGE_REACTION_ADD: h,
        MESSAGE_REACTION_REMOVE: h,
        MESSAGE_REACTION_ADD_USERS: function(e) {
            var t = e.messageId,
                n = e.users,
                r = e.emoji,
                o = e.reactionType,
                i = I.ensure(t, r, o);
            n.forEach(function(e) {
                return i.users[e.id] = new s.default(e)
            })
        }
    })
}