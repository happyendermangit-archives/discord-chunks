function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildFeedRenderSelectorExperiment: function() {
            return E
        },
        GuildHomeBadgeExperiment: function() {
            return p
        },
        GuildHomeDeprecationExperiment: function() {
            return y
        },
        GuildHomeFeedbackExperiment: function() {
            return m
        },
        canSeeGuildHome: function() {
            return _
        },
        useGuildHomeExperiment: function() {
            return d
        }
    });
    var r = n("898511"),
        o = n("291178"),
        i = n("94498"),
        a = n("895517"),
        u = n("709537"),
        s = n("29604"),
        l = n("306912"),
        c = n("281767");

    function f(e, t, n) {
        return t.getChannels(e)[s.GUILD_SELECTABLE_CHANNELS_KEY].filter(function(t) {
            var r = t.channel;
            return !n.isChannelGated(e, r.id)
        }).length > 5
    }

    function d(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var t = (0, r.useStateFromStores)([s.default, o.default], function() {
            return null != e && f(e.id, s.default, o.default)
        });
        return !__OVERLAY__ && !!t && null != e && e.hasFeature(c.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
    }

    function _(e) {
        if (__OVERLAY__ || e === c.ME || e === c.FAVORITES || (0, a.isInMainTabsExperiment)() && !(0, u.isOnNewPanels)()) return !1;
        var t = l.default.getGuild(e);
        return !!(null != t && f(e, s.default, o.default)) && t.hasFeature(c.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
    }
    var E = (0, i.createExperiment)({
            kind: "user",
            id: "2022-01_home_feed_toggle",
            label: "Show Guild Feed Sorting Selector",
            defaultConfig: {
                showSelector: !1
            },
            treatments: [{
                id: 1,
                label: "Yes Selector",
                config: {
                    showSelector: !0
                }
            }]
        }),
        p = (0, i.createExperiment)({
            kind: "user",
            id: "2022-08_home_badge",
            label: "Show badge on home channel",
            defaultConfig: {
                showBadge: !1
            },
            treatments: [{
                id: 1,
                label: "show badge",
                config: {
                    showBadge: !0
                }
            }]
        });
    (0, i.createExperiment)({
        kind: "user",
        id: "2022-08_home_drawer_autoclose",
        label: "Auto close home drawer",
        defaultConfig: {
            autoCloseDrawer: !1,
            animation: !1,
            delay: null
        },
        treatments: [{
            id: 1,
            label: "normal animation",
            config: {
                autoCloseDrawer: !0,
                animation: !0,
                delay: null
            }
        }, {
            id: 2,
            label: "no animate",
            config: {
                autoCloseDrawer: !0,
                animation: !1,
                delay: null
            }
        }, {
            id: 3,
            label: "150 delayed animation",
            config: {
                autoCloseDrawer: !0,
                animation: !0,
                delay: 150
            }
        }, {
            id: 4,
            label: "250 delayed animation",
            config: {
                autoCloseDrawer: !0,
                animation: !0,
                delay: 250
            }
        }, {
            id: 5,
            label: "500 delayed animation",
            config: {
                autoCloseDrawer: !0,
                animation: !0,
                delay: 500
            }
        }]
    }), (0, i.createExperiment)({
        kind: "user",
        id: "2022-09_welcome_header",
        label: "Show welcome header for home",
        defaultConfig: {
            showWelcomeHeader: !1
        },
        treatments: [{
            id: 1,
            label: "show welcome header",
            config: {
                showWelcomeHeader: !0
            }
        }]
    });
    var m = (0, i.createExperiment)({
            kind: "user",
            id: "2022-12_home_feedback_ux",
            label: "Show post feedback for home",
            defaultConfig: {
                showFeedback: !1
            },
            treatments: [{
                id: 100,
                label: "show feedback",
                config: {
                    showFeedback: !0
                }
            }]
        }),
        y = (0, i.createExperiment)({
            kind: "guild",
            id: "2023-03_home_deprecation",
            label: "Home Deprecation",
            defaultConfig: {
                showDeprecationNotice: !1
            },
            treatments: [{
                id: 1,
                label: "Show notice",
                config: {
                    showDeprecationNotice: !0
                }
            }]
        })
}