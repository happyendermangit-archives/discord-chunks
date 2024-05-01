function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        a = n("668781"),
        s = n("346479"),
        o = n("929991"),
        l = n("480739"),
        u = n("985518"),
        d = n("228392"),
        _ = n("981631"),
        c = n("689938");
    async function E(e, t, n) {
        try {
            return await e()
        } catch (e) {
            var i;
            (null === (i = e.body) || void 0 === i ? void 0 : i.code) === _.AbortCodes.NON_MODERATED_TAG_REQUIRED && a.default.show({
                title: t,
                body: n
            })
        }
    }
    t.default = {
        resort(e) {
            r.default.dispatch({
                type: "RESORT_THREADS",
                channelId: e
            })
        },
        createForumTag: (e, t) => i.HTTP.post({
            url: _.Endpoints.FORUM_TAGS(t),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                moderated: e.moderated
            }
        }),
        updateForumTag(e, t) {
            let n = i.HTTP.put({
                url: _.Endpoints.FORUM_TAG(t, e.id),
                body: {
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: null == e.emojiId ? e.emojiName : void 0,
                    moderated: e.moderated
                }
            });
            E(() => n, c.default.Messages.FORUM_TAG_EDIT_ERROR, c.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
        },
        deleteForumTag(e, t) {
            let n = i.HTTP.del({
                url: _.Endpoints.FORUM_TAG(e, t)
            });
            E(() => n, c.default.Messages.FORUM_TAG_REMOVE_ERROR, c.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
        },
        updateForumPostTags: async (e, t) => (await s.default.unarchiveThreadIfNecessary(e), i.HTTP.patch({
            url: _.Endpoints.CHANNEL(e),
            body: {
                applied_tags: t
            }
        })),
        hideAdminOnboarding(e, t) {
            r.default.dispatch({
                type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                channelId: e,
                hide: t
            })
        },
        markPostAsSeen(e, t, n) {
            (0, o.markAnalyticsFeedItemSeen)((0, u.getForumPostSeenManagerId)(e), t, n)
        },
        markPostAsUnseen(e, t, n) {
            (0, o.markAnalyticsFeedItemUnseen)((0, u.getForumPostSeenManagerId)(e), t, n)
        },
        flushSeenItems(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
            (0, o.flushAnalyticsFeedItems)((0, u.getForumPostSeenManagerId)(e), t)
        },
        async searchForumPosts(e, t, n, i) {
            r.default.dispatch({
                type: "FORUM_SEARCH_START",
                channelId: t
            });
            try {
                let a = await s.default.searchThreads(e, t, n, i);
                (0, d.trackForumSearched)({
                    guildId: e,
                    channelId: t,
                    numSearchResults: a.length
                }), r.default.dispatch({
                    type: "FORUM_SEARCH_SUCCESS",
                    channelId: t,
                    threadIds: a
                })
            } catch {
                r.default.dispatch({
                    type: "FORUM_SEARCH_FAILURE",
                    channelId: t
                })
            }
        },
        updateForumSearchQuery(e, t) {
            r.default.dispatch({
                type: "FORUM_SEARCH_QUERY_UPDATED",
                channelId: e,
                query: t
            })
        },
        clearForumSearch(e) {
            r.default.dispatch({
                type: "FORUM_SEARCH_CLEAR",
                channelId: e
            })
        }
    }
}