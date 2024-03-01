function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return I
        }
    });
    var i = s("872717"),
        n = s("913144"),
        a = s("404118"),
        d = s("263024"),
        l = s("938237"),
        u = s("395118"),
        r = s("250850"),
        h = s("867965"),
        o = s("49111"),
        c = s("782340");
    async function m(e, t, s) {
        try {
            return await e()
        } catch (e) {
            var i;
            (null === (i = e.body) || void 0 === i ? void 0 : i.code) === o.AbortCodes.NON_MODERATED_TAG_REQUIRED && a.default.show({
                title: t,
                body: s
            })
        }
    }
    var I = {
        resort(e) {
            n.default.dispatch({
                type: "RESORT_THREADS",
                channelId: e
            })
        },
        createForumTag: (e, t) => i.default.post({
            url: o.Endpoints.FORUM_TAGS(t),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                moderated: e.moderated
            }
        }),
        updateForumTag(e, t) {
            let s = i.default.put({
                url: o.Endpoints.FORUM_TAG(t, e.id),
                body: {
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: null == e.emojiId ? e.emojiName : void 0,
                    moderated: e.moderated
                }
            });
            m(() => s, c.default.Messages.FORUM_TAG_EDIT_ERROR, c.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
        },
        deleteForumTag(e, t) {
            let s = i.default.delete({
                url: o.Endpoints.FORUM_TAG(e, t)
            });
            m(() => s, c.default.Messages.FORUM_TAG_REMOVE_ERROR, c.default.Messages.FORUM_POST_NON_MODERATED_TAG_REQUIRED)
        },
        updateForumPostTags: async (e, t) => (await d.default.unarchiveThreadIfNecessary(e), i.default.patch({
            url: o.Endpoints.CHANNEL(e),
            body: {
                applied_tags: t
            }
        })),
        hideAdminOnboarding(e, t) {
            n.default.dispatch({
                type: "ADMIN_ONBOARDING_GUIDE_HIDE",
                channelId: e,
                hide: t
            })
        },
        markPostAsSeen(e, t, s) {
            (0, l.markAnalyticsFeedItemSeen)((0, r.getForumPostSeenManagerId)(e), t, s)
        },
        markPostAsUnseen(e, t, s) {
            (0, l.markAnalyticsFeedItemUnseen)((0, r.getForumPostSeenManagerId)(e), t, s)
        },
        flushSeenItems(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.ForceFlushType.IMMEDIATE_WITH_COOLDOWN;
            (0, l.flushAnalyticsFeedItems)((0, r.getForumPostSeenManagerId)(e), t)
        },
        async searchForumPosts(e, t, s, i) {
            n.default.dispatch({
                type: "FORUM_SEARCH_START",
                channelId: t
            });
            try {
                let a = await d.default.searchThreads(e, t, s, i);
                (0, h.trackForumSearched)({
                    guildId: e,
                    channelId: t,
                    numSearchResults: a.length
                }), n.default.dispatch({
                    type: "FORUM_SEARCH_SUCCESS",
                    channelId: t,
                    threadIds: a
                })
            } catch {
                n.default.dispatch({
                    type: "FORUM_SEARCH_FAILURE",
                    channelId: t
                })
            }
        },
        updateForumSearchQuery(e, t) {
            n.default.dispatch({
                type: "FORUM_SEARCH_QUERY_UPDATED",
                channelId: e,
                query: t
            })
        },
        clearForumSearch(e) {
            n.default.dispatch({
                type: "FORUM_SEARCH_CLEAR",
                channelId: e
            })
        }
    }
}