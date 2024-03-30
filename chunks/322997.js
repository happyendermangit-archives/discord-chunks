function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        waitForGuild: function() {
            return V
        }
    });
    var r = n("383959"),
        o = n("22287"),
        i = n("967888"),
        a = n("629815"),
        u = n("445515"),
        s = n("741885"),
        l = n("894928"),
        c = n("895517"),
        f = n("681446"),
        d = n("164161"),
        _ = n("709537"),
        E = n("770755"),
        p = n("163291"),
        m = n("909080"),
        y = n("217014"),
        I = n("935741"),
        h = n("530176"),
        O = n("29604"),
        T = n("306912"),
        S = n("894288"),
        v = n("63116"),
        g = n("208454"),
        A = n("870331"),
        b = n("359017"),
        N = n("830721"),
        R = n("463156"),
        C = n("483587"),
        P = n("281767"),
        D = n("941504");

    function L(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function M(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    L(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    L(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function U(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function w(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function k(e, t) {
        var n, r, o, i, a = {
            label: 0,
            sent: function() {
                if (1 & o[0]) throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return i = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
            return this
        }), i;

        function u(i) {
            return function(u) {
                return function(i) {
                    if (n) throw TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < o[1]) {
                                    a.label = o[1], o = i;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(i);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (e) {
                        i = [6, e], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }([i, u])
            }
        }
    }
    var G = function(e) {
            C.default.show({
                title: D.default.Messages.TOO_MANY_USER_GUILDS_ALERT_TITLE,
                body: D.default.Messages.TOO_MANY_USER_GUILDS_ALERT_DESCRIPTION.format({
                    quantity: e
                })
            })
        },
        B = function(e) {
            a.default.dispatch({
                type: "GUILD_DELETE",
                guild: {
                    id: e
                }
            })
        },
        j = function() {
            C.default.show({
                title: D.default.Messages.SERVER_IS_CURRENTLY_FULL,
                body: D.default.Messages.PLEASE_TRY_AGAIN_LATER
            })
        };

    function F() {
        return (F = M(function(e) {
            var t, r, o, u, s, l, c, f, d, _, m, I, h, O, A, b = arguments;
            return k(this, function(R) {
                switch (R.label) {
                    case 0:
                        if (r = (t = b.length > 1 && void 0 !== b[1] ? b[1] : {}).source, o = t.loadId, u = t.lurkLocation, l = null !== (s = t.lurker) && void 0 !== s && s, null !== (f = null == (c = g.default.getCurrentUser()) ? void 0 : c.hasFlag(P.UserFlags.QUARANTINED)) && void 0 !== f && f) return (0, E.default)(), [2, new Promise(function(e, t) {
                            return t(Error())
                        })];
                        a.default.wait(function() {
                            return a.default.dispatch({
                                type: "GUILD_JOIN",
                                guildId: e,
                                lurker: l,
                                source: r,
                                loadId: o
                            })
                        }), R.label = 1;
                    case 1:
                        return R.trys.push([1, 6, , 7]), d = e === v.default.getGuildId() && null != T.default.getGuild(e) ? S.default.getChannelId(e) : null, [4, i.HTTP.put({
                            url: P.Endpoints.GUILD_JOIN(e),
                            query: {
                                lurker: l,
                                session_id: l ? y.default.getSessionId() : null,
                                recommendation_load_id: o,
                                location: l && null != u ? u : null
                            },
                            context: {
                                source: r
                            },
                            oldFormErrors: !0,
                            body: {}
                        })];
                    case 2:
                        if (null != (_ = R.sent()).body.join_request && a.default.dispatch({
                                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                                guildId: e,
                                request: _.body.join_request
                            }), null == T.default.getGuild(e) && _.body.show_verification_form) return (0, p.transitionTo)(P.Routes.GUILD_MEMBER_VERIFICATION(e)), [2, _];
                        if (null != _.body.welcome_screen && a.default.dispatch({
                                type: "WELCOME_SCREEN_UPDATE",
                                guildId: _.body.id,
                                welcomeScreen: _.body.welcome_screen
                            }), null != _.body.approximate_presence_count && a.default.dispatch({
                                type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                                guildId: _.body.id,
                                count: _.body.approximate_presence_count
                            }), l) return [3, 5];
                        return [4, Promise.resolve().then(n.bind(n, "166603"))];
                    case 3:
                        return [4, (0, R.sent().default)({
                            guildId: e,
                            returnChannelId: d
                        })];
                    case 4:
                        R.sent(), R.label = 5;
                    case 5:
                        return [2, _];
                    case 6:
                        throw (null === (I = (m = R.sent()).body) || void 0 === I ? void 0 : I.code) === P.AbortCodes.TOO_MANY_USER_GUILDS && (A = g.default.getCurrentUser(), N.default.canUseIncreasedGuildCap(A) || (null == A ? void 0 : A.isStaff()) ? G(P.MAX_USER_GUILDS_PREMIUM) : G(P.MAX_USER_GUILDS)), (null === (h = m.body) || void 0 === h ? void 0 : h.code) === P.AbortCodes.GUILD_AT_CAPACITY && j(), l && (null === (O = m.body) || void 0 === O ? void 0 : O.code) === P.AbortCodes.UNKNOWN_GUILD && B(e), m;
                    case 7:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function V(e) {
        return new Promise(function(t) {
            return T.default.addConditionalChangeListener(function() {
                var n = T.default.getGuild(e);
                return null == n || (t(n), !1)
            })
        })
    }
    t.default = {
        joinGuild: function(e) {
            return F.apply(this, arguments)
        },
        waitForGuild: V,
        transitionToGuildSync: function(e, t, n, r) {
            return M(function() {
                var o, i;
                return k(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, V(e)];
                        case 1:
                            var u, s;
                            return u = a.sent().id, o = null != (s = n) ? s : !(0, c.isInMainTabsExperiment)() || (0, _.isOnNewPanels)() ? (0, m.getChannelIdForGuildTransition)(u) : void 0, i = t, (null == t ? void 0 : t.hasOwnProperty("welcomeModalChannelId")) && null == t.welcomeModalChannelId && (i = w(U({}, t), {
                                welcomeModalChannelId: o
                            })), (0, p.transitionTo)(P.Routes.CHANNEL(e, o), i, void 0, r), [4, new Promise(setImmediate)];
                        case 2:
                            return a.sent(), [2]
                    }
                })
            })()
        },
        deleteGuild: B,
        selectGuild: function(e) {
            (0, l.stopLurking)(e)
        },
        createGuild: function(e) {
            a.default.dispatch({
                type: "GUILD_CREATE",
                guild: e
            })
        },
        setServerMute: function(e, t, n) {
            return i.HTTP.patch({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    mute: n
                },
                oldFormErrors: !0
            })
        },
        setServerDeaf: function(e, t, n) {
            return i.HTTP.patch({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    deaf: n
                },
                oldFormErrors: !0
            })
        },
        setChannel: function(e, t, n) {
            i.HTTP.patch({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    channel_id: n
                },
                oldFormErrors: !0
            })
        },
        setMemberFlags: function(e, t, n) {
            i.HTTP.patch({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                body: {
                    flags: n
                },
                oldFormErrors: !0
            })
        },
        kickUser: function(e, t, n) {
            return i.HTTP.del({
                url: P.Endpoints.GUILD_MEMBER(e, t),
                reason: n,
                oldFormErrors: !0
            })
        },
        setCommunicationDisabledUntil: function(e) {
            var t = e.guildId,
                n = e.userId,
                o = e.communicationDisabledUntilTimestamp,
                i = e.duration,
                a = e.reason,
                u = e.location;
            return R.default.patch({
                url: P.Endpoints.GUILD_MEMBER(t, n),
                reason: a,
                body: {
                    communication_disabled_until: o
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                    properties: {
                        guild_id: t,
                        target_user_id: n,
                        duration: null != i ? i : null,
                        reason: null != a ? a : null,
                        communication_disabled_until: o,
                        location: null != u ? u : null
                    }
                }
            })
        },
        banUser: function(e, t, n, r) {
            return i.HTTP.put({
                url: P.Endpoints.GUILD_BAN(e, t),
                reason: r,
                body: {
                    delete_message_seconds: n
                },
                oldFormErrors: !0
            })
        },
        unbanUser: function(e, t) {
            return i.HTTP.del({
                url: P.Endpoints.GUILD_BAN(e, t),
                oldFormErrors: !0
            })
        },
        banMultipleUsers: function(e, t, n, r) {
            return i.HTTP.post({
                url: P.Endpoints.BULK_GUILD_BAN(e),
                body: {
                    user_ids: t,
                    delete_message_seconds: n
                },
                reason: r,
                oldFormErrors: !0
            })
        },
        createRole: function(e, t, n) {
            return M(function() {
                var r, l, c, f;
                return k(this, function(d) {
                    switch (d.label) {
                        case 0:
                            r = {
                                name: null != t && "" !== t ? t : D.default.Messages.NEW_ROLE,
                                color: null != n ? n : 0,
                                permissions: b.NONE
                            }, d.label = 1;
                        case 1:
                            return d.trys.push([1, 3, , 4]), [4, i.HTTP.post({
                                url: P.Endpoints.GUILD_ROLES(e),
                                oldFormErrors: !0,
                                body: r
                            })];
                        case 2:
                            return (c = (l = d.sent()).body).permissions = o.deserialize(c.permissions), a.default.dispatch({
                                type: "GUILD_SETTINGS_ROLE_SELECT",
                                roleId: l.body.id,
                                role: c
                            }), s.default.checkGuildTemplateDirty(e), [2, c];
                        case 3:
                            throw f = d.sent(), new u.default(f);
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        updateRole: function(e, t, n) {
            return M(function() {
                var r, o, a, u, l;
                return k(this, function(c) {
                    switch (c.label) {
                        case 0:
                            return r = n.icon, o = n.unicodeEmoji, a = function(e, t) {
                                if (null == e) return {};
                                var n, r, o = function(e, t) {
                                    if (null == e) return {};
                                    var n, r, o = {},
                                        i = Object.keys(e);
                                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                                    return o
                                }(e, t);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    for (r = 0; r < i.length; r++) {
                                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                                    }
                                }
                                return o
                            }(n, ["icon", "unicodeEmoji"]), u = null === r || (null == r ? void 0 : r.startsWith("data:")) ? r : void 0, [4, i.HTTP.patch({
                                url: P.Endpoints.GUILD_ROLE(e, t),
                                body: w(U({}, a), {
                                    icon: u,
                                    unicode_emoji: o
                                }),
                                oldFormErrors: !0
                            })];
                        case 1:
                            return l = c.sent(), s.default.checkGuildTemplateDirty(e), [2, l]
                    }
                })
            })()
        },
        updateRolePermissions: function(e, t, n) {
            return i.HTTP.patch({
                url: P.Endpoints.GUILD_ROLE(e, t),
                body: {
                    permissions: n
                },
                oldFormErrors: !0
            })
        },
        deleteRole: function(e, t) {
            i.HTTP.del({
                url: P.Endpoints.GUILD_ROLE(e, t),
                oldFormErrors: !0
            }).then(function() {
                s.default.checkGuildTemplateDirty(e)
            })
        },
        batchChannelUpdate: function(e, t) {
            return M(function() {
                var n;
                return k(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, i.HTTP.patch({
                                url: P.Endpoints.GUILD_CHANNELS(e),
                                body: t,
                                oldFormErrors: !0
                            })];
                        case 1:
                            return n = r.sent(), s.default.checkGuildTemplateDirty(e), [2, n]
                    }
                })
            })()
        },
        batchRoleUpdate: function(e, t) {
            return M(function() {
                var n;
                return k(this, function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, i.HTTP.patch({
                                url: P.Endpoints.GUILD_ROLES(e),
                                body: t,
                                oldFormErrors: !0
                            })];
                        case 1:
                            return n = r.sent(), s.default.checkGuildTemplateDirty(e), [2, n]
                    }
                })
            })()
        },
        requestMembers: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
            return a.default.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: Array.isArray(e) ? e : [e],
                query: t,
                limit: n,
                presences: r
            })
        },
        searchRecentMembers: function(e, t) {
            var n = null != t ? t : {},
                r = n.query,
                o = n.continuationToken;
            return a.default.dispatch({
                type: "GUILD_SEARCH_RECENT_MEMBERS",
                guildId: e,
                query: r,
                continuationToken: o
            })
        },
        requestMembersById: function(e, t) {
            var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
            return a.default.dispatch({
                type: "GUILD_MEMBERS_REQUEST",
                guildIds: Array.isArray(e) ? e : [e],
                userIds: Array.isArray(t) ? t : [t],
                presences: n
            })
        },
        move: function(e, t, n, r) {
            a.default.dispatch({
                type: "GUILD_MOVE",
                fromIndex: e,
                toIndex: t,
                fromFolderIndex: n,
                toFolderIndex: r
            })
        },
        moveById: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            a.default.dispatch({
                type: "GUILD_MOVE_BY_ID",
                sourceId: e,
                targetId: t,
                moveToBelow: n,
                combine: r
            })
        },
        createGuildFolderLocal: function(e, t) {
            A.default.track(P.AnalyticEvents.GUILD_FOLDER_CREATED), a.default.dispatch({
                type: "GUILD_FOLDER_CREATE_LOCAL",
                sourceIds: e,
                name: t
            })
        },
        editGuildFolderLocal: function(e, t, n) {
            a.default.dispatch({
                type: "GUILD_FOLDER_EDIT_LOCAL",
                targetId: e,
                sourceIds: t,
                name: n
            })
        },
        deleteGuildFolderLocal: function(e) {
            a.default.dispatch({
                type: "GUILD_FOLDER_DELETE_LOCAL",
                targetId: e
            })
        },
        toggleGuildFolderExpand: function(e) {
            var t = h.default.isFolderExpanded(e);
            A.default.track(P.AnalyticEvents.GUILD_FOLDER_CLICKED, {
                source: "sidebar",
                action: t ? "collapsed" : "expanded"
            }), a.default.dispatch({
                type: "TOGGLE_GUILD_FOLDER_EXPAND",
                folderId: e
            })
        },
        setGuildFolderExpanded: function(e, t) {
            a.default.dispatch({
                type: "SET_GUILD_FOLDER_EXPANDED",
                folderId: e,
                expanded: t
            })
        },
        collapseAllFolders: function() {
            a.default.dispatch({
                type: "GUILD_FOLDER_COLLAPSE"
            })
        },
        nsfwAgree: function(e) {
            a.default.dispatch({
                type: "GUILD_NSFW_AGREE",
                guildId: e
            })
        },
        nsfwReturnToSafety: function(e) {
            if ((0, c.isInMainTabsExperiment)() && !(0, _.isOnNewPanels)()) {
                var t = (0, f.getRootNavigationRef)();
                if ((null == t ? void 0 : t.isReady()) !== !0) return;
                for (null != (0, d.coerceModalRoute)(t.getCurrentRoute()) && t.goBack();;) {
                    var n = (0, d.coerceChannelRoute)(t.getCurrentRoute());
                    if (null == n) break;
                    var r = I.default.getChannel(n.params.channelId);
                    if (null == r || !r.isNSFW()) break;
                    t.goBack()
                }
                return
            }
            if (null == e) {
                (0, p.transitionTo)(P.Routes.FRIENDS);
                return
            }
            var o = O.default.getDefaultChannel(e);
            null == o || o.isNSFW() ? (0, p.transitionTo)(P.Routes.FRIENDS) : (0, p.transitionTo)(P.Routes.CHANNEL(e, o.id))
        },
        escapeToDefaultChannel: function(e) {
            var t = O.default.getDefaultChannel(e);
            null != t ? (0, p.transitionTo)(P.Routes.CHANNEL(e, t.id)) : (0, p.transitionTo)(P.Routes.FRIENDS)
        },
        fetchApplications: function(e, t) {
            return M(function() {
                var n, r;
                return k(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return n = {
                                url: P.Endpoints.GUILD_APPLICATIONS(e),
                                oldFormErrors: !0
                            }, null != t && (n.query = {
                                channel_id: t
                            }), [4, i.HTTP.get(n)];
                        case 1:
                            return r = o.sent().body, a.default.dispatch({
                                type: "GUILD_APPLICATIONS_FETCH_SUCCESS",
                                guildId: e,
                                applications: r
                            }), [2]
                    }
                })
            })()
        },
        fetchGuildBansBatch: function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return M(function() {
                var r;
                return k(this, function(o) {
                    switch (o.label) {
                        case 0:
                            return r = {
                                limit: t
                            }, null != n && (r.after = n), [4, i.HTTP.get({
                                url: P.Endpoints.GUILD_BANS(e),
                                oldFormErrors: !0,
                                query: r
                            }).then(function(t) {
                                a.default.dispatch({
                                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                                    bans: t.body,
                                    guildId: e
                                })
                            })];
                        case 1:
                            return o.sent(), [2]
                    }
                })
            })()
        },
        searchGuildBans: function(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            return M(function() {
                var o;
                return k(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return o = {
                                limit: r
                            }, null != n && n.length > 0 && (o.user_ids = n), null != t && t.trim().length > 0 && (o.query = t), [4, i.HTTP.get({
                                url: P.Endpoints.GUILD_BANS_SEARCH(e),
                                oldFormErrors: !0,
                                query: o
                            }).then(function(t) {
                                a.default.dispatch({
                                    type: "GUILD_SETTINGS_LOADED_BANS_BATCH",
                                    bans: t.body,
                                    guildId: e
                                })
                            })];
                        case 1:
                            return u.sent(), [2]
                    }
                })
            })()
        },
        fetchGuildBans: function(e) {
            return M(function() {
                return k(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, i.HTTP.get({
                                url: P.Endpoints.GUILD_BANS(e),
                                oldFormErrors: !0
                            }).then(function(e) {
                                a.default.dispatch({
                                    type: "GUILD_SETTINGS_LOADED_BANS",
                                    bans: e.body
                                })
                            })];
                        case 1:
                            return t.sent(), [2]
                    }
                })
            })()
        },
        fetchGuildRoleConnectionsEligibility: function(e, t) {
            return i.HTTP.get({
                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                oldFormErrors: !0
            }).then(function(e) {
                var n = e.body;
                return a.default.dispatch({
                    type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                    roleId: t,
                    roleConnectionEligibility: n
                }), n
            })
        },
        assignGuildRoleConnection: function(e, t) {
            return M(function() {
                return k(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, i.HTTP.post({
                                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
                                oldFormErrors: !0
                            })];
                        case 1:
                            return n.sent(), [2]
                    }
                })
            })()
        },
        unassignGuildRoleConnection: function(e, t) {
            return M(function() {
                return k(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, i.HTTP.post({
                                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
                                oldFormErrors: !0
                            })];
                        case 1:
                            return n.sent(), [2]
                    }
                })
            })()
        },
        getGuildRoleConnectionsConfigurations: function(e) {
            return M(function() {
                return k(this, function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, i.HTTP.get({
                                url: P.Endpoints.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                                oldFormErrors: !0
                            })];
                        case 1:
                            return [2, t.sent().body]
                    }
                })
            })()
        }
    }
}