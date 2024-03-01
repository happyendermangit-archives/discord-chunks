function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
            return E
        },
        isViewChannelSidebar: function() {
            return D
        },
        default: function() {
            return V
        }
    });
    var s = n("394846"),
        i = n("446674"),
        r = n("913144"),
        a = n("582713"),
        o = n("659500"),
        d = n("299039"),
        u = n("42203"),
        l = n("957255"),
        f = n("744983"),
        _ = n("18494"),
        c = n("162771"),
        g = n("697218"),
        m = n("49111"),
        h = n("724210"),
        v = n("843455");
    let E = "message_requests",
        p = !1,
        y = !1,
        T = !0,
        C = !1,
        I = {},
        S = {};

    function A(e) {
        if (null == e) return null;
        if ((0, h.isStaticChannelRoute)(e)) {
            let t = c.default.getGuildId();
            return null == t ? null : (0, h.buildGuildStaticChannelId)(e, t)
        }
        return e
    }

    function D(e) {
        return [a.SidebarType.VIEW_CHANNEL, a.SidebarType.VIEW_THREAD, a.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
    }

    function N(e) {
        let t = !1;
        C && (C = !1, t = !0);
        let n = A(_.default.getChannelId());
        return null != n && n in I && (delete I[n], t = !0), t && e ? e : !e
    }

    function O() {
        let e = !1;
        for (let t in I) {
            let n = I[t];
            if (n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL) {
                let s = u.default.getChannel(n.channelId);
                (null == s || !l.default.can(v.Permissions.VIEW_CHANNEL, s)) && (delete I[t], e = !0)
            }
        }
        return e
    }

    function P() {
        if (C === f.default.isActive()) return !1;
        C = f.default.isActive()
    }
    class b extends i.default.PersistedStore {
        initialize(e) {
            if (null != e) {
                var t, n, s, i, r;
                p = null !== (t = e.isMembersOpen) && void 0 !== t && t, y = null !== (n = e.isSummariesOpen) && void 0 !== n && n, T = null === (s = e.isProfileOpen) || void 0 === s || s, I = null !== (i = e.sidebars) && void 0 !== i ? i : {}, S = null !== (r = e.guildSidebars) && void 0 !== r ? r : {}
            }
            this.syncWith([f.default], P), this.syncWith([l.default], O)
        }
        getState() {
            return {
                isMembersOpen: p,
                isSummariesOpen: y,
                isProfileOpen: T,
                sidebars: I,
                guildSidebars: S
            }
        }
        getSection(e, t) {
            if (C) return m.ChannelSections.SEARCH;
            let n = A(e);
            return null != n && null != I[n] ? m.ChannelSections.SIDEBAR_CHAT : t && T ? m.ChannelSections.PROFILE : y ? m.ChannelSections.SUMMARIES : p ? m.ChannelSections.MEMBERS : m.ChannelSections.NONE
        }
        getSidebarState(e) {
            let t = A(e);
            return null == t ? void 0 : I[t]
        }
        getGuildSidebarState(e) {
            return null == e ? void 0 : S[e]
        }
        getCurrentSidebarChannelId(e) {
            let t = A(e);
            if (null == t || C) return null;
            let n = I[t];
            return null == n ? null : n.type === a.SidebarType.VIEW_THREAD || n.type === a.SidebarType.VIEW_CHANNEL ? n.channelId : null
        }
        getCurrentSidebarMessageId(e) {
            var t;
            let n = A(e);
            if (null == n || C) return null;
            let s = I[n];
            return null == s ? null : s.type === a.SidebarType.VIEW_THREAD || s.type === a.SidebarType.VIEW_CHANNEL ? null === (t = s.details) || void 0 === t ? void 0 : t.initialMessageId : null
        }
    }
    b.displayName = "ChannelSectionStore", b.persistKey = "ChannelSectionStore2";
    var V = new b(r.default, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            y && (y = N(y)), p = N(p)
        },
        PROFILE_PANEL_TOGGLE_SECTION: function() {
            !T && o.ComponentDispatch.dispatch(m.ComponentActions.SEARCH_RESULTS_CLOSE), T = N(T)
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
            p && (p = N(p)), y = N(y)
        },
        SIDEBAR_VIEW_CHANNEL: function(e) {
            let {
                sidebarType: t,
                baseChannelId: n,
                channelId: s,
                details: i
            } = e;
            C = !1;
            let r = A(n);
            return null != r && (I[r] = {
                type: t,
                channelId: s,
                details: i
            }, !0)
        },
        SIDEBAR_VIEW_GUILD: function(e) {
            let {
                sidebarType: t,
                guildId: n,
                baseChannelId: s,
                details: i
            } = e;
            C = !1;
            let r = A(s);
            return null != r && (S[n] = {
                type: t,
                baseChannelId: r,
                guildId: n,
                details: i
            }, !0)
        },
        SIDEBAR_CREATE_THREAD: function(e) {
            let {
                parentChannelId: t,
                parentMessageId: n,
                location: s
            } = e;
            C = !1;
            let i = A(t);
            null != i && (I[i] = {
                type: a.SidebarType.CREATE_THREAD,
                parentChannelId: t,
                parentMessageId: n,
                location: s
            })
        },
        SIDEBAR_CLOSE: function(e) {
            let {
                baseChannelId: t
            } = e, n = A(t);
            null != n && delete I[n]
        },
        SIDEBAR_CLOSE_GUILD: function(e) {
            let {
                guildId: t
            } = e;
            return null != S[t] && (delete S[t], !0)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (t.id in I) return delete I[t.id], !0;
            let n = !1;
            for (let e in I) {
                let s = I[e];
                null != s && s.type === a.SidebarType.VIEW_CHANNEL && s.channelId === t.id && (delete I[e], n = !0)
            }
            return n
        },
        CHANNEL_SELECT: function() {
            s.isMobile && p && (p = !1, y = !1)
        },
        THREAD_CREATE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            if (n.ownerId === (null === (t = g.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            let s = I[n.parent_id];
            null != s && s.type === a.SidebarType.CREATE_THREAD && s.parentMessageId === d.default.castChannelIdAsMessageId(n.id) && (I[n.parent_id] = {
                type: a.SidebarType.VIEW_THREAD,
                channelId: n.id
            })
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e, n = I[t.parent_id];
            if (null == n || n.type !== a.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete I[t.parent_id]
        }
    })
}