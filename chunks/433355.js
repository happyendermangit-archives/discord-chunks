function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
            return m
        },
        isViewChannelSidebar: function() {
            return D
        }
    });
    var i, r = n("873546"),
        s = n("442837"),
        a = n("570140"),
        o = n("897473"),
        l = n("585483"),
        u = n("709054"),
        d = n("592125"),
        _ = n("496675"),
        c = n("768119"),
        E = n("944486"),
        I = n("914010"),
        T = n("594174"),
        f = n("981631"),
        S = n("176505"),
        h = n("231338");

    function A(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    let m = "message_requests",
        N = !1,
        p = !1,
        O = !0,
        R = !1,
        C = {},
        g = {};

    function L(e) {
        if (null == e) return null;
        if ((0, S.isStaticChannelRoute)(e)) {
            let t = I.default.getGuildId();
            return null == t ? null : (0, S.buildGuildStaticChannelId)(e, t)
        }
        return e
    }

    function D(e) {
        return [o.SidebarType.VIEW_CHANNEL, o.SidebarType.VIEW_THREAD, o.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
    }

    function v(e) {
        let t = !1;
        R && (R = !1, t = !0);
        let n = L(E.default.getChannelId());
        return null != n && n in C && (delete C[n], t = !0), t && e ? e : !e
    }

    function M() {
        let e = !1;
        for (let t in C) {
            let n = C[t];
            if (n.type === o.SidebarType.VIEW_THREAD || n.type === o.SidebarType.VIEW_CHANNEL) {
                let i = d.default.getChannel(n.channelId);
                (null == i || !_.default.can(h.Permissions.VIEW_CHANNEL, i)) && (delete C[t], e = !0)
            }
        }
        return e
    }

    function y() {
        if (R === c.default.isActive()) return !1;
        R = c.default.isActive()
    }
    class P extends(i = s.default.PersistedStore) {
        initialize(e) {
            if (null != e) {
                var t, n, i, r, s;
                N = null !== (t = e.isMembersOpen) && void 0 !== t && t, p = null !== (n = e.isSummariesOpen) && void 0 !== n && n, O = null === (i = e.isProfileOpen) || void 0 === i || i, C = null !== (r = e.sidebars) && void 0 !== r ? r : {}, g = null !== (s = e.guildSidebars) && void 0 !== s ? s : {}
            }
            this.syncWith([c.default], y), this.syncWith([_.default], M)
        }
        getState() {
            return {
                isMembersOpen: N,
                isSummariesOpen: p,
                isProfileOpen: O,
                sidebars: C,
                guildSidebars: g
            }
        }
        getSection(e, t) {
            if (R) return f.ChannelSections.SEARCH;
            let n = L(e);
            return null != n && null != C[n] ? f.ChannelSections.SIDEBAR_CHAT : t && O ? f.ChannelSections.PROFILE : p ? f.ChannelSections.SUMMARIES : N ? f.ChannelSections.MEMBERS : f.ChannelSections.NONE
        }
        getSidebarState(e) {
            let t = L(e);
            return null == t ? void 0 : C[t]
        }
        getGuildSidebarState(e) {
            return null == e ? void 0 : g[e]
        }
        getCurrentSidebarChannelId(e) {
            let t = L(e);
            if (null == t || R) return null;
            let n = C[t];
            return null == n ? null : n.type === o.SidebarType.VIEW_THREAD || n.type === o.SidebarType.VIEW_CHANNEL ? n.channelId : null
        }
        getCurrentSidebarMessageId(e) {
            var t;
            let n = L(e);
            if (null == n || R) return null;
            let i = C[n];
            return null == i ? null : i.type === o.SidebarType.VIEW_THREAD || i.type === o.SidebarType.VIEW_CHANNEL ? null === (t = i.details) || void 0 === t ? void 0 : t.initialMessageId : null
        }
    }
    A(P, "displayName", "ChannelSectionStore"), A(P, "persistKey", "ChannelSectionStore2"), t.default = new P(a.default, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            p && (p = v(p)), N = v(N)
        },
        PROFILE_PANEL_TOGGLE_SECTION: function() {
            !O && l.ComponentDispatch.dispatch(f.ComponentActions.SEARCH_RESULTS_CLOSE), O = v(O)
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
            N && (N = v(N)), p = v(p)
        },
        SIDEBAR_VIEW_CHANNEL: function(e) {
            let {
                sidebarType: t,
                baseChannelId: n,
                channelId: i,
                details: r
            } = e;
            R = !1;
            let s = L(n);
            return null != s && (C[s] = {
                type: t,
                channelId: i,
                details: r
            }, !0)
        },
        SIDEBAR_VIEW_GUILD: function(e) {
            let {
                sidebarType: t,
                guildId: n,
                baseChannelId: i,
                details: r
            } = e;
            R = !1;
            let s = L(i);
            return null != s && (g[n] = {
                type: t,
                baseChannelId: s,
                guildId: n,
                details: r
            }, !0)
        },
        SIDEBAR_CREATE_THREAD: function(e) {
            let {
                parentChannelId: t,
                parentMessageId: n,
                location: i
            } = e;
            R = !1;
            let r = L(t);
            null != r && (C[r] = {
                type: o.SidebarType.CREATE_THREAD,
                parentChannelId: t,
                parentMessageId: n,
                location: i
            })
        },
        SIDEBAR_CLOSE: function(e) {
            let {
                baseChannelId: t
            } = e, n = L(t);
            null != n && delete C[n]
        },
        SIDEBAR_CLOSE_GUILD: function(e) {
            let {
                guildId: t
            } = e;
            return null != g[t] && (delete g[t], !0)
        },
        CHANNEL_DELETE: function(e) {
            let {
                channel: t
            } = e;
            if (t.id in C) return delete C[t.id], !0;
            let n = !1;
            for (let e in C) {
                let i = C[e];
                null != i && i.type === o.SidebarType.VIEW_CHANNEL && i.channelId === t.id && (delete C[e], n = !0)
            }
            return n
        },
        CHANNEL_SELECT: function() {
            r.isMobile && N && (N = !1, p = !1)
        },
        THREAD_CREATE: function(e) {
            var t;
            let {
                channel: n
            } = e;
            if (n.ownerId === (null === (t = T.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            let i = C[n.parent_id];
            null != i && i.type === o.SidebarType.CREATE_THREAD && i.parentMessageId === u.default.castChannelIdAsMessageId(n.id) && (C[n.parent_id] = {
                type: o.SidebarType.VIEW_THREAD,
                channelId: n.id
            })
        },
        THREAD_DELETE: function(e) {
            let {
                channel: t
            } = e, n = C[t.parent_id];
            if (null == n || n.type !== o.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete C[t.parent_id]
        }
    })
}