function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("724458"), n("47120"), n("757143"), n("773603"), n("315314"), n("610138"), n("216116"), n("78328"), n("815648"), n("653041");
    var i = n("392711"),
        r = n.n(i),
        s = n("302454"),
        a = n.n(s),
        o = n("675478"),
        l = n("131704"),
        u = n("601964"),
        d = n("709302"),
        _ = n("592125"),
        c = n("580005"),
        E = n("984933"),
        I = n("699516"),
        T = n("594174"),
        f = n("483360"),
        S = n("892880"),
        h = n("591759"),
        A = n("279779"),
        m = n("620490"),
        N = n("727785"),
        p = n("981631");

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let R = Object.freeze({});

    function C(e, t) {
        var n, i;
        if (!t.frecencyBoosters) return {};
        let r = c.default.getFrequentlyWithoutFetchingLatest(),
            s = r.reduce((e, t) => {
                let {
                    id: n
                } = t, i = c.default.getScoreWithoutFetchingLatest(n);
                return i > e ? i : e
            }, 0),
            a = [];
        switch (e) {
            case N.AutocompleterResultTypes.GUILD:
                a = r.filter(e => e instanceof u.default);
                break;
            case N.AutocompleterResultTypes.USER:
                a = r.filter(e => e instanceof l.ChannelRecordBase && e.type === p.ChannelTypes.DM);
                break;
            case N.AutocompleterResultTypes.GROUP_DM:
                a = r.filter(e => e instanceof l.ChannelRecordBase && e.isMultiUserDM());
                break;
            case N.AutocompleterResultTypes.TEXT_CHANNEL:
                a = r.filter(e => e instanceof l.ChannelRecordBase && (0, l.isGuildSelectableChannelType)(e.type));
                break;
            case N.AutocompleterResultTypes.VOICE_CHANNEL:
                a = r.filter(e => e instanceof l.ChannelRecordBase && e.isGuildVocal())
        }
        let o = {};
        for (let t of a) {
            let {
                id: n
            } = t, i = c.default.getScoreWithoutFetchingLatest(n);
            if (e === N.AutocompleterResultTypes.USER && t instanceof l.PrivateChannelRecord) {
                if (t.type === p.ChannelTypes.DM) o[n = t.getRecipientId()] = 1 + i / s;
                else if (t.type === p.ChannelTypes.GROUP_DM) {
                    let e = t.recipients.length;
                    for (let n of t.recipients) o[n] = 1 + i / s * (1 / e)
                }
            } else o[n] = 1 + i / s
        }
        for (let e of I.default.getFriendIDs()) o[e] = (null !== (n = o[e]) && void 0 !== n ? n : 1) + .2;
        for (let e of _.default.getDMUserIds()) o[e] = (null !== (i = o[e]) && void 0 !== i ? i : 1) + .1;
        return o
    }
    class g {
        createSearchContext() {
            null == this.userSearchContext && (this.userSearchContext = A.default.getSearchContext(this.parseUserResults, this._limit))
        }
        setLimit(e) {
            let {
                userSearchContext: t
            } = this;
            this._limit = e, null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit)
        }
        setResultTypes(e) {
            this.resultTypes = null != e ? new Set(e) : null, this._userResults = this._include(N.AutocompleterResultTypes.USER) ? this._userResults : [], this._groupDMResults = this._include(N.AutocompleterResultTypes.GROUP_DM) ? this._groupDMResults : [], this._textChannelResults = this._include(N.AutocompleterResultTypes.TEXT_CHANNEL) ? this._textChannelResults : [], this._voiceChannelResults = this._include(N.AutocompleterResultTypes.VOICE_CHANNEL) ? this._voiceChannelResults : [], this._guildResults = this._include(N.AutocompleterResultTypes.GUILD) ? this._guildResults : [], this._applicationResults = this._include(N.AutocompleterResultTypes.APPLICATION) ? this._applicationResults : [], this._linkResults = this._include(N.AutocompleterResultTypes.LINK) ? this._linkResults : []
        }
        _include(e) {
            return null == this.resultTypes || this.resultTypes.has(e)
        }
        _isAsyncSearch() {
            return this._include(N.AutocompleterResultTypes.USER)
        }
        setOptions(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t ? this.options = {
                ...this.options,
                ...e
            } : this.options = e, null != this.options.blacklist ? this._userBlacklist = Array.from(this.options.blacklist).map(e => e.startsWith("user:") ? e.replace("user:", "") : "").filter(e => "" !== e) : this._userBlacklist = null
        }
        search(e, t) {
            if (this.query = e, "" === e.trim()) {
                this.clear(), this.updateAllResults();
                return
            }(this.options.frecencyBoosters ? o.FrecencyUserSettingsActionCreators.loadIfNecessary() : Promise.resolve()).finally(() => {
                this.queryUsers(e, t, this._limit), this._groupDMResults = this.queryGroupDMs(e, this._limit), this._textChannelResults = this.queryTextChannels(e, this._limit), this._voiceChannelResults = this.queryVoiceChannels(e, this._limit), this._guildResults = this.queryGuilds(e, this._limit), this._applicationResults = this.queryApplications(e, this._limit), this._linkResults = this.queryLink(e, this._limit), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), this._asyncTimeout = setTimeout(this.updateAllResults, 300)) : this.updateAllResults()
            })
        }
        clear() {
            let {
                userSearchContext: e
            } = this;
            null != e && e.clearQuery(), this.results = [], this._userResults = [], this._groupDMResults = [], this._textChannelResults = [], this._voiceChannelResults = [], this._guildResults = [], this._applicationResults = [], this._linkResults = []
        }
        clean() {
            this.clear(), this.destroy(), this.query = "", this.updateAllResults()
        }
        pause() {
            var e, t;
            null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t)
        }
        resume() {
            var e, t;
            null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t)
        }
        destroy() {
            let {
                userSearchContext: e
            } = this;
            null != e && (e.destroy(), this.userSearchContext = null)
        }
        queryTextChannels(e, t) {
            if (!this._include(N.AutocompleterResultTypes.TEXT_CHANNEL)) return [];
            let n = C(N.AutocompleterResultTypes.TEXT_CHANNEL, this.options),
                {
                    blacklist: i
                } = this.options;
            return f.default.queryChannels({
                query: e,
                guildId: null,
                limit: t,
                fuzzy: !0,
                filter: null != i ? e => !i.has("channel:".concat(e.id)) : void 0,
                boosters: n
            })
        }
        queryVoiceChannels(e, t) {
            if (!this._include(N.AutocompleterResultTypes.VOICE_CHANNEL)) return [];
            let {
                voiceChannelGuildFilter: n
            } = this.options, i = C(N.AutocompleterResultTypes.VOICE_CHANNEL, this.options);
            return f.default.queryChannels({
                query: e,
                guildId: n,
                limit: t,
                fuzzy: !0,
                type: E.GUILD_VOCAL_CHANNELS_KEY,
                boosters: i
            })
        }
        queryGuilds(e, t) {
            if (!this._include(N.AutocompleterResultTypes.GUILD)) return [];
            let n = C(N.AutocompleterResultTypes.GUILD, this.options),
                {
                    blacklist: i
                } = this.options;
            return f.default.queryGuilds({
                query: e,
                limit: t,
                fuzzy: !0,
                filter: null != i ? e => !i.has("guild:".concat(e.id)) : void 0,
                boosters: n
            })
        }
        queryUsers(e, t, n) {
            let {
                userSearchContext: i
            } = this;
            if (null == i || !this._include(N.AutocompleterResultTypes.USER)) return;
            let {
                userFilters: r
            } = this.options;
            void 0 !== t && S.default.requestMembers(t, e, 100), i.setLimit(n), i.setQuery(e, r, this._userBlacklist, C(N.AutocompleterResultTypes.USER, this.options))
        }
        queryGroupDMs(e, t) {
            if (!this._include(N.AutocompleterResultTypes.GROUP_DM)) return [];
            let {
                blacklist: n
            } = this.options, i = C(N.AutocompleterResultTypes.GROUP_DM, this.options);
            return f.default.queryGroupDMs({
                query: e,
                limit: t,
                fuzzy: !0,
                filter: null != n ? e => !n.has("channel:".concat(e.id)) : void 0,
                boosters: i
            })
        }
        queryApplications(e, t) {
            return this._include(N.AutocompleterResultTypes.APPLICATION) ? f.default.queryApplications({
                query: e,
                limit: t,
                fuzzy: !0
            }) : []
        }
        queryLink(e, t) {
            let n;
            if (!this._include(N.AutocompleterResultTypes.LINK)) return [];
            let i = a().sanitizeUrl(e);
            try {
                n = new URL(i)
            } catch (e) {
                return []
            }
            let {
                pathname: r,
                hostname: s = "",
                host: o
            } = n, l = h.default.isDiscordHostname(s) || window.location.host === o;
            return null !== r && l && h.default.isAppRoute(r) ? [{
                type: N.AutocompleterResultTypes.LINK,
                record: d.default.fromPath(r),
                score: 1
            }] : []
        }
        constructor(e, t, n = 100, i = R) {
            O(this, "query", ""), O(this, "options", R), O(this, "results", []), O(this, "_userResults", []), O(this, "_groupDMResults", []), O(this, "_textChannelResults", []), O(this, "_voiceChannelResults", []), O(this, "_guildResults", []), O(this, "_applicationResults", []), O(this, "_linkResults", []), O(this, "_asyncTimeout", void 0), O(this, "userSearchContext", void 0), O(this, "onResultsChange", void 0), O(this, "resultTypes", void 0), O(this, "_userBlacklist", null), O(this, "_limit", void 0), O(this, "parseUserResults", e => {
                let {
                    results: t
                } = e;
                if (this._include(N.AutocompleterResultTypes.USER)) {
                    for (let {
                            id: e,
                            score: n,
                            comparator: i
                        }
                        of(this._userResults = [], t)) {
                        let t = T.default.getUser(e);
                        null != t && this._userResults.push({
                            type: N.AutocompleterResultTypes.USER,
                            record: t,
                            score: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    t = arguments.length > 1 ? arguments[1] : void 0;
                                return 1e3 * e * (null != t ? t : 1)
                            }(n),
                            comparator: null != i ? i : void 0
                        })
                    }
                    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults()
                }
            }), O(this, "updateAllResults", () => {
                clearTimeout(this._asyncTimeout), this.results = r()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults]).uniqBy(e => "".concat(e.type, "-").concat(e.record.id)).sort(m.default).value(), this.onResultsChange(this.results, this.query)
            }), this.onResultsChange = e, this.setOptions(i, !0), this._limit = n, this.createSearchContext(), this.setResultTypes(t)
        }
    }
}