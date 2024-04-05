function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticEventConfigs: function() {
            return N
        },
        AnalyticsContext: function() {
            return f
        },
        AnalyticsSchema: function() {
            return d
        },
        addExtraAnalyticsDecorator: function() {
            return m
        },
        debugLogEvent: function() {
            return L
        },
        expandEventProperties: function() {
            return g
        },
        expandLocation: function() {
            return O
        },
        setUTMContext: function() {
            return C
        },
        trackNetworkAction: function() {
            return v
        }
    }), n("653041"), n("47120");
    var i = n("470079"),
        r = n("990547"),
        s = n("570140"),
        a = n("565384"),
        o = n("569611"),
        l = n("97145"),
        u = n("857192"),
        d = n("747161"),
        _ = n("848479"),
        c = n("960048"),
        E = n("981631"),
        I = n("94752"),
        T = n("689938");
    let f = i.createContext({
            location: {}
        }),
        S = {},
        A = performance.now(),
        h = [];

    function m(e) {
        h.push(e)
    }
    let N = {
        [E.AnalyticEvents.APP_OPENED]: {
            throttlePeriod: 3e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.APP_BACKGROUND]: {
            throttlePeriod: 12e4,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.ACK_MESSAGES]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id, e.channel_id, e.location_section]
        },
        [E.AnalyticEvents.GUILD_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id, e.is_pending]
        },
        [E.AnalyticEvents.FRIENDS_LIST_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.tab_opened]
        },
        [E.AnalyticEvents.NOW_PLAYING_CARD_HOVERED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.tab_opened]
        },
        [E.AnalyticEvents.START_SPEAKING]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.server]
        },
        [E.AnalyticEvents.START_LISTENING]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.server]
        },
        [E.AnalyticEvents.ACTIVITY_UPDATED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.application_id],
            deduplicate: !0
        },
        [E.AnalyticEvents.CHANNEL_OPENED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
        },
        [E.AnalyticEvents.TEXT_IN_VOICE_OPENED]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.channel_id]
        },
        [E.AnalyticEvents.NOTIFICATION_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.notif_type]
        },
        [E.AnalyticEvents.MEMBER_LIST_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.channel_id]
        },
        [E.AnalyticEvents.DM_LIST_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.channel_id]
        },
        [E.AnalyticEvents.NAV_DRAWER_OPENED]: {
            throttlePeriod: 9e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.KEYBOARD_SHORTCUT_USED]: {
            throttlePeriod: 12e4,
            throttleKeys: e => {
                var t;
                return [e.shortcut_name, e.location_object, ...null !== (t = e.source_class_list) && void 0 !== t ? t : []]
            }
        },
        [E.AnalyticEvents.QUICKSWITCHER_OPENED]: {
            throttlePeriod: 1e4,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.type]
        },
        [E.AnalyticEvents.ROLE_PAGE_VIEWED]: {
            throttlePeriod: 12e4,
            throttleKeys: e => [e.role_id, e.tab_opened]
        },
        [E.AnalyticEvents.VIDEO_INPUT_INITIALIZED]: {
            throttlePeriod: 3e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED]: {
            throttlePeriod: 9e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED]: {
            throttlePeriod: 9e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT]: {
            throttlePeriod: 864e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.RPC_COMMAND_SENT]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.application_id, e.command],
            throttlePercent: .001
        },
        [E.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.application_id, e.event],
            throttlePercent: .001
        },
        [E.AnalyticEvents.CHANNEL_BANNER_VIEWED]: {
            throttlePeriod: 864e5,
            throttleKeys: e => [e.banner_type, e.channel_id]
        },
        [E.AnalyticEvents.PREMIUM_UPSELL_VIEWED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.type]
        },
        [E.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED]: {
            throttlePeriod: 36e5,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [E.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED]: {
            throttlePeriod: 36e5,
            throttleKeys: e => [e.guild_id]
        },
        [E.AnalyticEvents.FORUM_CHANNEL_SEARCHED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [E.AnalyticEvents.FORUM_CHANNEL_SCROLLED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [E.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.user_id]
        },
        [E.AnalyticEvents.DM_PROFILE_VIEWED]: {
            throttlePeriod: 36e5,
            throttleKeys: e => [e.viewed_profile_user_id]
        },
        [E.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED]: {
            throttlePercent: .01
        },
        [E.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED]: {
            throttlePeriod: 3e5,
            throttleKeys: e => [e.channel_id]
        },
        [E.AnalyticEvents.ACTIVITY_CARDS_VIEWED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.context, e.guild_id]
        },
        [E.AnalyticEvents.ACK_COMMUNITY_MESSAGES]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.channel_id]
        },
        [E.AnalyticEvents.REDESIGN_NAV_BAR_CLICKED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.tab]
        },
        [E.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED]: {
            throttlePeriod: 6e4,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.BROADCAST_LIST_VISITED]: {
            throttlePeriod: 3e5,
            throttleKeys: () => []
        },
        [E.AnalyticEvents.CHANNEL_LIST_END_REACHED]: {
            throttlePeriod: 9e5,
            throttleKeys: e => [e.guild_id]
        },
        [E.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED]: {
            throttlePeriod: 6e4,
            throttleKeys: e => [e.guild_id, e.channel_id]
        },
        [E.AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED]: {
            throttlePeriod: 36e5,
            throttleKeys: () => []
        }
    };

    function O(e) {
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
    let p = () => I.AccessibilityFeatureFlags.NONE,
        R = (0, r.trackMaker)({
            analyticEventConfigs: N,
            dispatcher: s.default,
            TRACK_ACTION_NAME: "TRACK"
        });

    function C(e) {
        return S = e
    }

    function g(e) {
        var t, n, i, r, s;
        let a = e;
        if (!a && (a = {}), null != a.location) {
            let {
                location: e,
                ...t
            } = a;
            a = {
                ...t,
                ...O(e)
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
                ..."string" == typeof(s = e) ? {
                    source: s
                } : {
                    source_page: s.page,
                    source_section: s.section,
                    source_object: s.object,
                    source_object_type: s.objectType,
                    source_promotion_id: s.promotionId
                }
            }
        }
        a.client_performance_cpu = _.default.getCurrentCPUUsagePercent(), a.client_performance_memory = _.default.getCurrentMemoryUsageKB(), a.cpu_core_count = _.default.getCPUCoreCount(), a.accessibility_features = p(), a.rendered_locale = T.default.getLocale(), a.uptime_app = Math.floor((performance.now() - A) / 1e3);
        let o = _.default.getProcessUptime();
        null != o && (a.uptime_process_renderer = Math.floor(o));
        let {
            utmSource: l,
            utmMedium: u,
            utmCampaign: d,
            utmContent: c
        } = S;
        return a.utm_source = null !== (t = a.utm_source) && void 0 !== t ? t : l, a.utm_medium = null !== (n = a.utm_medium) && void 0 !== n ? n : u, a.utm_campaign = null !== (i = a.utm_campaign) && void 0 !== i ? i : d, a.utm_content = null !== (r = a.utm_content) && void 0 !== r ? r : c, h.forEach(e => e(a)), a
    }

    function L(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        u.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? o.report("Analytics", e, t) : o.report("Analytics", e)
    }
    let D = (0, r.trackMaker)({
        analyticEventConfigs: N,
        dispatcher: s.default,
        TRACK_ACTION_NAME: "TRACK"
    });

    function v(e, t) {
        let n = g({
            location: (0, a.getLocation)(),
            ...t
        });
        (0, a.setDebugTrackedData)(e, {
            type: "action",
            ...t
        }), L(e, n), D(e, n)
    }
    t.default = {
        ...r,
        getCampaignParams: r.getCampaignParams,
        setSystemAccessibilityFeatures: function(e) {
            p = e
        },
        expandEventProperties: g,
        track: function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!l.IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(e) && c.default.addBreadcrumb({
                    category: "analytics",
                    message: "".concat(e)
                }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
            let i = g(t);
            return L(e, i, n.logEventProperties), R(e, i, {
                flush: n.flush,
                fingerprint: n.fingerprint
            })
        }
    }
}