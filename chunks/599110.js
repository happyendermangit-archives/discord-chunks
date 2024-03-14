function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticsContext: function() {
            return g
        },
        addExtraAnalyticsDecorator: function() {
            return v
        },
        AnalyticEventConfigs: function() {
            return T
        },
        expandLocation: function() {
            return I
        },
        setUTMContext: function() {
            return y
        },
        expandEventProperties: function() {
            return N
        },
        debugLogEvent: function() {
            return R
        },
        trackNetworkAction: function() {
            return D
        },
        AnalyticsSchema: function() {
            return d
        },
        default: function() {
            return P
        }
    }), n("424973"), n("222007");
    var i = n("884691"),
        s = n("759843"),
        r = n("913144"),
        a = n("939011"),
        o = n("821316"),
        l = n("316217"),
        u = n("313915"),
        d = n("870623"),
        c = n("872507"),
        f = n("286235"),
        _ = n("49111"),
        E = n("727538"),
        h = n("782340");
    let g = i.createContext({
            location: {}
        }),
        m = {},
        p = performance.now(),
        S = [];

    function v(e) {
        S.push(e)
    }
    let T = {
        [_.AnalyticEvents.APP_OPENED]: {
            throttlePeriod: 3e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.APP_BACKGROUND]: {
            throttlePeriod: 12e4,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.ACK_MESSAGES]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
        },
        [_.AnalyticEvents.GUILD_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id, e.is_pending]
        },
        [_.AnalyticEvents.FRIENDS_LIST_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.tab_opened]
        },
        [_.AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.tab_opened]
        },
        [_.AnalyticEvents.START_SPEAKING]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.server]
        },
        [_.AnalyticEvents.START_LISTENING]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.server]
        },
        [_.AnalyticEvents.ACTIVITY_UPDATED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.application_id],
            deduplicate: !0
        },
        [_.AnalyticEvents.CHANNEL_OPENED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
        },
        [_.AnalyticEvents.TEXT_IN_VOICE_OPENED]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.channel_id]
        },
        [_.AnalyticEvents.NOTIFICATION_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.notif_type]
        },
        [_.AnalyticEvents.MEMBER_LIST_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.channel_id]
        },
        [_.AnalyticEvents.DM_LIST_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.channel_id]
        },
        [_.AnalyticEvents.NAV_DRAWER_OPENED]: {
            throttlePeriod: 9e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.KEYBOARD_SHORTCUT_USED]: {
            throttlePeriod: 12e4,
            throttleKeys: e => {
                var t;
                return [e.shortcut_name, e.location_object, ...null !== (t = e.source_class_list) && void 0 !== t ? t : []]
            }
        },
        [_.AnalyticEvents.QUICKSWITCHER_OPENED]: {
            throttlePeriod: 1e4,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.type]
        },
        [_.AnalyticEvents.ROLE_PAGE_VIEWED]: {
            throttlePeriod: 12e4,
            throttleKeys: e => [e.role_id, e.tab_opened]
        },
        [_.AnalyticEvents.VIDEO_INPUT_INITIALIZED]: {
            throttlePeriod: 3e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
            throttlePeriod: 9e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: {
            throttlePeriod: 9e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: {
            throttlePeriod: 864e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.RPC_COMMAND_SENT]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.application_id, e.command],
            throttlePercent: .001
        },
        [_.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.application_id, e.event],
            throttlePercent: .001
        },
        [_.AnalyticEvents.CHANNEL_BANNER_VIEWED]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.banner_type, e.channel_id]
        },
        [_.AnalyticEvents.PREMIUM_UPSELL_VIEWED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.type]
        },
        [_.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED]: {
            throttlePeriod: 36e5,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [_.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED]: {
            throttlePeriod: 36e5,
            throttleKeys: e => [e.guild_id]
        },
        [_.AnalyticEvents.FORUM_CHANNEL_SEARCHED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [_.AnalyticEvents.FORUM_CHANNEL_SCROLLED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [_.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.user_id]
        },
        [_.AnalyticEvents.DM_PROFILE_VIEWED]: {
            throttlePeriod: 36e5,
            throttleKeys: e => [e.viewed_profile_user_id]
        },
        [_.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: {
            throttlePercent: .01
        },
        [_.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: {
            throttlePeriod: 3e5,
            throttleKeys: e => [e.channel_id]
        },
        [_.AnalyticEvents.ACTIVITY_CARDS_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.context, e.guild_id]
        },
        [_.AnalyticEvents.ACK_COMMUNITY_MESSAGES]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.channel_id]
        },
        [_.AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.tab]
        },
        [_.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED]: {
            throttlePeriod: 6e4,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.BROADCAST_LIST_VISITED]: {
            throttlePeriod: 3e5,
            throttleKeys: () => []
        },
        [_.AnalyticEvents.CHANNEL_LIST_END_REACHED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id]
        },
        [_.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [_.AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
            throttlePeriod: 36e5,
            throttleKeys: () => []
        }
    };

    function I(e) {
        return "string" == typeof e ? {
            location: e
        } : {
            location: e.page,
            location_page: e.page,
            location_section: e.section,
            location_object: e.object,
            location_object_type: e.objectType
        }
    }
    let C = () => E.AccessibilityFeatureFlags.NONE,
        A = (0, s.trackMaker)({
            analyticEventConfigs: T,
            dispatcher: r.default,
            TRACK_ACTION_NAME: "TRACK"
        });

    function y(e) {
        return m = e
    }

    function N(e) {
        var t, n, i, s, r;
        let a = e;
        if (!a && (a = {}), null != a.location) {
            let {
                location: e,
                ...t
            } = a;
            a = {
                ...t,
                ...I(e)
            }
        }
        if (null != a.source) {
            ;
            let {
                source: e,
                ...t
            } = a;
            a = {
                ...t,
                ..."string" == typeof(r = e) ? {
                    source: r
                } : {
                    source_page: r.page,
                    source_section: r.section,
                    source_object: r.object,
                    source_object_type: r.objectType,
                    source_promotion_id: r.promotionId
                }
            }
        }
        a.client_performance_cpu = c.default.getCurrentCPUUsagePercent(), a.client_performance_memory = c.default.getCurrentMemoryUsageKB(), a.cpu_core_count = c.default.getCPUCoreCount(), a.accessibility_features = C(), a.rendered_locale = h.default.getLocale(), a.uptime_app = Math.floor((performance.now() - p) / 1e3);
        let o = c.default.getProcessUptime();
        null != o && (a.uptime_process_renderer = Math.floor(o));
        let {
            utmSource: l,
            utmMedium: u,
            utmCampaign: d,
            utmContent: f
        } = m;
        return a.utm_source = null !== (t = a.utm_source) && void 0 !== t ? t : l, a.utm_medium = null !== (n = a.utm_medium) && void 0 !== n ? n : u, a.utm_campaign = null !== (i = a.utm_campaign) && void 0 !== i ? i : d, a.utm_content = null !== (s = a.utm_content) && void 0 !== s ? s : f, S.forEach(e => e(a)), a
    }

    function R(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        u.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? o.report("Analytics", e, t) : o.report("Analytics", e)
    }
    let O = (0, s.trackMaker)({
        analyticEventConfigs: T,
        dispatcher: r.default,
        TRACK_ACTION_NAME: "TRACK"
    });

    function D(e, t) {
        let n = (0, a.getLocation)(),
            i = N({
                location: n,
                ...t
            });
        (0, a.setDebugTrackedData)(e, {
            type: "action",
            ...t
        }), R(e, i), O(e, i)
    }
    var P = {
        ...s.default,
        getCampaignParams: s.getCampaignParams,
        setSystemAccessibilityFeatures: function(e) {
            C = e
        },
        expandEventProperties: N,
        track: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!l.IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(e) && f.default.addBreadcrumb({
                    category: "analytics",
                    message: "".concat(e)
                }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
            let i = N(t);
            return R(e, i, n.logEventProperties), A(e, i, {
                flush: n.flush,
                fingerprint: n.fingerprint
            })
        }
    }
}