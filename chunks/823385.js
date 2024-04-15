function(e, t, n) {
    "use strict";
    let i;
    n.r(t), n("653041"), n("47120"), n("733860"), n("724458");
    var r, s = n("392711"),
        a = n.n(s),
        o = n("442837"),
        l = n("433517"),
        u = n("570140"),
        d = n("212819"),
        _ = n("938078"),
        c = n("781157"),
        E = n("220444"),
        I = n("601070"),
        T = n("210887"),
        f = n("314897"),
        S = n("592125"),
        A = n("703558"),
        h = n("984933"),
        m = n("271383"),
        N = n("430824"),
        O = n("496675"),
        p = n("306680"),
        R = n("944486"),
        C = n("914010"),
        g = n("9156"),
        L = n("483360"),
        D = n("823379"),
        v = n("981631"),
        M = n("689938");

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let P = "seenQSTutorial",
        U = [d.AutocompleterResultTypes.USER, d.AutocompleterResultTypes.GROUP_DM, d.AutocompleterResultTypes.TEXT_CHANNEL, d.AutocompleterResultTypes.GUILD, d.AutocompleterResultTypes.APPLICATION, d.AutocompleterResultTypes.LINK],
        b = 0,
        G = !1,
        w = !1,
        B = null,
        k = [],
        F = null,
        V = 0,
        x = [],
        H = [];

    function Y() {
        w = N.default.getGuildCount() >= 3 || a().size(S.default.getMutablePrivateChannels()) >= 20, x = []
    }

    function j(e) {
        let t = (0, _.default)(e);
        return null == t || null != B && B !== t.type ? null : t
    }

    function W(e) {
        var t;
        let {
            query: n,
            queryMode: r
        } = e, s = (0, c.isSplitMessagesTabAndOnMessagesTab)() ? void 0 : null !== (t = C.default.getGuildId()) && void 0 !== t ? t : void 0, a = new Set(["user:".concat(f.default.getId())]);
        null != s && a.add("guild:".concat(s)), i = null != i ? i : new d.default(K, U, null != r ? 100 : 5, {
            frecencyBoosters: !0,
            blacklist: a
        }), F = null, V = n.length, B = r, i.search(n)
    }

    function K(e, t) {
        ! function(e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; n++) {
                let i = e[n],
                    r = t[n];
                if (i.record.id !== r.record.id) return !1
            }
            return !0
        }(e = "" === (t = t.trim()).trim() ? function() {
            var e, t;
            let n = null !== (e = C.default.getGuildId()) && void 0 !== e ? e : void 0,
                i = null !== (t = R.default.getChannelId()) && void 0 !== t ? t : void 0;
            switch (B) {
                case d.AutocompleterResultTypes.USER: {
                    let e = f.default.getId();
                    return L.default.getRecentlyTalked(i, 100).filter(t => {
                        let {
                            record: n
                        } = t;
                        return n.id !== e
                    })
                }
                case d.AutocompleterResultTypes.APPLICATION:
                    return L.default.queryApplications({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case d.AutocompleterResultTypes.GUILD:
                    return L.default.queryGuilds({
                        query: "",
                        limit: 100,
                        fuzzy: !0
                    });
                case d.AutocompleterResultTypes.TEXT_CHANNEL:
                    return L.default.queryChannels({
                        query: "",
                        guildId: C.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0
                    });
                case d.AutocompleterResultTypes.VOICE_CHANNEL:
                    return L.default.queryChannels({
                        query: "",
                        guildId: C.default.getGuildId(),
                        limit: 100,
                        fuzzy: !0,
                        filter: () => !0,
                        type: h.GUILD_VOCAL_CHANNELS_KEY
                    })
            }
            let r = [],
                s = [];
            for (let e = 1; e < H.length; e += 1) {
                let t = j(H[e]);
                if (null != t)(t.type !== d.AutocompleterResultTypes.TEXT_CHANNEL && t.type !== d.AutocompleterResultTypes.VOICE_CHANNEL || O.default.can(v.Permissions.VIEW_CHANNEL, t.record)) && s.push(t)
            }
            s.length > 0 && r.push((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_LAST_CHANNEL), ...s);
            let o = function(e) {
                let t = [];
                return A.default.getRecentlyEditedDrafts(A.DraftType.ChannelMessage).forEach(n => {
                    let {
                        channelId: i
                    } = n;
                    if (e(i)) return;
                    let r = j(i);
                    null != r && t.push(r)
                }), t
            }(e => e === i || H.includes(e));
            o.length > 0 && r.push((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_DRAFTS), ...o);
            let l = p.default.getMentionChannelIds().filter(e => e !== i && !H.includes(e)).map(e => j(e)).filter(D.isNotNullish).reverse();
            if (l.length > 0 && (r.push((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_MENTIONS)), r = r.concat(l)), null != n) {
                let e = h.default.getSelectableChannelIds(n).filter(e => {
                    let t = S.default.getChannel(e);
                    return !(null == t || e === i || H.includes(e) || g.default.isChannelMuted(t.guild_id, e) || null != t.parent_id && g.default.isChannelMuted(t.guild_id, t.parent_id)) && (0, E.getHasImportantUnread)(t)
                }).map(e => j(e)).filter(e => e);
                Object.values(I.default.getActiveJoinedUnreadThreadsForGuild(n)).forEach(t => {
                    for (let n in t) {
                        let t = j(n);
                        null != t && e.push(t)
                    }
                }), e.length > 0 && (r.push((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_UNREAD_CHANNELS)), r = r.concat(e))
            }
            return a()(r).uniqBy(e => e.record.id).value()
        }() : e, x) && (x = e, ! function(e, t) {
            switch (B) {
                case d.AutocompleterResultTypes.USER: {
                    let t = N.default.getGuild(C.default.getGuildId());
                    e.unshift((0, d.createHeaderResult)(null != t ? M.default.Messages.QUICKSWITCHER_QUERYMODE_USERS_IN_GUILD.format({
                        name: t.name
                    }) : M.default.Messages.QUICKSWITCHER_QUERYMODE_USERS)), k = e;
                    break
                }
                case d.AutocompleterResultTypes.TEXT_CHANNEL:
                    e.unshift((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_TEXT_CHANNELS)), k = e;
                    break;
                case d.AutocompleterResultTypes.VOICE_CHANNEL:
                    e.unshift((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_VOICE_CHANNELS)), k = e;
                    break;
                case d.AutocompleterResultTypes.GUILD:
                    e.unshift((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_GUILDS)), k = e;
                    break;
                case d.AutocompleterResultTypes.APPLICATION:
                    e.unshift((0, d.createHeaderResult)(M.default.Messages.QUICKSWITCHER_QUERYMODE_APPLICATIONS)), k = e;
                    break;
                default:
                    k = e
            }
            if (t !== F) F = t, V = Math.max(t.length, V), b = (0, d.findNextSelectedResult)(d.FindResultDirections.DOWN, -1, k);
            else {
                let e = k[b];
                null != e && e.type === d.AutocompleterResultTypes.HEADER && (b = (0, d.findNextSelectedResult)(d.FindResultDirections.DOWN, b, k))
            }
            Q.emitChange()
        }(e, t))
    }

    function z() {
        F = null, V = 0, x = [], null != i && (i.destroy(), i = null)
    }
    class X extends(r = o.default.PersistedStore) {
        initialize(e) {
            var t;
            this.waitFor(m.default, N.default, S.default), this.syncWith([T.default], () => !0), G = l.Storage.get(P) || !1, H = null !== (t = null == e ? void 0 : e.channelHistory) && void 0 !== t ? t : []
        }
        getState() {
            return {
                channelHistory: H
            }
        }
        isOpen() {
            return null != i
        }
        getResultTotals(e) {
            return null == i ? 0 : null == e ? i.results.reduce((e, t) => t.type !== d.AutocompleterResultTypes.HEADER ? e + 1 : e, 0) : i.results.reduce((t, n) => n.type === e ? t + 1 : t, 0)
        }
        channelNoticePredicate(e, t) {
            let n = Date.now() - t >= v.CHANNEL_NOTICE_SHOW_DELAY;
            return w && n
        }
        getFrequentGuilds() {
            return null != i ? i.queryGuilds("", 100) : null
        }
        getFrequentGuildsLength() {
            return null != i ? i.queryGuilds("", 100).length : 0
        }
        getChannelHistory() {
            return H
        }
        getProps() {
            return {
                theme: T.default.theme,
                query: null != i ? i.query : "",
                queryMode: B,
                results: k,
                selectedIndex: b,
                seenTutorial: G,
                maxQueryLength: V
            }
        }
    }
    y(X, "displayName", "QuickSwitcherStore"), y(X, "persistKey", "QuickSwitcherStore");
    let Q = new X(u.default, {
        CONNECTION_OPEN: Y,
        CONNECTION_OPEN_SUPPLEMENTAL: Y,
        QUICKSWITCHER_SHOW: W,
        SHOW_ACTION_SHEET_QUICK_SWITCHER: W,
        QUICKSWITCHER_HIDE: z,
        OVERLAY_SET_INPUT_LOCKED: z,
        HIDE_ACTION_SHEET_QUICK_SWITCHER: z,
        QUICKSWITCHER_SEARCH: function(e) {
            var t, n;
            let {
                query: r,
                queryMode: s
            } = e;
            if (null == i) return !1;
            let a = null !== (t = C.default.getGuildId()) && void 0 !== t ? t : null;
            if (B !== s) {
                i.setResultTypes(null != s ? [s] : U), i.setLimit(null != s ? 100 : 5);
                let e = null !== (n = C.default.getGuildId()) && void 0 !== n ? n : void 0;
                s === d.AutocompleterResultTypes.USER && null != e ? i.setOptions({
                    userFilters: {
                        guild: e,
                        friends: !0
                    }
                }, !0) : s === d.AutocompleterResultTypes.VOICE_CHANNEL ? i.setOptions({
                    voiceChannelGuildFilter: null
                }, !0) : i.setOptions({
                    userFilters: null,
                    voiceChannelGuildFilter: void 0
                }, !0)
            }
            B = s, i.search(r, B === d.AutocompleterResultTypes.USER ? a : void 0)
        },
        QUICKSWITCHER_SELECT: function(e) {
            b = e.selectedIndex
        },
        QUICKSWITCHER_SWITCH_TO: function() {
            if (G) return !1;
            G = !0, l.Storage.set(P, !0)
        },
        CHANNEL_SELECT: function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) return !1;
            (H = H.filter(e => e !== t)).unshift(t), H.length > 4 && (H.length = 4)
        }
    });
    t.default = Q
}