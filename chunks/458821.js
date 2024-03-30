function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        EmojiGridItemTypes: function() {
            return a
        },
        EmojiUpsellType: function() {
            return s
        },
        useCategorySelectHandler: function() {
            return j
        },
        useEmojiGrid: function() {
            return G
        },
        useEmojiSelectHandler: function() {
            return B
        }
    });
    var r, o, i, a, u, s, l = n("470079"),
        c = n("392711"),
        f = n.n(c),
        d = n("153832"),
        _ = n("898511"),
        E = n("362048"),
        p = n("300983"),
        m = n("148527"),
        y = n("27375"),
        I = n("797056"),
        h = n("251384"),
        O = n("357911"),
        T = n("29604"),
        S = n("306912"),
        v = n("63116"),
        g = n("380512"),
        A = n("208454"),
        b = n("739226"),
        N = n("32950"),
        R = n("544811"),
        C = n("276328"),
        P = n("986609"),
        D = n("888136"),
        L = n("644037"),
        M = n("68735"),
        U = n("941504");

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function k(e, t) {
        if (e) {
            if ("string" == typeof e) return w(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return w(e, t)
        }
    }(r = a || (a = {}))[r.EMOJI = 0] = "EMOJI", r[r.CREATE_EMOJI = 1] = "CREATE_EMOJI", (o = u || (u = {}))[o.SECTION_HEADING = 0] = "SECTION_HEADING", o[o.SECTION_ROW = 1] = "SECTION_ROW";
    var G = function(e) {
        var t = e.channel,
            n = e.collapsedSections,
            r = e.includeCreateEmojiButton,
            o = void 0 === r || r,
            i = e.pickerIntention,
            a = e.emojiSearchResults,
            u = e.gridWidth,
            s = e.emojiPaddingHorizontal,
            c = e.emojiSpriteSize,
            E = (0, _.useStateFromStores)([p.default], function() {
                return p.default.categories
            }),
            I = (0, _.useStateFromStores)([S.default], function() {
                return S.default.getGuild(null == t ? void 0 : t.getGuildId())
            }, [t]),
            h = null == t ? null : t.getGuildId(),
            G = (0, _.useStateFromStores)([p.default], function() {
                return p.default.getDisambiguatedEmojiContext(h)
            }, [h]),
            B = (0, C.useFavoriteEmojis)(h),
            j = (0, C.useFrequentlyUsedEmojis)(h),
            F = (0, D.default)(h, i),
            V = F.topEmojis,
            H = F.newlyAddedEmojis,
            x = (0, _.useStateFromStoresArray)([g.default], function() {
                return g.default.getFlattenedGuildIds()
            }, []),
            Y = (0, O.useManageResourcePermissions)(I).canCreateExpressions,
            W = (0, _.useStateFromStores)([A.default], function() {
                return A.default.getCurrentUser()
            }),
            K = (0, N.isPremium)(W),
            z = G.getCustomEmoji(),
            X = function(e) {
                if (e.type === m.EmojiTypes.GUILD) return e.guildId
            },
            q = l.useMemo(function() {
                return f().groupBy(z, X)
            }, [z]),
            Q = R.default.useExperiment({
                location: "EmojiPicker"
            }, {
                autoTrackExposure: !0,
                disable: !Y
            }),
            J = Q.enabled,
            Z = Q.treatment;
        return l.useMemo(function() {
            var e = [],
                r = [],
                l = [],
                _ = [],
                p = 0,
                m = 0;
            if (null != G && null != u) {
                var h = Math.floor(u / (c + 2 * s)),
                    O = function(a, u) {
                        var s, d, E, y, I = new Map,
                            O = n.has(u.sectionId);
                        var T = (s = f().partition(a, function(e) {
                                var n = b.default.isEmojiDisabled({
                                    emoji: e,
                                    channel: t,
                                    intention: i
                                });
                                return I.set(e, n), !n
                            }), d = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(s) || function(e, t) {
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
                            }(s, d) || k(s, d) || function() {
                                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            S = T[0],
                            g = T[1],
                            A = S.concat(g),
                            N = u.guild,
                            P = v.default.getGuildId(),
                            D = u.sectionId === L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                            M = !D && null != N && P === N.id && A.length < N.getMaxEmojiSlots(),
                            G = D && A.length < h && !J,
                            B = null != N && D && J && Z === R.EmojiPickerUploadTreatment.WITH_TOP_LIST && q[N.id].length < N.getMaxEmojiSlots(),
                            j = o && Y && null != N && (M || G || B);
                        j && B && A.length === h && A.shift();
                        for (var F = J && j && !O, x = Math.ceil((j ? A.length + 1 : A.length) / h), W = [], K = 0; K < x; K++) ! function(e) {
                            var t, n = 0 === e,
                                r = e * h - (F && e > 0 ? 1 : 0),
                                o = r + h - (F && n ? 1 : 0),
                                i = A.slice(r, o).map(function(e, t) {
                                    var r, o;
                                    return {
                                        type: 0,
                                        emoji: e,
                                        size: c,
                                        isDisabled: I.get(e),
                                        rowIndex: m,
                                        columnIndex: F && n ? t + 1 : t,
                                        visibleRowIndex: p,
                                        category: u.type,
                                        subCategory: u.sectionId === L.EmojiCategoryTypes.TOP_GUILD_EMOJI ? (0, C.getEmojiSubCategory)(V, H, null !== (o = null !== (r = e.id) && void 0 !== r ? r : e.uniqueName) && void 0 !== o ? o : e.name) : L.EmojiSubCategory.NONE
                                    }
                                });
                            if (F && n && !O) {
                                ;
                                i = [{
                                    type: 1,
                                    guildId: N.id,
                                    name: U.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                    size: c,
                                    rowIndex: m,
                                    columnIndex: 0,
                                    visibleRowIndex: p
                                }].concat(function(e) {
                                    if (Array.isArray(e)) return w(e)
                                }(t = i) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(t) || k(t) || function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }())
                            }
                            if (W.push(i), !O) {
                                if (!J && j && e === x - 1) {
                                    var a = W[e];
                                    a.push({
                                        type: 1,
                                        guildId: N.id,
                                        name: U.default.Messages.EMOJI_PICKER_CREATE_EMOJI_TITLE,
                                        size: c,
                                        rowIndex: e,
                                        columnIndex: a.length,
                                        visibleRowIndex: p
                                    })
                                }
                                _.push(i.length), l.push(i), p++
                            }
                            m++
                        }(K);
                        var z = (E = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r, o, i;
                                    r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                                        value: i,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : r[o] = i
                                })
                            }
                            return e
                        }({}, u), y = (y = {
                            count: a.length
                        }, y), Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(y)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(y)).forEach(function(e) {
                            Object.defineProperty(E, e, Object.getOwnPropertyDescriptor(y, e))
                        }), E);
                        r.push(z), e.push(O ? 0 : x)
                    };
                if (null != a) 0 !== a.unlocked.length && O(a.unlocked, {
                    type: L.EmojiCategoryTypes.SEARCH_RESULTS,
                    sectionId: L.EmojiCategoryTypes.SEARCH_RESULTS,
                    count: a.unlocked.length,
                    isNitroLocked: !1
                }), 0 !== a.locked.length && O(a.locked, {
                    type: L.EmojiCategoryTypes.PREMIUM_UPSELL,
                    categoryId: L.EmojiCategories.PREMIUM_UPSELL,
                    sectionId: L.EmojiCategoryTypes.PREMIUM_UPSELL,
                    count: a.locked.length,
                    isNitroLocked: !K
                });
                else {
                    var g = !0,
                        A = !1,
                        N = void 0;
                    try {
                        for (var D, F = E[Symbol.iterator](); !(g = (D = F.next()).done); g = !0) ! function() {
                            var e = D.value;
                            if (e === L.EmojiCategories.CUSTOM) {
                                var n = function(n) {
                                    var r = q[n];
                                    if (null != r) {
                                        var o = r.filter(function(e) {
                                            return b.default.getEmojiUnavailableReason({
                                                emoji: e,
                                                channel: null != t ? t : T.default.getDefaultChannel(n),
                                                intention: i
                                            }) !== M.EmojiDisabledReasons.DISALLOW_EXTERNAL
                                        });
                                        if (0 !== o.length) {
                                            var a = S.default.getGuild(n),
                                                u = !K && b.default.isEmojiCategoryNitroLocked({
                                                    categoryEmojis: o,
                                                    channel: t,
                                                    intention: i
                                                });
                                            O(o, {
                                                categoryId: e,
                                                guild: a,
                                                type: L.EmojiCategoryTypes.GUILD,
                                                sectionId: null != a ? a.id : (0, d.v4)(),
                                                count: o.length,
                                                isNitroLocked: u
                                            })
                                        }
                                    }
                                };
                                if (null != I && n(I.id), (0, M.isExternalEmojiAllowedForIntention)(i)) {
                                    var r = !0,
                                        o = !1,
                                        a = void 0;
                                    try {
                                        for (var u, s = x[Symbol.iterator](); !(r = (u = s.next()).done); r = !0) {
                                            var l = u.value;
                                            (null == I || I.id !== l) && n(l)
                                        }
                                    } catch (e) {
                                        o = !0, a = e
                                    } finally {
                                        try {
                                            !r && null != s.return && s.return()
                                        } finally {
                                            if (o) throw a
                                        }
                                    }
                                }
                            } else if (e === L.EmojiCategories.TOP_GUILD_EMOJI) {
                                if (null != I) {
                                    var c = (0, P.getEmojiHotrail)({
                                        topEmojis: V,
                                        newlyAddedEmojis: H
                                    }).allEmojis;
                                    if (c.length > 0) {
                                        var f = S.default.getGuild(I.id);
                                        O(c, {
                                            categoryId: e,
                                            guild: f,
                                            type: L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                            sectionId: L.EmojiCategoryTypes.TOP_GUILD_EMOJI,
                                            count: c.length,
                                            isNitroLocked: !1
                                        })
                                    }
                                }
                            } else if (e === L.EmojiCategories.RECENT) {
                                var _ = (0, C.dedupeUnicodeEmojis)(j).filter(function(e) {
                                    return !b.default.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: i
                                    })
                                });
                                O(_, {
                                    categoryId: e,
                                    type: L.EmojiCategoryTypes.RECENT,
                                    sectionId: L.EmojiCategoryTypes.RECENT,
                                    count: _.length,
                                    isNitroLocked: !1
                                })
                            } else if (e === L.EmojiCategories.FAVORITES) {
                                var E = (0, C.dedupeUnicodeEmojis)(B).filter(function(e) {
                                    return !b.default.isEmojiFiltered({
                                        emoji: e,
                                        channel: t,
                                        intention: i
                                    })
                                });
                                0 !== E.length && O(E, {
                                    categoryId: e,
                                    type: L.EmojiCategoryTypes.FAVORITES,
                                    sectionId: L.EmojiCategoryTypes.FAVORITES,
                                    count: E.length,
                                    isNitroLocked: !1
                                })
                            } else if ((0, C.allowUnicodeEmojiForIntention)(i)) {
                                var p = y.default.getByCategory(e);
                                null != p && O(p, {
                                    categoryId: e,
                                    type: L.EmojiCategoryTypes.UNICODE,
                                    sectionId: e,
                                    count: p.length,
                                    isNitroLocked: !1
                                })
                            }
                        }()
                    } catch (e) {
                        A = !0, N = e
                    } finally {
                        try {
                            !g && null != F.return && F.return()
                        } finally {
                            if (A) throw N
                        }
                    }
                }
            }
            return {
                columnCounts: _,
                emojiGrid: l,
                rowCountBySection: e,
                sectionDescriptors: r
            }
        }, [G, u, c, s, a, n, t, i, E, I, q, x, H, V, j, B, Y, o, K, J, Z])
    };
    (i = s || (s = {}))[i.PREMIUM = 0] = "PREMIUM", i[i.ROLE_SUBSCRIPTION = 1] = "ROLE_SUBSCRIPTION";
    var B = function(e) {
            var t = e.pickerIntention,
                n = e.selectedChannel,
                r = e.onSelectEmoji,
                o = e.setUpsellConfigs,
                i = e.emojiSelectAnalytics,
                a = e.trackEmojiFavorited,
                u = (0, _.useStateFromStores)([p.default], function() {
                    return p.default.getDisambiguatedEmojiContext(null == n ? void 0 : n.getGuildId())
                }, [n]);
            return l.useCallback(function(e, s) {
                switch (e.type) {
                    case 1:
                        r(void 0, s.isFinalSelection, s.isBurst);
                        return;
                    case 0:
                        var l = e.emoji;
                        if (null == l) return;
                        var c = b.default.getEmojiUnavailableReason({
                            emoji: l,
                            channel: n,
                            intention: t
                        });
                        if (s.toggleFavorite) {
                            u.isFavoriteEmojiWithoutFetchingLatest(l) || null != c ? (0, E.unfavoriteEmoji)(l) : (null == a || a(e), (0, E.favoriteEmoji)(l));
                            return
                        }
                        if (c === M.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE) return;
                        if (c === M.EmojiDisabledReasons.PREMIUM_LOCKED) {
                            o({
                                type: 0,
                                emojiDescriptor: e
                            });
                            return
                        }
                        if (c === M.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED && l.type === m.EmojiTypes.GUILD) {
                            o({
                                type: 1,
                                guildId: l.guildId,
                                emojiId: l.id
                            });
                            return
                        }
                        if (c === M.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE) return;
                        null == i || i(e), r(l, s.isFinalSelection, s.isBurst)
                }
            }, [n, t, r, o, u, i, a])
        },
        j = function(e) {
            var t = e.emojiListRef,
                n = (0, h.useExpressionPickerStore)(function(e) {
                    return e.searchQuery
                }),
                r = l.useCallback(function(e) {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.scrollToSectionTop(e)
                }, [t]);
            return l.useCallback(function(e) {
                "" !== n ? ((0, h.setSearchQuery)(""), I.EmojiPickerStore.setActiveCategoryIndex(e)) : r(e)
            }, [r, n])
        }
}