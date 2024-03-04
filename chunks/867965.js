function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        trackForumChannelSeenBatch: function() {
            return g
        },
        trackForumSearched: function() {
            return m
        },
        trackForumSearchCleared: function() {
            return p
        },
        trackForumTagFilterClicked: function() {
            return S
        },
        trackForumCreateNewPostClick: function() {
            return v
        },
        trackForumCreateNewPostKeybindUsed: function() {
            return T
        },
        maybeTrackForumNewPostDraftCreated: function() {
            return I
        },
        trackForumNewPostCleared: function() {
            return C
        },
        trackForumPostCreated: function() {
            return A
        },
        trackForumScrolled: function() {
            return y
        },
        trackForumMorePostsLoaded: function() {
            return N
        },
        trackForumPostClicked: function() {
            return R
        },
        trackForumSortOrderUpdated: function() {
            return O
        },
        trackForumLayoutUpdated: function() {
            return D
        },
        trackForumPostLinkCopied: function() {
            return P
        },
        trackForumOnboardingClicked: function() {
            return L
        },
        trackForumUpsellModalClicked: function() {
            return M
        },
        trackForumAddMediaToOriginalPostClicked: function() {
            return b
        },
        trackForumHelperCardClicked: function() {
            return U
        },
        trackForumChannelMediaUploaderClicked: function() {
            return w
        },
        trackForumEnableAutomodClicked: function() {
            return k
        },
        trackForumPreviewPostClicked: function() {
            return V
        },
        trackForumPostSidebarViewed: function() {
            return G
        },
        trackForumUpsellModalViewed: function() {
            return F
        },
        trackForumCreateNewPostStarted: function() {
            return x
        }
    });
    var i = n("482402"),
        s = n("716241"),
        r = n("701916"),
        a = n("42203"),
        o = n("474643"),
        l = n("599110"),
        u = n("773336"),
        d = n("349778"),
        c = n("430475"),
        f = n("994810"),
        _ = n("688169"),
        h = n("318321"),
        E = n("49111");

    function g(e) {
        let {
            guildId: t,
            channelId: n,
            sessionId: i,
            postIds: r,
            additionalTimes: a
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
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

    function m(e) {
        let {
            guildId: t,
            channelId: n,
            numSearchResults: i
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            num_search_results: i
        })
    }

    function p(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function S(e) {
        let {
            guildId: t,
            channelId: n,
            tagId: i,
            filterTagIds: r,
            added: a,
            location: o
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
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

    function v(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function T(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function I(e) {
        var t, n, i, r;
        let {
            guildId: l,
            channelId: u
        } = e, d = a.default.getChannel(u);
        if (null == d) return;
        let c = o.default.getThreadSettings(u),
            f = null === (t = d.template) || void 0 === t ? void 0 : t.trim(),
            _ = o.default.getDraft(u, o.DraftType.FirstThreadMessage),
            g = null == _ || 0 === _.length || (null == _ ? void 0 : _.trim()) === f,
            m = (null == c ? void 0 : c.appliedTags) == null || (null == c ? void 0 : null === (n = c.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
            p = (null == c ? void 0 : c.name) == null || (null == c ? void 0 : null === (r = c.name) || void 0 === r ? void 0 : null === (i = r.trim()) || void 0 === i ? void 0 : i.length) === 0;
        (!g || !m || !p) && s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: u
            }),
            guild_id: l,
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
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function A(e) {
        let {
            guildId: t,
            channelId: n,
            postId: i
        } = e;

        function r() {
            s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                ...(0, h.collectForumPostAnalyticsMetadata)({
                    channelId: i
                }),
                guild_id: t,
                channel_id: n
            })
        }
        let a = c.default.isLoading(i);
        a ? c.default.addConditionalChangeListener(() => {
            let e = c.default.isLoading(i);
            return !!e || (r(), !1)
        }) : r()
    }

    function y(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function N(e) {
        let {
            guildId: t,
            channelId: n,
            numArchivedThreads: i,
            hasMoreThreads: r,
            filterTagIds: o,
            sortOrder: u
        } = e;
        l.default.track(E.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
            ...(0, s.collectGuildAnalyticsMetadata)(t),
            ...(0, s.collectChannelAnalyticsMetadata)(a.default.getChannel(n)),
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            num_archived_threads: i,
            num_active_threads: (0, h.getNumActiveThreads)(t, n),
            has_more_threads: r,
            filter_tag_ids: o,
            sort_order: u
        })
    }

    function R(e) {
        let {
            guildId: t,
            channelId: n,
            postId: i,
            location: r
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
            ...(0, h.collectForumPostAnalyticsMetadata)({
                channelId: i
            }),
            guild_id: t,
            channel_id: n,
            is_search_result: null != f.default.getSearchResults(n),
            location: r
        })
    }

    function O(e) {
        let {
            guildId: t,
            channelId: n,
            sortOrder: i
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
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

    function D(e) {
        let {
            guildId: t,
            channelId: n,
            forumLayout: r
        } = e, a = (0, d.isForumActivityExperimentEnabled)(t) && r === i.ForumLayout.LIST ? _.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : r;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
            ...(0, h.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            forum_channel_layout: a
        })
    }

    function P(e) {
        let {
            postId: t,
            location: n
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_POST_LINK_COPIED, {
            forum_post_id: t,
            location: n
        })
    }

    function L(e) {
        let {
            onboardingCTA: t
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
            onboarding_cta_type: t
        })
    }

    function M(e) {
        let {
            forumDemoId: t
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
            forum_demo_id: t
        })
    }

    function b(e) {
        let {
            added: t
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
            added: t
        })
    }

    function U(e) {
        let {
            readGuideCta: t
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
            read_guide_cta: t
        })
    }

    function w(e) {
        let {
            isMobile: t
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
            is_mobile: t
        })
    }

    function k() {
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
    }

    function V() {
        s.default.trackWithMetadata(E.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
    }

    function G(e) {
        s.default.trackWithMetadata(E.AnalyticEvents.CHANNEL_OPENED, {
            ...(0, s.collectGuildAnalyticsMetadata)(e.guild_id),
            ...(0, s.collectChannelAnalyticsMetadata)(e),
            ...(0, r.collectThreadMetadata)(e, !0),
            ...(0, s.getChannelOpenedMetadata)(e.id),
            channel_id: e.id,
            guild_id: e.guild_id,
            parent_id: e.parent_id,
            parent_channel_type: e.parentChannelThreadType,
            channel_view: "Split View",
            platform: (0, u.getPlatform)()
        })
    }

    function F() {
        s.default.trackWithMetadata(E.AnalyticEvents.OPEN_MODAL, {
            type: "Forum Channel Upsell Modal",
            location: {
                section: E.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
        })
    }

    function x(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        s.default.trackWithMetadata(E.AnalyticEvents.THREAD_CREATION_STARTED, {
            ...(0, r.collectThreadMetadata)(a.default.getChannel(n)),
            channel_id: n,
            guild_id: t
        })
    }
}