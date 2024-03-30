function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        dismissedGuildOnboardingUpsell: function() {
            return O
        },
        shouldShowGuildOnboardingUpsell: function() {
            return h
        }
    });
    var r = n("913527"),
        o = n.n(r),
        i = n("14782"),
        a = n("991161"),
        u = n("510077"),
        s = n("968574"),
        l = n("851285"),
        c = n("306912"),
        f = n("523018"),
        d = n("686293"),
        _ = n("826611"),
        E = n("281767"),
        p = n("348201");

    function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var y = [i.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
        I = [0, 1, 7];

    function h(e, t) {
        var n, r = c.default.getGuilds(),
            i = f.default.entries(r).some(function(e) {
                var t, n, r = (n = 2, function(e) {
                        if (Array.isArray(e)) return e
                    }(t = e) || function(e, t) {
                        var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != o) {
                            var i = [],
                                a = !0,
                                u = !1;
                            try {
                                for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                            } catch (e) {
                                u = !0, r = e
                            } finally {
                                try {
                                    !a && null != o.return && o.return()
                                } finally {
                                    if (u) throw r
                                }
                            }
                            return i
                        }
                    }(t, n) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return m(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
                        }
                    }(t, n) || function() {
                        throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    o = r[0],
                    i = r[1],
                    a = (0, _.isGuildOnboardingSettingsAvailable)(o),
                    u = i.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
                return a && u
            });
        if (i || !(0, _.isGuildOnboardingSettingsAvailable)(e)) return !1;
        var s = null === (n = l.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
            p = null != s ? a.Timestamp.toDate(s) : void 0,
            h = null != p ? o()().diff(p, "days") : null,
            O = y.indexOf(t);
        return -1 !== O && (null == h || !!(h > I[O])) && y.find(function(e) {
            return !(0, u.isDismissibleContentDismissed)(e)
        }) === t && d.default.getCurrentConfig({
            guildId: e,
            location: "7f5b67_1"
        }, {
            disable: i || !(0, _.isGuildOnboardingSettingsAvailable)(e),
            autoTrackExposure: !0
        }).showLifecycleUpsells
    }

    function O(e, t) {
        var n = a.Timestamp.now();
        s.PreloadedUserSettingsActionCreators.updateAsync("userContent", function(e) {
            e.guildOnboardingUpsellDismissedAt = n
        }, s.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, u.markDismissibleContentAsDismissed)(t, {
            forceTrack: !0,
            dismissAction: p.ContentDismissActionType.AUTO,
            guildId: e
        })
    }
}