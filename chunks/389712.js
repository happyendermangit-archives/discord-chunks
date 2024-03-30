function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o, i, a = n("757167"),
        u = n("898511"),
        s = n("629815"),
        l = n("931983"),
        c = n("921286"),
        f = n("562681"),
        d = n("27375"),
        _ = n("368995"),
        E = n("483893"),
        p = n("306912"),
        m = n("388990"),
        y = n("294463"),
        I = n("443699");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function T(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function g(e, t) {
        return (g = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function A(e) {
        return function(e) {
            if (Array.isArray(e)) return h(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
        }
    }
    var N = 2,
        R = new Map,
        C = new Map,
        P = null,
        D = [],
        L = null,
        M = !1,
        U = new Map,
        w = function(e, t) {
            U = new Map(U.set(e, t))
        },
        k = m.default.Millis.HOUR;
    var G = (o = (r = function() {
            var e, t;
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
            }(this, function(n) {
                switch (n.label) {
                    case 0:
                        if (0 !== N || null == (e = l.default.database())) return [2];
                        return N = 2, [4, (0, c.tryLoadOrResetCacheGatewayAsync)("StickerStore.loadSavedGuildStickers", function() {
                            return a.default.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", function() {
                                return f.default.getAsync(e)
                            })
                        })];
                    case 1:
                        if (null == (t = n.sent())) return [2];
                        return s.default.dispatch({
                            type: "CACHED_STICKERS_LOADED",
                            stickers: t
                        }), [2]
                }
            })
        }, function() {
            var e = this,
                t = arguments;
            return new Promise(function(n, o) {
                var i = r.apply(e, t);

                function a(e) {
                    O(i, n, o, a, u, "next", e)
                }

                function u(e) {
                    O(i, n, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }), function() {
            return o.apply(this, arguments)
        }),
        B = function(e) {
            var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            C.set(e.id, e), t && j(e, n)
        },
        j = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (null != P) {
                var n = e.tags,
                    r = {
                        type: y.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                if ((0, I.isStandardSticker)(e)) {
                    var o = D.find(function(t) {
                            return t.id === e.pack_id
                        }),
                        i = [r].concat(A((null != n ? n : "").split(",").map(function(e) {
                            return {
                                type: y.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }
                        })));
                    null != o && i.push({
                        type: y.StickerMetadataTypes.PACK_NAME,
                        value: o.name
                    }), P.set(e.id, i)
                } else if ((0, I.isGuildSticker)(e) && null != n) {
                    var a = d.default.getByName(n),
                        u = [r, {
                            type: y.StickerMetadataTypes.TAG,
                            value: n.trim().toLocaleLowerCase()
                        }];
                    if (null != t) {
                        var s = t.name.trim().toLocaleLowerCase();
                        null != s && "" !== s && u.push({
                            type: y.StickerMetadataTypes.GUILD_NAME,
                            value: s
                        })
                    }
                    if (null == a) {
                        P.set(e.id, u);
                        return
                    }
                    u.push({
                        type: y.StickerMetadataTypes.CORRELATED_EMOJI,
                        value: a.surrogates
                    }), a.forEachDiversity(function(e) {
                        return u.push({
                            type: y.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })
                    }), P.set(e.id, u)
                }
            }
        },
        F = function(e, t, n) {
            R.set(e.id, e);
            var r = A(D);
            if (t) {
                var o = r.findIndex(function(t) {
                    return t.id === e.id
                }); - 1 !== o ? r[o] = e : r.push(e), D = r
            }(t || n) && e.stickers.forEach(function(e) {
                return B(e)
            })
        },
        V = function() {
            U.forEach(function(e, t) {
                var n = p.default.getGuild(t);
                null != n && e.forEach(function(e) {
                    return j(e, n)
                })
            }), D.forEach(function(e) {
                e.stickers.forEach(function(e) {
                    return j(e)
                })
            })
        };

    function H(e) {
        var t = p.default.getGuild(e.id);
        null != t && null != e.stickers && (e.stickers.forEach(function(e) {
            return B(e, !0, t)
        }), w(t.id, e.stickers))
    }
    var x = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && g(e, t)
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
            var e, r, o, i = v(t);
            if (n) {
                var a = v(this).constructor;
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
                this.waitFor(l.default, E.default, p.default)
            }
        }, {
            key: "isLoaded",
            get: function() {
                return 0 !== N
            }
        }, {
            key: "loadState",
            get: function() {
                return N
            }
        }, {
            key: "stickerMetadata",
            get: function() {
                return G(), null == P && (P = new Map, V()), P
            }
        }, {
            key: "hasLoadedStickerPacks",
            get: function() {
                return null != L && L + k > Date.now()
            }
        }, {
            key: "isFetchingStickerPacks",
            get: function() {
                return M
            }
        }, {
            key: "getStickerById",
            value: function(e) {
                return !C.has(e) && G(), C.get(e)
            }
        }, {
            key: "getStickerPack",
            value: function(e) {
                return R.get(e)
            }
        }, {
            key: "getPremiumPacks",
            value: function() {
                return D
            }
        }, {
            key: "isPremiumPack",
            value: function(e) {
                return D.some(function(t) {
                    return t.id === e
                })
            }
        }, {
            key: "getRawStickersByGuild",
            value: function() {
                return U
            }
        }, {
            key: "getAllStickersIterator",
            value: function() {
                return G(), C.values()
            }
        }, {
            key: "getAllGuildStickers",
            value: function() {
                return G(), U
            }
        }, {
            key: "getStickersByGuildId",
            value: function(e) {
                return G(), U.get(e)
            }
        }], T(r.prototype, o), i && T(r, i), u
    }(u.default.Store);
    S(x, "displayName", "StickersStore"), t.default = new x(s.default, {
        BACKGROUND_SYNC: function() {
            P = null, C = new Map, U = new Map, N = 0
        },
        CONNECTION_OPEN: function(e) {
            var t = e.guilds;
            P = null, C = new Map, U = new Map, t.forEach(H), N = t.every(function(e) {
                return null != e.stickers
            }) ? 1 : 0
        },
        GUILD_CREATE: function(e) {
            var t = e.guild;
            !_.default.isLurking(t.id) && (H(t), 1 === N && null == t.stickers && null != t.stickerUpdates && (N = 0))
        },
        GUILD_DELETE: function(e) {
            var t, n = e.guild;
            (null !== (t = U.get(n.id)) && void 0 !== t ? t : []).forEach(function(e) {
                null != P && P.delete(e.id), C.delete(e.id)
            }), U.delete(n.id), U = new Map(U)
        },
        LOGOUT: function() {
            N = 0, D = [], C.clear(), R.clear(), P = null, U.clear(), U = new Map(U), M = !1, L = null
        },
        STICKER_PACKS_FETCH_START: function() {
            M = !0
        },
        STICKER_PACKS_FETCH_SUCCESS: function(e) {
            e.packs.forEach(function(e) {
                return F(e, !0)
            }), L = Date.now(), M = !1
        },
        STICKER_PACK_FETCH_SUCCESS: function(e) {
            F(e.pack, !1, e.ingestStickers)
        },
        GUILD_STICKERS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.stickers;
            n.forEach(function(e) {
                return B(e)
            }), w(t, n)
        },
        GUILD_STICKERS_CREATE_SUCCESS: function(e) {
            var t, n, r = e.guildId,
                o = e.sticker,
                i = null !== (t = U.get(r)) && void 0 !== t ? t : [];
            w(r, A(null !== (n = i.filter(function(e) {
                return e.id !== o.id
            })) && void 0 !== n ? n : []).concat([o])), B(o)
        },
        STICKER_FETCH_SUCCESS: function(e) {
            B(e.sticker, !1)
        },
        GUILD_STICKERS_UPDATE: function(e) {
            var t, n = e.guildId,
                r = e.stickers,
                o = function(e) {
                    var t, n, r, o = C.get(e.id);
                    return null != o && (0, I.isGuildSticker)(o) && (r = null != o.user ? o.user : void 0), t = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                r = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), r.forEach(function(t) {
                                S(e, t, n[t])
                            })
                        }
                        return e
                    }({}, e), n = (n = {
                        user: r
                    }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }), t
                };
            (null !== (t = U.get(n)) && void 0 !== t ? t : []).filter(function(e) {
                return null == r.find(function(t) {
                    return t.id === e.id
                })
            }).forEach(function(e) {
                C.delete(e.id), null != P && P.delete(e.id)
            });
            var i = r.map(function(e) {
                return o(e)
            });
            i.forEach(function(e) {
                return B(e)
            }), w(n, i)
        },
        CACHED_STICKERS_LOADED: function(e) {
            var t = e.stickers,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u = (m = i.value, y = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(m) || function(e, t) {
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
                        }(m, y) || b(m, y) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        s = u[0],
                        l = u[1];
                    if (E.default.isMember(s) && !U.has(s)) {
                        var c = p.default.getGuild(s),
                            f = !0,
                            d = !1,
                            _ = void 0;
                        try {
                            for (var m, y, I, h = l[Symbol.iterator](); !(f = (I = h.next()).done); f = !0) {
                                var O = I.value;
                                B(O, !0, c)
                            }
                        } catch (e) {
                            d = !0, _ = e
                        } finally {
                            try {
                                !f && null != h.return && h.return()
                            } finally {
                                if (d) throw _
                            }
                        }
                        w(s, l)
                    }
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
    })
}