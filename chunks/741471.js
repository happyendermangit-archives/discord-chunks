function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("387455"),
        o = n("967888"),
        i = n("629815"),
        a = n("483587"),
        u = n("771382"),
        s = n("140817"),
        l = n("503113"),
        c = n("569492"),
        f = n("217014"),
        d = n("935741"),
        _ = n("29884"),
        E = n("162677"),
        p = n("478915"),
        m = n("956774"),
        y = n("943546"),
        I = n("653009"),
        h = n("281767"),
        O = n("928204"),
        T = n("941504");

    function S(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function v(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    S(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    S(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function g(e, t) {
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

    function A(e, t) {
        return o.HTTP.patch({
            url: h.Endpoints.CHANNEL(e.id),
            body: t
        }).then(function(t) {
            return i.default.dispatch({
                type: "THREAD_UPDATE",
                channel: (0, c.createChannelRecordFromServer)(t.body)
            }), e.isForumPost() && null != e.parent_id && i.default.dispatch({
                type: "RESORT_THREADS",
                channelId: e.parent_id
            }), t
        })
    }

    function b(e, t) {
        i.default.dispatch({
            type: "THREAD_MEMBER_LOCAL_UPDATE",
            id: e.id,
            guildId: e.getGuildId(),
            userId: f.default.getId(),
            isJoining: t
        })
    }
    t.default = {
        archiveThread: function(e, t) {
            var n = {
                archived: !0
            };
            return t && (n.locked = !0), A(e, n)
        },
        lockThread: function(e) {
            return v(function() {
                var t;
                return g(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (!(t = e.isArchivedThread())) return [3, 2];
                            return [4, this.unarchiveThread(e, !1)];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2, A(e, {
                                locked: !0,
                                archived: t
                            })]
                    }
                })
            }).apply(this)
        },
        unlockThread: function(e) {
            return v(function() {
                var t;
                return g(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if (!(t = e.isArchivedThread())) return [3, 2];
                            return [4, this.unarchiveThread(e, !0)];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2, A(e, {
                                locked: !1,
                                archived: t
                            })]
                    }
                })
            }).apply(this)
        },
        unarchiveThread: function(e, t) {
            return v(function() {
                var n, r, o, i, u;
                return g(this, function(s) {
                    switch (s.label) {
                        case 0:
                            n = {
                                archived: !1
                            }, r = e.isForumPost(), t && (n.locked = !1), s.label = 1;
                        case 1:
                            return s.trys.push([1, 3, , 4]), [4, A(e, n)];
                        case 2:
                            return [2, s.sent()];
                        case 3:
                            throw (null === (i = (o = s.sent()).body) || void 0 === i ? void 0 : i.code) === h.AbortCodes.TOO_MANY_THREADS ? a.default.show({
                                title: r ? T.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : T.default.Messages.CANNOT_UNARCHIVE_THREAD,
                                body: r ? T.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : T.default.Messages.TOO_MANY_THREADS_MESSAGE
                            }) : (null === (u = o.body) || void 0 === u ? void 0 : u.code) === h.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? a.default.show({
                                title: T.default.Messages.CANNOT_UNARCHIVE_THREAD,
                                body: T.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                            }) : 429 === o.status ? a.default.show({
                                title: r ? T.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : T.default.Messages.CANNOT_UNARCHIVE_THREAD,
                                body: T.default.Messages.RATE_LIMITED
                            }) : a.default.show({
                                title: T.default.Messages.ERROR,
                                body: T.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                            }), o;
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        unarchiveThreadIfNecessary: function(e) {
            return v(function() {
                var t, n, r;
                return g(this, function(o) {
                    switch (o.label) {
                        case 0:
                            if (n = d.default.getChannel(e), r = _.default.can(h.Permissions.MANAGE_THREADS, n), !(null != n && n.isArchivedThread() && (r || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0))) return [3, 2];
                            return [4, this.unarchiveThread(n, !1)];
                        case 1:
                            o.sent(), o.label = 2;
                        case 2:
                            return [2]
                    }
                })
            }).apply(this)
        },
        setInvitable: function(e, t) {
            return A(e, {
                invitable: t
            })
        },
        joinThread: function(e, t) {
            return v(function() {
                var n, r;
                return g(this, function(i) {
                    switch (i.label) {
                        case 0:
                            e.isForumPost() && b(e, !0), i.label = 1;
                        case 1:
                            return i.trys.push([1, 3, , 4]), [4, o.HTTP.post({
                                url: h.Endpoints.THREAD_MEMBER(e.id),
                                query: {
                                    location: t
                                }
                            })];
                        case 2:
                            return [2, i.sent()];
                        case 3:
                            return (null === (n = i.sent().body) || void 0 === n ? void 0 : n.code) === h.AbortCodes.TOO_MANY_THREAD_MEMBERS ? (r = e.isForumPost(), a.default.show({
                                title: r ? T.default.Messages.CANNOT_JOIN_FORUM_POST : T.default.Messages.CANNOT_JOIN_THREAD,
                                body: r ? T.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : T.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })) : a.default.show({
                                title: T.default.Messages.ERROR,
                                body: T.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                            }), e.isForumPost() && b(e, !1), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        addMember: function(e, t, n) {
            return v(function() {
                var r, i;
                return g(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return u.trys.push([0, 2, , 3]), [4, o.HTTP.post({
                                url: h.Endpoints.THREAD_MEMBER(e.id, t),
                                query: {
                                    location: n
                                }
                            })];
                        case 1:
                            return [2, u.sent()];
                        case 2:
                            return (null === (r = u.sent().body) || void 0 === r ? void 0 : r.code) === h.AbortCodes.TOO_MANY_THREAD_MEMBERS ? (i = e.isForumPost(), a.default.show({
                                title: i ? T.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : T.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                                body: i ? T.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : T.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                            })) : a.default.show({
                                title: T.default.Messages.ERROR,
                                body: T.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                            }), [3, 3];
                        case 3:
                            return [2]
                    }
                })
            })()
        },
        leaveThread: function(e, t) {
            return e.isForumPost() && b(e, !1), o.HTTP.del({
                url: h.Endpoints.THREAD_MEMBER(e.id),
                query: {
                    location: t
                }
            })
        },
        removeMember: function(e, t, n) {
            return o.HTTP.del({
                url: h.Endpoints.THREAD_MEMBER(e.id, t),
                query: {
                    location: n
                }
            })
        },
        setAutoArchiveDuration: function(e, t) {
            return o.HTTP.patch({
                url: h.Endpoints.CHANNEL(e.id),
                body: {
                    auto_archive_duration: t
                }
            })
        },
        pin: function(e) {
            var t = e.flags | O.ChannelFlags.PINNED;
            this.updateFlags(e, t, e.isArchivedThread())
        },
        unpin: function(e) {
            var t = e.flags & ~O.ChannelFlags.PINNED;
            this.updateFlags(e, t)
        },
        updateFlags: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return v(function() {
                var r, a;
                return g(this, function(a) {
                    switch (a.label) {
                        case 0:
                            i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: e.merge({
                                    flags: t
                                })
                            }), r = {
                                flags: t
                            }, n && (r.archived = !1), a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, o.HTTP.patch({
                                url: h.Endpoints.CHANNEL(e.id),
                                body: r
                            })];
                        case 2:
                            return a.sent(), [3, 4];
                        case 3:
                            return a.sent(), i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: e
                            }), [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })()
        },
        replacePin: function(e, t) {
            return v(function() {
                var n, r, a, u;
                return g(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return n = e.merge({
                                flags: e.flags & ~O.ChannelFlags.PINNED
                            }), r = t.merge({
                                flags: t.flags | O.ChannelFlags.PINNED
                            }), i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: n
                            }), i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: r
                            }), [4, this.unarchiveThreadIfNecessary(e.id)];
                        case 1:
                            return a.sent(), [4, this.unarchiveThreadIfNecessary(t.id)];
                        case 2:
                            a.sent(), a.label = 3;
                        case 3:
                            return a.trys.push([3, 5, , 6]), [4, o.HTTP.patch({
                                url: h.Endpoints.CHANNEL(e.id),
                                body: {
                                    flags: e.flags & ~O.ChannelFlags.PINNED
                                }
                            })];
                        case 4:
                            return a.sent(), [3, 6];
                        case 5:
                            return a.sent(), i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: e
                            }), i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: t
                            }), [2];
                        case 6:
                            return a.trys.push([6, 8, , 9]), [4, o.HTTP.patch({
                                url: h.Endpoints.CHANNEL(t.id),
                                body: {
                                    flags: t.flags | O.ChannelFlags.PINNED
                                }
                            })];
                        case 7:
                            return a.sent(), [3, 9];
                        case 8:
                            return a.sent(), i.default.dispatch({
                                type: "THREAD_UPDATE",
                                channel: t
                            }), [3, 9];
                        case 9:
                            return [2]
                    }
                })
            }).apply(this)
        },
        openThreadCreationForMobile: function(e, t, n) {
            (0, s.trackWithMetadata)(h.AnalyticEvents.THREAD_CREATION_STARTED, {
                location: n,
                channel_id: e.id,
                guild_id: e.guild_id
            }), u.default.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n
            }), null == t && (0, l.setActiveCommand)({
                channelId: e.id,
                command: null,
                section: null
            })
        },
        setNotificationSettings: function(e, t) {
            return v(function() {
                return g(this, function(n) {
                    switch (n.label) {
                        case 0:
                            if ((0, y.trackThreadNotificationSettingsUpdated)(e, t), m.default.hasJoined(e.id)) return [3, 2];
                            return [4, this.joinThread(e, "Change Notification Settings")];
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2, o.HTTP.patch({
                                url: h.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                                body: t
                            })]
                    }
                })
            }).apply(this)
        },
        loadArchivedThreads: function(e, t, n, a, u) {
            !p.default.isLoading(t, n, a) && (i.default.dispatch({
                type: "LOAD_ARCHIVED_THREADS",
                channelId: t,
                sortOrder: n,
                tagFilter: a
            }), o.HTTP.get({
                url: h.Endpoints.THREAD_SEARCH(t),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: p.PAGE_SIZE,
                    tag: a.size > 0 ? Array.from(a).join(",") : void 0,
                    tag_setting: r.ThreadSearchTagSetting.MATCH_SOME,
                    offset: u
                },
                retries: 2
            }).then(function(r) {
                var o = r.body,
                    s = o.threads,
                    l = o.members,
                    c = o.has_more,
                    f = o.first_messages,
                    d = o.most_recent_messages;
                null == s ? i.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_FAIL",
                    channelId: t,
                    sortOrder: n,
                    tagFilter: a
                }) : i.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                    guildId: e,
                    channelId: t,
                    offset: u,
                    sortOrder: n,
                    tagFilter: a,
                    threads: s,
                    firstMessages: f,
                    mostRecentMessages: d,
                    members: (null != l ? l : []).map(function(e) {
                        return (0, I.default)(e)
                    }),
                    owners: s.map(function(e) {
                        return e.owner
                    }).filter(E.isNotNullish),
                    hasMore: c
                })
            }, function() {
                i.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_FAIL",
                    channelId: t,
                    sortOrder: n,
                    tagFilter: a
                })
            }))
        },
        searchThreads: function(e, t, n, a) {
            return v(function() {
                var u, s, l, c, f, d;
                return g(this, function(_) {
                    switch (_.label) {
                        case 0:
                            return u = null != a && a.size > 0 ? Array.from(a).join(",") : void 0, [4, o.HTTP.get({
                                url: h.Endpoints.THREAD_SEARCH(t),
                                query: {
                                    name: n,
                                    tag: u,
                                    tag_setting: r.ThreadSearchTagSetting.MATCH_SOME
                                }
                            })];
                        case 1:
                            return l = (s = _.sent().body).threads, c = s.members, f = s.first_messages, d = s.most_recent_messages, i.default.dispatch({
                                type: "LOAD_THREADS_SUCCESS",
                                threads: l,
                                members: c,
                                guildId: e,
                                firstMessages: f,
                                mostRecentMessages: d
                            }), [2, l.map(function(e) {
                                return e.id
                            })]
                    }
                })
            })()
        }
    }
}