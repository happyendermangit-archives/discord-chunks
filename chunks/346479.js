function(e, t, n) {
    "use strict";
    n.r(t), n("789020");
    var i = n("697988"),
        r = n("544891"),
        s = n("570140"),
        a = n("668781"),
        o = n("430742"),
        l = n("367907"),
        u = n("555573"),
        d = n("131704"),
        _ = n("314897"),
        c = n("592125"),
        E = n("496675"),
        I = n("823379"),
        T = n("920303"),
        f = n("569471"),
        S = n("91159"),
        h = n("952537"),
        A = n("981631"),
        m = n("176505"),
        N = n("689938");

    function p(e, t) {
        return r.HTTP.patch({
            url: A.Endpoints.CHANNEL(e.id),
            body: t
        }).then(t => (s.default.dispatch({
            type: "THREAD_UPDATE",
            channel: (0, d.createChannelRecordFromServer)(t.body)
        }), e.isForumPost() && null != e.parent_id && s.default.dispatch({
            type: "RESORT_THREADS",
            channelId: e.parent_id
        }), t))
    }

    function O(e, t) {
        s.default.dispatch({
            type: "THREAD_MEMBER_LOCAL_UPDATE",
            id: e.id,
            guildId: e.getGuildId(),
            userId: _.default.getId(),
            isJoining: t
        })
    }
    t.default = {
        archiveThread(e, t) {
            let n = {
                archived: !0
            };
            return t && (n.locked = !0), p(e, n)
        },
        async lockThread(e) {
            let t = e.isArchivedThread();
            return t && await this.unarchiveThread(e, !1), p(e, {
                locked: !0,
                archived: t
            })
        },
        async unlockThread(e) {
            let t = e.isArchivedThread();
            return t && await this.unarchiveThread(e, !0), p(e, {
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
                return await p(e, n)
            } catch (e) {
                var r, s;
                throw (null === (r = e.body) || void 0 === r ? void 0 : r.code) === A.AbortCodes.TOO_MANY_THREADS ? a.default.show({
                    title: i ? N.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : N.default.Messages.CANNOT_UNARCHIVE_THREAD,
                    body: i ? N.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : N.default.Messages.TOO_MANY_THREADS_MESSAGE
                }) : (null === (s = e.body) || void 0 === s ? void 0 : s.code) === A.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS ? a.default.show({
                    title: N.default.Messages.CANNOT_UNARCHIVE_THREAD,
                    body: N.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                }) : 429 === e.status ? a.default.show({
                    title: i ? N.default.Messages.CANNOT_UNARCHIVE_FORUM_POST : N.default.Messages.CANNOT_UNARCHIVE_THREAD,
                    body: N.default.Messages.RATE_LIMITED
                }) : a.default.show({
                    title: N.default.Messages.ERROR,
                    body: N.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                }), e
            }
        },
        async unarchiveThreadIfNecessary(e) {
            var t;
            let n = c.default.getChannel(e),
                i = E.default.can(A.Permissions.MANAGE_THREADS, n);
            null != n && n.isArchivedThread() && (i || (null === (t = n.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0) && await this.unarchiveThread(n, !1)
        },
        setInvitable: (e, t) => p(e, {
            invitable: t
        }),
        async joinThread(e, t) {
            e.isForumPost() && O(e, !0);
            try {
                return await r.HTTP.post({
                    url: A.Endpoints.THREAD_MEMBER(e.id),
                    query: {
                        location: t
                    }
                })
            } catch (t) {
                var n;
                if ((null === (n = t.body) || void 0 === n ? void 0 : n.code) === A.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                    let t = e.isForumPost();
                    a.default.show({
                        title: t ? N.default.Messages.CANNOT_JOIN_FORUM_POST : N.default.Messages.CANNOT_JOIN_THREAD,
                        body: t ? N.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : N.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                    })
                } else a.default.show({
                    title: N.default.Messages.ERROR,
                    body: N.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                });
                e.isForumPost() && O(e, !1)
            }
        },
        async addMember(e, t, n) {
            try {
                return await r.HTTP.post({
                    url: A.Endpoints.THREAD_MEMBER(e.id, t),
                    query: {
                        location: n
                    }
                })
            } catch (t) {
                var i;
                if ((null === (i = t.body) || void 0 === i ? void 0 : i.code) === A.AbortCodes.TOO_MANY_THREAD_MEMBERS) {
                    let t = e.isForumPost();
                    a.default.show({
                        title: t ? N.default.Messages.CANNOT_ADD_USER_TO_FORUM_POST : N.default.Messages.CANNOT_ADD_USER_TO_THREAD,
                        body: t ? N.default.Messages.TOO_MANY_MEMBERS_MESSAGE_FORUM_POST : N.default.Messages.TOO_MANY_MEMBERS_MESSAGE
                    })
                } else a.default.show({
                    title: N.default.Messages.ERROR,
                    body: N.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                })
            }
        },
        leaveThread: (e, t) => (e.isForumPost() && O(e, !1), r.HTTP.del({
            url: A.Endpoints.THREAD_MEMBER(e.id),
            query: {
                location: t
            }
        })),
        removeMember: (e, t, n) => r.HTTP.del({
            url: A.Endpoints.THREAD_MEMBER(e.id, t),
            query: {
                location: n
            }
        }),
        setAutoArchiveDuration: (e, t) => r.HTTP.patch({
            url: A.Endpoints.CHANNEL(e.id),
            body: {
                auto_archive_duration: t
            }
        }),
        pin(e) {
            let t = e.flags | m.ChannelFlags.PINNED;
            this.updateFlags(e, t, e.isArchivedThread())
        },
        unpin(e) {
            let t = e.flags & ~m.ChannelFlags.PINNED;
            this.updateFlags(e, t)
        },
        async updateFlags(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            s.default.dispatch({
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
                await r.HTTP.patch({
                    url: A.Endpoints.CHANNEL(e.id),
                    body: i
                })
            } catch {
                s.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: e
                })
            }
        },
        async replacePin(e, t) {
            let n = e.merge({
                    flags: e.flags & ~m.ChannelFlags.PINNED
                }),
                i = t.merge({
                    flags: t.flags | m.ChannelFlags.PINNED
                });
            s.default.dispatch({
                type: "THREAD_UPDATE",
                channel: n
            }), s.default.dispatch({
                type: "THREAD_UPDATE",
                channel: i
            }), await this.unarchiveThreadIfNecessary(e.id), await this.unarchiveThreadIfNecessary(t.id);
            try {
                await r.HTTP.patch({
                    url: A.Endpoints.CHANNEL(e.id),
                    body: {
                        flags: e.flags & ~m.ChannelFlags.PINNED
                    }
                })
            } catch {
                s.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: e
                }), s.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                });
                return
            }
            try {
                await r.HTTP.patch({
                    url: A.Endpoints.CHANNEL(t.id),
                    body: {
                        flags: t.flags | m.ChannelFlags.PINNED
                    }
                })
            } catch {
                s.default.dispatch({
                    type: "THREAD_UPDATE",
                    channel: t
                })
            }
        },
        openThreadCreationForMobile(e, t, n) {
            (0, l.trackWithMetadata)(A.AnalyticEvents.THREAD_CREATION_STARTED, {
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
            return (0, S.trackThreadNotificationSettingsUpdated)(e, t), !f.default.hasJoined(e.id) && await this.joinThread(e, "Change Notification Settings"), r.HTTP.patch({
                url: A.Endpoints.THREAD_MEMBER_SETTINGS(e.id),
                body: t
            })
        },
        loadArchivedThreads(e, t, n, a, o) {
            !T.default.isLoading(t, n, a) && (s.default.dispatch({
                type: "LOAD_ARCHIVED_THREADS",
                channelId: t,
                sortOrder: n,
                tagFilter: a
            }), r.HTTP.get({
                url: A.Endpoints.THREAD_SEARCH(t),
                query: {
                    archived: !0,
                    sort_by: "last_message_time",
                    sort_order: "desc",
                    limit: T.PAGE_SIZE,
                    tag: a.size > 0 ? Array.from(a).join(",") : void 0,
                    tag_setting: i.ThreadSearchTagSetting.MATCH_SOME,
                    offset: o
                },
                retries: 2
            }).then(i => {
                let {
                    body: {
                        threads: r,
                        members: l,
                        has_more: u,
                        first_messages: d,
                        most_recent_messages: _
                    }
                } = i;
                null == r ? s.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_FAIL",
                    channelId: t,
                    sortOrder: n,
                    tagFilter: a
                }) : s.default.dispatch({
                    type: "LOAD_ARCHIVED_THREADS_SUCCESS",
                    guildId: e,
                    channelId: t,
                    offset: o,
                    sortOrder: n,
                    tagFilter: a,
                    threads: r,
                    firstMessages: d,
                    mostRecentMessages: _,
                    members: (null != l ? l : []).map(e => (0, h.default)(e)),
                    owners: r.map(e => e.owner).filter(I.isNotNullish),
                    hasMore: u
                })
            }, () => {
                s.default.dispatch({
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
                        most_recent_messages: _
                    }
                } = await r.HTTP.get({
                    url: A.Endpoints.THREAD_SEARCH(t),
                    query: {
                        name: n,
                        tag: o,
                        tag_setting: i.ThreadSearchTagSetting.MATCH_SOME
                    }
                });
            return s.default.dispatch({
                type: "LOAD_THREADS_SUCCESS",
                threads: l,
                members: u,
                guildId: e,
                firstMessages: d,
                mostRecentMessages: _
            }), l.map(e => e.id)
        }
    }
}