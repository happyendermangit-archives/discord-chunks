function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("505578"),
        o = n.n(r),
        i = n("898511"),
        a = n("629815"),
        u = n("807471"),
        s = n("980751"),
        l = n("35523"),
        c = n("300983"),
        f = n("389712"),
        d = n("935741"),
        _ = n("306912"),
        E = n("523018"),
        p = n("950879");

    function m(e) {
        if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function I(e) {
        return (I = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function h(e, t) {
        return (h = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var O = new l.default("EntityVersionsManager"),
        T = function(e) {
            ! function(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }(s, e);
            var t, n, r, o, i, u = (t = s, n = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                } catch (e) {
                    return !1
                }
            }(), function() {
                var e, r, o, i = I(t);
                if (n) {
                    var a = I(this).constructor;
                    o = Reflect.construct(i, arguments, a)
                } else o = i.apply(this, arguments);
                return e = this, (r = o) && ("object" === function(e) {
                    return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
                }(r) || "function" == typeof r) ? r : m(e)
            });

            function s() {
                var e, t, n, r;
                return ! function(e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, s), e = u.apply(this, arguments), t = m(e), n = "actions", r = {
                    GUILD_CREATE: g,
                    DELETED_ENTITY_IDS: S
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, e
            }
            return r = s, o = [{
                key: "_initialize",
                value: function() {
                    a.default.subscribe("CONNECTION_OPEN", v)
                }
            }, {
                key: "_terminate",
                value: function() {
                    a.default.unsubscribe("CONNECTION_OPEN", v)
                }
            }], y(r.prototype, o), i && y(r, i), s
        }(u.default);

    function S(e) {
        var t, n = null === (t = _.default.getGuild(e.guild_id)) || void 0 === t ? void 0 : t.name;
        O.fileOnly("received deleted guild entities (id: ".concat(e.guild_id, ", name: ").concat(n, ")")), i.default.Emitter.batched(function() {
            null != e.channels && function(e, t) {
                var n = E.default.keys(d.default.getMutableBasicGuildChannelsForGuild(e));
                O.fileOnly("syncChannels", {
                    channelIdsInMemory: n,
                    channelIdsFromServer: t
                }), n.forEach(function(n) {
                    !t.has(n) && a.default.dispatch({
                        type: "CHANNEL_DELETE",
                        channel: {
                            guild_id: e,
                            id: n,
                            parent_id: void 0
                        }
                    })
                })
            }(e.guild_id, new Set(e.channels)), null != e.roles && function(e, t) {
                E.default.keys(_.default.getRoles(e)).forEach(function(n) {
                    !t.has(n) && a.default.dispatch({
                        type: "GUILD_ROLE_DELETE",
                        guildId: e,
                        roleId: n
                    })
                })
            }(e.guild_id, new Set(e.roles)), null != e.emojis && function(e, t) {
                var n = c.default.getGuildEmoji(e),
                    r = n.filter(function(e) {
                        return t.has(e.id)
                    });
                n.length !== r.length && a.default.dispatch({
                    type: "GUILD_EMOJIS_UPDATE",
                    guildId: e,
                    emojis: r
                })
            }(e.guild_id, new Set(e.emojis)), null != e.stickers && function(e, t) {
                var n, r = null !== (n = f.default.getStickersByGuildId(e)) && void 0 !== n ? n : [],
                    o = r.filter(function(e) {
                        return t.has(e.id)
                    });
                r.length !== o.length && a.default.dispatch({
                    type: "GUILD_STICKERS_UPDATE",
                    guildId: e,
                    stickers: o
                })
            }(e.guild_id, new Set(e.stickers))
        })
    }

    function v() {
        s.default.getAll().then(function(e) {
            e.forEach(function(e) {
                return A(e)
            })
        })
    }

    function g(e) {
        var t = e.guild;
        t.unableToSyncDeletes && A(t.id)
    }

    function A(e) {
        setTimeout(function() {
            return function(e) {
                var t, n, r, o = null === (t = _.default.getGuild(e)) || void 0 === t ? void 0 : t.name;
                O.fileOnly("requesting deleted guild entities (id: ".concat(e, ", name: ").concat(o, ")"));
                var i = b(Object.keys(d.default.getMutableBasicGuildChannelsForGuild(e))),
                    a = b(Object.keys(_.default.getRoles(e))),
                    u = b(c.default.getGuildEmoji(e).map(function(e) {
                        return e.id
                    })),
                    s = b(null !== (r = null === (n = f.default.getStickersByGuildId(e)) || void 0 === n ? void 0 : n.map(function(e) {
                        return e.id
                    })) && void 0 !== r ? r : []);
                p.default.getSocket().getDeletedEntityIdsNotMatchingHash(e, i, a, u, s)
            }(e)
        }, Math.ceil(2e3 * Math.random()))
    }

    function b(e) {
        return o().v3(e.sort().join(",")).toString()
    }
    t.default = new T
}