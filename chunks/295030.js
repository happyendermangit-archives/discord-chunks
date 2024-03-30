function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useFavoriteStickerIds: function() {
            return U
        },
        useFavoriteStickers: function() {
            return w
        },
        useFetchStickerPack: function() {
            return N
        },
        useFetchStickerPacks: function() {
            return D
        },
        useFilteredStickerPackCategories: function() {
            return j
        },
        useHasSendableSticker: function() {
            return P
        },
        useLatestFrecentStickers: function() {
            return k
        },
        useShouldAnimateSticker: function() {
            return R
        },
        useStickerForRenderableSticker: function() {
            return B
        },
        useStickersGrid: function() {
            return C
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("357911"),
        a = n("53867"),
        u = n("419127"),
        s = n("306912"),
        l = n("63116"),
        c = n("380512"),
        f = n("208454"),
        d = n("665199"),
        _ = n("359017"),
        E = n("922747"),
        p = n("13075"),
        m = n("834306"),
        y = n("389712"),
        I = n("294463"),
        h = n("443699"),
        O = n("281767"),
        T = n("941504");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function v(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function g(e, t) {
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
        }(e, t) || b(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function A(e) {
        return function(e) {
            if (Array.isArray(e)) return S(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || b(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return S(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
        }
    }
    var N = function(e) {
            D();
            var t = (0, o.useStateFromStores)([y.default], function() {
                return y.default.hasLoadedStickerPacks
            });
            r.useEffect(function() {
                t && null == y.default.getStickerPack(e) && (0, p.fetchStickerPack)(e)
            }, [e, t])
        },
        R = function(e) {
            var t = a.AnimateStickers.useSetting();
            return (0, h.shouldAnimateSticker)(t, e)
        },
        C = function(e) {
            var t = e.collapsedStickersCategories,
                n = e.filteredStickers,
                o = e.listPaddingRight,
                a = void 0 === o ? 0 : o,
                u = e.listWidth,
                c = void 0 === u ? 0 : u,
                f = e.stickerNodeMargin,
                _ = void 0 === f ? 0 : f,
                E = e.stickerNodeWidth,
                p = e.stickersCategories;
            return r.useMemo(function() {
                var e = Math.floor((c - a + _) / (E + _)),
                    r = Math.floor(Math.max(_, (c - a - E * e) / (e - 1))),
                    o = [],
                    u = [],
                    f = [],
                    m = 0,
                    y = 0,
                    O = 0;
                if (0 !== c) {
                    var S = function(t, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            a = (0, h.isGuildSticker)(t[0]) ? s.default.getGuild(t[0].guild_id) : void 0,
                            c = (0, i.getManageResourcePermissions)(a).canCreateExpressions,
                            _ = l.default.getGuildId(),
                            E = p.findIndex(function(e) {
                                return e.type === I.StickerCategoryTypes.FAVORITE
                            }),
                            S = p.findIndex(function(e) {
                                return e.type === I.StickerCategoryTypes.RECENT
                            }),
                            v = t.length;
                        null != a && _ === a.id && c && t.length < (0, d.getTotalStickerCountForTier)(a.premiumTier) && v++;
                        var g = Math.ceil(v / e);
                        u[y] = r ? 0 : g;
                        for (var A = 0; A < g; A++) {
                            var b = A * e,
                                N = b + e,
                                R = t.slice(b, N).map(function(e, t) {
                                    return {
                                        type: I.StickerGridItemTypes.STICKER,
                                        sticker: e,
                                        packId: (0, h.isStandardSticker)(e) ? e.pack_id : "TODO - fix",
                                        gridSectionIndex: y,
                                        rowIndex: m,
                                        columnIndex: t,
                                        visibleRowIndex: O,
                                        category: n
                                    }
                                });
                            y > S && y > E && null != a && v > t.length && R.push({
                                type: I.StickerGridItemTypes.CREATE_STICKER,
                                guild_id: a.id,
                                name: T.default.Messages.STICKER_PICKER_CREATE_STICKER_TITLE,
                                gridSectionIndex: y,
                                rowIndex: m,
                                columnIndex: R.length,
                                visibleRowIndex: O
                            }), !r && (O++, f.push(R), o.push(R.length)), m++
                        }
                        y++
                    };
                    if (null == n) {
                        var v = !0,
                            g = !1,
                            A = void 0;
                        try {
                            for (var b, N = p[Symbol.iterator](); !(v = (b = N.next()).done); v = !0) {
                                var R = b.value;
                                R.stickers.length > 0 ? (m++, S(R.stickers, R.type, (null == t ? void 0 : t.has(R.id)) === !0)) : R.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL && (u[y] = 0, y++)
                            }
                        } catch (e) {
                            g = !0, A = e
                        } finally {
                            try {
                                !v && null != N.return && N.return()
                            } finally {
                                if (g) throw A
                            }
                        }
                    } else n.sendable.length > 0 && S(n.sendable, I.StickerCategoryTypes.SEARCH_RESULTS), n.sendableWithPremium.length > 0 && S(n.sendableWithPremium, I.StickerCategoryTypes.SEARCH_RESULTS)
                }
                return {
                    rowCount: m,
                    rowCountBySection: u,
                    stickersGrid: f,
                    gutterWidth: r,
                    columnCounts: o
                }
            }, [t, n, a, c, _, E, p])
        },
        P = function(e) {
            var t = (0, o.useStateFromStores)([f.default], function() {
                return f.default.getCurrentUser()
            });
            return (0, o.useStateFromStores)([y.default], function() {
                var n = y.default.getAllStickersIterator(),
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, u = n[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                        var s = a.value;
                        if ((0, E.isSendableSticker)(s, t, e)) return !0
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
                return !1
            }, [t, e])
        },
        D = function() {
            r.useEffect(function() {
                (0, p.fetchStickerPacks)()
            }, [])
        },
        L = function(e) {
            var t = (0, o.useStateFromStores)([y.default], function() {
                    return y.default.getAllGuildStickers()
                }),
                n = (0, o.useStateFromStoresArray)([c.default, s.default], function() {
                    var e = c.default.getFlattenedGuildIds(),
                        t = [];
                    return e.forEach(function(e) {
                        var n = s.default.getGuild(e);
                        null != n && t.push(n)
                    }), t
                }, []),
                a = (0, o.useStateFromStores)([f.default], function() {
                    return f.default.getCurrentUser()
                });
            return r.useMemo(function() {
                var r = [],
                    o = !0,
                    u = !1,
                    l = void 0;
                try {
                    for (var c, f = n[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                        var d = c.value,
                            E = d.name,
                            p = d.id,
                            m = t.get(p);
                        null != m && 0 !== m.length && r.push({
                            type: I.StickerCategoryTypes.GUILD,
                            id: p,
                            name: E,
                            stickers: m
                        })
                    }
                } catch (e) {
                    u = !0, l = e
                } finally {
                    try {
                        !o && null != f.return && f.return()
                    } finally {
                        if (u) throw l
                    }
                }
                if ((null == e ? void 0 : e.getGuildId()) != null) {
                    var y = s.default.getGuild(e.getGuildId()),
                        h = (0, i.getManageResourcePermissions)(y).canManageAllExpressions,
                        T = r.findIndex(function(t) {
                            return t.id === e.getGuildId()
                        });
                    T >= 1 ? r.unshift(r.splice(T, 1)[0]) : -1 === T && null != y && h && r.unshift({
                        type: I.StickerCategoryTypes.EMPTY_GUILD_UPSELL,
                        id: y.id,
                        name: y.name,
                        stickers: []
                    }), null != a && !_.can({
                        permission: O.Permissions.USE_EXTERNAL_EMOJIS,
                        user: a,
                        context: e
                    }) && (r = r.filter(function(t) {
                        return t.id === e.getGuildId()
                    }))
                }
                return r
            }, [t, n, a, e])
        },
        M = [];

    function U() {
        var e, t;
        return null !== (t = null === (e = (0, u.useFrecencySettings)().favoriteStickers) || void 0 === e ? void 0 : e.stickerIds) && void 0 !== t ? t : M
    }

    function w() {
        var e = U();
        return (0, o.useStateFromStoresArray)([y.default], function() {
            return e.map(function(e) {
                return y.default.getStickerById(e)
            }).filter(function(e) {
                return void 0 !== e
            })
        }, [e])
    }

    function k() {
        var e, t, n, r, i = (n = (0, u.useFrecencySettings)(), r = M, (null == n ? void 0 : null === (e = n.stickerFrecency) || void 0 === e ? void 0 : e.stickers) != null && (r = Object.keys(null == n ? void 0 : null === (t = n.stickerFrecency) || void 0 === t ? void 0 : t.stickers)), r);
        return (0, o.useStateFromStoresArray)([y.default], function() {
            return i.map(function(e) {
                return y.default.getStickerById(e)
            }).filter(function(e) {
                return void 0 !== e
            })
        }, [i])
    }
    var G = function(e) {
            var t = w(),
                n = (0, o.useStateFromStoresObject)([y.default, m.default], function() {
                    return {
                        packs: y.default.getPremiumPacks(),
                        frequentlyUsedStickers: m.default.stickerFrecencyWithoutFetchingLatest.frequently
                    }
                }, []),
                i = n.packs,
                a = n.frequentlyUsedStickers,
                u = (0, o.useStateFromStores)([f.default], function() {
                    return f.default.getCurrentUser()
                }),
                s = L(e);
            return r.useMemo(function() {
                var n, r = i.map(h.createStickerPackCategory);
                return [{
                    type: I.StickerCategoryTypes.FAVORITE,
                    id: I.StickerCategoryTypes.FAVORITE,
                    name: T.default.Messages.CATEGORY_FAVORITE,
                    stickers: t
                }, {
                    type: I.StickerCategoryTypes.RECENT,
                    id: I.StickerCategoryTypes.RECENT,
                    name: T.default.Messages.STICKER_CATEGORY_RECENT,
                    stickers: null !== (n = null == a ? void 0 : a.filter(function(t) {
                        if ((0, h.isGuildSticker)(t)) {
                            var n, r;
                            return null !== (r = null === (n = y.default.getStickersByGuildId(t.guild_id)) || void 0 === n ? void 0 : n.some(function(e) {
                                return e.id === t.id
                            })) && void 0 !== r && r && (0, E.getStickerSendability)(t, u, e) !== E.StickerSendability.NONSENDABLE
                        }
                        if ((0, h.isStandardSticker)(t)) return i.some(function(e) {
                            return e.id === t.pack_id
                        })
                    })) && void 0 !== n ? n : []
                }].concat(A(s), A(r))
            }, [i, t, a, s, u, e])
        },
        B = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, o.useStateFromStores)([y.default], function() {
                    return y.default.getStickerById(e.id)
                }),
                i = g(r.useState(!0), 2),
                a = i[0],
                u = i[1],
                s = g(r.useState(!1), 2),
                l = s[0],
                c = s[1],
                f = (0, h.isGuildSticker)(e) || (0, h.isStandardSticker)(e);
            return (r.useEffect(function() {
                var r, o;
                (o = (r = function() {
                    var r;
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
                    }(this, function(r) {
                        switch (r.label) {
                            case 0:
                                if (!(t && !f && null == n && a && !l)) return [3, 5];
                                u(!1), r.label = 1;
                            case 1:
                                return r.trys.push([1, 3, , 4]), [4, (0, p.fetchSticker)(e.id)];
                            case 2:
                            case 3:
                                return r.sent(), [3, 4];
                            case 4:
                                c(!0), r.label = 5;
                            case 5:
                                return [2]
                        }
                    })
                }, function() {
                    var e = this,
                        t = arguments;
                    return new Promise(function(n, o) {
                        var i = r.apply(e, t);

                        function a(e) {
                            v(i, n, o, a, u, "next", e)
                        }

                        function u(e) {
                            v(i, n, o, a, u, "throw", e)
                        }
                        a(void 0)
                    })
                }), function() {
                    return o.apply(this, arguments)
                })()
            }, [t]), f) ? [e, l] : [null != n ? n : null, l]
        },
        j = function(e) {
            var t = G(e);
            return r.useMemo(function() {
                return t.filter(function(e) {
                    return e.type === I.StickerCategoryTypes.EMPTY_GUILD_UPSELL || e.stickers.length > 0
                }, [])
            }, [t])
        }
}