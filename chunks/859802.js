function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        GuildFeedRenderSelectorExperiment: function() {
            return I
        },
        GuildHomeBadgeExperiment: function() {
            return T
        },
        GuildHomeDeprecationExperiment: function() {
            return S
        },
        GuildHomeFeedbackExperiment: function() {
            return f
        },
        canSeeGuildHome: function() {
            return E
        },
        useGuildHomeExperiment: function() {
            return c
        }
    });
    var i = n("442837"),
        r = n("430198"),
        s = n("818083"),
        a = n("57132"),
        o = n("781157"),
        l = n("984933"),
        u = n("430824"),
        d = n("981631");

    function _(e, t, n) {
        return t.getChannels(e)[l.GUILD_SELECTABLE_CHANNELS_KEY].filter(t => {
            let {
                channel: i
            } = t;
            return !n.isChannelGated(e, i.id)
        }).length > 5
    }

    function c(e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        let t = (0, i.useStateFromStores)([l.default, r.default], () => null != e && _(e.id, l.default, r.default));
        return !__OVERLAY__ && !!t && null != e && e.hasFeature(d.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
    }

    function E(e) {
        if (__OVERLAY__ || e === d.ME || e === d.FAVORITES || (0, a.isInMainTabsExperiment)() && !(0, o.isOnNewPanels)()) return !1;
        let t = u.default.getGuild(e);
        return !!(null != t && _(e, l.default, r.default)) && t.hasFeature(d.GuildFeatures.GUILD_HOME_DEPRECATION_OVERRIDE)
    }
    let I = (0, s.createExperiment)({
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
        T = (0, s.createExperiment)({
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
    (0, s.createExperiment)({
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
    }), (0, s.createExperiment)({
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
    let f = (0, s.createExperiment)({
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
        S = (0, s.createExperiment)({
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