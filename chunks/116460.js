function(e, t, s) {
    "use strict";
    let l;
    s.r(t), s.d(t, {
        default: function() {
            return Y
        }
    }), s("424973"), s("222007"), s("843762"), s("808653");
    var u = s("917351"),
        i = s.n(u),
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
        C = s("26989"),
        g = s("305961"),
        T = s("957255"),
        m = s("660478"),
        A = s("18494"),
        U = s("162771"),
        I = s("282109"),
        S = s("25292"),
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
        P = null,
        Q = 0,
        w = [],
        q = [];

    function x() {
        b = g.default.getGuildCount() >= 3 || i.size(R.default.getMutablePrivateChannels()) >= 20, w = []
    }

    function W(e) {
        let t = (0, h.default)(e);
        return null == t || null != k && k !== t.type ? null : t
    }

    function F(e) {
        var t;
        let {
            query: s,
            queryMode: u
        } = e, i = (0, d.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = U.default.getGuildId()) && void 0 !== t ? t : void 0, n = new Set(["user:".concat(f.default.getId())]);
        null != i && n.add("guild:".concat(i)), l = null != l ? l : new o.default(z, M, null != u ? 100 : 5, {
            frecencyBoosters: !0,
            blacklist: n
        }), P = null, Q = s.length, k = u, l.search(s)
    }

    function z(e, t) {
        ! function(e, t) {
            if (e.length !== t.length) return !1;
            for (let s = 0; s < e.length; s++) {
                let l = e[s],
                    u = t[s];
                if (l.record.id !== u.record.id) return !1
            }
            return !0
        }(e = "" === (t = t.trim()).trim() ? function() {
            var e, t;
            let s = null !== (e = U.default.getGuildId()) && void 0 !== e ? e : void 0,
                l = null !== (t = A.default.getChannelId()) && void 0 !== t ? t : void 0;
            switch (k) {
                case o.AutocompleterResultTypes.USER: {
                    let e = f.default.getId();
                    return S.default.getRecentlyTalked(l, 100).filter(t => {
                        let {
                            record: s
                        } = t;
                        return s.id !== e
                    })
                }
                case o.AutocompleterResultTypes.APPLICATION:
                    return S.default.queryApplications({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case o.AutocompleterResultTypes.GUILD:
                    return S.default.queryGuilds({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case o.AutocompleterResultTypes.TEXT_CHANNEL:
                    return S.default.queryChannels({
                        query: "",
                        guildId: U.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0
                    });
                case o.AutocompleterResultTypes.VOICE_CHANNEL:
                    return S.default.queryChannels({
                        query: "",
                        guildId: U.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0,
                        filter: () => !0,
                        type: E.GUILD_VOCAL_CHANNELS_KEY
                    })
            }
            let u = [],
                n = [];
            for (let e = 1; e < q.length; e += 1) {
                let t = W(q[e]);
                if (null != t)(t.type !== o.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== o.AutocompleterResultTypes.VOICE_CHANNEL || T.default.can(L.Permissions.VIEW_CHANNEL, t.record)) && n.push(t)
            }
            n.length > 0 && u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...n);
            let r = function(e) {
                let t = [];
                return y.default.getRecentlyEditedDrafts(y.DraftType.ChannelMessage).forEach(s => {
                    let {
                        channelId: l
                    } = s;
                    if (e(l)) return;
                    let u = W(l);
                    null != u && t.push(u)
                }), t
            }(e => e === l || q.includes(e));
            r.length > 0 && u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_DRAFTS), ...r);
            let a = m.default.getMentionChannelIds().filter(e => e !== l && !q.includes(e)).map(e => W(e)).filter(N.isNotNullish).reverse();
            if (a.length > 0 && (u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_MENTIONS)), u = u.concat(a)), null != s) {
                let e = E.default.getSelectableChannelIds(s).filter(e => {
                    let t = R.default.getChannel(e);
                    return !(null == t || e === l || q.includes(e) || I.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && I.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, c.getHasImportantUnread)(t)
                }).map(e => W(e)).filter(e => e);
                Object.values(p.default.getActiveJoinedUnreadThreadsForGuild(s)).forEach(t => {
                    for (let s in t) {
                        let t = W(s);
                        null != t && e.push(t)
                    }
                }), e.length > 0 && (u.push((0, o.createHeaderResult)(v.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), u = u.concat(e))
            }
            return i(u).uniqBy(e => e.record.id).value()
        }() : e, w) && (w = e, ! function(e, t) {
            switch (k) {
                case o.AutocompleterResultTypes.USER: {
                    let t = g.default.getGuild(U.default.getGuildId());
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
            if (t !== P) P = t, Q = Math.max(t.length, Q), O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, -1, G);
            else {
                let e = G[O];
                null != e && e.type === o.AutocompleterResultTypes.HEADER && (O = (0, o.findNextSelectedResult)(o.FindResultDirections.DOWN, O, G))
            }
            B.emitChange()
        }(e, t))
    }

    function K() {
        P = null, Q = 0, w = [], null != l && (l.destroy(), l = null)
    }
    class V extends n.default.PersistedStore {
        initialize(e) {
            var t;
            this.waitFor(C.default, g.default, R.default), this.syncWith([_.default], () => !0), H = r.default.get(D) || !1, q = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
        }
        getState() {
            return {
                channelHistory: q
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
            return q
        }
        getProps() {
            return {
                theme: _.default.theme,
                query: null != l ? l.query : "",
                queryMode: k,
                results: G,
                selectedIndex: O,
                seenTutorial: H,
                maxQueryLength: Q
            }
        }
    }
    V.displayName = "QuickSwitcherStore", V.persistKey = "QuickSwitcherStore";
    let B = new V(a.default, {
        CONNECTION_OPEN: x,
        CONNECTION_OPEN_SUPPLEMENTAL: x,
        QUICKSWITCHER_SHOW: F,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: F,
        QUICKSWITCHER_HIDE: K,
        OVERLAY_SET_INPUT_LOCKED: K,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: K,
        QUICKSWITCHER_SEARCH: function(e) {
            var t, s;
            let {
                query: u,
                queryMode: i
            } = e;
            if (null == l) return !1;
            let n = null !== (t = U.default.getGuildId()) && void 0 !== t ? t : null;
            if (k !== i) {
                l.setResultTypes(null != i ? [i] : M), l.setLimit(null != i ? 100 : 5);
                let e = null !== (s = U.default.getGuildId()) && void 0 !== s ? s : void 0;
                i === o.AutocompleterResultTypes.USER && null != e ? l.setOptions({
                    userFilters: {
                        guild: e,
                        friends: !0
                    }
                }, !0) : i === o.AutocompleterResultTypes.VOICE_CHANNEL ? l.setOptions({
                    voiceChannelGuildFilter: null
                }, !0) : l.setOptions({
                    userFilters: null,
                    voiceChannelGuildFilter: void 0
                }, !0)
            }
            k = i, l.search(u, k === o.AutocompleterResultTypes.USER ? n : void 0)
        },
        QUICKSWITCHER_SELECT: function(e) {
            O = e.selectedIndex
        },
        QUICKSWITCHER_SWITCH_TO: function() {
            if (H) return !1;
            H = !0, r.default.set(D, !0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) return !1;
            (q = q.filter(e => e !== t)).unshift(t), q.length > 4 && (q.length = 4)
        }
    });
    var Y = B
}