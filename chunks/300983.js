function(e, t, n) {
    "use strict";
    n.r(t);
    var r, o = n("392711"),
        i = n.n(o),
        a = n("913527"),
        u = n.n(a),
        s = n("757167"),
        l = n("898511"),
        c = n("629815"),
        f = n("419135"),
        d = n("931983"),
        _ = n("921286"),
        E = n("880317"),
        p = n("837480"),
        m = n("933501"),
        y = n("696923"),
        I = n("983405"),
        h = n("734342"),
        O = n("225098"),
        T = n("851285"),
        S = n("957808"),
        v = n("483893"),
        g = n("306912"),
        A = n("380512"),
        b = n("208454"),
        N = n("299529"),
        R = n("388990"),
        C = n("739226"),
        P = n("162677"),
        D = n("949011"),
        L = n("523018"),
        M = n("148527"),
        U = n("27375"),
        w = n("975564"),
        k = n("769200"),
        G = n("68735"),
        B = n("281767"),
        j = n("644037"),
        F = n("382021");

    function V(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function H(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function x(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function Y(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function W(e, t, n) {
        return t && Y(e.prototype, t), n && Y(e, n), e
    }

    function K(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function z(e) {
        return (z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function X(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                K(e, t, n[t])
            })
        }
        return e
    }

    function q(e, t) {
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

    function Q(e, t) {
        return (Q = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function J(e) {
        return function(e) {
            if (Array.isArray(e)) return V(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || Z(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Z(e, t) {
        if (e) {
            if ("string" == typeof e) return V(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(e, t)
        }
    }
    var $ = [j.EmojiCategories.TOP_GUILD_EMOJI.toString(), j.EmojiCategories.FAVORITES.toString(), j.EmojiCategories.RECENT.toString(), j.EmojiCategories.CUSTOM.toString()].concat(U.default.getCategories()),
        ee = {
            pendingUsages: []
        },
        et = function() {
            function e(t, n, r) {
                var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                x(this, e), K(this, "id", void 0), K(this, "_userId", void 0), K(this, "_dirty", !0), K(this, "_emojis", void 0), K(this, "_emojiMap", {}), K(this, "_emoticons", []), K(this, "_usableEmojis", []), K(this, "_canSeeServerSubIAP", !1), K(this, "_totalUsable", 0), this.id = t, this._userId = n, this._emojis = r, this._canSeeServerSubIAP = o
            }
            return W(e, [{
                key: "getEmoji",
                value: function(e) {
                    return this.build(), this._emojiMap[e]
                }
            }, {
                key: "getUsableEmoji",
                value: function(e) {
                    var t = this.getEmoji(e);
                    return null != t && this.isUsable(t) ? t : null
                }
            }, {
                key: "isUsable",
                value: function(e) {
                    if (0 === e.roles.length) return !0;
                    var t = S.default.getMember(this.id, this._userId);
                    return null != t && (!!(t.roles.some(function(t) {
                        return e.roles.includes(t)
                    }) || (0, y.isPurchasableRoleSubscriptionEmoji)(e)) || !1)
                }
            }, {
                key: "rawEmojis",
                get: function() {
                    return this._emojis
                }
            }, {
                key: "emojis",
                get: function() {
                    return this.build(), this._emojis
                }
            }, {
                key: "emoticons",
                get: function() {
                    return this.build(), this._emoticons
                }
            }, {
                key: "usableEmojis",
                get: function() {
                    return this.build(), this._usableEmojis
                }
            }, {
                key: "build",
                value: function() {
                    var e = this;
                    this._dirty && (this._dirty = !1, this._emojis.forEach(function(t) {
                        t.url = N.default.getEmojiURL({
                            id: t.id,
                            animated: t.animated,
                            size: 48
                        }), t.allNamesString = ":".concat(t.name, ":"), t.guildId = e.id, t.type = M.EmojiTypes.GUILD, e._emojiMap[t.id] = t
                    }), this._usableEmojis = i().sortBy(this._emojis.filter(function(t) {
                        return e.isUsable(t)
                    }), function(e) {
                        return e.name
                    }), this._emoticons = this._usableEmojis.filter(function(e) {
                        return !e.require_colons
                    }))
                }
            }]), e
        }(),
        en = L.default.fromTimestamp(Date.now() - 60 * R.default.Millis.DAY),
        er = [],
        eo = 2,
        ei = $.slice(0),
        ea = {},
        eu = {},
        es = null,
        el = new Map;

    function ec(e) {
        var t, n = ef()[e];
        return null != n ? null === (t = ea[n]) || void 0 === t ? void 0 : t.getUsableEmoji(e) : null
    }

    function ef() {
        if (ed(), null == eu)
            for (var e in eu = {}, ea) {
                var t = ea[e],
                    n = !0,
                    r = !1,
                    o = void 0;
                try {
                    for (var i, a = t.rawEmojis[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) eu[i.value.id] = e
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
        return eu
    }

    function ed() {
        return e_.apply(this, arguments)
    }

    function e_() {
        var e;
        return e = function() {
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
                        if (0 !== eo || null == (e = d.default.database())) return [2];
                        return eo = 2, [4, (0, _.tryLoadOrResetCacheGatewayAsync)("EmojiStore.loadSavedEmojis", function() {
                            return s.default.timeAsync("\uD83D\uDCBE", "loadSavedEmojis", function() {
                                return E.default.getAsync(e)
                            })
                        })];
                    case 1:
                        if (null == (t = n.sent())) return [2];
                        return c.default.dispatch({
                            type: "CACHED_EMOJIS_LOADED",
                            emojis: t
                        }), [2]
                }
            })
        }, (e_ = function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    H(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    H(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }).apply(this, arguments)
    }
    var eE = function() {
        function e(t) {
            var n = this;
            x(this, e), K(this, "guildId", void 0), K(this, "emoticonRegex", null), K(this, "frequentlyUsed", null), K(this, "favorites", null), K(this, "favoriteNamesAndIds", null), K(this, "topEmojis", null), K(this, "escapedEmoticonNames", null), K(this, "disambiguatedEmoji", null), K(this, "customEmojis", void 0), K(this, "groupedCustomEmojis", void 0), K(this, "emoticonsByName", void 0), K(this, "emojisByName", void 0), K(this, "emojisById", void 0), K(this, "unicodeAliases", void 0), K(this, "newlyAddedEmoji", null), K(this, "isFavoriteEmojiWithoutFetchingLatest", function(e) {
                if (null == e) return !1;
                var t, r = n.rebuildFavoriteEmojisWithoutFetchingLatest()[1];
                return null != e.id ? r.has(e.id) : r.has(null !== (t = e.name) && void 0 !== t ? t : "")
            }), this.guildId = t
        }
        return W(e, [{
            key: "ensureDisambiguated",
            value: function() {
                null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji()
            }
        }, {
            key: "getDisambiguatedEmoji",
            value: function() {
                return null == this.disambiguatedEmoji && this._buildDisambiguatedCustomEmoji(), this.disambiguatedEmoji
            }
        }, {
            key: "getCustomEmoji",
            value: function() {
                return null == this.customEmojis && this._buildDisambiguatedCustomEmoji(), this.customEmojis
            }
        }, {
            key: "getGroupedCustomEmoji",
            value: function() {
                return null == this.groupedCustomEmojis && this._buildDisambiguatedCustomEmoji(), this.groupedCustomEmojis
            }
        }, {
            key: "getByName",
            value: function(e) {
                if ((null == this.emojisByName || null == this.unicodeAliases) && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisByName, e)) return this.emojisByName[e];
                if (Object.prototype.hasOwnProperty.call(this.unicodeAliases, e)) {
                    var t = this.unicodeAliases[e];
                    if (Object.prototype.hasOwnProperty.call(this.emojisByName, t)) return this.emojisByName[t]
                }
            }
        }, {
            key: "getEmoticonByName",
            value: function(e) {
                if (null == this.emoticonsByName && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emoticonsByName, e)) return this.emoticonsByName[e]
            }
        }, {
            key: "getById",
            value: function(e) {
                if (null == this.emojisById && this._buildDisambiguatedCustomEmoji(), Object.prototype.hasOwnProperty.call(this.emojisById, e)) return this.emojisById[e]
            }
        }, {
            key: "getCustomEmoticonRegex",
            value: function() {
                return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), null == this.emoticonRegex && null != this.escapedEmoticonNames && "" !== this.escapedEmoticonNames && (this.emoticonRegex = new RegExp("^\\b(".concat(this.escapedEmoticonNames, ")\\b"))), this.emoticonRegex
            }
        }, {
            key: "getFrequentlyUsedEmojisWithoutFetchingLatest",
            value: function() {
                var e = this;
                return this.ensureDisambiguated(), null == this.frequentlyUsed && (this.frequentlyUsed = ep.frequently.map(function(t) {
                    return null != t.id ? e.getById(t.id) : null != t.name ? U.default.getByName(t.name) : void 0
                }).filter(P.isNotNullish)), this.frequentlyUsed
            }
        }, {
            key: "rebuildFavoriteEmojisWithoutFetchingLatest",
            value: function() {
                var e, t, n = this;
                return this.ensureDisambiguated(), (null == this.favorites || null == this.favoriteNamesAndIds) && (this.favoriteNamesAndIds = new Set, this.favorites = (null !== (t = null === (e = T.default.frecencyWithoutFetchingLatest.favoriteEmojis) || void 0 === e ? void 0 : e.emojis) && void 0 !== t ? t : []).map(function(e) {
                    null === (t = n.favoriteNamesAndIds) || void 0 === t || t.add(e);
                    var t, r = n.getById(e);
                    return null == r && (r = U.default.getByName(e)), r
                }).filter(P.isNotNullish)), [this.favorites, this.favoriteNamesAndIds]
            }
        }, {
            key: "favoriteEmojisWithoutFetchingLatest",
            get: function() {
                return this.rebuildFavoriteEmojisWithoutFetchingLatest()[0]
            }
        }, {
            key: "getEmojiInPriorityOrderWithoutFetchingLatest",
            value: function() {
                var e = new Set;
                return this.favoriteEmojisWithoutFetchingLatest.concat(this.getFrequentlyUsedEmojisWithoutFetchingLatest()).filter(function(t) {
                    return !e.has(t) && (e.add(t), !0)
                })
            }
        }, {
            key: "getTopEmojiWithoutFetchingLatest",
            value: function(e) {
                var t = this;
                if (this.ensureDisambiguated(), null == this.topEmojis) {
                    var n, r = el.get(e),
                        o = k.default.getTopEmojiIdsByGuildId(e);
                    if (null == r && null == o) return er;
                    var i = (null !== (n = null == r ? void 0 : r.emojiIds) && void 0 !== n ? n : o).map(function(e) {
                            var n;
                            return null !== (n = t.getById(e)) && void 0 !== n ? n : U.default.getByName(U.default.convertSurrogateToName(e, !1))
                        }),
                        a = [];
                    i.forEach(function(e) {
                        null != e && a.push(e)
                    });
                    var u = this.getNewlyAddedEmojiForGuild(e).map(function(e) {
                        return e.id
                    });
                    this.topEmojis = a.filter(function(e) {
                        return !u.includes(e.id)
                    })
                }
                return this.topEmojis
            }
        }, {
            key: "getNewlyAddedEmojiForGuild",
            value: function(e) {
                if (this.ensureDisambiguated(), null == this.newlyAddedEmoji) return er;
                var t = this.newlyAddedEmoji[e];
                return null == t ? er : t
            }
        }, {
            key: "getEscapedCustomEmoticonNames",
            value: function() {
                return null == this.escapedEmoticonNames && this._buildDisambiguatedCustomEmoji(), this.escapedEmoticonNames
            }
        }, {
            key: "nameMatchesChain",
            value: function(e) {
                return i()(this.getDisambiguatedEmoji()).filter(function(t) {
                    var n = t.id,
                        r = t.names,
                        o = t.name,
                        a = null != r && i().some(r, e),
                        u = null != o && e(o),
                        s = null != o && i().some(p.default.getTermsForEmoji(o), e),
                        l = null != n && i().some(w.default.getCaptionsForEmojiById({
                            emojiId: n
                        }), e);
                    return a || u || s || l
                })
            }
        }, {
            key: "_buildDisambiguatedCustomEmoji",
            value: function() {
                var e = this,
                    t = {},
                    n = [];
                this.emoticonRegex = null, this.frequentlyUsed = null, this.disambiguatedEmoji = [], this.unicodeAliases = Object.create(null), this.customEmojis = Object.create(null), this.groupedCustomEmojis = Object.create(null), this.emoticonsByName = Object.create(null), this.emojisByName = Object.create(null), this.emojisById = Object.create(null), this.newlyAddedEmoji = Object.create(null);
                var r = function(n) {
                        var r, o, i, a, u = n.name,
                            s = null !== (r = t[u]) && void 0 !== r ? r : 0;
                        if (t[u] = s + 1, s > 0) {
                            var l = "".concat(u, "~").concat(s);
                            n = q(X({}, n), {
                                name: l,
                                originalName: u,
                                allNamesString: ":".concat(l, ":")
                            })
                        }
                        if (e.emojisByName[n.name] = n, "names" in n && (null === (o = n.names) || void 0 === o || o.slice(1).forEach(function(t) {
                                return e.unicodeAliases[t] = n.name
                            })), null != n.id) {
                            if (e.emojisById[n.id] = n, e.customEmojis[n.name] = n, n.type === M.EmojiTypes.GUILD) i = n.guildId, a = !0;
                            null != i && (null != e.groupedCustomEmojis[i] ? e.groupedCustomEmojis[i].push(n) : e.groupedCustomEmojis[i] = [n], a && L.default.compare(n.id, en) >= 0 && (null != e.newlyAddedEmoji[i] ? e.newlyAddedEmoji[i].push(n) : e.newlyAddedEmoji[i] = [n]))
                        }
                        null == e.disambiguatedEmoji && (e.disambiguatedEmoji = []), e.disambiguatedEmoji.push(n)
                    },
                    o = function(t) {
                        !Object.prototype.hasOwnProperty.call(e.emoticonsByName, t.name) && (n.push(D.default.escape(t.name)), e.emoticonsByName[t.name] = t)
                    };
                U.default.forEach(r);
                var a = function(e) {
                    var t = ea[null == e ? B.NULL_STRING_GUILD_ID : e];
                    null != t && (i().each(t.usableEmojis, r), i().each(t.emoticons, o))
                };
                for (var u in a(this.guildId), this.newlyAddedEmoji) null != this.newlyAddedEmoji[u] ? this.newlyAddedEmoji[u] = this.newlyAddedEmoji[u].sort(function(e, t) {
                    return L.default.compare(t.id, e.id)
                }).slice(0, 3) : this.newlyAddedEmoji[u] = [];
                A.default.getFlattenedGuildIds().forEach(function(t) {
                    t !== e.guildId && a(t)
                }), this.escapedEmoticonNames = n.join("|")
            }
        }], [{
            key: "get",
            value: function(t) {
                return void 0 === t && (t = null), (null == e._lastInstance || e._lastInstance.guildId !== t) && (e._lastInstance = new e(t)), e._lastInstance
            }
        }, {
            key: "reset",
            value: function() {
                e._lastInstance = null
            }
        }, {
            key: "resetFrequentlyUsed",
            value: function() {
                null != e._lastInstance && (e._lastInstance.frequentlyUsed = null)
            }
        }, {
            key: "resetFavorites",
            value: function() {
                null != e._lastInstance && (e._lastInstance.favorites = null, e._lastInstance.favoriteNamesAndIds = null)
            }
        }, {
            key: "clear",
            value: function(t) {
                null != e._lastInstance && e._lastInstance.guildId === t && (e._lastInstance = null)
            }
        }]), e
    }();
    K(eE, "_lastInstance", null);
    var ep = new f.default({
        computeBonus: function() {
            return 100
        },
        computeWeight: function(e) {
            var t = 0;
            return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
        },
        lookupKey: function(e) {
            var t;
            return null !== (t = U.default.getByName(e)) && void 0 !== t ? t : ec(e)
        },
        afterCompute: function() {
            eE.resetFrequentlyUsed(), ei = $.slice(0), !i().some(ea, function(e) {
                return e.usableEmojis.length > 0
            }) && ei.splice($.indexOf(j.EmojiCategories.CUSTOM), 1)
        },
        numFrequentlyItems: 42
    });

    function em() {
        ea = {}, eu = {}, eE.reset(), el.clear(), eo = 2
    }

    function ey(e) {
        null != ea[e] && delete ea[e]
    }

    function eI() {
        eu = null, eE.reset(), 0 !== eo && ep.compute()
    }

    function eh(e, t) {
        if (ey(e), eE.clear(e), null != t) {
            var n = b.default.getCurrentUser();
            if (null != n) {
                var r = (0, h.canUseRoleSubscriptionIAP)(e);
                ea[e] = new et(e, n.id, t, r)
            }
        }
    }

    function eO() {
        var e, t, n, r, o = null === (t = T.default.settings.textAndImages) || void 0 === t ? void 0 : null === (e = t.diversitySurrogate) || void 0 === e ? void 0 : e.value;
        null != o && U.default.setDefaultDiversitySurrogate(o), eE.reset();
        var a = null !== (r = null === (n = T.default.frecencyWithoutFetchingLatest.emojiFrecency) || void 0 === n ? void 0 : n.emojis) && void 0 !== r ? r : {};
        ep.overwriteHistory(i().mapValues(a, function(e) {
            return q(X({}, e), {
                recentUses: e.recentUses.map(Number).filter(function(e) {
                    return e > 0
                })
            })
        }), ee.pendingUsages), i().isEmpty(a) && i().isEmpty(ee.pendingUsages) && T.default.hasLoaded(F.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) && (ep.track("thumbsup"), ep.track("thumbsup"), ep.track("eyes"), ep.track("eyes"), ep.track("laughing"), ep.track("laughing"), ep.track("watermelon"), ep.track("fork_and_knife"), ep.track("yum"), ep.track("weary"), ep.track("tired_face"), ep.track("poop"), ep.track("100"))
    }

    function eT(e) {
        if (null == e) return !1;
        var t = !0,
            n = !1,
            r = void 0;
        try {
            for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                var a, u, s = o.value,
                    l = null !== (u = null !== (a = s.id) && void 0 !== a ? a : s.uniqueName) && void 0 !== u ? u : s.name;
                null != l && (ep.track(l), ee.pendingUsages.push({
                    key: l,
                    timestamp: Date.now()
                }))
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
        var c = e.length > 0;
        return c && 0 !== eo && ep.compute(), c
    }

    function eS(e) {
        var t = e.guildId,
            n = e.role;
        if (!(0, m.isSubscriptionRole)(n)) return !1;
        var r = ea[t];
        eh(t, null == r ? void 0 : r.emojis), eI()
    }
    var ev = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Q(e, t)
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
            var e, r, o, i = z(t);
            if (n) {
                var a = z(this).constructor;
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
            return x(this, o), r.apply(this, arguments)
        }
        return W(o, [{
            key: "initialize",
            value: function(e) {
                this.waitFor(d.default, v.default, S.default, g.default, O.default, I.default, k.default, b.default), null != e && (ee = e), this.syncWith([T.default], eO)
            }
        }, {
            key: "getState",
            value: function() {
                return ee
            }
        }, {
            key: "loadState",
            get: function() {
                return eo
            }
        }, {
            key: "hasPendingUsage",
            value: function() {
                return ee.pendingUsages.length > 0
            }
        }, {
            key: "categories",
            get: function() {
                return ei
            }
        }, {
            key: "diversitySurrogate",
            get: function() {
                var e;
                return null !== (e = U.default.getDefaultDiversitySurrogate()) && void 0 !== e ? e : ""
            }
        }, {
            key: "emojiFrecencyWithoutFetchingLatest",
            get: function() {
                return ep
            }
        }, {
            key: "getGuildEmoji",
            value: function(e) {
                ed();
                var t, n = ea[e];
                return null !== (t = null == n ? void 0 : n.emojis) && void 0 !== t ? t : []
            }
        }, {
            key: "getUsableGuildEmoji",
            value: function(e) {
                ed();
                var t, n = ea[e];
                return null !== (t = null == n ? void 0 : n.usableEmojis) && void 0 !== t ? t : []
            }
        }, {
            key: "getGuilds",
            value: function() {
                return ea
            }
        }, {
            key: "getDisambiguatedEmojiContext",
            value: function(e) {
                return ed(), eE.get(e)
            }
        }, {
            key: "getSearchResultsOrder",
            value: function(e, t, n) {
                var r = t.toLowerCase(),
                    o = D.default.escape(r);
                if (e.length > 0) {
                    var a = RegExp("^".concat(o), "i"),
                        u = new RegExp("(^|_|[A-Z])".concat(o, "s?([A-Z]|_|$)")),
                        s = u.test.bind(u),
                        l = a.test.bind(a),
                        c = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e;
                            if (null == e || null == t) return 0;
                            var n = e.toLowerCase(),
                                o = 1 + (n === r ? 4 : 0) + (s(n) || s(e) ? 2 : 0) + (l(e) ? 1 : 0),
                                i = ep.getScore(t);
                            return null != i && (o *= i / 100), o
                        };
                    e = i().orderBy(e, [function(e) {
                        return null != e.names ? c(e.names[0]) : c(e.name, e.id)
                    }, function(e) {
                        return null != e.names ? e.names[0] : e.name
                    }], ["desc", "asc"])
                }
                return n > 0 && (e = e.slice(0, n)), e
            }
        }, {
            key: "searchWithoutFetchingLatest",
            value: function(e) {
                var t, n = e.channel,
                    r = e.query,
                    o = e.count,
                    i = e.intention,
                    a = e.includeExternalGuilds,
                    u = void 0 === a || a,
                    s = e.matchComparator;
                ed();
                var l = r.toLowerCase().replaceAll(/[ _]/g, ""),
                    c = D.default.escape(l);
                if (null == s) {
                    var f = RegExp("".concat(c), "i");
                    t = function(e) {
                        return f.test(e.replaceAll("_", ""))
                    }
                } else t = s;
                var d = null != n ? n.getGuildId() : null,
                    _ = eE.get(d).nameMatchesChain(t).reduce(function(e, t) {
                        var r = C.default.getEmojiUnavailableReason({
                            emoji: t,
                            channel: n,
                            intention: i,
                            forceIncludeExternalGuilds: u
                        });
                        return r === G.EmojiDisabledReasons.PREMIUM_LOCKED ? e.locked.push(t) : null == r && e.unlocked.push(t), e
                    }, {
                        unlocked: [],
                        locked: []
                    });
                return {
                    unlocked: this.getSearchResultsOrder(_.unlocked, r, void 0 === o ? 0 : o),
                    locked: this.getSearchResultsOrder(_.locked, r, 0)
                }
            }
        }, {
            key: "getUsableCustomEmojiById",
            value: function(e) {
                return ed(), ec(e)
            }
        }, {
            key: "getCustomEmojiById",
            value: function(e) {
                var t, n, r;
                return ed(), t = e, null != (r = ef()[t]) ? null === (n = ea[r]) || void 0 === n ? void 0 : n.getEmoji(t) : null
            }
        }, {
            key: "getTopEmoji",
            value: function(e) {
                return null == e ? er : (ed(), eE.get(e).getTopEmojiWithoutFetchingLatest(e))
            }
        }, {
            key: "getNewlyAddedEmoji",
            value: function(e) {
                return null == e ? er : (ed(), eE.get(e).getNewlyAddedEmojiForGuild(e))
            }
        }, {
            key: "getTopEmojisMetadata",
            value: function(e) {
                return el.get(e)
            }
        }, {
            key: "getEmojiAutosuggestion",
            value: function(e) {
                if (null != es && es.length > 0) {
                    var t = this.searchWithoutFetchingLatest({
                            channel: e,
                            count: 10,
                            query: es,
                            intention: G.EmojiIntention.CHAT
                        }),
                        n = t.locked;
                    return J(t.unlocked.slice(0, 5)).concat(J(n.slice(0, 5))).slice(0, 5)
                }
                return []
            }
        }, {
            key: "hasUsableEmojiInAnyGuild",
            value: function() {
                return ed(), L.default.keys(ea).some(function(e) {
                    return ea[e].usableEmojis.length > 0
                })
            }
        }, {
            key: "hasFavoriteEmojis",
            value: function(e) {
                var t = eE.get(e);
                return null != t && t.favoriteEmojisWithoutFetchingLatest.length > 0
            }
        }]), o
    }(l.default.PersistedStore);
    K(ev, "displayName", "EmojiStore"), K(ev, "persistKey", "EmojiStoreV2"), t.default = new ev(c.default, {
        BACKGROUND_SYNC: function() {
            em()
        },
        CONNECTION_OPEN: function(e) {
            em();
            var t = !0,
                n = !1,
                r = void 0;
            try {
                for (var o, i = e.guilds[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) {
                    var a = o.value;
                    eh(a.id, a.emojis)
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
            eo = e.guilds.every(function(e) {
                return null != e.emojis
            }) ? 1 : 0, eI()
        },
        CACHED_EMOJIS_LOADED: function(e) {
            var t = e.emojis,
                n = !0,
                r = !1,
                o = void 0;
            try {
                for (var i, a = t[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                    var u, s, l = (u = i.value, s = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(u) || function(e, t) {
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
                        }(u, s) || Z(u, s) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        c = l[0],
                        f = l[1];
                    !Object.hasOwn(ea, c) && v.default.isMember(c) && eh(c, f)
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
            eI()
        },
        GUILD_MEMBER_UPDATE: function(e) {
            var t, n = e.guildId;
            if (e.user.id === (null === (t = b.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) {
                var r = ea[n];
                eh(n, null == r ? void 0 : r.usableEmojis), eI()
            }
        },
        GUILD_CREATE: function(e) {
            0 !== eo && null == e.guild.emojis && null != e.guild.emojiUpdates && (eo = 0), eh(e.guild.id, e.guild.emojis), eI()
        },
        GUILD_UPDATE: function(e) {
            eh(e.guild.id, e.guild.emojis), eI()
        },
        GUILD_EMOJIS_UPDATE: function(e) {
            eh(e.guildId, e.emojis), eI()
        },
        GUILD_DELETE: function(e) {
            var t = e.guild;
            ey(t.id), el.delete(t.id), eI()
        },
        MESSAGE_REACTION_ADD: function(e) {
            if (!e.optimistic) return !1;
            var t = null != e.emoji.id && "0" !== e.emoji.id ? e.emoji : U.default.getByName(U.default.convertSurrogateToName(e.emoji.name, !1));
            if (null == t) return !1;
            eT([t])
        },
        EMOJI_TRACK_USAGE: function(e) {
            eT(e.emojiUsed)
        },
        USER_SETTINGS_PROTO_UPDATE: function(e) {
            var t = e.settings.type,
                n = e.wasSaved;
            if (p.default.setEmojiLocale(O.default.locale), t !== F.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
            ee.pendingUsages = []
        },
        GUILD_ROLE_CREATE: eS,
        GUILD_ROLE_UPDATE: eS,
        TOP_EMOJIS_FETCH_SUCCESS: function(e) {
            var t = e.guildId,
                n = e.topEmojisMetadata;
            el.set(t, {
                emojiIds: n.map(function(e) {
                    return e.emojiId
                }),
                topEmojisTTL: u()(u()()).add(1, "days").valueOf()
            })
        },
        EMOJI_AUTOSUGGESTION_UPDATE: function(e) {
            es = e.text
        }
    })
}