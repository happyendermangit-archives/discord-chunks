function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
            return p
        },
        isViewChannelSidebar: function() {
            return N
        },
        default: function() {
            return M
        }
    });
    var i = n("394846"),
        s = n("446674"),
        r = n("913144"),
        a = n("582713"),
        o = n("659500"),
        l = n("299039"),
        u = n("42203"),
        d = n("957255"),
        c = n("744983"),
        f = n("18494"),
        _ = n("162771"),
        h = n("697218"),
        E = n("49111"),
        g = n("724210"),
        m = n("843455");
    let p = "message_requests",
        S = !1,
        v = !1,
        T = !0,
        I = !1,
        C = {},
        A = {};

    function y(e) {
        if (null == e) return null;
        if ((0, g.isStaticChannelRoute)(e)) {
            let t = _.default.getGuildId();
            return null == t ? null : (0, g.buildGuildStaticChannelId)(e, t)
        }
        return e
    }

    function N(e) {
        return [a.SidebarType.VIEW_CHANNEL, a.SidebarType.VIEW_THREAD, a.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
    }

    function R(e) {
        let t = !1;
        I && (I = !1, t = !0);
        let n = y(f.default.getChannelId());
        return null != n && n in C && (delete C[n], t = !0), t && e ? e : !e
    }

    function O() {
        let e = !1;
        for (let t in C) {
            let n = C[t];
            if (n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL) {
                let i = u.default.getChannel(n.channelId);
                (null == i || !d.default.can(m.Permissions.VIEW_CHANNEL, i)) && (delete C[t], e = !0)
            }
        }
        return e
    }

    function D() {
        if (I === c.default.isActive()) return !1;
        I = c.default.isActive()
    }
    class P extends s.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                var t, n, i, s, r;
                S = null !== (t = e.isMembersOpen) && void 0 !== t && t, v = null !== (n = e.isSummariesOpen) && void 0 !== n && n, T = null === (i = e.isProfileOpen) || void 0 === i || i, C = null !== (s = e.sidebars) && void 0 !== s ? s : {}, A = null !== (r = e.guildSidebars) && void 0 !== r ? r : {}
            }
            this.syncWith([c.default], D), this.syncWith([d.default], O)
        }
        getState() {
            return {
                isMembersOpen: S,
                isSummariesOpen: v,
                isProfileOpen: T,
                sidebars: C,
                guildSidebars: A
            }
        }
        getSection(e, t) {
            if (I) return E.ChannelSections.SEARCH;
            let n = y(e);
            return null != n && null != C[n] ? E.ChannelSections.SIDEBAR_CHAT : t && T ? E.ChannelSections.PROFILE : v ? E.ChannelSections.SUMMARIES : S ? E.ChannelSections.MEMBERS : E.ChannelSections.NONE
        }
        getSidebarState(e) {
            let t = y(e);
            return null == t ? void 0 : C[t]
        }
        getGuildSidebarState(e) {
            return null == e ? void 0 : A[e]
        }
        getCurrentSidebarChannelId(e) {
            let t = y(e);
            if (null == t || I) return null;
            let n = C[t];
            return null == n ? null : n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL ? n.channelId : null
        }
        getCurrentSidebarMessageId(e) {
            var t;
            let n = y(e);
            if (null == n || I) return null;
            let i = C[n];
            return null == i ? null : i.type === a.SidebarType.VIEW_THREAD || i.type === a.SidebarType.VIEW_CHANNEL ? null === (t = i.details) || void 0 === t ? void 0 : t.initialMessageId : null
        }
    }
    P.displayName = "ChannelSectionStore", P.persistKey = "ChannelSectionStore2";
    var M = new P(r.default, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            v && (v = R(v)), S = R(S)
        },
        PROFILE_PANEL_TOGGLE_SECTION: function() {
            !T && o.ComponentDispatch.dispatch(E.ComponentActions.SEARCH_RESULTS_CLOSE), T = R(T)
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
            S && (S = R(S)), v = R(v)
        },
        SIDEBAR_VIEW_CHANNEL: function(e) {
            let {
                sidebarType: t,
                baseChannelId: n,
                channelId: i,
                details: s
            } = e;
            I = !1;
            let r = y(n);
            return null != r && (C[r] = {
                type: t,
                channelId: i,
                details: s
            }, !0)
        },
        SIDEBAR_VIEW_GUILD: function(e) {
            let {
                sidebarType: t,
                guildId: n,
                baseChannelId: i,
                details: s
            } = e;
            I = !1;
            let r = y(i);
            return null != r && (A[n] = {
                type: t,
                baseChannelId: r,
                guildId: n,
                details: s
            }, !0)
        },
        SIDEBAR_CREATE_THREAD: function(e) {
            let {
                parentChannelId: t,
                parentMessageId: n,
                location: i
            } = e;
            I = !1;
            let s = y(t);
            null != s && (C[s] = {
                type: a.SidebarType.CREATE_THREAD,
                parentChannelId: t,
                parentMessageId: n,
                location: i
            })
        },
        SIDEBAR_CLOSE: function(e) {
            let {
                baseChannelId: t
            } = e, n = y(t);
            null != n && delete C[n]
        },
        SIDEBAR_CLOSE_GUILD: function(e) {
            let {
                guildId: t
            } = e;
            return null != A[t] && (delete A[t], !0)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (t.id in C) return delete C[t.id], !0;
            let n = !1;
            for (let e in C) {
                let i = C[e];
                null != i && i.type === a.SidebarType.VIEW_CHANNEL && i.channelId === t.id && (delete C[e], n = !0)
            }
            return n
        },
        CHANNEL_SELECT: function() {
            i.isMobile && S && (S = !1, v = !1)
        },
        THREAD_CREATE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            if (n.ownerId === (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            let i = C[n.parent_id];
            null != i && i.type === a.SidebarType.CREATE_THREAD && i.parentMessageId === l.default.castChannelIdAsMessageId(n.id) && (C[n.parent_id] = {
                type: a.SidebarType.VIEW_THREAD,
                channelId: n.id
            })
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e, n = C[t.parent_id];
            if (null == n || n.type !== a.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete C[t.parent_id]
        }
    })
}