function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        MESSAGE_REQUESTS_BASE_CHANNEL_ID: function() {
            return v
        },
        isViewChannelSidebar: function() {
            return D
        }
    });
    var r, o = n("56300"),
        i = n("898511"),
        a = n("629815"),
        u = n("75154"),
        s = n("120447"),
        l = n("523018"),
        c = n("935741"),
        f = n("29884"),
        d = n("529996"),
        _ = n("894288"),
        E = n("63116"),
        p = n("208454"),
        m = n("281767"),
        y = n("928204"),
        I = n("563090");

    function h(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function S(e, t) {
        return (S = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var v = "message_requests",
        g = !1,
        A = !1,
        b = !0,
        N = !1,
        R = {},
        C = {};

    function P(e) {
        if (null == e) return null;
        if ((0, y.isStaticChannelRoute)(e)) {
            var t = E.default.getGuildId();
            return null == t ? null : (0, y.buildGuildStaticChannelId)(e, t)
        }
        return e
    }

    function D(e) {
        return [u.SidebarType.VIEW_CHANNEL, u.SidebarType.VIEW_THREAD, u.SidebarType.VIEW_MESSAGE_REQUEST].includes(e.type)
    }

    function L(e) {
        var t = !1;
        N && (N = !1, t = !0);
        var n = P(_.default.getChannelId());
        return null != n && n in R && (delete R[n], t = !0), t && e ? e : !e
    }

    function M() {
        var e = !1;
        for (var t in R) {
            var n = R[t];
            if (n.type === u.SidebarType.VIEW_THREAD || n.type === u.SidebarType.VIEW_CHANNEL) {
                var r = c.default.getChannel(n.channelId);
                (null == r || !f.default.can(I.Permissions.VIEW_CHANNEL, r)) && (delete R[t], e = !0)
            }
        }
        return e
    }

    function U() {
        if (N === d.default.isActive()) return !1;
        N = d.default.isActive()
    }
    var w = function(e) {
        ! function(e, t) {
            if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && S(e, t)
        }(s, e);
        var t, n, r, o, i, a = (t = s, n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }(), function() {
            var e, r, o, i = T(t);
            if (n) {
                var a = T(this).constructor;
                o = Reflect.construct(i, arguments, a)
            } else o = i.apply(this, arguments);
            return e = this, (r = o) && ("object" === function(e) {
                return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            }(r) || "function" == typeof r) ? r : function(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e)
        });

        function s() {
            return ! function(e, t) {
                if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
            }(this, s), a.apply(this, arguments)
        }
        return r = s, o = [{
            key: "initialize",
            value: function(e) {
                if (null != e) {
                    var t, n, r, o, i;
                    g = null !== (t = e.isMembersOpen) && void 0 !== t && t, A = null !== (n = e.isSummariesOpen) && void 0 !== n && n, b = null === (r = e.isProfileOpen) || void 0 === r || r, R = null !== (o = e.sidebars) && void 0 !== o ? o : {}, C = null !== (i = e.guildSidebars) && void 0 !== i ? i : {}
                }
                this.syncWith([d.default], U), this.syncWith([f.default], M)
            }
        }, {
            key: "getState",
            value: function() {
                return {
                    isMembersOpen: g,
                    isSummariesOpen: A,
                    isProfileOpen: b,
                    sidebars: R,
                    guildSidebars: C
                }
            }
        }, {
            key: "getSection",
            value: function(e, t) {
                if (N) return m.ChannelSections.SEARCH;
                var n = P(e);
                return null != n && null != R[n] ? m.ChannelSections.SIDEBAR_CHAT : t && b ? m.ChannelSections.PROFILE : A ? m.ChannelSections.SUMMARIES : g ? m.ChannelSections.MEMBERS : m.ChannelSections.NONE
            }
        }, {
            key: "getSidebarState",
            value: function(e) {
                var t = P(e);
                return null == t ? void 0 : R[t]
            }
        }, {
            key: "getGuildSidebarState",
            value: function(e) {
                return null == e ? void 0 : C[e]
            }
        }, {
            key: "getCurrentSidebarChannelId",
            value: function(e) {
                var t = P(e);
                if (null == t || N) return null;
                var n = R[t];
                return null == n ? null : n.type === u.SidebarType.VIEW_THREAD || n.type === u.SidebarType.VIEW_CHANNEL ? n.channelId : null
            }
        }, {
            key: "getCurrentSidebarMessageId",
            value: function(e) {
                var t, n = P(e);
                if (null == n || N) return null;
                var r = R[n];
                return null == r ? null : r.type === u.SidebarType.VIEW_THREAD || r.type === u.SidebarType.VIEW_CHANNEL ? null === (t = r.details) || void 0 === t ? void 0 : t.initialMessageId : null
            }
        }], h(r.prototype, o), i && h(r, i), s
    }(i.default.PersistedStore);
    O(w, "displayName", "ChannelSectionStore"), O(w, "persistKey", "ChannelSectionStore2"), t.default = new w(a.default, {
        CHANNEL_TOGGLE_MEMBERS_SECTION: function() {
            A && (A = L(A)), g = L(g)
        },
        PROFILE_PANEL_TOGGLE_SECTION: function() {
            !b && s.ComponentDispatch.dispatch(m.ComponentActions.SEARCH_RESULTS_CLOSE), b = L(b)
        },
        CHANNEL_TOGGLE_SUMMARIES_SECTION: function() {
            g && (g = L(g)), A = L(A)
        },
        SIDEBAR_VIEW_CHANNEL: function(e) {
            var t = e.sidebarType,
                n = e.baseChannelId,
                r = e.channelId,
                o = e.details;
            N = !1;
            var i = P(n);
            return null != i && (R[i] = {
                type: t,
                channelId: r,
                details: o
            }, !0)
        },
        SIDEBAR_VIEW_GUILD: function(e) {
            var t = e.sidebarType,
                n = e.guildId,
                r = e.baseChannelId,
                o = e.details;
            N = !1;
            var i = P(r);
            return null != i && (C[n] = {
                type: t,
                baseChannelId: i,
                guildId: n,
                details: o
            }, !0)
        },
        SIDEBAR_CREATE_THREAD: function(e) {
            var t = e.parentChannelId,
                n = e.parentMessageId,
                r = e.location;
            N = !1;
            var o = P(t);
            null != o && (R[o] = {
                type: u.SidebarType.CREATE_THREAD,
                parentChannelId: t,
                parentMessageId: n,
                location: r
            })
        },
        SIDEBAR_CLOSE: function(e) {
            var t = P(e.baseChannelId);
            null != t && delete R[t]
        },
        SIDEBAR_CLOSE_GUILD: function(e) {
            var t = e.guildId;
            return null != C[t] && (delete C[t], !0)
        },
        CHANNEL_DELETE: function(e) {
            var t = e.channel;
            if (t.id in R) return delete R[t.id], !0;
            var n = !1;
            for (var r in R) {
                var o = R[r];
                null != o && o.type === u.SidebarType.VIEW_CHANNEL && o.channelId === t.id && (delete R[r], n = !0)
            }
            return n
        },
        CHANNEL_SELECT: function() {
            o.isMobile && g && (g = !1, A = !1)
        },
        THREAD_CREATE: function(e) {
            var t, n = e.channel;
            if (n.ownerId === (null === (t = p.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
            var r = R[n.parent_id];
            null != r && r.type === u.SidebarType.CREATE_THREAD && r.parentMessageId === l.default.castChannelIdAsMessageId(n.id) && (R[n.parent_id] = {
                type: u.SidebarType.VIEW_THREAD,
                channelId: n.id
            })
        },
        THREAD_DELETE: function(e) {
            var t = e.channel,
                n = R[t.parent_id];
            if (null == n || n.type !== u.SidebarType.VIEW_THREAD || n.channelId !== t.id) return !1;
            delete R[t.parent_id]
        }
    })
}