function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        },
        getSeasonalGiftingBody: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("56300"),
        i = n("784184"),
        a = n("50005"),
        u = n("870331"),
        s = n("281767"),
        l = n("348201"),
        c = n("941504"),
        f = n("871183");

    function d(e) {
        return e || !(o.isMobile || o.isTablet) ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : c.default.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP
    }

    function _(e) {
        var t = e.onComplete,
            l = e.onDMCheckItOutClick,
            _ = e.isDM;
        r.useEffect(function() {
            u.default.track(s.AnalyticEvents.PREMIUM_GIFT_UPSELL_VIEWED, {
                type: "holiday_gifting_tip"
            })
        }, []);
        var E = r.useMemo(function() {
                return [function() {
                    return n.e("36278").then(n.t.bind(n, "268147", 19))
                }, function() {
                    return n.e("66902").then(n.t.bind(n, "7171", 19))
                }, function() {
                    return n.e("99694").then(n.t.bind(n, "55562", 19))
                }]
            }, []),
            p = _ || !(o.isMobile || o.isTablet),
            m = p ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : c.default.Messages.SEASONAL_GIFTING_POPUP_HEADER,
            y = p ? c.default.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : c.default.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
        return r.createElement("div", {
            className: f.container
        }, r.createElement(a.default, {
            className: f.image,
            animationData: E
        }), r.createElement("div", {
            className: f.body
        }, r.createElement(i.Heading, {
            className: f.text,
            variant: "heading-sm/semibold"
        }, m), r.createElement(i.Text, {
            className: f.text,
            variant: "text-sm/normal"
        }, d(_))), r.createElement("div", {
            className: f.dmButtonContainer
        }, r.createElement(i.Button, {
            className: f.dmButton,
            look: i.Button.Looks.FILLED,
            color: i.Button.Colors.BRAND,
            onClick: function() {
                return t()
            }
        }, c.default.Messages.GOT_IT), r.createElement(i.Button, {
            className: f.dmButton,
            look: i.Button.Looks.INVERTED,
            color: i.Button.Colors.BRAND,
            onClick: function() {
                return l()
            }
        }, y)), r.createElement("div", {
            className: f.pointer
        }))
    }

    function E(e) {
        var t = e.onComplete,
            n = e.onDMCheckItOutClick,
            o = e.markAsDismissed,
            a = e.isDM;
        return r.createElement(i.Popout, {
            spacing: 0,
            shouldShow: !0,
            position: "top",
            align: "center",
            renderPopout: function(e) {
                var i, u;
                return r.createElement(_, (i = function(e) {
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
                }({}, e), u = (u = {
                    onComplete: function() {
                        t(), o(l.ContentDismissActionType.USER_DISMISS)
                    },
                    onDMCheckItOutClick: function() {
                        n(), t(), o(l.ContentDismissActionType.TAKE_ACTION)
                    },
                    isDM: a
                }, u), Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(u)).forEach(function(e) {
                    Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(u, e))
                }), i))
            },
            onRequestClose: function() {},
            closeOnScroll: !1,
            ignoreModalClicks: !0
        }, function() {
            return r.createElement("div", {
                className: f.popoutTarget
            })
        })
    }
}