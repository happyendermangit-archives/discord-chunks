function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GUILD_FEED_FETCH_LIMIT: function() {
            return R
        },
        LoadingStatus: function() {
            return u
        }
    });
    var r, o, i, a, u, s, l = n("898511"),
        c = n("727309"),
        f = n("629815"),
        d = n("273829"),
        _ = n("83710"),
        E = n("217014"),
        p = n("523018"),
        m = n("940559"),
        y = n("466861"),
        I = n("496714"),
        h = n("159109"),
        O = n("539835"),
        T = n("928204");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function g(e) {
        return (g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function A(e, t) {
        return (A = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function b(e) {
        return function(e) {
            if (Array.isArray(e)) return S(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || N(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function N(e, t) {
        if (e) {
            if ("string" == typeof e) return S(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
        }
    }
    var R = 10;
    (r = u || (u = {}))[r.LOADING_FRESH_FEED = 0] = "LOADING_FRESH_FEED", r[r.LOADING_PAGE = 1] = "LOADING_PAGE", r[r.NONE = 2] = "NONE";
    var C = {
            loading: 2,
            error: null
        },
        P = {
            offset: null,
            hasMoreItems: null
        },
        D = {},
        L = {},
        M = {},
        U = {},
        w = {},
        k = {},
        G = {},
        B = {};

    function j(e) {
        var t = B[e];
        return null == t && (t = new c.SecondaryIndexMap(V, F), B[e] = t), t
    }

    function F(e) {
        var t = e.featured,
            n = e.sortIndex;
        return "".concat(t ? "\0" : "\x01").concat(n.toString().padStart(5, "0"))
    }

    function V(e) {
        var t = e.seen,
            n = e.highlighted,
            r = [O.GuildFeedSectionTypes.ALL];
        return n ? r.push(O.GuildFeedSectionTypes.HIGHLIGHTED) : t ? r.push(O.GuildFeedSectionTypes.READ) : r.push(O.GuildFeedSectionTypes.UNREAD), r
    }
    var H = {},
        x = {},
        Y = {},
        W = {};

    function K(e, t, n) {
        var r, o;
        return null === (o = G[e]) || void 0 === o ? void 0 : null === (r = o[t]) || void 0 === r ? void 0 : r[n]
    }

    function z(e, t) {
        var n;
        return null === (n = k[e]) || void 0 === n ? void 0 : n[t]
    }

    function X(e) {
        var t = (0, y.default)(e);
        return z(t.channel_id, t.id)
    }

    function q(e, t, n) {
        if (null == e || null == t) return !1;
        var r = z(e, t);
        if (null == r) return !1;
        var o = K(r, e, t);
        if (null == o) return !1;
        var i = n(o);
        return G[r][e][t] = i, !0
    }

    function Q(e, t) {
        (0, y.getAllMessagesFromFeedItem)(t).forEach(function(t) {
            return J(e, t)
        })
    }

    function J(e, t) {
        var n, r;
        (null === (n = G[e]) || void 0 === n ? void 0 : n[t.channel_id]) == null && (G[e] = null !== (r = G[e]) && void 0 !== r ? r : {}, G[e][t.channel_id] = {}), G[e][t.channel_id][t.id] = t, null == k[t.channel_id] && (k[t.channel_id] = {}), k[t.channel_id][t.id] = e
    }

    function Z(e, t) {
        var n = j(e).values(O.GuildFeedSectionTypes.ALL),
            r = !0,
            o = !1,
            i = void 0;
        try {
            for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                var s = a.value;
                if ((0, y.getAllMessageIdsFromFeedItem)(s).has(t)) return s
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
    }

    function $(e, t) {
        var n, r, o, i = z(e, t);
        return null != i && (null === (r = G[i]) || void 0 === r || null === (n = r[e]) || void 0 === n || delete n[t], null === (o = k[e]) || void 0 === o || delete o[t], ! function(e, t) {
            var n = Z(e, t);
            if (null != n) {
                var r = (0, h.default)(n),
                    o = j(e);
                !(Array.from((0, y.getAllMessagesFromFeedItem)(n)).filter(function(t) {
                    return K(e, t.channel_id, t.id)
                }).length > 0) && o.delete(r)
            }
        }(i, t), !0)
    }

    function ee(e) {
        var t = e.type,
            n = e.channelId,
            r = e.messageId,
            o = e.userId,
            i = e.emoji;
        if (!(0, _.shouldApplyReaction)(e)) return !1;
        var a = E.default.getId() === o;
        return q(n, r, function(n) {
            var r = e.reactionType;
            return "MESSAGE_REACTION_ADD" === t ? n.addReaction(i, a, e.colors, r) : n.removeReaction(i, a, r)
        })
    }

    function et(e) {
        return en(e.channel)
    }

    function en(e) {
        var t, n = e.guild_id;
        if (null == n) return !1;
        delete k[e.id], null === (t = G[n]) || void 0 === t || delete t[e.id]
    }
    var er = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && A(e, t)
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
            var e, r, o, i = g(t);
            if (n) {
                var a = g(this).constructor;
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
            key: "getLastFetchedMillis",
            value: function(e) {
                return D[e]
            }
        }, {
            key: "getFeedItemsForGuild",
            value: function(e) {
                return j(e).values()
            }
        }, {
            key: "getFeedItemSection",
            value: function(e, t) {
                return j(e).values(t)
            }
        }, {
            key: "getItem",
            value: function(e, t) {
                return j(e).get(t)
            }
        }, {
            key: "getItemForMessageId",
            value: function(e, t) {
                return Z(e, t)
            }
        }, {
            key: "getMessageItem",
            value: function(e, t) {
                return this.getItem(e, (0, h.GUILD_FEED_MESSAGE_ITEM_ID_TEMPLATE)(t))
            }
        }, {
            key: "getLoadId",
            value: function(e) {
                var t;
                return null === (t = w[e]) || void 0 === t ? void 0 : t.load_id
            }
        }, {
            key: "getCachedMessage",
            value: function(e, t, n) {
                return K(e, t, n)
            }
        }, {
            key: "getFetchStatus",
            value: function(e) {
                var t;
                return null !== (t = L[e]) && void 0 !== t ? t : C
            }
        }, {
            key: "getFeaturedItemsFetchStatus",
            value: function(e) {
                var t;
                return null !== (t = U[e]) && void 0 !== t ? t : C
            }
        }, {
            key: "getPaginationStatus",
            value: function(e) {
                var t;
                return null !== (t = M[e]) && void 0 !== t ? t : P
            }
        }, {
            key: "getIsItemHiding",
            value: function(e, t) {
                var n;
                return !!(null === (n = H[e]) || void 0 === n ? void 0 : n.has(t))
            }
        }, {
            key: "getIsItemHidden",
            value: function(e, t) {
                var n;
                return !!(null === (n = x[e]) || void 0 === n ? void 0 : n.has(t))
            }
        }, {
            key: "getIsItemFeatured",
            value: function(e) {
                var t, n = (0, h.getGuildFeedItemIdFromFeatureableItem)(e);
                return !!(null === (t = Y[e.guildId]) || void 0 === t ? void 0 : t.has(n))
            }
        }, {
            key: "getFeaturedItems",
            value: function(e) {
                var t;
                return Object.values(null !== (t = W[e]) && void 0 !== t ? t : [])
            }
        }, {
            key: "getFeaturedItemByMessageId",
            value: function(e, t) {
                var n;
                return Object.values(null !== (n = W[e]) && void 0 !== n ? n : []).find(function(e) {
                    return "message" in e && e.message.id === t
                })
            }
        }], v(r.prototype, o), i && v(r, i), u
    }(l.default.Store);
    a = "GuildFeedStore", (i = "displayName") in(o = er) ? Object.defineProperty(o, i, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : o[i] = a, t.default = new er(f.default, {
        GUILD_FEED_FETCH_FRESH_START: function(e) {
            var t = e.guildId;
            L[t] = {
                loading: 0,
                error: null
            }, delete B[t], delete w[t], delete M[t], H[t] = new Set, x[t] = new Set, Y[t] = new Set, G[t] = {}
        },
        GUILD_FEED_FETCH_PAGE_START: function(e) {
            L[e.guildId] = {
                loading: 1,
                error: null
            }
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t, n = e.guildId,
                r = e.data;
            if (D[n] = Date.now(), L[n] = {
                    loading: 2,
                    error: null
                }, !(n in w) || w[n].load_id === r.load_id) {
                var o = null !== (E = null === (d = w[n]) || void 0 === d ? void 0 : null === (f = d.results) || void 0 === f ? void 0 : f.items) && void 0 !== E ? E : [];
                w[n] = {
                    load_id: r.load_id,
                    results: {
                        items: o.concat(r.results.items)
                    }
                };
                var i = j(n),
                    a = i.values().length,
                    u = a,
                    s = !0,
                    l = !1,
                    c = void 0;
                try {
                    for (var f, d, _, E, p, y = r.results.items[Symbol.iterator](); !(s = (p = y.next()).done); s = !0) {
                        var I = p.value,
                            h = (0, m.createGuildFeedItemFromServer)(I, u);
                        if (null != h) u += 1, null == i.get(h.id) && (h.featured && Y[n].add(h.id), Q(n, h), i.set(h.id, h))
                    }
                } catch (e) {
                    l = !0, c = e
                } finally {
                    try {
                        !s && null != y.return && y.return()
                    } finally {
                        if (l) throw c
                    }
                }
                var O = null !== (t = null === (_ = M[n]) || void 0 === _ ? void 0 : _.offset) && void 0 !== t ? t : 0;
                M[n] = {
                    offset: O + R,
                    hasMoreItems: a !== i.values().length
                }
            }
        },
        GUILD_FEED_FETCH_FAILURE: function(e) {
            var t = e.guildId,
                n = e.error;
            L[t] = {
                loading: 2,
                error: n
            }
        },
        GUILD_FEED_FEATURED_ITEMS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.data;
            U[t] = {
                loading: 2,
                error: null
            };
            var r = {},
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = n.results.entries()[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l, c, f = (l = u.value, c = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(l) || function(e, t) {
                            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                            if (null != o) {
                                var i = [],
                                    a = !0,
                                    u = !1;
                                try {
                                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                                } catch (e) {
                                    u = !0, r = e
                                } finally {
                                    try {
                                        !a && null != o.return && o.return()
                                    } finally {
                                        if (u) throw r
                                    }
                                }
                                return i
                            }
                        }(l, c) || N(l, c) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        d = f[0],
                        _ = f[1],
                        E = (0, m.createGuildFeedItemFromServer)(_, d);
                    null != E && (0, m.isGuildFeedFeaturedItem)(E) && (E.featured && Y[t].add(E.id), Q(t, E), r[E.id] = E)
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            W[t] = r
        },
        GUILD_FEED_FEATURED_ITEMS_FETCH_FAILURE: function(e) {
            var t = e.guildId,
                n = e.error;
            U[t] = {
                loading: 2,
                error: n
            }
        },
        GUILD_FEED_ITEM_REMOVE: function(e) {
            var t = e.item;
            (0, y.getAllMessagesFromFeedItem)(t).forEach(function(e) {
                return $(e.channel_id, e.id)
            })
        },
        GUILD_FEED_ITEM_HIDE: function(e) {
            var t = e.item,
                n = (0, h.default)(t),
                r = X(t);
            null != r && (!(r in H) && (H[r] = new Set), H[r].add(n))
        },
        GUILD_FEED_ITEM_UNHIDE: function(e) {
            var t = e.item,
                n = (0, h.default)(t),
                r = X(t);
            null != r && H[r].delete(n)
        },
        GUILD_FEED_FEATURE_ITEM: function(e) {
            var t, n, r, o = e.featureableItem,
                i = e.options,
                a = o.guildId,
                u = (0, h.getGuildFeedItemIdFromFeatureableItem)(o);
            if (!(a in Y) && (Y[a] = new Set), Y[a].add(u), !!i.hoist) {
                var s = j(a),
                    l = null !== (r = s.get(u)) && void 0 !== r ? r : (0, I.createFakeGuildFeedItem)(o);
                null != l && (null != l.message && (null === (n = G[a]) || void 0 === n ? void 0 : null === (t = n[l.message.channel_id]) || void 0 === t ? void 0 : t[l.message.id]) == null && J(a, l.message), s.delete(l.id), l.featured = !0, l.seen = !1, s.set(l.id, l))
            }
        },
        GUILD_FEED_UNFEATURE_ITEM: function(e) {
            var t, n, r, o, i = e.featureableItem,
                a = i.guildId,
                u = (0, h.getGuildFeedItemIdFromFeatureableItem)(i);
            t = a, n = u, null === (r = Y[t]) || void 0 === r || r.delete(n), null === (o = W[t]) || void 0 === o || delete o[n]
        },
        CHANNEL_SELECT: function() {
            var e = !0,
                t = !1,
                n = void 0;
            try {
                for (var r, o = p.default.keys(H)[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                    var i = r.value;
                    null == x[i] && (x[i] = new Set), x[i] = new Set(b(Array.from(x[i])).concat(b(Array.from(H[i])))), delete H[i]
                }
            } catch (e) {
                t = !0, n = e
            } finally {
                try {
                    !e && null != o.return && o.return()
                } finally {
                    if (t) throw n
                }
            }
        },
        CHANNEL_DELETE: et,
        THREAD_DELETE: et,
        GUILD_DELETE: function(e) {
            var t, n = e.guild;
            if (null == D[n.id]) return !1;
            for (var r in delete D[n.id], delete w[n.id], null !== (t = G[n.id]) && void 0 !== t ? t : {}) delete k[r];
            delete G[n.id], delete B[n.id]
        },
        CHANNEL_UPDATES: function(e) {
            var t = e.channels,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    if (null == u ? void 0 : u.hasFlag(T.ChannelFlags.GUILD_FEED_REMOVED)) return en(u)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != a.return && a.return()
                } finally {
                    if (r) throw o
                }
            }
        },
        LOGOUT: function() {
            D = {}, w = {}, k = {}, G = {}, B = {}, H = {}, x = {}, Y = {}, W = {}
        },
        MESSAGE_UPDATE: function(e) {
            var t = e.message;
            return q(t.channel_id, t.id, function(e) {
                return (0, d.updateMessageRecord)(e, t)
            })
        },
        MESSAGE_DELETE: function(e) {
            var t = e.id;
            return $(e.channelId, t)
        },
        MESSAGE_DELETE_BULK: function(e) {
            var t = e.ids,
                n = e.channelId,
                r = !1,
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = t[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value;
                    r = $(n, l) || r
                }
            } catch (e) {
                i = !0, a = e
            } finally {
                try {
                    !o && null != s.return && s.return()
                } finally {
                    if (i) throw a
                }
            }
            return r
        },
        MESSAGE_REACTION_ADD: ee,
        MESSAGE_REACTION_ADD_MANY: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.reactions,
                o = E.default.getId();
            return q(t, n, function(e) {
                return e.addReactionBatch(r, o)
            })
        },
        MESSAGE_REACTION_REMOVE: ee,
        MESSAGE_REACTION_REMOVE_ALL: function(e) {
            return q(e.channelId, e.messageId, function(e) {
                return e.set("reactions", [])
            })
        },
        MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
            var t = e.channelId,
                n = e.messageId,
                r = e.emoji;
            return q(t, n, function(e) {
                return e.removeReactionsForEmoji(r)
            })
        }
    })
}