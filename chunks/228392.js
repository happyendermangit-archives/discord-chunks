function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeTrackForumNewPostDraftCreated: function() {
            return O
        },
        trackForumAddMediaToOriginalPostClicked: function() {
            return b
        },
        trackForumChannelMediaUploaderClicked: function() {
            return w
        },
        trackForumChannelSeenBatch: function() {
            return S
        },
        trackForumCreateNewPostClick: function() {
            return N
        },
        trackForumCreateNewPostKeybindUsed: function() {
            return p
        },
        trackForumCreateNewPostStarted: function() {
            return F
        },
        trackForumEnableAutomodClicked: function() {
            return B
        },
        trackForumHelperCardClicked: function() {
            return G
        },
        trackForumLayoutUpdated: function() {
            return M
        },
        trackForumMorePostsLoaded: function() {
            return L
        },
        trackForumNewPostCleared: function() {
            return R
        },
        trackForumOnboardingClicked: function() {
            return P
        },
        trackForumPostClicked: function() {
            return D
        },
        trackForumPostCreated: function() {
            return C
        },
        trackForumPostLinkCopied: function() {
            return y
        },
        trackForumPostSidebarViewed: function() {
            return V
        },
        trackForumPreviewPostClicked: function() {
            return k
        },
        trackForumScrolled: function() {
            return g
        },
        trackForumSearchCleared: function() {
            return A
        },
        trackForumSearched: function() {
            return h
        },
        trackForumSortOrderUpdated: function() {
            return v
        },
        trackForumTagFilterClicked: function() {
            return m
        },
        trackForumUpsellModalClicked: function() {
            return U
        },
        trackForumUpsellModalViewed: function() {
            return x
        }
    });
    var i = n("313361"),
        r = n("367907"),
        s = n("731429"),
        a = n("188471"),
        o = n("592125"),
        l = n("703558"),
        u = n("626135"),
        d = n("358085"),
        _ = n("901648"),
        c = n("660189"),
        E = n("208970"),
        I = n("281301"),
        T = n("6496"),
        f = n("981631");

    function S(e) {
        let {
            guildId: t,
            channelId: n,
            sessionId: i,
            postIds: s,
            additionalTimes: a
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n,
                sessionId: i
            }),
            guild_id: t,
            channel_id: n,
            post_ids: s,
            additional_seen_time_millis: a
        })
    }

    function h(e) {
        let {
            guildId: t,
            channelId: n,
            numSearchResults: i
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            num_search_results: i
        })
    }

    function A(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function m(e) {
        let {
            guildId: t,
            channelId: n,
            tagId: i,
            filterTagIds: s,
            added: a,
            location: o
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            tag_id: i,
            filter_tag_ids: s,
            added: a,
            location: o
        })
    }

    function N(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function p(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function O(e) {
        var t, n, i, s;
        let {
            guildId: a,
            channelId: u
        } = e, d = o.default.getChannel(u);
        if (null == d) return;
        let _ = l.default.getThreadSettings(u),
            c = null === (t = d.template) || void 0 === t ? void 0 : t.trim(),
            E = l.default.getDraft(u, l.DraftType.FirstThreadMessage),
            I = null == E || 0 === E.length || (null == E ? void 0 : E.trim()) === c,
            S = (null == _ ? void 0 : _.appliedTags) == null || (null == _ ? void 0 : null === (n = _.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
            h = (null == _ ? void 0 : _.name) == null || (null == _ ? void 0 : null === (s = _.name) || void 0 === s ? void 0 : null === (i = s.trim()) || void 0 === i ? void 0 : i.length) === 0;
        (!I || !S || !h) && r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: u
            }),
            guild_id: a,
            channel_id: u,
            applied_tag_ids: (0, T.getForumPostDraftAppliedTagIds)(u),
            num_attachments: (0, T.getForumPostDraftNumAttachments)(u)
        })
    }

    function R(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function C(e) {
        let {
            guildId: t,
            channelId: n,
            postId: i
        } = e;

        function s() {
            r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, {
                ...(0, T.collectForumPostAnalyticsMetadata)({
                    channelId: i
                }),
                guild_id: t,
                channel_id: n
            })
        }
        c.default.isLoading(i) ? c.default.addConditionalChangeListener(() => !!c.default.isLoading(i) || (s(), !1)) : s()
    }

    function g(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n
        })
    }

    function L(e) {
        let {
            guildId: t,
            channelId: n,
            numArchivedThreads: i,
            hasMoreThreads: s,
            filterTagIds: a,
            sortOrder: l
        } = e;
        u.default.track(f.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, {
            ...(0, r.collectGuildAnalyticsMetadata)(t),
            ...(0, r.collectChannelAnalyticsMetadata)(o.default.getChannel(n)),
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            num_archived_threads: i,
            num_active_threads: (0, T.getNumActiveThreads)(t, n),
            has_more_threads: s,
            filter_tag_ids: a,
            sort_order: l
        })
    }

    function D(e) {
        let {
            guildId: t,
            channelId: n,
            postId: i,
            location: s
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, {
            ...(0, T.collectForumPostAnalyticsMetadata)({
                channelId: i
            }),
            guild_id: t,
            channel_id: n,
            is_search_result: null != E.default.getSearchResults(n),
            location: s
        })
    }

    function v(e) {
        let {
            guildId: t,
            channelId: n,
            sortOrder: i
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            sort_type: (0, T.convertSortOrderToReadableString)(i),
            sort_order: i,
            forum_channel_sort_order: i
        })
    }

    function M(e) {
        let {
            guildId: t,
            channelId: n,
            forumLayout: s
        } = e, a = (0, _.isForumActivityExperimentEnabled)(t) && s === i.ForumLayout.LIST ? I.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : s;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, {
            ...(0, T.collectForumAnalyticsMetadata)({
                channelId: n
            }),
            guild_id: t,
            channel_id: n,
            forum_channel_layout: a
        })
    }

    function y(e) {
        let {
            postId: t,
            location: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_POST_LINK_COPIED, {
            forum_post_id: t,
            location: n
        })
    }

    function P(e) {
        let {
            onboardingCTA: t
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
            onboarding_cta_type: t
        })
    }

    function U(e) {
        let {
            forumDemoId: t
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
            forum_demo_id: t
        })
    }

    function b(e) {
        let {
            added: t
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
            added: t
        })
    }

    function G(e) {
        let {
            readGuideCta: t
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
            read_guide_cta: t
        })
    }

    function w(e) {
        let {
            isMobile: t
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
            is_mobile: t
        })
    }

    function B() {
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
    }

    function k() {
        r.default.trackWithMetadata(f.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
    }

    function V(e) {
        r.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_OPENED, {
            ...(0, r.collectGuildAnalyticsMetadata)(e.guild_id),
            ...(0, r.collectChannelAnalyticsMetadata)(e),
            ...(0, s.collectThreadMetadata)(e, !0),
            ...(0, r.getChannelOpenedMetadata)(e.id),
            channel_view: "Split View",
            platform: (0, d.getPlatform)()
        }), (0, a.trackClickstream)(f.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
            channelId: e.id
        })
    }

    function x() {
        r.default.trackWithMetadata(f.AnalyticEvents.OPEN_MODAL, {
            type: "Forum Channel Upsell Modal",
            location: {
                section: f.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
        })
    }

    function F(e) {
        let {
            guildId: t,
            channelId: n
        } = e;
        r.default.trackWithMetadata(f.AnalyticEvents.THREAD_CREATION_STARTED, {
            ...(0, s.collectThreadMetadata)(o.default.getChannel(n)),
            channel_id: n,
            guild_id: t
        })
    }
}