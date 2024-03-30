function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("898511"),
        i = n("629815"),
        a = n("273829"),
        u = n("140602"),
        s = n("208454"),
        l = n("523018");

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function f(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function d(e) {
        return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                f(e, t, n[t])
            })
        }
        return e
    }

    function E(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function p(e, t) {
        return (p = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var m = {};

    function y(e) {
        var t = e.threads,
            n = e.firstMessages;
        if (null == n) return !1;
        var r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) m[a.value.id] = {
                loaded: !0,
                firstMessage: null
            }
        } catch (e) {
            o = !0, i = e
        } finally {
            try {
                !r && null != u.return && u.return()
            } finally {
                if (o) throw i
            }
        }
        var s = !0,
            l = !1,
            c = void 0;
        try {
            for (var f, d = n[Symbol.iterator](); !(s = (f = d.next()).done); s = !0) {
                var _ = f.value;
                I(_.channel_id, _)
            }
        } catch (e) {
            l = !0, c = e
        } finally {
            try {
                !s && null != d.return && d.return()
            } finally {
                if (l) throw c
            }
        }
    }

    function I(e, t) {
        var n = null == t ? null : (0, a.createMessageRecord)(t);
        m[e] = {
            loaded: !0,
            firstMessage: n
        }
    }

    function h(e) {
        var t = e.type,
            n = e.channelId,
            r = e.messageId,
            o = e.userId,
            i = e.emoji,
            a = e.optimistic,
            u = e.reactionType,
            l = m[n];
        if (null == l || null == l.firstMessage || r !== l.firstMessage.id) return !1;
        var c = s.default.getCurrentUser(),
            f = null != c && c.id === o;
        if (a && !f) return !1;
        m[n] = _({}, l), "MESSAGE_REACTION_ADD" === t ? m[n].firstMessage = l.firstMessage.addReaction(i, f, e.colors, u) : m[n].firstMessage = l.firstMessage.removeReaction(i, f, u)
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
            }), t && p(e, t)
        }(l, e);
        var t, n, r, o, i, a = (t = l, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = d(t);
            if (n) {
                var a = d(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function l() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, l), a.apply(this, arguments)
        }
        return r = l, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(u.default, s.default)
            }
        }, {
            key: "isLoading",
            value: function(e) {
                var t;
                return (null === (t = m[e]) || void 0 === t ? void 0 : t.loaded) !== !0
            }
        }, {
            key: "getMessage",
            value: function(e) {
                return !(e in m) && (m[e] = {
                    loaded: !1,
                    firstMessage: null
                }), m[e]
            }
        }], c(r.prototype, o), i && c(r, i), l
    }(o.default.Store);
    f(O, "displayName", "ForumPostMessagesStore"), t.default = new O(i.default, {
        CONNECTION_OPEN: function() {
            m = {}
        },
        MESSAGE_CREATE: function(e) {
            if (e.isPushNotification || e.message.id !== l.default.castChannelIdAsMessageId(e.message.channel_id)) return !1;
            I(e.message.channel_id, e.message)
        },
        MESSAGE_UPDATE: function(e) {
            if (e.message.id !== e.message.channel_id) return !1;
            var t = m[l.default.castMessageIdAsChannelId(e.message.id)];
            if (null == t || null == t.firstMessage) return !1;
            m[l.default.castMessageIdAsChannelId(e.message.id)] = E(_({}, t), {
                firstMessage: (0, a.updateMessageRecord)(t.firstMessage, e.message)
            })
        },
        MESSAGE_DELETE: function(e) {
            if (e.id !== l.default.castChannelIdAsMessageId(e.channelId)) return !1;
            m[e.channelId] = {
                loaded: !0,
                firstMessage: null
            }
        },
        THREAD_CREATE: function(e) {
            if (null != m[e.channel.id] || !u.default.isSubscribedToThreads(e.channel.guild_id)) return !1;
            m[e.channel.id] = {
                loaded: !0,
                firstMessage: null
            }
        },
        MESSAGE_REACTION_ADD: h,
        MESSAGE_REACTION_REMOVE: h,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = m[t];
            if (null == r || null == r.firstMessage || n !== r.firstMessage.id) return !1;
            m[t] = E(_({}, r), {
                firstMessage: r.firstMessage.set("reactions", [])
            })
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.emoji,
                o = m[t];
            if (null == o || null == o.firstMessage || n !== o.firstMessage.id) return !1;
            m[t] = E(_({}, o), {
                firstMessage: o.firstMessage.removeReactionsForEmoji(r)
            })
        },
        MESSAGE_REACTION_ADD_MANY: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.reactions,
                o = m[t];
            if (null == o || null == o.firstMessage || n !== o.firstMessage.id) return !1;
            var i = s.default.getCurrentUser(),
                a = o.firstMessage.addReactionBatch(r, null == i ? void 0 : i.id);
            m[t] = E(_({}, o), {
                firstMessage: a
            })
        },
        LOAD_FORUM_POSTS: function(e) {
            var t = e.threads;
            for (var n in t) I(n, t[n].first_message)
        },
        LOAD_THREADS_SUCCESS: y,
        LOAD_ARCHIVED_THREADS_SUCCESS: y,
        LOAD_MESSAGES_SUCCESS: function(e) {
            var t = e.channelId,
                n = e.messages,
                r = n[n.length - 1];
            null != r && r.id === l.default.castChannelIdAsMessageId(t) && (m[t] = {
                loaded: !0,
                firstMessage: (0, a.createMessageRecord)(r)
            })
        }
    })
}