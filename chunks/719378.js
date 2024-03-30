function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        maybeTrackForumNewPostDraftCreated: function() {
            return A
        },
        trackForumAddMediaToOriginalPostClicked: function() {
            return k
        },
        trackForumChannelMediaUploaderClicked: function() {
            return B
        },
        trackForumChannelSeenBatch: function() {
            return h
        },
        trackForumCreateNewPostClick: function() {
            return v
        },
        trackForumCreateNewPostKeybindUsed: function() {
            return g
        },
        trackForumCreateNewPostStarted: function() {
            return x
        },
        trackForumEnableAutomodClicked: function() {
            return j
        },
        trackForumHelperCardClicked: function() {
            return G
        },
        trackForumLayoutUpdated: function() {
            return L
        },
        trackForumMorePostsLoaded: function() {
            return C
        },
        trackForumNewPostCleared: function() {
            return b
        },
        trackForumOnboardingClicked: function() {
            return U
        },
        trackForumPostClicked: function() {
            return P
        },
        trackForumPostCreated: function() {
            return N
        },
        trackForumPostLinkCopied: function() {
            return M
        },
        trackForumPostSidebarViewed: function() {
            return V
        },
        trackForumPreviewPostClicked: function() {
            return F
        },
        trackForumScrolled: function() {
            return R
        },
        trackForumSearchCleared: function() {
            return T
        },
        trackForumSearched: function() {
            return O
        },
        trackForumSortOrderUpdated: function() {
            return D
        },
        trackForumTagFilterClicked: function() {
            return S
        },
        trackForumUpsellModalClicked: function() {
            return w
        },
        trackForumUpsellModalViewed: function() {
            return H
        }
    });
    var r = n("194864"),
        o = n("140817"),
        i = n("208885"),
        a = n("936430"),
        u = n("935741"),
        s = n("309944"),
        l = n("870331"),
        c = n("374550"),
        f = n("426166"),
        d = n("566600"),
        _ = n("770331"),
        E = n("576988"),
        p = n("805393"),
        m = n("281767");

    function y(e) {
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

    function I(e, t) {
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

    function h(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.sessionId,
            i = e.postIds,
            a = e.additionalTimes;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_SEEN_BATCH, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n,
            sessionId: r
        })), {
            guild_id: t,
            channel_id: n,
            post_ids: i,
            additional_seen_time_millis: a
        }))
    }

    function O(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.numSearchResults;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_SEARCHED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n,
            num_search_results: r
        }))
    }

    function T(e) {
        var t = e.guildId,
            n = e.channelId;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_SEARCH_CLEARED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n
        }))
    }

    function S(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.tagId,
            i = e.filterTagIds,
            a = e.added,
            u = e.location;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_TAG_FILTER_CLICKED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n,
            tag_id: r,
            filter_tag_ids: i,
            added: a,
            location: u
        }))
    }

    function v(e) {
        var t = e.guildId,
            n = e.channelId;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n
        }))
    }

    function g(e) {
        var t = e.guildId,
            n = e.channelId;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n
        }))
    }

    function A(e) {
        var t, n, r, i, a = e.guildId,
            l = e.channelId,
            c = u.default.getChannel(l);
        if (null != c) {
            var f = s.default.getThreadSettings(l),
                d = null === (t = c.template) || void 0 === t ? void 0 : t.trim(),
                _ = s.default.getDraft(l, s.DraftType.FirstThreadMessage),
                E = null == _ || 0 === _.length || (null == _ ? void 0 : _.trim()) === d,
                h = (null == f ? void 0 : f.appliedTags) == null || (null == f ? void 0 : null === (n = f.appliedTags) || void 0 === n ? void 0 : n.size) === 0,
                O = (null == f ? void 0 : f.name) == null || (null == f ? void 0 : null === (i = f.name) || void 0 === i ? void 0 : null === (r = i.trim()) || void 0 === r ? void 0 : r.length) === 0;
            (!E || !h || !O) && o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
                channelId: l
            })), {
                guild_id: a,
                channel_id: l,
                applied_tag_ids: (0, p.getForumPostDraftAppliedTagIds)(l),
                num_attachments: (0, p.getForumPostDraftNumAttachments)(l)
            }))
        }
    }

    function b(e) {
        var t = e.guildId,
            n = e.channelId;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n
        }))
    }

    function N(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.postId;

        function i() {
            o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_POST_CREATED, I(y({}, (0, p.collectForumPostAnalyticsMetadata)({
                channelId: r
            })), {
                guild_id: t,
                channel_id: n
            }))
        }
        d.default.isLoading(r) ? d.default.addConditionalChangeListener(function() {
            return !!d.default.isLoading(r) || (i(), !1)
        }) : i()
    }

    function R(e) {
        var t = e.guildId,
            n = e.channelId;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_SCROLLED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n
        }))
    }

    function C(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.numArchivedThreads,
            i = e.hasMoreThreads,
            a = e.filterTagIds,
            s = e.sortOrder;
        l.default.track(m.AnalyticEvents.FORUM_CHANNEL_MORE_POSTS_LOADED, I(y({}, (0, o.collectGuildAnalyticsMetadata)(t), (0, o.collectChannelAnalyticsMetadata)(u.default.getChannel(n)), (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n,
            num_archived_threads: r,
            num_active_threads: (0, p.getNumActiveThreads)(t, n),
            has_more_threads: i,
            filter_tag_ids: a,
            sort_order: s
        }))
    }

    function P(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.postId,
            i = e.location;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_POST_CLICKED, I(y({}, (0, p.collectForumPostAnalyticsMetadata)({
            channelId: r
        })), {
            guild_id: t,
            channel_id: n,
            is_search_result: null != _.default.getSearchResults(n),
            location: i
        }))
    }

    function D(e) {
        var t = e.guildId,
            n = e.channelId,
            r = e.sortOrder;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_POSTS_SORTED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n,
            sort_type: (0, p.convertSortOrderToReadableString)(r),
            sort_order: r,
            forum_channel_sort_order: r
        }))
    }

    function L(e) {
        var t = e.guildId,
            n = e.channelId,
            i = e.forumLayout,
            a = (0, f.isForumActivityExperimentEnabled)(t) && i === r.ForumLayout.LIST ? E.INCREASED_ACTIVITY_LIST_FORUM_LAYOUT : i;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_LAYOUT_UPDATED, I(y({}, (0, p.collectForumAnalyticsMetadata)({
            channelId: n
        })), {
            guild_id: t,
            channel_id: n,
            forum_channel_layout: a
        }))
    }

    function M(e) {
        var t = e.postId,
            n = e.location;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_POST_LINK_COPIED, {
            forum_post_id: t,
            location: n
        })
    }

    function U(e) {
        var t = e.onboardingCTA;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_ONBOARDING_CLICKED, {
            onboarding_cta_type: t
        })
    }

    function w(e) {
        var t = e.forumDemoId;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_UPSELL_MODAL_CLICKED, {
            forum_demo_id: t
        })
    }

    function k(e) {
        var t = e.added;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED, {
            added: t
        })
    }

    function G(e) {
        var t = e.readGuideCta;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_HELPER_CARD_CLICKED, {
            read_guide_cta: t
        })
    }

    function B(e) {
        var t = e.isMobile;
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED, {
            is_mobile: t
        })
    }

    function j() {
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED)
    }

    function F() {
        o.default.trackWithMetadata(m.AnalyticEvents.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED)
    }

    function V(e) {
        o.default.trackWithMetadata(m.AnalyticEvents.CHANNEL_OPENED, I(y({}, (0, o.collectGuildAnalyticsMetadata)(e.guild_id), (0, o.collectChannelAnalyticsMetadata)(e), (0, i.collectThreadMetadata)(e, !0), (0, o.getChannelOpenedMetadata)(e.id)), {
            channel_view: "Split View",
            platform: (0, c.getPlatform)()
        })), (0, a.trackClickstream)(m.AnalyticEvents.CHANNEL_OPENED_CLICKSTREAM, {
            channelId: e.id
        })
    }

    function H() {
        o.default.trackWithMetadata(m.AnalyticEvents.OPEN_MODAL, {
            type: "Forum Channel Upsell Modal",
            location: {
                section: m.AnalyticsSections.CHANNEL_WELCOME_CTA
            }
        })
    }

    function x(e) {
        var t = e.guildId,
            n = e.channelId;
        o.default.trackWithMetadata(m.AnalyticEvents.THREAD_CREATION_STARTED, I(y({}, (0, i.collectThreadMetadata)(u.default.getChannel(n))), {
            channel_id: n,
            guild_id: t
        }))
    }
}