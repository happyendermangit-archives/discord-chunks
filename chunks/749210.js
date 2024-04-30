function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        waitForGuild: function() {
            return w
        }
    }), n("411104"), n("177593");
    var i = n("990547"),
        r = n("149765"),
        s = n("544891"),
        a = n("570140"),
        o = n("34756"),
        l = n("408987"),
        u = n("280837"),
        d = n("57132"),
        _ = n("777639"),
        c = n("272423"),
        E = n("781157"),
        I = n("895886"),
        T = n("35225"),
        f = n("703656"),
        S = n("314897"),
        h = n("592125"),
        A = n("664915"),
        m = n("984933"),
        N = n("430824"),
        p = n("944486"),
        O = n("914010"),
        R = n("594174"),
        C = n("626135"),
        g = n("700785"),
        L = n("74538"),
        v = n("573261"),
        D = n("668781"),
        M = n("981631"),
        y = n("689938");
    let P = e => {
            D.default.show({
                title: y.default.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
                body: y.default.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
                    quantity: e
                })
            })
        },
        U = e => {
            a.default.dispatch({
                type: "GUILD_DELETE",
                guild: {
                    id: e
                }
            })
        },
        b = () => {
            D.default.show({
                title: y.default.Messages.SERVER_IS_CURRENTLY_FULL,
                body: y.default.Messages.PLEASE_TRY_AGAIN_LATER
            })
        };
    async function G(e) {
        var t, i, r, o, l;
        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                source: d,
                loadId: _,
                lurkLocation: c
            } = u,
            E = null !== (t = u.lurker) && void 0 !== t && t,
            T = R.default.getCurrentUser();
        if (null !== (i = null == T ? void 0 : T.hasFlag(M.UserFlags.QUARANTINED)) && void 0 !== i && i) return (0, I.default)(), new Promise((e, t) => t(Error()));
        a.default.wait(() => a.default.dispatch({
            type: "GUILD_JOIN",
            guildId: e,
            lurker: E,
            source: d,
            loadId: _
        }));
        try {
            let t = O.default.getGuildId(),
                i = e === t && null != N.default.getGuild(e) ? p.default.getChannelId(e) : null,
                r = await s.HTTP.put({
                    url: M.Endpoints.GUILD_JOIN(e),
                    query: {
                        lurker: E,
                        session_id: E ? S.default.getSessionId() : null,
                        recommendation_load_id: _,
                        location: E && null != c ? c : null
                    },
                    context: {
                        source: d
                    },
                    oldFormErrors: !0,
                    body: {}
                });
            if (null != r.body.join_request && a.default.dispatch({
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: e,
                    request: r.body.join_request
                }), null == N.default.getGuild(e) && r.body.show_verification_form) return (0, f.transitionTo)(M.Routes.GUILD_MEMBER_VERIFICATION(e)), r;
            if (null != r.body.welcome_screen && a.default.dispatch({
                    type: "WELCOME_SCREEN_UPDATE",
                    guildId: r.body.id,
                    welcomeScreen: r.body.welcome_screen
                }), null != r.body.approximate_presence_count && a.default.dispatch({
                    type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                    guildId: r.body.id,
                    count: r.body.approximate_presence_count
                }), !E) {
                let {
                    default: t
                } = await Promise.resolve().then(n.bind(n, "17181"));
                await t({
                    guildId: e,
                    returnChannelId: i
                })
            }
            return r
        } catch (t) {
            if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === M.AbortCodes.TOO_MANY_USER_GUILDS) {
                let e = R.default.getCurrentUser();
                L.default.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? P(M.MAX_USER_GUILDS_PREMIUM) : P(M.MAX_USER_GUILDS)
            }
            throw (null === (o = t.body) || void 0 === o ? void 0 : o.code) === M.AbortCodes.GUILD_AT_CAPACITY && b(), E && (null === (l = t.body) || void 0 === l ? void 0 : l.code) === M.AbortCodes.UNKNOWN_GUILD && U(e), t
        }
    }

    function w(e) {
        return new Promise(t => N.default.addConditionalChangeListener(() => {
            let n = N.default.getGuild(e);
            return null == n || (t(n), !1)
        }))
    }
    t.default = {
        joinGuild: G,
        waitForGuild: w,
        async transitionToGuildSync(e, t, n, i) {
            var r, s;
            let a = (r = (await w(e)).id, null != (s = n) ? s : !(0, d.isInMainTabsExperiment)() || (0, E.isOnNewPanels)() ? (0, T.getChannelIdForGuildTransition)(r) : void 0),
                o = t;
            (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (o = {
                ...t,
                welcomeModalChannelId: a
            }), (0, f.transitionTo)(M.Routes.CHANNEL(e, a), o, void 0, i), await new Promise(setImmediate)
        },
        deleteGuild: U,
        selectGuild(e) {
            (0, u.stopLurking)(e)
        },
        createGuild(e) {
            a.default.dispatch({
                type: "GUILD_CREATE",
                guild: e
            })
        },
        setServerMute: (e, t, n) => s.HTTP.patch({
            url: M.Endpoints.GUILD_MEMBER(e, t),
            body: {
                mute: n
            },
            oldFormErrors: !0
        }),
        setServerDeaf: (e, t, n) => s.HTTP.patch({
            url: M.Endpoints.GUILD_MEMBER(e, t),
            body: {
                deaf: n
            },
            oldFormErrors: !0
        }),
        setChannel(e, t, n) {
            s.HTTP.patch({
                url: M.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    channel_id: n
                },
                oldFormErrors: !0
            })
        },
        setMemberFlags(e, t, n) {
            s.HTTP.patch({
                url: M.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    flags: n
                },
                oldFormErrors: !0
            })
        },
        kickUser: (e, t, n) => s.HTTP.del({
            url: M.Endpoints.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0
        }),
        setCommunicationDisabledUntil(e) {
            let {
                guildId: t,
                userId: n,
                communicationDisabledUntilTimestamp: r,
                duration: s,
                reason: a,
                location: o
            } = e;
            return v.default.patch({
                url: M.Endpoints.GUILD_MEMBER(t, n),
                reason: a,
                body: {
                    communication_disabled_until: r
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                    properties: {
                        guild_id: t,
                        target_user_id: n,
                        duration: null != s ? s : null,
                        reason: null != a ? a : null,
                        communication_disabled_until: r,
                        location: null != o ? o : null
                    }
                }
            })
        },
        banUser: (e, t, n, i) => s.HTTP.put({
            url: M.Endpoints.GUILD_BAN(e, t),
            reason: i,
            body: {
                delete_message_seconds: n
            },
            oldFormErrors: !0
        }),
        unbanUser: (e, t) => s.HTTP.del({
            url: M.Endpoints.GUILD_BAN(e, t),
            oldFormErrors: !0
        }),
        banMultipleUsers: (e, t, n, i) => s.HTTP.post({
            url: M.Endpoints.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: i,
            oldFormErrors: !0
        }),
        async createRole(e, t, n) {
            let i = {
                name: null != t && "" !== t ? t : y.default.Messages.NEW_ROLE,
                color: null != n ? n : 0,
                permissions: g.NONE
            };
            try {
                let t = await s.HTTP.post({
                        url: M.Endpoints.GUILD_ROLES(e),
                        oldFormErrors: !0,
                        body: i
                    }),
                    n = t.body;
                return n.permissions = r.deserialize(n.permissions), a.default.dispatch({
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
                unicodeEmoji: r,
                ...a
            } = n, o = null === i || (null == i ? void 0 : i.startsWith("data:")) ? i : void 0, u = await s.HTTP.patch({
                url: M.Endpoints.GUILD_ROLE(e, t),
                body: {
                    ...a,
                    icon: o,
                    unicode_emoji: r
                },
                oldFormErrors: !0
            });
            return l.default.checkGuildTemplateDirty(e), u
        },
        updateRolePermissions: (e, t, n) => s.HTTP.patch({
            url: M.Endpoints.GUILD_ROLE(e, t),
            body: {
                permissions: n
            },
            oldFormErrors: !0
        }),
        deleteRole(e, t) {
            s.HTTP.del({
                url: M.Endpoints.GUILD_ROLE(e, t),
                oldFormErrors: !0
            }).then(() => {
                l.default.checkGuildTemplateDirty(e)
            })
        },
        async batchChannelUpdate(e, t) {
            let n = await s.HTTP.patch({
                url: M.Endpoints.GUILD_CHANNELS(e),
                body: t,
                oldFormErrors: !0
            });
            return l.default.checkGuildTemplateDirty(e), n
        },
        async batchRoleUpdate(e, t) {
            let n = await s.HTTP.patch({
                url: M.Endpoints.GUILD_ROLES(e),
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
            C.default.track(M.AnalyticEvents.GUILD_FOLDER_CREATED), a.default.dispatch({
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
            let t = A.default.isFolderExpanded(e);
            C.default.track(M.AnalyticEvents.GUILD_FOLDER_CLICKED, {
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
            if ((0, d.isInMainTabsExperiment)() && !(0, E.isOnNewPanels)()) {
                let e = (0, _.getRootNavigationRef)();
                if ((null == e ? void 0 : e.isReady()) !== !0) return;
                for (null != (0, c.coerceModalRoute)(e.getCurrentRoute()) && e.goBack();;) {
                    let t = (0, c.coerceChannelRoute)(e.getCurrentRoute());
                    if (null == t) break;
                    let n = h.default.getChannel(t.params.channelId);
                    if (null == n || !n.isNSFW()) break;
                    e.goBack()
                }
                return
            }
            if (null == e) {
                (0, f.transitionTo)(M.Routes.FRIENDS);
                return
            }
            let t = m.default.getDefaultChannel(e);
            null == t || t.isNSFW() ? (0, f.transitionTo)(M.Routes.FRIENDS) : (0, f.transitionTo)(M.Routes.CHANNEL(e, t.id))
        },
        escapeToDefaultChannel(e) {
            let t = m.default.getDefaultChannel(e);
            null != t ? (0, f.transitionTo)(M.Routes.CHANNEL(e, t.id)) : (0, f.transitionTo)(M.Routes.FRIENDS)
        },
        async fetchApplications(e, t) {
            let n = {
                url: M.Endpoints.GUILD_APPLICATIONS(e),
                oldFormErrors: !0
            };
            null != t && (n.query = {
                channel_id: t
            });
            let i = (await s.HTTP.get(n)).body;
            a.default.dispatch({
                type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                guildId: e,
                applications: i
            })
        },
        async fetchGuildBansBatch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = {
                    limit: t
                };
            null != n && (i.after = n), await s.HTTP.get({
                url: M.Endpoints.GUILD_BANS(e),
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
                r = {
                    limit: i
                };
            null != n && n.length > 0 && (r.user_ids = n), null != t && t.trim().length > 0 && (r.query = t), await s.HTTP.get({
                url: M.Endpoints.GUILD_BANS_SEARCH(e),
                oldFormErrors: !0,
                query: r
            }).then(t => {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                    bans: t.body,
                    guildId: e
                })
            })
        },
        async fetchGuildBans(e) {
            await s.HTTP.get({
                url: M.Endpoints.GUILD_BANS(e),
                oldFormErrors: !0
            }).then(e => {
                a.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS",
                    bans: e.body
                })
            })
        },
        fetchGuildRoleConnectionsEligibility: (e, t) => s.HTTP.get({
            url: M.Endpoints.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
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
            await s.HTTP.post({
                url: M.Endpoints.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
                oldFormErrors: !0
            })
        },
        async unassignGuildRoleConnection(e, t) {
            await s.HTTP.post({
                url: M.Endpoints.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
                oldFormErrors: !0
            })
        },
        getGuildRoleConnectionsConfigurations: async e => (await s.HTTP.get({
            url: M.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
            oldFormErrors: !0
        })).body
    }
}