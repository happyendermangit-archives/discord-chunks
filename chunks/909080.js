function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getChannelIdForGuildTransition: function() {
            return _
        },
        transitionToGuild: function() {
            return E
        }
    });
    var r = n("537329"),
        o = n("29221"),
        i = n("895517"),
        a = n("709537"),
        u = n("935741"),
        s = n("29604"),
        l = n("894288"),
        c = n("163291"),
        f = n("281767"),
        d = n("928204");

    function _(e) {
        var t, n = l.default.getChannelId(e),
            i = null === (t = s.default.getDefaultChannel(e)) || void 0 === t ? void 0 : t.id;
        return (n !== d.StaticChannelRoute.GUILD_ONBOARDING || r.default.shouldShowOnboarding(e)) && (n !== d.StaticChannelRoute.GUILD_HOME || (0, o.canSeeOnboardingHome)(e)) && null != u.default.getChannel(n) ? n : i
    }

    function E(e, t) {
        var n = !(0, i.isInMainTabsExperiment)() || (0, a.shouldHandleNewPanelsRoute)(e) ? _(e) : void 0;
        (0, c.transitionTo)(f.Routes.CHANNEL(e, n), function(e) {
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
        }({
            navigationReplace: (0, a.shouldHandleNewPanelsRoute)(e)
        }, t))
    }
}