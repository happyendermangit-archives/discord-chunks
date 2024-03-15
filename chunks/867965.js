function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackForumChannelSeenBatch: function() {
            return m
        },
        trackForumSearched: function() {
            return p
        },
        trackForumSearchCleared: function() {
            return S
        },
        trackForumTagFilterClicked: function() {
            return v
        },
        trackForumCreateNewPostClick: function() {
            return T
        },
        trackForumCreateNewPostKeybindUsed: function() {
            return I
        },
        maybeTrackForumNewPostDraftCreated: function() {
            return A
        },
        trackForumNewPostCleared: function() {
            return C
        },
        trackForumPostCreated: function() {
            return y
        },
        trackForumScrolled: function() {
            return N
        },
        trackForumMorePostsLoaded: function() {
            return R
        },
        trackForumPostClicked: function() {
            return O
        },
        trackForumSortOrderUpdated: function() {
            return D
        },
        trackForumLayoutUpdated: function() {
            return P
        },
        trackForumPostLinkCopied: function() {
            return L
        },
        trackForumOnboardingClicked: function() {
            return M
        },
        trackForumUpsellModalClicked: function() {
            return b
        },
        trackForumAddMediaToOriginalPostClicked: function() {
            return U
        },
        trackForumHelperCardClicked: function() {
            return w
        },
        trackForumChannelMediaUploaderClicked: function() {
            return k
        },
        trackForumEnableAutomodClicked: function() {
            return V
        },
        trackForumPreviewPostClicked: function() {
            return G
        },
        trackForumPostSidebarViewed: function() {
            return F
        },
        trackForumUpsellModalViewed: function() {
            return x
        },
        trackForumCreateNewPostStarted: function() {
            return B
        }
    });
    var i = n("482402"),
        s = n("716241"),
        r = n("701916"),
        a = n("918105"),
        o = n("42203"),
        l = n("474643"),
        u = n("599110"),
        d = n("773336"),
        c = n("349778"),
        f = n("430475"),
        _ = n("994810"),
        E = n("688169"),
        h = n("318321"),
        g = n("49111");

    function m(e) {
        let {
            guildId: t,
            channelId: n,
            sessionId: i,
            postIds: r,
            additionalTimes: a
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n,
                sessionId: i
            }),
            guild_id: t,
            channel_id: n,
            post_ids: r,
            additional_seen_time_millis: a
        })
    }

    function p(e) {
        let {
            guildId: t,
            channelId: n,
            numSearchResults: i
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            num_search_results: i
        })
    }

    function S(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function v(e) {
        let {
            guildId: t,
            channelId: n,
            tagId: i,
            filterTagIds: r,
            added: a,
            location: o
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            tag_id: i,
            filter_tag_ids: r,
            added: a,
            location: o
        })
    }

    function T(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function I(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function A(e) {
        var t, n, i, r;
        let {
            guildId: a,
            channelId: u
        } = e, d = o.default.getChannel(u);
        if (null == d) return;
        let c = l.default.getThreadSettings(u),
            f = null === (t = d.template) || void 0 === t ? void 0 : t.trim(),
            _ = l.default.getDraft(u, l.DraftType.FirstThreadMessage),
            E = null == _ || 0 === _.length || (null == _ ? void 0 : _.trim()) === f,
            m = (null == c ? void 0 : c.appliedTags) == null || (null == c ? void 0 : null === (n = c.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
            p = (null == c ? void 0 : c.name) == null || (null == c ? void 0 : null === (r = c.name) || void 0 === r ? void 0 : null === (i = r.trim()) || void 0 === i ? void 0 : i.length) === 0;
        (!E || !m || !p) && s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: u
            }),
            guild_id: a,
            channel_id: u,
            applied_tag_ids: (0, h.getForumPostDraftAppliedTagIds)(u),
            num_attachments: (0, h.getForumPostDraftNumAttachments)(u)
        })
    }

    function C(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function y(e) {
        let {
            guildId: t,
            channelId: n,
            postId: i
        } = e;

        function r() {
            s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                ...(0, h.collectForumPostAnalyticsMetadata)({
                    channelId: i
                }),
                guild_id: t,
                channel_id: n
            })
        }
        let a = f.default.isLoading(i);
        a ? f.default.addConditionalChangeListener(() => {
            let e = f.default.isLoading(i);
            return !!e || (r(), !1)
        }) : r()
    }

    function N(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function R(e) {
        let {
            guildId: t,
            channelId: n,
            numArchivedThreads: i,
            hasMoreThreads: r,
            filterTagIds: a,
            sortOrder: l
        } = e;
        u.default.track(g.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
            ...(0, s.collectGuildAnalyticsMetadata)(t),
            ...(0, s.collectChannelAnalyticsMetadata)(o.default.getChannel(n)),
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            num_archived_threads: i,
            num_active_threads: (0, h.getNumActiveThreads)(t, n),
            has_more_threads: r,
            filter_tag_ids: a,
            sort_order: l
        })
    }

    function O(e) {
        let {
            guildId: t,
            channelId: n,
            postId: i,
            location: r
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
            ...(0, h.collectForumPostAnalyticsMetadata)({
                channelId: i
            }),
            guild_id: t,
            channel_id: n,
            is_search_result: null != _.default.getSearchResults(n),
            location: r
        })
    }

    function D(e) {
        let {
            guildId: t,
            channelId: n,
            sortOrder: i
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            sort_type: (0, h.convertSortOrderToReadableString)(i),
            sort_order: i,
            forum_channel_sort_order: i
        })
    }

    function P(e) {
        let {
            guildId: t,
            channelId: n,
            forumLayout: r
        } = e, a = (0, c.isForumActivityExperimentEnabled)(t) && r === i.ForumLayout.LIST ? E.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : r;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            forum_channel_layout: a
        })
    }

    function L(e) {
        let {
            postId: t,
            location: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_POST_LINK_COPIED, {
            forum_post_id: t,
            location: n
        })
    }

    function M(e) {
        let {
            onboardingCTA: t
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
            onboarding_cta_type: t
        })
    }

    function b(e) {
        let {
            forumDemoId: t
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
            forum_demo_id: t
        })
    }

    function U(e) {
        let {
            added: t
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
            added: t
        })
    }

    function w(e) {
        let {
            readGuideCta: t
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
            read_guide_cta: t
        })
    }

    function k(e) {
        let {
            isMobile: t
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
            is_mobile: t
        })
    }

    function V() {
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
    }

    function G() {
        s.default.trackWithMetadata(g.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
    }

    function F(e) {
        s.default.trackWithMetadata(g.AnalyticEvents.CHANNEL_OPENED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e.guild_id),
            ...(0, s.collectChannelAnalyticsMetadata)(e),
            ...(0, r.collectThreadMetadata)(e, !0),
            ...(0, s.getChannelOpenedMetadata)(e.id),
            channel_view: "Split View",
            platform: (0, d.getPlatform)()
        }), (0, a.trackClickstream)(g.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
            channelId: e.id
        })
    }

    function x() {
        s.default.trackWithMetadata(g.AnalyticEvents.OPEN_MODAL, {
            type: "Forum Channel Upsell Modal",
            location: {
                section: g.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
        })
    }

    function B(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(g.AnalyticEvents.THREAD_CREATION_STARTED, {
            ...(0, r.collectThreadMetadata)(o.default.getChannel(n)),
            channel_id: n,
            guild_id: t
        })
    }
}