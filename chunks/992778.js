function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("784184"),
        a = n("354368"),
        u = n("263657"),
        s = n("886331"),
        l = n("785584"),
        c = n("935741"),
        f = n("208454"),
        d = n("358425"),
        _ = n("589835"),
        E = n("845265"),
        p = n("830721"),
        m = n("51897"),
        y = n("867197"),
        I = n("281767"),
        h = n("868615"),
        O = n("941504"),
        T = n("126161");

    function S(e) {
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

    function v(e) {
        var t = e.className;
        return r.createElement(d.default, {
            className: t
        })
    }

    function g(e) {
        var t = e.className;
        return r.createElement(r.Fragment, null, r.createElement(E.default, {
            className: t,
            mask: E.default.Masks.HEADER_BAR_BADGE
        }, r.createElement(v, null)), r.createElement(_.default, {
            className: T.badgeUpgrade
        }))
    }

    function A(e) {
        var t = e.hideBadges,
            n = e.stream,
            d = function(e, t) {
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
            }(e, ["hideBadges", "stream"]),
            _ = (0, o.useStateFromStores)([f.default], function() {
                return p.default.isPremium(f.default.getCurrentUser(), h.PremiumTypes.TIER_1)
            }),
            E = (0, o.useStateFromStores)([c.default], function() {
                return c.default.getChannel(null == n ? void 0 : n.channelId)
            }),
            T = r.useMemo(function() {
                return null != n ? [n] : []
            }, [n]),
            A = (0, a.useIsBroadcastingInChannel)(null == E ? void 0 : E.id),
            b = r.useCallback(function() {
                null != E && (0, l.default)(E.getGuildId(), E.id, I.AnalyticsSections.STREAM_SETTINGS)
            }, [E]);
        if (null == n || null == E) return null;
        var N = v;
        return !(void 0 !== t && t) && !_ && (N = g), r.createElement(i.Popout, {
            position: "top",
            renderPopout: function(e) {
                var t = e.closePopout;
                return r.createElement(m.default, null, A ? r.createElement(u.default, {
                    onClose: t
                }) : r.createElement(s.default, {
                    channel: E,
                    currentUser: f.default.getCurrentUser(),
                    activeStreams: T,
                    onClose: t,
                    showReportOption: !0,
                    handleGoLive: b
                }))
            },
            animation: i.Popout.Animation.FADE
        }, function(e) {
            var t, n;
            return r.createElement(y.default, S((t = S({}, e), n = (n = {
                label: O.default.Messages.STREAMER_SETTINGS_TITLE,
                iconComponent: N
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), d))
        })
    }
}