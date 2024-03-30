function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a, u = n("392711"),
        s = n.n(u),
        l = n("898511"),
        c = n("629815"),
        f = n("370608"),
        d = n("56449"),
        _ = n("935741"),
        E = n("957808");

    function p(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function m(e) {
        return (m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function y(e, t) {
        return (y = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var I = new f.default(E.default.isMember, function(e, t) {
        c.default.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: [e],
            userIds: t
        })
    });

    function h() {
        I.reset()
    }

    function O(e, t) {
        return I.request(e, t), !1
    }

    function T(e, t) {
        return t.forEach(function(t) {
            var n = t.author,
                r = t.mentions;
            null != n && O(e, n.id), null == r || r.forEach(function(t) {
                return O(e, t.id)
            })
        }), !1
    }

    function S(e) {
        var t = e.channelId,
            n = e.messages,
            r = _.default.getChannel(t);
        return null != r && null != r.guild_id && T(r.guild_id, n)
    }

    function v(e) {
        var t = e.guildId,
            n = e.messages;
        return null != t && T(t, s().flatten(n))
    }
    var g = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && y(e, t)
        }(u, e);
        var t, n, r, o, i, a = (t = u, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = m(t);
            if (n) {
                var a = m(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function u() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, u), a.apply(this, arguments)
        }
        return r = u, o = [{
            key: "initialize",
            value: function() {
                this.waitFor(_.default, E.default)
            }
        }, {
            key: "requestMember",
            value: function(e, t) {
                O(e, t)
            }
        }], p(r.prototype, o), i && p(r, i), u
    }(l.default.Store);
    i = "GuildMemberRequesterStore", (o = "displayName") in(r = g) ? Object.defineProperty(r, o, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : r[o] = i, t.default = new g(c.default, {
        CONNECTION_CLOSED: h,
        CONNECTION_OPEN: h,
        CONNECTION_RESUMED: function() {
            return I.requestUnacknowledged(), !1
        },
        GUILD_MEMBERS_CHUNK: function(e) {
            var t = e.guildId,
                n = e.members,
                r = e.notFound;
            return n.forEach(function(e) {
                I.acknowledge(t, e.user.id)
            }), null != r && r.forEach(function(e) {
                return I.acknowledge(t, e)
            }), !1
        },
        SEARCH_FINISH: v,
        MOD_VIEW_SEARCH_FINISH: v,
        LOCAL_MESSAGES_LOADED: S,
        LOAD_MESSAGES_SUCCESS: S,
        LOAD_MESSAGES_AROUND_SUCCESS: S,
        LOAD_PINNED_MESSAGES_SUCCESS: S,
        LOAD_RECENT_MENTIONS_SUCCESS: S,
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.data;
            return T(t, (0, d.getMessagesFromGuildFeedFetch)(n))
        }
    })
}