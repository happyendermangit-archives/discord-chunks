function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        ChannelLoader: function() {
            return J
        }
    });
    var r, o = n("392711"),
        i = n.n(o),
        a = n("757167"),
        u = n("898511"),
        s = n("629815"),
        l = n("931983"),
        c = n("921286"),
        f = n("967362"),
        d = n("732445"),
        _ = n("677470"),
        E = n("35523"),
        p = n("652709"),
        m = n("56449"),
        y = n("569492"),
        I = n("162677"),
        h = n("523018"),
        O = n("217014"),
        T = n("306912"),
        S = n("208454"),
        v = n("281767");

    function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function A(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function b(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function N(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function R(e, t, n) {
        return t && N(e.prototype, t), n && N(e, n), e
    }

    function C(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function P(e) {
        return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function D(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                C(e, t, n[t])
            })
        }
        return e
    }

    function L(e, t) {
        return (L = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function M(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return g(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var U = new E.default("ChannelStore"),
        w = {},
        k = {},
        G = {},
        B = {},
        j = null,
        F = {},
        V = {},
        H = 0,
        x = {},
        Y = {},
        W = new Set,
        K = {},
        z = 0,
        X = {},
        q = 0,
        Q = 0,
        J = function() {
            function e() {
                b(this, e)
            }
            return R(e, null, [{
                key: "loadAllMissingChannels",
                value: function() {
                    var e = T.default.getGuildIds().filter(function(e) {
                        return !W.has(e)
                    });
                    return this.loadGuildIds(e)
                }
            }, {
                key: "loadGuildFromChannelId",
                value: function(t) {
                    var n;
                    return null == t ? null : e.loadGuildIds([null === (n = et(t)) || void 0 === n ? void 0 : n.guild_id])
                }
            }, {
                key: "loadGuildIds",
                value: function(e) {
                    var t, n = e.filter(I.isNotNullish);
                    if (0 === n.length) return null;
                    var r = l.default.database();
                    if (null == r || !n.some(function(e) {
                            return !W.has(e)
                        })) return null;
                    var o = z;
                    return (0, c.tryLoadOrResetCacheGatewayAsync)("loadChannels", (t = function() {
                        var e, t, i, a, u, l, c, d, _, E, p;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(m) {
                            switch (m.label) {
                                case 0:
                                    t = (e = n.map(function(e) {
                                        if (W.has(e)) return null;
                                        if (null != K[e]) return U.fileOnly("Skipping loading ".concat(e, " because a load is pending")), null;
                                        var t = f.default.getAsync(r, e).then(function(t) {
                                            return U.fileOnly("Lazy loaded channels for ".concat(e, " #:").concat(t.length)), {
                                                guildId: e,
                                                channels: t
                                            }
                                        });
                                        return K[e] = t, {
                                            guildId: e,
                                            promise: t
                                        }
                                    }).filter(I.isNotNullish)).map(function(e) {
                                        return e.promise
                                    }), m.label = 1;
                                case 1:
                                    return m.trys.push([1, 4, , 5]), [4, Promise.all(t)];
                                case 2:
                                    if (i = m.sent(), z !== o) return U.fileOnly("lastResetTime has changed, skipping loads for " + e.map(function(e) {
                                        return e.guildId
                                    })), [2, null];
                                    return a = i.filter(function(e) {
                                        return !W.has(e.guildId)
                                    }), [4, s.default.dispatch({
                                        type: "LOAD_CHANNELS",
                                        channels: a
                                    })];
                                case 3:
                                    return m.sent(), [3, 5];
                                case 4:
                                    u = m.sent(), U.error("Failed to load channels from disk for " + e.map(function(e) {
                                        return e.guildId
                                    }), u), l = !0, c = !1, d = void 0;
                                    try {
                                        for (_ = e[Symbol.iterator](); !(l = (E = _.next()).done); l = !0) p = E.value, delete K[p.guildId]
                                    } catch (e) {
                                        c = !0, d = e
                                    } finally {
                                        try {
                                            !l && null != _.return && _.return()
                                        } finally {
                                            if (c) throw d
                                        }
                                    }
                                    throw u;
                                case 5:
                                    return [2, null]
                            }
                        })
                    }, function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                A(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                A(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }))
                }
            }]), e
        }();

    function Z(e, t, n) {
        if (!(null == e || "null" === e || W.has(e) || 0 === t && d.default.hasGuild(e))) {
            var r = l.default.database();
            if (null != r) {
                U.verbose("hydrating guild (guild: ".concat(e, ", trace: ").concat(n, ")"));
                var o = (0, c.tryLoadOrResetCacheGateway)("ensureGuildLoaded(".concat(e, ")"), function() {
                    return f.default.getSync(r, e)
                });
                if (null == o) {
                    W.add(e), d.default.restored(e), U.log("load returned null; early returning (guild: ".concat(e, ", database: ").concat(r, ")"));
                    return
                }
                var i = M(o, 2),
                    u = i[0],
                    s = i[1];
                (0, _.default)(u), 0 !== t && (Q += 1), W.add(e), d.default.restored(e), a.default.mark("❗", "loaded guild channels (guild: ".concat(e, ")"), s);
                var E = !0,
                    p = !1,
                    m = void 0;
                try {
                    for (var I, h = u[Symbol.iterator](); !(E = (I = h.next()).done); E = !0) {
                        var O = I.value;
                        !Object.hasOwn(k, O.id) && ea((0, y.castChannelRecord)(O))
                    }
                } catch (e) {
                    p = !0, m = e
                } finally {
                    try {
                        !E && null != h.return && h.return()
                    } finally {
                        if (p) throw m
                    }
                }
                U.verbose("hydration complete (guild: ".concat(e, ", channels: ").concat(u.length, ", guilds_loaded: ").concat(Q, ")"))
            }
        }
    }

    function $(e, t, n) {
        if (!Object.hasOwn(k, e) && !Object.hasOwn(B, e) && !Object.hasOwn(F, e) && !Object.hasOwn(Y, e) && 1 === t) {
            var r = d.default.getBasicChannel(e);
            (null == r ? void 0 : r.guild_id) != null && Z(r.guild_id, t, n)
        }
    }

    function ee(e) {
        if (U.fileOnly("Deleting guild channels for ".concat(e)), null != G[e]) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = h.default.keys(G[e])[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    delete k[a]
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
            delete G[e]
        }
    }

    function et(e) {
        var t, n, r, o;
        return $(e, 0, "getBasicChannel"), null !== (o = null !== (r = null !== (n = null !== (t = k[e]) && void 0 !== t ? t : B[e]) && void 0 !== n ? n : F[e]) && void 0 !== r ? r : Y[e]) && void 0 !== o ? o : d.default.getBasicChannel(e)
    }

    function en(e) {
        var t, n, r, o;
        return $(e, 1, "getChannel"), null !== (o = null !== (r = null !== (n = null !== (t = k[e]) && void 0 !== t ? t : B[e]) && void 0 !== n ? n : F[e]) && void 0 !== r ? r : Y[e]) && void 0 !== o ? o : X[e]
    }

    function er(e) {
        e.isPrivate() ? (delete X[e.id], eo(e)) : e.isThread() ? ei(e) : y.GUILD_CHANNEL_TYPES.has(e.type) && function(e) {
            ea(e)
        }(e)
    }

    function eo(e) {
        B[e.id] = e, e.type === v.ChannelTypes.DM && (V[e.getRecipientId()] = e.id), H += 1
    }

    function ei(e) {
        var t = k[e.parent_id];
        F[e.id] = e.merge({
            nsfw: (null == t ? void 0 : t.nsfw) === !0,
            parentChannelThreadType: null == t ? void 0 : t.type
        }), e.isScheduledForDeletion() && s.default.dispatch({
            type: "THREAD_DELETE",
            channel: e
        })
    }

    function ea(e) {
        var t, n, r = e.id,
            o = e.guild_id;
        k[r] = e, G[o] = null !== (t = G[o]) && void 0 !== t ? t : {}, G[o][r] = e, x[o] = (null !== (n = x[o]) && void 0 !== n ? n : 0) + 1
    }

    function eu(e) {
        if (null != e.channels) {
            U.fileOnly("GuildCreate contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), ee(e.id), W.add(e.id), d.default.restored(e.id);
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.channels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    ea(a)
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
        }
        if (null != e.channelUpdates) {
            var u = e.channelUpdates;
            (u.writes.length > 0 || u.deletes.length > 0) && d.default.invalidate(e.id);
            var s = !0,
                l = !1,
                c = void 0;
            try {
                for (var f, _ = u.deletes[Symbol.iterator](); !(s = (f = _.next()).done); s = !0) {
                    var E = f.value;
                    ec(k[E])
                }
            } catch (e) {
                l = !0, c = e
            } finally {
                try {
                    !s && null != _.return && _.return()
                } finally {
                    if (l) throw c
                }
            }
            var p = !0,
                m = !1,
                y = void 0;
            try {
                for (var I, h = u.writes[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                    var O = I.value;
                    ea(O)
                }
            } catch (e) {
                m = !0, y = e
            } finally {
                try {
                    !p && null != h.return && h.return()
                } finally {
                    if (m) throw y
                }
            }
        }
        if (null != e.threads) {
            var T = !0,
                S = !1,
                v = void 0;
            try {
                for (var g, A = e.threads[Symbol.iterator](); !(T = (g = A.next()).done); T = !0) {
                    var b = g.value;
                    ei(b)
                }
            } catch (e) {
                S = !0, v = e
            } finally {
                try {
                    !T && null != A.return && A.return()
                } finally {
                    if (S) throw v
                }
            }
        }
    }

    function es(e) {
        if (!y.ALL_CHANNEL_TYPES.has(e.channel.type)) return !1;
        var t, n, r, o = en(e.channel.id);
        if (null == o) o = e.channel;
        else {
            ;
            o = o.merge((t = D({}, e.channel.toJS()), n = (n = {
                bitrate: null !== (r = e.channel.bitrate) && void 0 !== r ? r : o.bitrate
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        }
        er(o)
    }

    function el(e) {
        e.threads.forEach(function(e) {
            y.ALL_CHANNEL_TYPES.has(e.type) && er((0, y.createChannelRecordFromServer)(e))
        })
    }

    function ec(e) {
        if (null != e) {
            var t = e.guild_id;
            e.id in B && delete B[e.id], e.id in k && delete k[e.id], e.id in F && delete F[e.id], null != t && null != G[t] && e.id in G[t] && delete G[t][e.id], ! function(e) {
                if (null == e.guild_id || y.THREAD_CHANNEL_TYPES.has(e.type))(0, y.isPrivate)(e.type) && (H += 1);
                else {
                    var t;
                    x[e.guild_id] = (null !== (t = x[e.guild_id]) && void 0 !== t ? t : 0) + 1
                }
            }(e)
        }
    }

    function ef(e) {
        var t, n, r = e.channel,
            o = null !== (n = null !== (t = k[r.id]) && void 0 !== t ? t : B[r.id]) && void 0 !== n ? n : F[r.id];
        if (null == o) return !1;
        ec(o), ! function(e) {
            if (!("basicPermissions" in e) && e.type === v.ChannelTypes.DM) {
                var t = e.getRecipientId();
                V[t] === e.id && delete V[t]
            }
        }(o)
    }

    function ed(e) {
        var t = e.messages,
            n = !0,
            r = !1,
            o = void 0;
        try {
            for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                var u = i.value;
                null != u.thread && !(u.thread.id in F) && y.ALL_CHANNEL_TYPES.has(u.thread.type) && ei((0, y.createChannelRecordFromServer)(u.thread))
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
    }

    function e_(e) {
        var t = e.messages,
            n = e.threads,
            r = e.channels,
            o = !0,
            i = !1,
            a = void 0;
        try {
            for (var u, s = t[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                var l = u.value,
                    c = !0,
                    f = !1,
                    d = void 0;
                try {
                    for (var _, E = l[Symbol.iterator](); !(c = (_ = E.next()).done); c = !0) {
                        var p = _.value;
                        eE(p.thread)
                    }
                } catch (e) {
                    f = !0, d = e
                } finally {
                    try {
                        !c && null != E.return && E.return()
                    } finally {
                        if (f) throw d
                    }
                }
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
        n.forEach(eE), null == r || r.forEach(function(e) {
            var t = (0, y.createChannelRecordFromServer)(e),
                n = null != en(e.id),
                r = null != X[e.id];
            t.isPrivate() && (!n || r) ? X[t.id] = t : !n && er(t)
        })
    }

    function eE(e) {
        null != e && !(e.id in F) && y.ALL_CHANNEL_TYPES.has(e.type) && ei((0, y.createChannelRecordFromServer)(e))
    }

    function ep() {
        for (var e in Y = {}, p.default.getFavoriteChannels()) {
            var t = p.default.getCategoryRecord(e);
            null != t && (Y[e] = t)
        }
    }
    var em = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && L(e, t)
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
            var e, r, o, i = P(t);
            if (n) {
                var a = P(this).constructor;
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
            return b(this, o), r.apply(this, arguments)
        }
        return R(o, [{
            key: "initialize",
            value: function() {
                this.waitFor(d.default, S.default, T.default, p.default), this.syncWith([p.default], ep)
            }
        }, {
            key: "hasChannel",
            value: function(e) {
                return null != et(e)
            }
        }, {
            key: "getBasicChannel",
            value: function(e) {
                if (null != e) return et(e)
            }
        }, {
            key: "getChannel",
            value: function(e) {
                if (null != e) return en(e)
            }
        }, {
            key: "loadAllGuildAndPrivateChannelsFromDisk",
            value: function() {
                var e = !0,
                    t = !1,
                    n = void 0;
                try {
                    for (var r, o = T.default.getGuildIds()[Symbol.iterator](); !(e = (r = o.next()).done); e = !0) {
                        var i = r.value;
                        Z(i, 1, "loadAllGuildAndPrivateChannelsFromDisk")
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
                return D({}, k, B)
            }
        }, {
            key: "getChannelIds",
            value: function(e) {
                var t, n;
                return (Z(e, 0, "getChannelIds"), null == e) ? h.default.keys(B) : h.default.keys(null !== (n = null !== (t = d.default.getGuildBasicChannels(e)) && void 0 !== t ? t : G[e]) && void 0 !== n ? n : w)
            }
        }, {
            key: "getMutablePrivateChannels",
            value: function() {
                return B
            }
        }, {
            key: "getMutableBasicGuildChannelsForGuild",
            value: function(e) {
                var t, n;
                return Z(e, 0, "getMutableBasicGuildChannelsForGuild"), null !== (n = null !== (t = d.default.getGuildBasicChannels(e)) && void 0 !== t ? t : G[e]) && void 0 !== n ? n : w
            }
        }, {
            key: "getMutableGuildChannelsForGuild",
            value: function(e) {
                var t;
                return Z(e, 1, "getMutableGuildChannelsForGuild"), null !== (t = G[e]) && void 0 !== t ? t : w
            }
        }, {
            key: "getSortedPrivateChannels",
            value: function() {
                return i()(B).values().sort(function(e, t) {
                    return h.default.compare(e.lastMessageId, t.lastMessageId)
                }).reverse().value()
            }
        }, {
            key: "getDMFromUserId",
            value: function(e) {
                if (null != e) return V[e]
            }
        }, {
            key: "getMutableDMsByUserIds",
            value: function() {
                return V
            }
        }, {
            key: "getDMUserIds",
            value: function() {
                return h.default.keys(V)
            }
        }, {
            key: "getPrivateChannelsVersion",
            value: function() {
                return H
            }
        }, {
            key: "getGuildChannelsVersion",
            value: function(e) {
                var t;
                return null !== (t = x[e]) && void 0 !== t ? t : 0
            }
        }, {
            key: "getAllThreadsForParent",
            value: function(e) {
                return i().values(F).filter(function(t) {
                    return t.parent_id === e
                })
            }
        }, {
            key: "getInitialOverlayState",
            value: function() {
                return D({}, k, B, F)
            }
        }, {
            key: "getDebugInfo",
            value: function() {
                return {
                    loadedGuildIds: Array.from(W).sort(h.default.compare),
                    pendingGuildLoads: Object.keys(K).sort(h.default.compare),
                    guildSizes: Object.keys(G).sort(h.default.compare).map(function(e) {
                        return "".concat(e, ": ").concat(ey(e))
                    })
                }
            }
        }]), o
    }(u.default.Store);

    function ey(e) {
        return null == G[e] ? null : Object.keys(G[e]).length
    }
    C(em, "displayName", "ChannelStore"), t.default = new em(s.default, {
        BACKGROUND_SYNC: function(e) {
            var t = e.guilds,
                n = G;
            k = {}, G = {}, x = {}, t.forEach(function(e) {
                if ("unavailable" === e.data_mode) U.fileOnly("Restoring guild channels b/c unavailable in bg sync, for ".concat(e.id, " #:").concat(ey(e.id))), i().forEach(n[e.id], ea);
                else if ("partial" === e.data_mode) {
                    U.fileOnly("Restoring guild channels b/c partial in bg sync, for ".concat(e.id, " #:").concat(ey(e.id))), i().forEach(n[e.id], ea);
                    var t, r, o = null !== (r = e.partial_updates.deleted_channel_ids) && void 0 !== r ? r : [];
                    o.length > 0 && (Z(e.id, 1, "handleBackgroundSync"), o.forEach(function(e) {
                        return ec(k[e])
                    })), null === (t = e.partial_updates.channels) || void 0 === t || t.forEach(function(t) {
                        return ea((0, y.createChannelRecordFromServer)(t, e.id))
                    })
                } else U.fileOnly("BG sync contained full channels for ".concat(e.id, " #:").concat(e.channels.length)), ee(e.id), W.add(e.id), d.default.restored(e.id), e.channels.forEach(function(t) {
                    return ea((0, y.createChannelRecordFromServer)(t, e.id))
                })
            })
        },
        CACHE_LOADED_LAZY: function(e) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.guildChannels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = M(o.value, 2),
                        u = a[0],
                        s = a[1];
                    U.fileOnly("Lazy cache contained full guild channels for ".concat(u, " #:").concat(s.length)), W.add(u);
                    var l = !0,
                        c = !1,
                        f = void 0;
                    try {
                        for (var d, _ = s[Symbol.iterator](); !(l = (d = _.next()).done); l = !0) {
                            var E = d.value;
                            er((0, y.castChannelRecord)(E))
                        }
                    } catch (e) {
                        c = !0, f = e
                    } finally {
                        try {
                            !l && null != _.return && _.return()
                        } finally {
                            if (c) throw f
                        }
                    }
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
        },
        CACHE_LOADED: function(e) {
            e.guilds.length;
            for (var t = e.privateChannels, n = e.initialGuildChannels, r = 0, o = [t, n]; r < o.length; r++) {
                var i = o[r],
                    a = !0,
                    u = !1,
                    s = void 0;
                try {
                    for (var l, c, f = i[Symbol.iterator](); !(a = (c = f.next()).done); a = !0) {
                        var d = c.value;
                        er((0, _.deserializeChannel)((0, y.castChannelRecord)(d)))
                    }
                } catch (e) {
                    u = !0, s = e
                } finally {
                    try {
                        !a && null != f.return && f.return()
                    } finally {
                        if (u) throw s
                    }
                }
            }
            var E = null === (l = n[0]) || void 0 === l ? void 0 : l.guild_id;
            null != E && (U.fileOnly("Early cache contained full guild channels for ".concat(E)), W.add(E))
        },
        CHANNEL_CREATE: function(e) {
            er(e.channel)
        },
        CHANNEL_DELETE: ef,
        CHANNEL_RECIPIENT_ADD: function(e) {
            var t = en(e.channelId),
                n = O.default.getId();
            return (null == t ? !!void 0 : !!t.isPrivate()) && (er(t.addRecipient(e.user.id, e.nick, n)), !0)
        },
        CHANNEL_RECIPIENT_REMOVE: function(e) {
            var t = en(e.channelId);
            return (null == t ? !!void 0 : !!t.isPrivate()) && (er(t.removeRecipient(e.user.id)), !0)
        },
        CHANNEL_UPDATES: function(e) {
            var t = e.channels.some(function(e) {
                    var t = en(e.id);
                    return e.nsfw !== (null == t ? void 0 : t.nsfw) || e.type !== (null == t ? void 0 : t.type)
                }),
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = e.channels[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = i.value;
                    er(u)
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
            t && Object.values(F).forEach(function(e) {
                return er(e)
            })
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
            var t = e.lazyPrivateChannels;
            null != j && (B = {}, j.forEach(eo)), t.forEach(eo)
        },
        CONNECTION_OPEN: function(e) {
            var t = G;
            V = {}, k = {}, G = {}, F = {}, x = {}, X = {}, K = {}, z = Date.now(), j = e.initialPrivateChannels, e.initialPrivateChannels.forEach(eo);
            var n = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, u = e.guilds[Symbol.iterator](); !(n = (a = u.next()).done); n = !0) {
                    var s = a.value;
                    "partial" === s.dataMode && (i().forEach(t[s.id], ea), U.fileOnly("Restoring guild channels for ".concat(s.id, " #:").concat(ey(s.id)))), eu(s)
                }
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    !n && null != u.return && u.return()
                } finally {
                    if (r) throw o
                }
            }
            ep()
        },
        GUILD_CREATE: function(e) {
            eu(e.guild)
        },
        GUILD_DELETE: function(e) {
            U.fileOnly("GuildDelete of ".concat(e.guild.id)), ee(e.guild.id), W.delete(e.guild.id), d.default.invalidate(e.guild.id)
        },
        GUILD_FEED_FETCH_SUCCESS: function(e) {
            var t = e.data,
                n = !1,
                r = (0, m.getThreadsFromGuildFeedFetch)(t),
                o = !0,
                i = !1,
                a = void 0;
            try {
                for (var u, s = r[Symbol.iterator](); !(o = (u = s.next()).done); o = !0) {
                    var l = u.value;
                    !(l.id in F) && y.ALL_CHANNEL_TYPES.has(l.type) && (ei((0, y.createChannelRecordFromServer)(l)), n = !0)
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
            return n
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: el,
        LOAD_CHANNELS: function(e) {
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.channels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value,
                        u = a.guildId,
                        s = a.channels;
                    U.fileOnly("Lazy loaded guild channels for ".concat(u)), (0, _.default)(s), W.add(u), d.default.restored(u);
                    var l = !0,
                        c = !1,
                        f = void 0;
                    try {
                        for (var E, p = s[Symbol.iterator](); !(l = (E = p.next()).done); l = !0) {
                            var m = E.value;
                            !Object.hasOwn(k, m.id) && ea((0, y.castChannelRecord)(m))
                        }
                    } catch (e) {
                        c = !0, f = e
                    } finally {
                        try {
                            !l && null != p.return && p.return()
                        } finally {
                            if (c) throw f
                        }
                    }
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
            return !1
        },
        LOAD_MESSAGES_AROUND_SUCCESS: ed,
        LOAD_MESSAGES_SUCCESS: ed,
        LOAD_THREADS_SUCCESS: el,
        LOGOUT: function() {
            U.fileOnly("initializeClear()"), V = {}, k = {}, G = {}, x = {}, B = {}, X = {}, F = {}, W = new Set, K = {}, z = Date.now()
        },
        OVERLAY_INITIALIZE: function(e) {
            e.guilds.length;
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.channels[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    er((0, _.deserializeChannel)((0, y.castChannelRecord)(a)))
                }
            } catch (e) {
                n = !0, r = e
            } finally {
                try {
                    !t && null != i.return && i.return()
                } finally {
                    if (n) throw r
                }
            }
        },
        SEARCH_FINISH: e_,
        MOD_VIEW_SEARCH_FINISH: e_,
        THREAD_CREATE: es,
        THREAD_DELETE: ef,
        THREAD_LIST_SYNC: function(e) {
            e.threads.forEach(function(e) {
                y.ALL_CHANNEL_TYPES.has(e.type) && er(e)
            })
        },
        THREAD_UPDATE: es,
        VOICE_BACKGROUND_UPDATE: function(e) {
            var t = en(e.channelId);
            null != t && (t.voiceBackgroundDisplay = e.background, er(t))
        }
    })
}