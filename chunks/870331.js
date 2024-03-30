function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AnalyticEventConfigs: function() {
            return R
        },
        AnalyticsContext: function() {
            return v
        },
        AnalyticsSchema: function() {
            return _
        },
        addExtraAnalyticsDecorator: function() {
            return N
        },
        debugLogEvent: function() {
            return U
        },
        expandEventProperties: function() {
            return M
        },
        expandLocation: function() {
            return C
        },
        setUTMContext: function() {
            return L
        },
        trackNetworkAction: function() {
            return k
        }
    });
    var r, o, i, a = n("470079"),
        u = n("383959"),
        s = n("629815"),
        l = n("614354"),
        c = n("887840"),
        f = n("363175"),
        d = n("306191"),
        _ = n("856257"),
        E = n("752701"),
        p = n("285910"),
        m = n("281767"),
        y = n("748476"),
        I = n("941504");

    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {},
                i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) {
                if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
        }
        return o
    }
    var v = a.createContext({
            location: {}
        }),
        g = {},
        A = performance.now(),
        b = [];

    function N(e) {
        b.push(e)
    }
    var R = (O(i = {}, m.AnalyticEvents.APP_OPENED, {
        throttlePeriod: 3e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.APP_BACKGROUND, {
        throttlePeriod: 12e4,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.ACK_MESSAGES, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.guild_id, e.channel_id, e.location_section]
        }
    }), O(i, m.AnalyticEvents.GUILD_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.guild_id, e.is_pending]
        }
    }), O(i, m.AnalyticEvents.FRIENDS_LIST_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.tab_opened]
        }
    }), O(i, m.AnalyticEvents.NOW_PLAYING_CARD_HOVERED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.tab_opened]
        }
    }), O(i, m.AnalyticEvents.START_SPEAKING, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.server]
        }
    }), O(i, m.AnalyticEvents.START_LISTENING, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.server]
        }
    }), O(i, m.AnalyticEvents.ACTIVITY_UPDATED, {
        throttlePeriod: 6e4,
        throttleKeys: function(e) {
            return [e.application_id]
        },
        deduplicate: !0
    }), O(i, m.AnalyticEvents.CHANNEL_OPENED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return null != e.channel_static_route ? [e.guild_id, e.channel_static_route, e.channel_view] : [e.channel_id, e.channel_view]
        }
    }), O(i, m.AnalyticEvents.TEXT_IN_VOICE_OPENED, {
        throttlePeriod: 864e5,
        throttleKeys: function(e) {
            return [e.channel_id]
        }
    }), O(i, m.AnalyticEvents.NOTIFICATION_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.notif_type]
        }
    }), O(i, m.AnalyticEvents.MEMBER_LIST_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.channel_id]
        }
    }), O(i, m.AnalyticEvents.DM_LIST_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.channel_id]
        }
    }), O(i, m.AnalyticEvents.NAV_DRAWER_OPENED, {
        throttlePeriod: 9e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
        throttlePeriod: 12e4,
        throttleKeys: function(e) {
            var t, n;
            return [e.shortcut_name, e.location_object].concat(function(e) {
                if (Array.isArray(e)) return h(e)
            }(n = null !== (t = e.source_class_list) && void 0 !== t ? t : []) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }(n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return h(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return h(e, t)
                }
            }(n) || function() {
                throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }())
        }
    }), O(i, m.AnalyticEvents.QUICKSWITCHER_OPENED, {
        throttlePeriod: 1e4,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.type]
        }
    }), O(i, m.AnalyticEvents.ROLE_PAGE_VIEWED, {
        throttlePeriod: 12e4,
        throttleKeys: function(e) {
            return [e.role_id, e.tab_opened]
        }
    }), O(i, m.AnalyticEvents.VIDEO_INPUT_INITIALIZED, {
        throttlePeriod: 3e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.HUB_ONBOARDING_CAROUSEL_SCROLLED, {
        throttlePeriod: 9e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.HUB_STUDENT_PROMPT_CLICKED, {
        throttlePeriod: 9e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.RPC_SERVER_ERROR_CAUGHT, {
        throttlePeriod: 864e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.RPC_COMMAND_SENT, {
        throttlePeriod: 864e5,
        throttleKeys: function(e) {
            return [e.application_id, e.command]
        },
        throttlePercent: .001
    }), O(i, m.AnalyticEvents.RPC_SUBSCRIPTION_REQUESTED, {
        throttlePeriod: 864e5,
        throttleKeys: function(e) {
            return [e.application_id, e.event]
        },
        throttlePercent: .001
    }), O(i, m.AnalyticEvents.CHANNEL_BANNER_VIEWED, {
        throttlePeriod: 864e5,
        throttleKeys: function(e) {
            return [e.banner_type, e.channel_id]
        }
    }), O(i, m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        throttlePeriod: 6e4,
        throttleKeys: function(e) {
            return [e.type]
        }
    }), O(i, m.AnalyticEvents.CHANNEL_HIGHLIGHTS_VIEWED, {
        throttlePeriod: 36e5,
        throttleKeys: function(e) {
            return [e.guild_id, e.channel_id]
        }
    }), O(i, m.AnalyticEvents.GUILD_CHANNEL_HIGHLIGHTS_LOADED, {
        throttlePeriod: 36e5,
        throttleKeys: function(e) {
            return [e.guild_id]
        }
    }), O(i, m.AnalyticEvents.FORUM_CHANNEL_SEARCHED, {
        throttlePeriod: 6e4,
        throttleKeys: function(e) {
            return [e.guild_id, e.channel_id]
        }
    }), O(i, m.AnalyticEvents.FORUM_CHANNEL_SCROLLED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.guild_id, e.channel_id]
        }
    }), O(i, m.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED, {
        throttlePeriod: 6e4,
        throttleKeys: function(e) {
            return [e.user_id]
        }
    }), O(i, m.AnalyticEvents.DM_PROFILE_VIEWED, {
        throttlePeriod: 36e5,
        throttleKeys: function(e) {
            return [e.viewed_profile_user_id]
        }
    }), O(i, m.AnalyticEvents.MEDIA_VIEWER_SESSION_COMPLETED, {
        throttlePercent: .01
    }), O(i, m.AnalyticEvents.SUMMARIES_UNREAD_BAR_VIEWED, {
        throttlePeriod: 3e5,
        throttleKeys: function(e) {
            return [e.channel_id]
        }
    }), O(i, m.AnalyticEvents.ACTIVITY_CARDS_VIEWED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.context, e.guild_id]
        }
    }), O(i, m.AnalyticEvents.ACK_COMMUNITY_MESSAGES, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.channel_id]
        }
    }), O(i, m.AnalyticEvents.REDESIGN_NAV_BAR_CLICKED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.tab]
        }
    }), O(i, m.AnalyticEvents.BROADCAST_START_BUTTON_HOVERED, {
        throttlePeriod: 6e4,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.BROADCAST_LIST_VISITED, {
        throttlePeriod: 3e5,
        throttleKeys: function() {
            return []
        }
    }), O(i, m.AnalyticEvents.CHANNEL_LIST_END_REACHED, {
        throttlePeriod: 9e5,
        throttleKeys: function(e) {
            return [e.guild_id]
        }
    }), O(i, m.AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, {
        throttlePeriod: 6e4,
        throttleKeys: function(e) {
            return [e.guild_id, e.channel_id]
        }
    }), O(i, m.AnalyticEvents.LIVE_ACTIVITY_SETTINGS_UPDATED, {
        throttlePeriod: 36e5,
        throttleKeys: function() {
            return []
        }
    }), i);

    function C(e) {
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
    var P = function() {
            return y.AccessibilityFeatureFlags.NONE
        },
        D = (0, u.trackMaker)({
            analyticEventConfigs: R,
            dispatcher: s.default,
            TRACK_ACTION_NAME: "TRACK"
        });

    function L(e) {
        return g = e
    }

    function M(e) {
        var t, n, r, o, i = e;
        if (!i && (i = {}), null != i.location) {
            var a = i.location;
            i = T({}, S(i, ["location"]), C(a))
        }
        if (null != i.source) {
            var u, s = i.source;
            i = T({}, S(i, ["source"]), "string" == typeof(u = s) ? {
                source: u
            } : {
                source_page: u.page,
                source_section: u.section,
                source_object: u.object,
                source_object_type: u.objectType,
                source_promotion_id: u.promotionId
            })
        }
        i.client_performance_cpu = E.default.getCurrentCPUUsagePercent(), i.client_performance_memory = E.default.getCurrentMemoryUsageKB(), i.cpu_core_count = E.default.getCPUCoreCount(), i.accessibility_features = P(), i.rendered_locale = I.default.getLocale(), i.uptime_app = Math.floor((performance.now() - A) / 1e3);
        var l = E.default.getProcessUptime();
        null != l && (i.uptime_process_renderer = Math.floor(l));
        var c = g.utmSource,
            f = g.utmMedium,
            d = g.utmCampaign,
            _ = g.utmContent;
        return i.utm_source = null !== (t = i.utm_source) && void 0 !== t ? t : c, i.utm_medium = null !== (n = i.utm_medium) && void 0 !== n ? n : f, i.utm_campaign = null !== (r = i.utm_campaign) && void 0 !== r ? r : d, i.utm_content = null !== (o = i.utm_content) && void 0 !== o ? o : _, b.forEach(function(e) {
            return e(i)
        }), i
    }

    function U(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        d.default.isLoggingAnalyticsEvents && console.info("AnalyticsUtils.track(...):", e, t), n ? c.report("Analytics", e, t) : c.report("Analytics", e)
    }
    var w = (0, u.trackMaker)({
        analyticEventConfigs: R,
        dispatcher: s.default,
        TRACK_ACTION_NAME: "TRACK"
    });

    function k(e, t) {
        var n = M(T({
            location: (0, l.getLocation)()
        }, t));
        (0, l.setDebugTrackedData)(e, T({
            type: "action"
        }, t)), U(e, n), w(e, n)
    }
    t.default = (r = T({}, u), o = (o = {
        getCampaignParams: u.getCampaignParams,
        setSystemAccessibilityFeatures: function(e) {
            P = e
        },
        expandEventProperties: M,
        track: function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!f.IGNORE_ANALYTICS_BREADCRUMB_EVENTS.includes(e) && p.default.addBreadcrumb({
                    category: "analytics",
                    message: "".concat(e)
                }), null != n.throttlePercent && Math.random() > n.throttlePercent) return Promise.resolve();
            var r = M(t);
            return U(e, r, n.logEventProperties), D(e, r, {
                flush: n.flush,
                fingerprint: n.fingerprint
            })
        }
    }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(o)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e))
    }), r)
}