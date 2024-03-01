function(e, t, l) {
    "use strict";
    l.r(t), l.d(t, {
        waitForGuild: function() {
            return P
        },
        default: function() {
            return w
        }
    }), l("70102"), l("860677");
    var n = l("759843"),
        r = l("316693"),
        d = l("872717"),
        o = l("913144"),
        a = l("333805"),
        u = l("81732"),
        i = l("248967"),
        s = l("21121"),
        E = l("693051"),
        c = l("153498"),
        _ = l("934306"),
        p = l("258158"),
        f = l("393414"),
        L = l("239380"),
        I = l("271938"),
        T = l("42203"),
        D = l("383173"),
        G = l("923959"),
        U = l("305961"),
        h = l("18494"),
        y = l("162771"),
        S = l("697218"),
        A = l("599110"),
        R = l("991170"),
        C = l("719923"),
        m = l("840707"),
        g = l("404118"),
        O = l("49111"),
        N = l("782340");
    let M = e => {
            g.default.show({
                title: N.default.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
                body: N.default.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
                    quantity: e
                })
            })
        },
        F = e => {
            o.default.dispatch({
                type: "GUILD_DELETE",
                guild: {
                    id: e
                }
            })
        },
        b = () => {
            g.default.show({
                title: N.default.Messages.SERVER_IS_CURRENTLY_FULL,
                body: N.default.Messages.PLEASE_TRY_AGAIN_LATER
            })
        };
    async function v(e) {
        var t, n, r, a, u;
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            {
                source: s,
                loadId: E,
                lurkLocation: c
            } = i,
            _ = null !== (t = i.lurker) && void 0 !== t && t,
            L = S.default.getCurrentUser();
        if (null !== (n = null == L ? void 0 : L.hasFlag(O.UserFlags.QUARANTINED)) && void 0 !== n && n) return (0, p.default)(), new Promise((e, t) => t(Error()));
        o.default.wait(() => o.default.dispatch({
            type: "GUILD_JOIN",
            guildId: e,
            lurker: _,
            source: s,
            loadId: E
        }));
        try {
            let t = y.default.getGuildId(),
                n = e === t && null != U.default.getGuild(e),
                r = n ? h.default.getChannelId(e) : null,
                a = await d.default.put({
                    url: O.Endpoints.GUILD_JOIN(e),
                    query: {
                        lurker: _,
                        session_id: _ ? I.default.getSessionId() : null,
                        recommendation_load_id: E,
                        location: _ && null != c ? c : null
                    },
                    context: {
                        source: s
                    },
                    oldFormErrors: !0,
                    body: {}
                });
            if (null != a.body.join_request && o.default.dispatch({
                    type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                    guildId: e,
                    request: a.body.join_request
                }), null == U.default.getGuild(e) && a.body.show_verification_form) return (0, f.transitionTo)(O.Routes.GUILD_MEMBER_VERIFICATION(e)), a;
            if (null != a.body.welcome_screen && o.default.dispatch({
                    type: "WELCOME_SCREEN_UPDATE",
                    guildId: a.body.id,
                    welcomeScreen: a.body.welcome_screen
                }), null != a.body.approximate_presence_count && o.default.dispatch({
                    type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                    guildId: a.body.id,
                    count: a.body.approximate_presence_count
                }), !_) {
                let {
                    default: t
                } = await l.el("937692").then(l.bind(l, "937692"));
                await t({
                    guildId: e,
                    returnChannelId: r
                })
            }
            return a
        } catch (t) {
            if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === O.AbortCodes.TOO_MANY_USER_GUILDS) {
                let e = S.default.getCurrentUser(),
                    t = C.default.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff());
                t ? M(O.MAX_USER_GUILDS_PREMIUM) : M(O.MAX_USER_GUILDS)
            }
            throw (null === (a = t.body) || void 0 === a ? void 0 : a.code) === O.AbortCodes.GUILD_AT_CAPACITY && b(), _ && (null === (u = t.body) || void 0 === u ? void 0 : u.code) === O.AbortCodes.UNKNOWN_GUILD && F(e), t
        }
    }

    function P(e) {
        return new Promise(t => U.default.addConditionalChangeListener(() => {
            let l = U.default.getGuild(e);
            return null == l || (t(l), !1)
        }))
    }
    var w = {
        joinGuild: v,
        waitForGuild: P,
        async transitionToGuildSync(e, t, l, n) {
            var r, d;
            let o = await P(e);
            let a = (r = o.id, null != (d = l) ? d : !(0, s.isInMainTabsExperiment)() || (0, _.isOnNewPanels)() ? (0, L.getChannelIdForGuildTransition)(r) : void 0),
                u = t;
            (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (u = {
                ...t,
                welcomeModalChannelId: a
            }), (0, f.transitionTo)(O.Routes.CHANNEL(e, a), u, void 0, n), await new Promise(setImmediate)
        },
        deleteGuild: F,
        selectGuild(e) {
            (0, i.stopLurking)(e)
        },
        createGuild(e) {
            o.default.dispatch({
                type: "GUILD_CREATE",
                guild: e
            })
        },
        setServerMute: (e, t, l) => d.default.patch({
            url: O.Endpoints.GUILD_MEMBER(e, t),
            body: {
                mute: l
            },
            oldFormErrors: !0
        }),
        setServerDeaf: (e, t, l) => d.default.patch({
            url: O.Endpoints.GUILD_MEMBER(e, t),
            body: {
                deaf: l
            },
            oldFormErrors: !0
        }),
        setChannel(e, t, l) {
            d.default.patch({
                url: O.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    channel_id: l
                },
                oldFormErrors: !0
            })
        },
        setMemberFlags(e, t, l) {
            d.default.patch({
                url: O.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    flags: l
                },
                oldFormErrors: !0
            })
        },
        kickUser: (e, t, l) => d.default.delete({
            url: O.Endpoints.GUILD_MEMBER(e, t),
            reason: l,
            oldFormErrors: !0
        }),
        setCommunicationDisabledUntil(e) {
            let {
                guildId: t,
                userId: l,
                communicationDisabledUntilTimestamp: r,
                duration: d,
                reason: o,
                location: a
            } = e;
            return m.default.patch({
                url: O.Endpoints.GUILD_MEMBER(t, l),
                reason: o,
                body: {
                    communication_disabled_until: r
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: n.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                    properties: {
                        guild_id: t,
                        target_user_id: l,
                        duration: null != d ? d : null,
                        reason: null != o ? o : null,
                        communication_disabled_until: r,
                        location: null != a ? a : null
                    }
                }
            })
        },
        banUser: (e, t, l, n) => d.default.put({
            url: O.Endpoints.GUILD_BAN(e, t),
            reason: n,
            body: {
                delete_message_seconds: l
            },
            oldFormErrors: !0
        }),
        unbanUser: (e, t) => d.default.delete({
            url: O.Endpoints.GUILD_BAN(e, t),
            oldFormErrors: !0
        }),
        banMultipleUsers: (e, t, l, n) => d.default.post({
            url: O.Endpoints.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: l,
                reason: n
            },
            oldFormErrors: !0
        }),
        async createRole(e, t, l) {
            let n = {
                name: null != t && "" !== t ? t : N.default.Messages.NEW_ROLE,
                color: null != l ? l : 0,
                permissions: R.default.NONE
            };
            try {
                let t = await d.default.post({
                        url: O.Endpoints.GUILD_ROLES(e),
                        oldFormErrors: !0,
                        body: n
                    }),
                    l = t.body;
                return l.permissions = r.default.deserialize(l.permissions), o.default.dispatch({
                    type: "GUILD_SETTINGS_ROLE_SELECT",
                    roleId: t.body.id,
                    role: l
                }), u.default.checkGuildTemplateDirty(e), l
            } catch (e) {
                throw new a.default(e)
            }
        },
        async updateRole(e, t, l) {
            let {
                icon: n,
                unicodeEmoji: r,
                ...o
            } = l, a = null === n || (null == n ? void 0 : n.startsWith("data:")) ? n : void 0, i = await d.default.patch({
                url: O.Endpoints.GUILD_ROLE(e, t),
                body: {
                    ...o,
                    icon: a,
                    unicode_emoji: r
                },
                oldFormErrors: !0
            });
            return u.default.checkGuildTemplateDirty(e), i
        },
        updateRolePermissions: (e, t, l) => d.default.patch({
            url: O.Endpoints.GUILD_ROLE(e, t),
            body: {
                permissions: l
            },
            oldFormErrors: !0
        }),
        deleteRole(e, t) {
            d.default.delete({
                url: O.Endpoints.GUILD_ROLE(e, t),
                oldFormErrors: !0
            }).then(() => {
                u.default.checkGuildTemplateDirty(e)
            })
        },
        async batchChannelUpdate(e, t) {
            let l = await d.default.patch({
                url: O.Endpoints.GUILD_CHANNELS(e),
                body: t,
                oldFormErrors: !0
            });
            return u.default.checkGuildTemplateDirty(e), l
        },
        async batchRoleUpdate(e, t) {
            let l = await d.default.patch({
                url: O.Endpoints.GUILD_ROLES(e),
                body: t,
                oldFormErrors: !0
            });
            return u.default.checkGuildTemplateDirty(e), l
        },
        requestMembers(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            return o.default.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: Array.isArray(e) ? e : [e],
                query: t,
                limit: l,
                presences: n
            })
        },
        searchRecentMembers(e, t) {
            let {
                query: l,
                continuationToken: n
            } = null != t ? t : {};
            return o.default.dispatch({
                type: "GUILD_SEARCH_RECENT_MEMBERS",
                guildId: e,
                query: l,
                continuationToken: n
            })
        },
        requestMembersById(e, t) {
            let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return o.default.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: Array.isArray(e) ? e : [e],
                userIds: Array.isArray(t) ? t : [t],
                presences: l
            })
        },
        move(e, t, l, n) {
            o.default.dispatch({
                type: "GUILD_MOVE",
                fromIndex: e,
                toIndex: t,
                fromFolderIndex: l,
                toFolderIndex: n
            })
        },
        moveById(e, t) {
            let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            o.default.dispatch({
                type: "GUILD_MOVE_BY_ID",
                sourceId: e,
                targetId: t,
                moveToBelow: l,
                combine: n
            })
        },
        createGuildFolderLocal(e, t) {
            A.default.track(O.AnalyticEvents.GUILD_FOLDER_CREATED), o.default.dispatch({
                type: "GUILD_FOLDER_CREATE_LOCAL",
                sourceIds: e,
                name: t
            })
        },
        editGuildFolderLocal(e, t, l) {
            o.default.dispatch({
                type: "GUILD_FOLDER_EDIT_LOCAL",
                targetId: e,
                sourceIds: t,
                name: l
            })
        },
        deleteGuildFolderLocal(e) {
            o.default.dispatch({
                type: "GUILD_FOLDER_DELETE_LOCAL",
                targetId: e
            })
        },
        toggleGuildFolderExpand(e) {
            let t = D.default.isFolderExpanded(e);
            A.default.track(O.AnalyticEvents.GUILD_FOLDER_CLICKED, {
                source: "sidebar",
                action: t ? "collapsed" : "expanded"
            }), o.default.dispatch({
                type: "TOGGLE_GUILD_FOLDER_EXPAND",
                folderId: e
            })
        },
        setGuildFolderExpanded(e, t) {
            o.default.dispatch({
                type: "SET_GUILD_FOLDER_EXPANDED",
                folderId: e,
                expanded: t
            })
        },
        collapseAllFolders() {
            o.default.dispatch({
                type: "GUILD_FOLDER_COLLAPSE"
            })
        },
        nsfwAgree(e) {
            o.default.dispatch({
                type: "GUILD_NSFW_AGREE",
                guildId: e
            })
        },
        nsfwReturnToSafety(e) {
            if ((0, s.isInMainTabsExperiment)() && !(0, _.isOnNewPanels)()) {
                let e = (0, E.getRootNavigationRef)();
                if ((null == e ? void 0 : e.isReady()) !== !0) return;
                let t = (0, c.coerceModalRoute)(e.getCurrentRoute());
                for (null != t && e.goBack();;) {
                    let t = (0, c.coerceChannelRoute)(e.getCurrentRoute());
                    if (null == t) break;
                    let l = T.default.getChannel(t.params.channelId);
                    if (null == l || !l.isNSFW()) break;
                    e.goBack()
                }
                return
            }
            if (null == e) {
                (0, f.transitionTo)(O.Routes.FRIENDS);
                return
            }
            let t = G.default.getDefaultChannel(e);
            null == t || t.isNSFW() ? (0, f.transitionTo)(O.Routes.FRIENDS) : (0, f.transitionTo)(O.Routes.CHANNEL(e, t.id))
        },
        escapeToDefaultChannel(e) {
            let t = G.default.getDefaultChannel(e);
            null != t ? (0, f.transitionTo)(O.Routes.CHANNEL(e, t.id)) : (0, f.transitionTo)(O.Routes.FRIENDS)
        },
        async fetchApplications(e, t) {
            let l = {
                url: O.Endpoints.GUILD_APPLICATIONS(e),
                oldFormErrors: !0
            };
            null != t && (l.query = {
                channel_id: t
            });
            let n = await d.default.get(l),
                r = n.body;
            o.default.dispatch({
                type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                guildId: e,
                applications: r
            })
        },
        async fetchGuildBansBatch(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                n = {
                    limit: t
                };
            null != l && (n.after = l), await d.default.get({
                url: O.Endpoints.GUILD_BANS(e),
                oldFormErrors: !0,
                query: n
            }).then(t => {
                o.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                    bans: t.body,
                    guildId: e
                })
            })
        },
        async searchGuildBans(e, t, l) {
            let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
                r = {
                    limit: n
                };
            null != l && l.length > 0 && (r.user_ids = l), null != t && t.trim().length > 0 && (r.query = t), await d.default.get({
                url: O.Endpoints.GUILD_BANS_SEARCH(e),
                oldFormErrors: !0,
                query: r
            }).then(t => {
                o.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                    bans: t.body,
                    guildId: e
                })
            })
        },
        async fetchGuildBans(e) {
            await d.default.get({
                url: O.Endpoints.GUILD_BANS(e),
                oldFormErrors: !0
            }).then(e => {
                o.default.dispatch({
                    type: "GUILD_SETTINGS_LOADED_BANS",
                    bans: e.body
                })
            })
        },
        fetchGuildRoleConnectionsEligibility: (e, t) => d.default.get({
            url: O.Endpoints.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
            oldFormErrors: !0
        }).then(e => {
            let {
                body: l
            } = e;
            return o.default.dispatch({
                type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                roleId: t,
                roleConnectionEligibility: l
            }), l
        }),
        async assignGuildRoleConnection(e, t) {
            await d.default.post({
                url: O.Endpoints.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
                oldFormErrors: !0
            })
        },
        async unassignGuildRoleConnection(e, t) {
            await d.default.post({
                url: O.Endpoints.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
                oldFormErrors: !0
            })
        },
        async getGuildRoleConnectionsConfigurations(e) {
            let t = await d.default.get({
                url: O.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0
            });
            return t.body
        }
    }
}