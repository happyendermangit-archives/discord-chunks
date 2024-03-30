function(e, t, r) {
    "use strict";
    r.r(t);
    var n = r("470079"),
        l = r("898511"),
        i = r("784184"),
        a = r("140817"),
        o = r("4231"),
        c = r("322421"),
        u = r("933501"),
        s = r("163291"),
        f = r("935741"),
        d = r("306912"),
        m = r("894288"),
        h = r("288509"),
        p = r("134466"),
        g = r("227051"),
        y = r("870331"),
        b = r("930350"),
        O = r("281767"),
        E = r("928204"),
        v = r("941504"),
        w = r("523462");

    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(r);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            }))), n.forEach(function(t) {
                var n, l, i;
                n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[l] = i
            })
        }
        return e
    }

    function x(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
        }), e
    }
    t.default = function(e) {
        var t = e.roleIcon,
            r = e.guild,
            S = t.name;
        n.useEffect(function() {
            y.default.track(O.AnalyticEvents.OPEN_POPOUT, P({
                type: "Role Icon Popout",
                guild_id: r.id
            }, (0, a.collectChannelAnalyticsMetadata)(f.default.getChannel(m.default.getChannelId(r.id)))))
        }, []);
        var C = (0, l.useStateFromStores)([d.default], function() {
                return null != t.roleId ? d.default.getRole(r.id, t.roleId) : void 0
            }),
            j = (0, u.isSubscriptionRole)(C),
            I = j ? v.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION_ROLE_SUBSCRIPTIONS.format({
                name: S
            }) : v.default.Messages.ROLE_ICON_POPOUT_DESCRIPTION.format({
                name: S
            }),
            N = x(P({}, t), {
                src: null == t.src ? t.src : (0, o.replaceRoleIconSourceSize)(t.src, 40),
                size: 40
            });
        return n.createElement(i.Dialog, null, n.createElement(b.MessagePopoutContent, null, n.createElement("div", {
            className: w.popoutContainer
        }, n.createElement("div", {
            className: w.mainContent
        }, n.createElement("div", {
            className: w.roleIconContainer
        }, n.createElement(g.default, x(P({}, N), {
            enableTooltip: !1,
            className: w.__invalid_roleIcon,
            enableHeight: !1
        }))), n.createElement("div", {
            className: w.truncatingText
        }, n.createElement(i.Heading, {
            variant: "heading-md/semibold",
            className: w.roleName
        }, n.createElement(h.default, null, S)), n.createElement(i.Text, {
            variant: "text-sm/normal"
        }, I))), n.createElement(i.Button, {
            size: i.Button.Sizes.SMALL,
            color: i.Button.Colors.PRIMARY,
            className: w.ctaButton,
            innerClassName: w.ctaButtonContent,
            fullWidth: !0,
            onClick: j ? function() {
                (0, s.transitionTo)(O.Routes.CHANNEL(r.id, E.StaticChannelRoute.ROLE_SUBSCRIPTIONS))
            } : function() {
                (0, c.openGuildBoostingMarketingModal)({
                    guildId: r.id,
                    location: {
                        section: O.AnalyticsSections.ROLE_ICON_POPOUT
                    }
                })
            },
            autoFocus: !0
        }, n.createElement(p.default, {
            width: 14,
            height: 14,
            className: w.boosterBadge
        }), v.default.Messages.ROLE_ICON_POPOUT_CTA))))
    }
}