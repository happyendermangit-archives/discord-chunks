function(e, t, s) {
    "use strict";
    let l;
    s.r(t), s.d(t, {
        default: function() {
            return Y
        }
    }), s("424973"), s("222007"), s("843762"), s("808653");
    var i = s("917351"),
        u = s.n(i),
        n = s("446674"),
        r = s("95410"),
        a = s("913144"),
        o = s("123225"),
        h = s("681643"),
        d = s("934306"),
        c = s("615387"),
        p = s("401690"),
        _ = s("161778"),
        f = s("271938"),
        R = s("42203"),
        y = s("474643"),
        E = s("923959"),
        g = s("26989"),
        C = s("305961"),
        T = s("957255"),
        A = s("660478"),
        m = s("18494"),
        U = s("162771"),
        S = s("282109"),
        I = s("25292"),
        N = s("449008"),
        L = s("49111"),
        v = s("782340");
    let D = "seenQSTutorial",
        M = [o.AutocompleterResultTypes.USER, o.AutocompleterResultTypes.GROUP_DM, o.AutocompleterResultTypes.TEXT_CHANNEL, o.AutocompleterResultTypes.GUILD, o.AutocompleterResultTypes.APPLICATION, o.AutocompleterResultTypes.LINK],
        O = 0,
        H = !1,
        b = !1,
        k = null,
        G = [],
        w = null,
        P = 0,
        Q = [],
        F = [];

    function q() {
        b = C.default.getGuildCount() >= 3 || u.size(R.default.getMutablePrivateChannels()) >= 20, Q = []
    }

    function x(e) {
        let t = (0, h.default)(e);
        return null == t || null != k && k !== t.type ? null : t
    }

    function W(e) {
        var t;
        let {
            query: s,
            queryMode: i
        } = e, u = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(f.default.getId())]);
        null != u && n.add("guild:".concat(u)), l = null != l ? l : new o.default(z, M, null != i ? 100 : 5, {
            frecencyBoosters: !0,
            blacklist: n
        }), w = null, P = s.length, k = i, l.search(s)
    }

    function z(e, t) {
        ! function(e, t) {
            if (e.length !== t.length) return !1;
            for (let s = 0; s < e.length; s++) {
                let l = e[s],
                    i = t[s];
                if (l.record.id !== i.record.id) return !1
            }
            return !0
        }(e = "" === (t = t.trim()).trim() ? function() {
            var e, t;
            let s = null !== (e = U.default.getGuildId()) && void 0 !== e ? e : void 0,
                l = null !== (t = m.default.getChannelId()) && void 0 !== t ? t : void 0;
            switch (k) {
                case o.AutocompleterResultTypes.USER: {
                    let e = f.default.getId();
                    return I.default.getRecentlyTalked(l, 100).filter(t => {
                        let {
                            record: s
                        } = t;
                        return s.id !== e
                    })
                }
                case o.AutocompleterResultTypes.APPLICATION:
                    return I.default.queryApplications({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case o.AutocompleterResultTypes.GUILD:
                    return I.default.queryGuilds({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case o.AutocompleterResultTypes.TEXT_CHANNEL:
                    return I.default.queryChannels({
                        query: "",
                        guildId: U.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0
                    });
                case o.AutocompleterResultTypes.VOICE_CHANNEL:
                    return I.default.queryChannels({
                        query: "",
                        guildId: U.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0,
                        filter: () => !0,
                        type: E.GUILD_VOCAL_CHANNELS_KEY
                    })
            }
            let i = [],
                n = [];
            for (let e = 1; e < F.length; e += 1) {
                let t = x(F[e]);
                if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(L.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
            }
            n.length > 0 && i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
            let r = function(e) {
                let t = [];
                return y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(s => {
                    let {
                        channelId: l
                    } = s;
                    if (e(l)) return;
                    let i = x(l);
                    null != i && t.push(i)
                }), t
            }(e => e === l || F.includes(e));
            r.length > 0 && i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
            let a = A.default.getMentionChannelIds().filter(e => e !== l && !F.includes(e)).map(e => x(e)).filter(N.isNotNullish).reverse();
            if (a.length > 0 && (i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_MENTIONS)), i = i.concat(a)), null != s) {
                let e = E.default.getSelectableChannelIds(s).filter(e => {
                    let t = R.default.getChannel(e);
                    return !(null == t || e === l || F.includes(e) || S.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && S.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, c.getHasImportantUnread)(t)
                }).map(e => x(e)).filter(e => e);
                Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(s)).forEach(t => {
                    for (let s in t) {
                        let t = x(s);
                        null != t && e.push(t)
                    }
                }), e.length > 0 && (i.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), i = i.concat(e))
            }
            return u(i).uniqBy(e => e.record.id).value()
        }() : e, Q) && (Q = e, ! function(e, t) {
            switch (k) {
                case o.AutocompleterResultTypes.USER: {
                    let t = C.default.getGuild(U.default.getGuildId());
                    e.unshift((0, o.createHeaderResult)(null != t ? v.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                        name: t.name
                    }) : v.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), G = e;
                    break
                }
                case o.AutocompleterResultTypes.TEXT_CHANNEL:
                    e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), G = e;
                    break;
                case o.AutocompleterResultTypes.VOICE_CHANNEL:
                    e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), G = e;
                    break;
                case o.AutocompleterResultTypes.GUILD:
                    e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), G = e;
                    break;
                case o.AutocompleterResultTypes.APPLICATION:
                    e.unshift((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), G = e;
                    break;
                default:
                    G = e
            }
            if (t !== w) w = t, P = Math.max(t.length, P), O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, G);
            else {
                let e = G[O];
                null != e && e.type === o.AutocompleterResultTypes.HEADER && (O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, O, G))
            }
            B.emitChange()
        }(e, t))
    }

    function K() {
        w = null, P = 0, Q = [], null != l && (l.destroy(), l = null)
    }
    class V extends n.default.PersistedStore {
        initialize(e) {
            var t;
            this.waitFor(g.default, C.default, R.default), this.syncWith([_.default], () => !0), H = r.Storage.get(D) || !1, F = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
        }
        getState() {
            return {
                channelHistory: F
            }
        }
        isOpen() {
            return null != l
        }
        getResultTotals(e) {
            return null == l ? 0 : null == e ? l.results.reduce((e, t) => t.type !== o.AutocompleterResultTypes.HEADER ? e + 1 : e, 0) : l.results.reduce((t, s) => s.type === e ? t + 1 : t, 0)
        }
        channelNoticePredicate(e, t) {
            let s = Date.now() - t >= L.CHANNEL_NOTICE_SHOW_DELAY;
            return b && s
        }
        getFrequentGuilds() {
            return null != l ? l.queryGuilds("", 100) : null
        }
        getFrequentGuildsLength() {
            return null != l ? l.queryGuilds("", 100).length : 0
        }
        getChannelHistory() {
            return F
        }
        getProps() {
            return {
                theme: _.default.theme,
                query: null != l ? l.query : "",
                queryMode: k,
                results: G,
                selectedIndex: O,
                seenTutorial: H,
                maxQueryLength: P
            }
        }
    }
    V.displayName = "QuickSwitcherStore", V.persistKey = "QuickSwitcherStore";
    let B = new V(a.default, {
        CONNECTION_OPEN: q,
        CONNECTION_OPEN_SUPPLEMENTAL: q,
        QUICKSWITCHER_SHOW: W,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: W,
        QUICKSWITCHER_HIDE: K,
        OVERLAY_SET_INPUT_LOCKED: K,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
        QUICKSWITCHER_SEARCH: function(e) {
            var t, s;
            let {
                query: i,
                queryMode: u
            } = e;
            if (null == l) return !1;
            let n = null !== (t = U.default.getGuildId()) && void 0 !== t ? t : null;
            if (k !== u) {
                l.setResultTypes(null != u ? [u] : M), l.setLimit(null != u ? 100 : 5);
                let e = null !== (s = U.default.getGuildId()) && void 0 !== s ? s : void 0;
                u === o.AutocompleterResultTypes.USER && null != e ? l.setOptions({
                    userFilters: {
                        guild: e,
                        friends: !0
                    }
                }, !0) : u === o.AutocompleterResultTypes.VOICE_CHANNEL ? l.setOptions({
                    voiceChannelGuildFilter: null
                }, !0) : l.setOptions({
                    userFilters: null,
                    voiceChannelGuildFilter: void 0
                }, !0)
            }
            k = u, l.search(i, k === o.AutocompleterResultTypes.USER ? n : void 0)
        },
        QUICKSWITCHER_SELECT: function(e) {
            O = e.selectedIndex
        },
        QUICKSWITCHER_SWITCH_TO: function() {
            if (H) return !1;
            H = !0, r.Storage.set(D, !0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) return !1;
            (F = F.filter(e => e !== t)).unshift(t), F.length > 4 && (F.length = 4)
        }
    });
    var Y = B
}