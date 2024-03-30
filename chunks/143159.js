function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return P
        }
    });
    var r = n("392711"),
        o = n.n(r),
        i = n("302454"),
        a = n.n(i),
        u = n("968574"),
        s = n("569492"),
        l = n("393588"),
        c = n("514037"),
        f = n("935741"),
        d = n("493549"),
        _ = n("29604"),
        E = n("776982"),
        p = n("208454"),
        m = n("378309"),
        y = n("854748"),
        I = n("822853"),
        h = n("967610"),
        O = n("539402"),
        T = n("225342"),
        S = n("281767");

    function v(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function g(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function b(e, t) {
        return null != t && "undefined" != typeof Symbol && t[Symbol.hasInstance] ? !!t[Symbol.hasInstance](e) : e instanceof t
    }

    function N(e) {
        return function(e) {
            if (Array.isArray(e)) return v(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return v(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t)
            }
        }(e) || function() {
            throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    var R = Object.freeze({});

    function C(e, t) {
        if (!t.frecencyBoosters) return {};
        var n = d.default.getFrequentlyWithoutFetchingLatest(),
            r = n.reduce(function(e, t) {
                var n = t.id,
                    r = d.default.getScoreWithoutFetchingLatest(n);
                return r > e ? r : e
            }, 0),
            o = [];
        switch (e) {
            case T.AutocompleterResultTypes.GUILD:
                o = n.filter(function(e) {
                    return b(e, l.default)
                });
                break;
            case T.AutocompleterResultTypes.USER:
                o = n.filter(function(e) {
                    return b(e, s.ChannelRecordBase) && e.type === S.ChannelTypes.DM
                });
                break;
            case T.AutocompleterResultTypes.GROUP_DM:
                o = n.filter(function(e) {
                    return b(e, s.ChannelRecordBase) && e.isMultiUserDM()
                });
                break;
            case T.AutocompleterResultTypes.TEXT_CHANNEL:
                o = n.filter(function(e) {
                    return b(e, s.ChannelRecordBase) && (0, s.isGuildSelectableChannelType)(e.type)
                });
                break;
            case T.AutocompleterResultTypes.VOICE_CHANNEL:
                o = n.filter(function(e) {
                    return b(e, s.ChannelRecordBase) && e.isGuildVocal()
                })
        }
        var i = {},
            a = !0,
            u = !1,
            c = void 0;
        try {
            for (var _, p = o[Symbol.iterator](); !(a = (_ = p.next()).done); a = !0) {
                var m = _.value,
                    y = m.id,
                    I = d.default.getScoreWithoutFetchingLatest(y);
                if (e === T.AutocompleterResultTypes.USER && b(m, s.PrivateChannelRecord)) {
                    if (m.type === S.ChannelTypes.DM) i[y = m.getRecipientId()] = 1 + I / r;
                    else if (m.type === S.ChannelTypes.GROUP_DM) {
                        var h = m.recipients.length,
                            O = !0,
                            v = !1,
                            g = void 0;
                        try {
                            for (var A, N = m.recipients[Symbol.iterator](); !(O = (A = N.next()).done); O = !0) i[A.value] = 1 + I / r * (1 / h)
                        } catch (e) {
                            v = !0, g = e
                        } finally {
                            try {
                                !O && null != N.return && N.return()
                            } finally {
                                if (v) throw g
                            }
                        }
                    }
                } else i[y] = 1 + I / r
            }
        } catch (e) {
            u = !0, c = e
        } finally {
            try {
                !a && null != p.return && p.return()
            } finally {
                if (u) throw c
            }
        }
        var R = E.default.getFriendIDs(),
            C = !0,
            P = !1,
            D = void 0;
        try {
            for (var L, M = R[Symbol.iterator](); !(C = (L = M.next()).done); C = !0) {
                var U, w = L.value;
                i[w] = (null !== (U = i[w]) && void 0 !== U ? U : 1) + .2
            }
        } catch (e) {
            P = !0, D = e
        } finally {
            try {
                !C && null != M.return && M.return()
            } finally {
                if (P) throw D
            }
        }
        var k = f.default.getDMUserIds(),
            G = !0,
            B = !1,
            j = void 0;
        try {
            for (var F, V = k[Symbol.iterator](); !(G = (F = V.next()).done); G = !0) {
                var H, x = F.value;
                i[x] = (null !== (H = i[x]) && void 0 !== H ? H : 1) + .1
            }
        } catch (e) {
            B = !0, j = e
        } finally {
            try {
                !G && null != V.return && V.return()
            } finally {
                if (B) throw j
            }
        }
        return i
    }
    var P = function() {
        var e, t, n;

        function r(e, t) {
            var n = this,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : R;
            ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, r), A(this, "query", ""), A(this, "options", R), A(this, "results", []), A(this, "_userResults", []), A(this, "_groupDMResults", []), A(this, "_textChannelResults", []), A(this, "_voiceChannelResults", []), A(this, "_guildResults", []), A(this, "_applicationResults", []), A(this, "_linkResults", []), A(this, "_asyncTimeout", void 0), A(this, "userSearchContext", void 0), A(this, "onResultsChange", void 0), A(this, "resultTypes", void 0), A(this, "_userBlacklist", null), A(this, "_limit", void 0), A(this, "parseUserResults", function(e) {
                var t = e.results;
                if (n._include(T.AutocompleterResultTypes.USER)) {
                    n._userResults = [];
                    var r = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done); r = !0) {
                            var s = a.value,
                                l = s.id,
                                c = s.score,
                                f = s.comparator,
                                d = p.default.getUser(l);
                            null != d && n._userResults.push({
                                type: T.AutocompleterResultTypes.USER,
                                record: d,
                                score: function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        t = arguments.length > 1 ? arguments[1] : void 0;
                                    return 1e3 * e * (null != t ? t : 1)
                                }(c),
                                comparator: null != f ? f : void 0
                            })
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
                    n._userResults.length > n._limit && (n._userResults.length = n._limit), n.updateAllResults()
                }
            }), A(this, "updateAllResults", function() {
                clearTimeout(n._asyncTimeout), n.results = o()(N(n._userResults).concat(N(n._groupDMResults), N(n._textChannelResults), N(n._voiceChannelResults), N(n._guildResults), N(n._linkResults))).uniqBy(function(e) {
                    return "".concat(e.type, "-").concat(e.record.id)
                }).sort(O.default).value(), n.onResultsChange(n.results, n.query)
            }), this.onResultsChange = e, this.setOptions(a, !0), this._limit = i, this.createSearchContext(), this.setResultTypes(t)
        }
        return e = r, t = [{
            key: "createSearchContext",
            value: function() {
                null == this.userSearchContext && (this.userSearchContext = h.default.getSearchContext(this.parseUserResults, this._limit))
            }
        }, {
            key: "setLimit",
            value: function(e) {
                var t = this.userSearchContext;
                this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
            }
        }, {
            key: "setResultTypes",
            value: function(e) {
                this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(T.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(T.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(T.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(T.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(T.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(T.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(T.AutocompleterResultTypes.LINK) ? this._linkResults : []
            }
        }, {
            key: "_include",
            value: function(e) {
                return null == this.resultTypes || this.resultTypes.has(e)
            }
        }, {
            key: "_isAsyncSearch",
            value: function() {
                return this._include(T.AutocompleterResultTypes.USER)
            }
        }, {
            key: "setOptions",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                t ? this.options = function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            A(e, t, n[t])
                        })
                    }
                    return e
                }({}, this.options, e) : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(function(e) {
                    return e.startsWith("user:") ? e.replace("user:", "") : ""
                }).filter(function(e) {
                    return "" !== e
                }) : this._userBlacklist = null
            }
        }, {
            key: "search",
            value: function(e, t) {
                var n = this;
                if (this.query = e, "" === e.trim()) {
                    this.clear(), this.updateAllResults();
                    return
                }(this.options.frecencyBoosters ? u.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve()).finally(function() {
                    n.queryUsers(e, t, n._limit), n._groupDMResults = n.queryGroupDMs(e, n._limit), n._textChannelResults = n.queryTextChannels(e, n._limit), n._voiceChannelResults = n.queryVoiceChannels(e, n._limit), n._guildResults = n.queryGuilds(e, n._limit), n._applicationResults = n.queryApplications(e, n._limit), n._linkResults = n.queryLink(e, n._limit), n._isAsyncSearch() ? (clearTimeout(n._asyncTimeout), n._asyncTimeout = setTimeout(n.updateAllResults, 300)) : n.updateAllResults()
                })
            }
        }, {
            key: "clear",
            value: function() {
                var e = this.userSearchContext;
                null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
            }
        }, {
            key: "clean",
            value: function() {
                this.clear(), this.destroy(), this.query = "", this.updateAllResults()
            }
        }, {
            key: "pause",
            value: function() {
                var e, t;
                null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
            }
        }, {
            key: "resume",
            value: function() {
                var e, t;
                null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this.userSearchContext;
                null != e && (e.destroy(), this.userSearchContext = null)
            }
        }, {
            key: "queryTextChannels",
            value: function(e, t) {
                if (!this._include(T.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
                var n = C(T.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                    r = this.options.blacklist;
                return m.default.queryChannels({
                    query: e,
                    guildId: null,
                    limit: t,
                    fuzzy: !0,
                    filter: null != r ? function(e) {
                        return !r.has("channel:".concat(e.id))
                    } : void 0,
                    boosters: n
                })
            }
        }, {
            key: "queryVoiceChannels",
            value: function(e, t) {
                if (!this._include(T.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
                var n = this.options.voiceChannelGuildFilter,
                    r = C(T.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
                return m.default.queryChannels({
                    query: e,
                    guildId: n,
                    limit: t,
                    fuzzy: !0,
                    type: _.GUILD_VOCAL_CHANNELS_KEY,
                    boosters: r
                })
            }
        }, {
            key: "queryGuilds",
            value: function(e, t) {
                if (!this._include(T.AutocompleterResultTypes.GUILD)) return [];
                var n = C(T.AutocompleterResultTypes.GUILD, this.options),
                    r = this.options.blacklist;
                return m.default.queryGuilds({
                    query: e,
                    limit: t,
                    fuzzy: !0,
                    filter: null != r ? function(e) {
                        return !r.has("guild:".concat(e.id))
                    } : void 0,
                    boosters: n
                })
            }
        }, {
            key: "queryUsers",
            value: function(e, t, n) {
                var r = this.userSearchContext;
                if (null != r && this._include(T.AutocompleterResultTypes.USER)) {
                    var o = this.options.userFilters;
                    void 0 !== t && y.default.requestMembers(t, e, 100), r.setLimit(n), r.setQuery(e, o, this._userBlacklist, C(T.AutocompleterResultTypes.USER, this.options))
                }
            }
        }, {
            key: "queryGroupDMs",
            value: function(e, t) {
                if (!this._include(T.AutocompleterResultTypes.GROUP_DM)) return [];
                var n = this.options.blacklist,
                    r = C(T.AutocompleterResultTypes.GROUP_DM, this.options);
                return m.default.queryGroupDMs({
                    query: e,
                    limit: t,
                    fuzzy: !0,
                    filter: null != n ? function(e) {
                        return !n.has("channel:".concat(e.id))
                    } : void 0,
                    boosters: r
                })
            }
        }, {
            key: "queryApplications",
            value: function(e, t) {
                return this._include(T.AutocompleterResultTypes.APPLICATION) ? m.default.queryApplications({
                    query: e,
                    limit: t,
                    fuzzy: !0
                }) : []
            }
        }, {
            key: "queryLink",
            value: function(e, t) {
                if (!this._include(T.AutocompleterResultTypes.LINK)) return [];
                var n, r = a().sanitizeUrl(e);
                try {
                    n = new URL(r)
                } catch (e) {
                    return []
                }
                var o = n.pathname,
                    i = n.hostname,
                    u = n.host,
                    s = I.default.isDiscordHostname(void 0 === i ? "" : i) || window.location.host === u;
                return null !== o && s && I.default.isAppRoute(o) ? [{
                    type: T.AutocompleterResultTypes.LINK,
                    record: c.default.fromPath(o),
                    score: 1
                }] : []
            }
        }], g(e.prototype, t), n && g(e, n), r
    }()
}