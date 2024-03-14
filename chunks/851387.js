function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        waitForGuild: function() {
            return k
        },
        default: function() {
            return V
        }
    }), n("70102"), n("860677");
    var i = n("759843"),
        s = n("316693"),
        r = n("872717"),
        a = n("913144"),
        o = n("333805"),
        l = n("81732"),
        u = n("248967"),
        d = n("21121"),
        c = n("693051"),
        f = n("153498"),
        _ = n("934306"),
        E = n("258158"),
        h = n("393414"),
        g = n("239380"),
        m = n("271938"),
        p = n("42203"),
        S = n("383173"),
        v = n("923959"),
        T = n("305961"),
        I = n("18494"),
        C = n("162771"),
        A = n("697218"),
        y = n("599110"),
        N = n("991170"),
        R = n("719923"),
        O = n("840707"),
        D = n("404118"),
        P = n("49111"),
        L = n("782340");
    let M = e => {
            D.default.show({
                title: L.default.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
                body: L.default.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
                    quantity: e
                })
            })
        },
        b = e => {
            a.default.dispatch({
                type: "GUILD_DELETE",
                guild: {
                    id: e
                }
            })
        },
        U = () => {
            D.default.show({
                title: L.default.Messages.SERVER_IS_CURRENTLY_FULL,
                body: L.default.Messages.PLEASE_TRY_AGAIN_LATER
            })
        };
    async function w(e) {
        var t, i, s, o, l;
        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                source: d,
                loadId: c,
                lurkLocation: f
            } = u,
            _ = null !== (t = u.lurker) && void 0 !== t && t,
            g = A.default.getCurrentUser();
        if (null !== (i = null == g ? void 0 : g.hasFlag(P.UserFlags.QUARANTINED)) && void 0 !== i && i) return (0, E.default)(), new Promise((e, t) => t(Error()));
        a.default.wait(() => a.default.dispatch({
            type: "GUILD_JOIN",
            guildId: e,
            lurker: _,
            source: d,
            loadId: c
        }));
        try {
            let t = C.default.getGuildId(),
                i = e === t && null != T.default.getGuild(e),
                s = i ? I.default.getChannelId(e) : null,
                o = await r.default.put({
                    url: P.Endpoints.GUILD_JOIN(e),
                    query: {
                        lurker: _,
                        session_id: _ ? m.default.getSessionId() : null,
                        recommendation_load_id: c,
                        location: _ && null != f ? f : null
                    },
                    context: {
                        source: d
                    },
                    oldFormErrors: !0,
                    body: {}
                });
            if (null != o.body.join_request && a.default.dispatch({
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: e,
                    request: o.body.join_request
                }), null == T.default.getGuild(e) && o.body.show_verification_form) return (0, h.transitionTo)(P.Routes.GUILD_MEMBER_VERIFICATION(e)), o;
            if (null != o.body.welcome_screen && a.default.dispatch({
                    type: "WELCOME_SCREEN_UPDATE",
                    guildId: o.body.id,
                    welcomeScreen: o.body.welcome_screen
                }), null != o.body.approximate_presence_count && a.default.dispatch({
                    type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                    guildId: o.body.id,
                    count: o.body.approximate_presence_count
                }), !_) {
                let {
                    default: t
                } = await n.el("937692").then(n.bind(n, "937692"));
                await t({
                    guildId: e,
                    returnChannelId: s
                })
            }
            return o
        } catch (t) {
            if ((null === (s = t.body) || void 0 === s ? void 0 : s.code) === P.AbortCodes.TOO_MANY_USER_GUILDS) {
                let e = A.default.getCurrentUser(),
                    t = R.default.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff());
                t ? M(P.MAX_USER_GUILDS_PREMIUM) : M(P.MAX_USER_GUILDS)
            }
            throw (null === (o = t.body) || void 0 === o ? void 0 : o.code) === P.AbortCodes.GUILD_AT_CAPACITY && U(), _ && (null === (l = t.body) || void 0 === l ? void 0 : l.code) === P.AbortCodes.UNKNOWN_GUILD && b(e), t
        }
    }

    function k(e) {
        return new Promise(t => T.default.addConditionalChangeListener(() => {
            let n = T.default.getGuild(e);
            return null == n || (t(n), !1)
        }))
    }
    var V = {
        joinGuild: w,
        waitForGuild: k,
        async transitionToGuildSync(e, t, n, i) {
            var s, r;
            let a = await k(e);
            let o = (s = a.id, null != (r = n) ? r : !(0, d.isInMainTabsExperiment)() || (0, _.isOnNewPanels)() ? (0, g.getChannelIdForGuildTransition)(s) : void 0),
                l = t;
            (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (l = {
                ...t,
                welcomeModalChannelId: o
            }), (0, h.transitionTo)(P.Routes.CHANNEL(e, o), l, void 0, i), await new Promise(setImmediate)
        },
        deleteGuild: b,
        selectGuild(e) {
            (0, u.stopLurking)(e)
        },
        createGuild(e) {
            a.default.dispatch({
                type: "GUILD_CREATE",
                guild: e
            })
        },
        setServerMute: (e, t, n) => r.default.patch({
            url: P.Endpoints.GUILD_MEMBER(e, t),
            body: {
                mute: n
            },
            oldFormErrors: !0
        }),
        setServerDeaf: (e, t, n) => r.default.patch({
            url: P.Endpoints.GUILD_MEMBER(e, t),
            body: {
                deaf: n
            },
            oldFormErrors: !0
        }),
        setChannel(e, t, n) {
            r.default.patch({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    channel_id: n
                },
                oldFormErrors: !0
            })
        },
        setMemberFlags(e, t, n) {
            r.default.patch({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    flags: n
                },
                oldFormErrors: !0
            })
        },
        kickUser: (e, t, n) => r.default.delete({
            url: P.Endpoints.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0
        }),
        setCommunicationDisabledUntil(e) {
            let {
                guildId: t,
                userId: n,
                communicationDisabledUntilTimestamp: s,
                duration: r,
                reason: a,
                location: o
            } = e;
            return O.default.patch({
                url: P.Endpoints.GUILD_MEMBER(t, n),
                reason: a,
                body: {
                    communication_disabled_until: s
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                    properties: {
                        guild_id: t,
                        target_user_id: n,
                        duration: null != r ? r : null,
                        reason: null != a ? a : null,
                        communication_disabled_until: s,
                        location: null != o ? o : null
                    }
                }
            })
        },
        banUser: (e, t, n, i) => r.default.put({
            url: P.Endpoints.GUILD_BAN(e, t),
            reason: i,
            body: {
                delete_message_seconds: n
            },
            oldFormErrors: !0
        }),
        unbanUser: (e, t) => r.default.delete({
            url: P.Endpoints.GUILD_BAN(e, t),
            oldFormErrors: !0
        }),
        banMultipleUsers: (e, t, n, i) => r.default.post({
            url: P.Endpoints.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: i,
            oldFormErrors: !0
        }),
        async createRole(e, t, n) {
            let i = {
                name: null != t && "" !== t ? t : L.default.Messages.NEW_ROLE,
                color: null != n ? n : 0,
                permissions: N.default.NONE
            };
            try {
                let t = await r.default.post({
                        url: P.Endpoints.GUILD_ROLES(e),
                        oldFormErrors: !0,
                        body: i
                    }),
                    n = t.body;
                return n.permissions = s.default.deserialize(n.permissions), a.default.dispatch({
                    type: "GUILD_SETTINGS_ROLE_SELECT",
                    roleId: t.body.id,
                    role: n
                }), l.default.checkGuildTemplateDirty(e), n
            } catch (e) {
                throw new o.default(e)
            }
        },
        async updateRole(e, t, n) {
            let {
                icon: i,
                unicodeEmoji: s,
                ...a
            } = n, o = null === i || (null == i ? void 0 : i.startsWith("data:")) ? i : void 0, u = await r.default.patch({
                url: P.Endpoints.GUILD_ROLE(e, t),
                body: {
                    ...a,
                    icon: o,
                    unicode_emoji: s
                },
                oldFormErrors: !0
            });
            return l.default.checkGuildTemplateDirty(e), u
        },
        updateRolePermissions: (e, t, n) => r.default.patch({
            url: P.Endpoints.GUILD_ROLE(e, t),
            body: {
                permissions: n
            },
            oldFormErrors: !0
        }),
        deleteRole(e, t) {
            r.default.delete({
                url: P.Endpoints.GUILD_ROLE(e, t),
                oldFormErrors: !0
            }).then(() => {
                l.default.checkGuildTemplateDirty(e)
            })
        },
        async batchChannelUpdate(e, t) {
            let n = await r.default.patch({
                url: P.Endpoints.GUILD_CHANNELS(e),
                body: t,
                oldFormErrors: !0
            });
            return l.default.checkGuildTemplateDirty(e), n
        },
        async batchRoleUpdate(e, t) {
            let n = await r.default.patch({
                url: P.Endpoints.GUILD_ROLES(e),
                body: t,
                oldFormErrors: !0
            });
            return l.default.checkGuildTemplateDirty(e), n
        },
        requestMembers(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            return a.default.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: Array.isArray(e) ? e : [e],
                query: t,
                limit: n,
                presences: i
            })
        },
        searchRecentMembers(e, t) {
            let {
                query: n,
                continuationToken: i
            } = null != t ? t : {};
            return a.default.dispatch({
                type: "GUILD_SEARCH_RECENT_MEMBERS",
                guildId: e,
                query: n,
                continuationToken: i
            })
        },
        requestMembersById(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return a.default.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: Array.isArray(e) ? e : [e],
                userIds: Array.isArray(t) ? t : [t],
                presences: n
            })
        },
        move(e, t, n, i) {
            a.default.dispatch({
                type: "GUILD_MOVE",
                fromIndex: e,
                toIndex: t,
                fromFolderIndex: n,
                toFolderIndex: i
            })
        },
        moveById(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            a.default.dispatch({
                type: "GUILD_MOVE_BY_ID",
                sourceId: e,
                targetId: t,
                moveToBelow: n,
                combine: i
            })
        },
        createGuildFolderLocal(e, t) {
            y.default.track(P.AnalyticEvents.GUILD_FOLDER_CREATED), a.default.dispatch({
                type: "GUILD_FOLDER_CREATE_LOCAL",
                sourceIds: e,
                name: t
            })
        },
        editGuildFolderLocal(e, t, n) {
            a.default.dispatch({
                type: "GUILD_FOLDER_EDIT_LOCAL",
                targetId: e,
                sourceIds: t,
                name: n
            })
        },
        deleteGuildFolderLocal(e) {
            a.default.dispatch({
                type: "GUILD_FOLDER_DELETE_LOCAL",
                targetId: e
            })
        },
        toggleGuildFolderExpand(e) {
            let t = S.default.isFolderExpanded(e);
            y.default.track(P.AnalyticEvents.GUILD_FOLDER_CLICKED, {
                source: "sidebar",
                action: t ? "collapsed" : "expanded"
            }), a.default.dispatch({
                type: "TOGGLE_GUILD_FOLDER_EXPAND",
                folderId: e
            })
        },
        setGuildFolderExpanded(e, t) {
            a.default.dispatch({
                type: "SET_GUILD_FOLDER_EXPANDED",
                folderId: e,
                expanded: t
            })
        },
        collapseAllFolders() {
            a.default.dispatch({
                type: "GUILD_FOLDER_COLLAPSE"
            })
        },
        nsfwAgree(e) {
            a.default.dispatch({
                type: "GUILD_NSFW_AGREE",
                guildId: e
            })
        },
        nsfwReturnToSafety(e) {
            if ((0, d.isInMainTabsExperiment)() && !(0, _.isOnNewPanels)()) {
                let e = (0, c.getRootNavigationRef)();
                if ((null == e ? void 0 : e.isReady()) !== !0) return;
                let t = (0, f.coerceModalRoute)(e.getCurrentRoute());
                for (null != t && e.goBack();;) {
                    let t = (0, f.coerceChannelRoute)(e.getCurrentRoute());
                    if (null == t) break;
                    let n = p.default.getChannel(t.params.channelId);
                    if (null == n || !n.isNSFW()) break;
                    e.goBack()
                }
                return
            }
            if (null == e) {
                (0, h.transitionTo)(P.Routes.FRIENDS);
                return
            }
            let t = v.default.getDefaultChannel(e);
            null == t || t.isNSFW() ? (0, h.transitionTo)(P.Routes.FRIENDS) : (0, h.transitionTo)(P.Routes.CHANNEL(e, t.id))
        },
        escapeToDefaultChannel(e) {
            let t = v.default.getDefaultChannel(e);
            null != t ? (0, h.transitionTo)(P.Routes.CHANNEL(e, t.id)) : (0, h.transitionTo)(P.Routes.FRIENDS)
        },
        async fetchApplications(e, t) {
            let n = {
                url: P.Endpoints.GUILD_APPLICATIONS(e),
                oldFormErrors: !0
            };
            null != t && (n.query = {
                channel_id: t
            });
            let i = await r.default.get(n),
                s = i.body;
            a.default.dispatch({
                type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                guildId: e,
                applications: s
            })
        },
        async fetchGuildBansBatch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = {
                    limit: t
                };
            null != n && (i.after = n), await r.default.get({
                url: P.Endpoints.GUILD_BANS(e),
                oldFormErrors: !0,
                query: i
            }).then(t => {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                    bans: t.body,
                    guildId: e
                })
            })
        },
        async searchGuildBans(e, t, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
                s = {
                    limit: i
                };
            null != n && n.length > 0 && (s.user_ids = n), null != t && t.trim().length > 0 && (s.query = t), await r.default.get({
                url: P.Endpoints.GUILD_BANS_SEARCH(e),
                oldFormErrors: !0,
                query: s
            }).then(t => {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                    bans: t.body,
                    guildId: e
                })
            })
        },
        async fetchGuildBans(e) {
            await r.default.get({
                url: P.Endpoints.GUILD_BANS(e),
                oldFormErrors: !0
            }).then(e => {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS",
                    bans: e.body
                })
            })
        },
        fetchGuildRoleConnectionsEligibility: (e, t) => r.default.get({
            url: P.Endpoints.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: n
            } = e;
            return a.default.dispatch({
                type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                roleId: t,
                roleConnectionEligibility: n
            }), n
        }),
        async assignGuildRoleConnection(e, t) {
            await r.default.post({
                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
                oldFormErrors: !0
            })
        },
        async unassignGuildRoleConnection(e, t) {
            await r.default.post({
                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
                oldFormErrors: !0
            })
        },
        async getGuildRoleConnectionsConfigurations(e) {
            let t = await r.default.get({
                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0
            });
            return t.body
        }
    }
}