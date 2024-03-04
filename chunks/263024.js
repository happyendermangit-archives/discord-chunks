function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("702976");
    var i = n("843117"),
        s = n("872717"),
        r = n("913144"),
        a = n("404118"),
        o = n("295426"),
        l = n("716241"),
        u = n("507217"),
        d = n("233069"),
        c = n("271938"),
        f = n("42203"),
        _ = n("957255"),
        h = n("449008"),
        E = n("821343"),
        g = n("755624"),
        m = n("487269"),
        p = n("25932"),
        S = n("49111"),
        v = n("724210"),
        T = n("782340");

    function I(e, t) {
        return s.default.patch({
            url: S.Endpoints.CHANNEL(e.id),
            body: t
        }).then(t => (r.default.dispatch({
            type: "THREAD_UPDATE",
            channel: (0, d.createChannelRecordFromServer)(t.body)
        }), e.isForumPost() && null != e.parent_id && r.default.dispatch({
            type: "RESORT_THREADS",
            channelId: e.parent_id
        }), t))
    }

    function C(e, t) {
        r.default.dispatch({
            type: "THREAD_MEMBER_LOCAL_UPDATE",
            id: e.id,
            guildId: e.getGuildId(),
            userId: c.default.getId(),
            isJoining: t
        })
    }
    var A = {
        archiveThread(e, t) {
            let n = {
                archived: !0
            };
            return t && (n.locked = !0), I(e, n)
        },
        async lockThread(e) {
            let t = e.isArchivedThread();
            return t && await this.unarchiveThread(e, !1), I(e, {
                locked: !0,
                archived: t
            })
        },
        async unlockThread(e) {
            let t = e.isArchivedThread();
            return t && await this.unarchiveThread(e, !0), I(e, {
                locked: !1,
                archived: t
            })
        },
        async unarchiveThread(e, t) {
            let n = {
                    archived: !1
                },
                i = e.isForumPost();
            t && (n.locked = !1);
            try {
                return await I(e, n)
            } catch (e) {
                var s, r;
                throw (null === (s = e.body) || void 0 === s ? void 0 : s.code) === S.AbortCodes.TOO_MANY_THREADS ? a.default.show({
                    title: i ? T.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : T.default.Messages.CANNOT_UNARCHIVE_THREAD,
                    body: i ? T.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : T.default.Messages.TOO_MANY_THREADS_MESSAGE
                }) : (null === (r = e.body) || void 0 === r ? void 0 : r.code) === S.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? a.default.show({
                    title: T.default.Messages.CANNOT_UNARCHIVE_THREAD,
                    body: T.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                }) : 429 === e.status ? a.default.show({
                    title: i ? T.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : T.default.Messages.CANNOT_UNARCHIVE_THREAD,
                    body: T.default.Messages.RATE_LIMITED
                }) : a.default.show({
                    title: T.default.Messages.ERROR,
                    body: T.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                }), e
            }
        },
        async unarchiveThreadIfNecessary(e) {
            var t;
            let n = f.default.getChannel(e),
                i = _.default.can(S.Permissions.MANAGE_THREADS, n);
            null != n && n.isArchivedThread() && (i || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
        },
        setInvitable: (e, t) => I(e, {
            invitable: t
        }),
        async joinThread(e, t) {
            e.isForumPost() && C(e, !0);
            try {
                return await s.default.post({
                    url: S.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })
            } catch (t) {
                var n;
                if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === S.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                    let t = e.isForumPost();
                    a.default.show({
                        title: t ? T.default.Messages.CANNOT_JOIN_FORUM_POST : T.default.Messages.CANNOT_JOIN_THREAD,
                        body: t ? T.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : T.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                    })
                } else a.default.show({
                    title: T.default.Messages.ERROR,
                    body: T.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                });
                e.isForumPost() && C(e, !1)
            }
        },
        async addMember(e, t, n) {
            try {
                return await s.default.post({
                    url: S.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                })
            } catch (t) {
                var i;
                if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === S.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                    let t = e.isForumPost();
                    a.default.show({
                        title: t ? T.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : T.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                        body: t ? T.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : T.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                    })
                } else a.default.show({
                    title: T.default.Messages.ERROR,
                    body: T.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                })
            }
        },
        leaveThread: (e, t) => (e.isForumPost() && C(e, !1), s.default.delete({
            url: S.Endpoints.THREAD_MEMBER(e.id),
            query: {
                location: t
            }
        })),
        removeMember: (e, t, n) => s.default.delete({
            url: S.Endpoints.THREAD_MEMBER(e.id, t),
            query: {
                location: n
            }
        }),
        setAutoArchiveDuration: (e, t) => s.default.patch({
            url: S.Endpoints.CHANNEL(e.id),
            body: {
                auto_archive_duration: t
            }
        }),
        pin(e) {
            let t = e.flags | v.ChannelFlags.PINNED;
            this.updateFlags(e, t, e.isArchivedThread())
        },
        unpin(e) {
            let t = e.flags & ~v.ChannelFlags.PINNED;
            this.updateFlags(e, t)
        },
        async updateFlags(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            r.default.dispatch({
                type: "THREAD_UPDATE",
                channel: e.merge({
                    flags: t
                })
            });
            let i = {
                flags: t
            };
            n && (i.archived = !1);
            try {
                await s.default.patch({
                    url: S.Endpoints.CHANNEL(e.id),
                    body: i
                })
            } catch {
                r.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: e
                })
            }
        },
        async replacePin(e, t) {
            let n = e.merge({
                    flags: e.flags & ~v.ChannelFlags.PINNED
                }),
                i = t.merge({
                    flags: t.flags | v.ChannelFlags.PINNED
                });
            r.default.dispatch({
                type: "THREAD_UPDATE",
                channel: n
            }), r.default.dispatch({
                type: "THREAD_UPDATE",
                channel: i
            }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
            try {
                await s.default.patch({
                    url: S.Endpoints.CHANNEL(e.id),
                    body: {
                        flags: e.flags & ~v.ChannelFlags.PINNED
                    }
                })
            } catch {
                r.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: e
                }), r.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                });
                return
            }
            try {
                await s.default.patch({
                    url: S.Endpoints.CHANNEL(t.id),
                    body: {
                        flags: t.flags | v.ChannelFlags.PINNED
                    }
                })
            } catch {
                r.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                })
            }
        },
        openThreadCreationForMobile(e, t, n) {
            (0, l.trackWithMetadata)(S.AnalyticEvents.THREAD_CREATION_STARTED, {
                location: n,
                channel_id: e.id,
                guild_id: e.guild_id
            }), o.default.changeThreadSettings(e.id, {
                parentMessageId: t,
                isPrivate: !1,
                location: n
            }), null == t && (0, u.setActiveCommand)({
                channelId: e.id,
                command: null,
                section: null
            })
        },
        async setNotificationSettings(e, t) {
            return (0, m.trackThreadNotificationSettingsUpdated)(e, t), !g.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), s.default.patch({
                url: S.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                body: t
            })
        },
        loadArchivedThreads(e, t, n, a, o) {
            !E.default.isLoading(t, n, a) && (r.default.dispatch({
                type: "LOAD_ARCHIVED_THREADS",
                channelId: t,
                sortOrder: n,
                tagFilter: a
            }), s.default.get({
                url: S.Endpoints.THREAD_SEARCH(t),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: E.PAGE_SIZE,
                    tag: a.size > 0 ? Array.from(a).join(",") : void 0,
                    tag_setting: i.ThreadSearchTagSetting.MATCH_SOME,
                    offset: o
                },
                retries: 2
            }).then(i => {
                let {
                    body: {
                        threads: s,
                        members: l,
                        has_more: u,
                        first_messages: d,
                        most_recent_messages: c
                    }
                } = i;
                r.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                    guildId: e,
                    channelId: t,
                    offset: o,
                    sortOrder: n,
                    tagFilter: a,
                    threads: s,
                    firstMessages: d,
                    mostRecentMessages: c,
                    members: (null != l ? l : []).map(e => (0, p.default)(e)),
                    owners: s.map(e => e.owner).filter(h.isNotNullish),
                    hasMore: u
                })
            }, () => {
                r.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_FAIL",
                    channelId: t,
                    sortOrder: n,
                    tagFilter: a
                })
            }))
        },
        async searchThreads(e, t, n, a) {
            let o = null != a && a.size > 0 ? Array.from(a).join(",") : void 0,
                {
                    body: {
                        threads: l,
                        members: u,
                        first_messages: d,
                        most_recent_messages: c
                    }
                } = await s.default.get({
                    url: S.Endpoints.THREAD_SEARCH(t),
                    query: {
                        name: n,
                        tag: o,
                        tag_setting: i.ThreadSearchTagSetting.MATCH_SOME
                    }
                });
            return r.default.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: l,
                members: u,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: c
            }), l.map(e => e.id)
        }
    }
}