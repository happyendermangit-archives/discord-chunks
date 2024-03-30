function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("207561"),
        i = n("513967"),
        a = n("784184"),
        u = n("325666"),
        s = n("396586"),
        l = n("870331"),
        c = n("521024"),
        f = n("352814"),
        d = n("241248"),
        _ = n("632637"),
        E = n("750375"),
        p = n("165709"),
        m = n("977857"),
        y = n("286946"),
        I = n("505439"),
        h = n("281767"),
        O = n("941504"),
        T = n("983973");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t, n, v = e.analyticsLocation,
            g = e.guild,
            A = e.onClose;
        var b = (t = r.useState(!0), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            N = b[0],
            R = b[1],
            C = r.useRef(!1),
            P = (0, o.useLazyValue)(function() {
                return Date.now()
            }),
            D = (0, s.default)().analyticsLocations,
            L = r.useCallback(function() {
                A(), l.default.track(h.AnalyticEvents.MODAL_DISMISSED, {
                    type: h.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_stack: D,
                    location_section: v.section,
                    location_object: v.object,
                    guild_id: g.id,
                    duration_open_ms: Date.now() - P
                })
            }, [A, v, D, P, g.id]),
            M = r.useCallback(function(e) {
                e && !C.current && (l.default.track(h.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                    type: h.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                    location_stack: D,
                    location_section: v.section,
                    location_object: v.object,
                    guild_id: g.id
                }), C.current = !0)
            }, [v, D, g.id]);
        return r.useEffect(function() {
            l.default.track(h.AnalyticEvents.OPEN_MODAL, {
                type: h.AnalyticsPages.PREMIUM_GUILD_USER_MODAL,
                location_stack: D,
                location_section: v.section,
                location_object: v.object,
                guild_id: g.id
            })
        }, [g.id, v, D]), r.useEffect(function() {
            var e = function(e) {
                "Escape" === e.key && L()
            };
            return window.addEventListener("keydown", e),
                function() {
                    window.removeEventListener("keydown", e)
                }
        }, [L]), r.createElement(r.Fragment, null, r.createElement("div", {
            className: T.closeIconWrapper
        }, r.createElement(u.default, {
            className: T.closeIcon,
            closeAction: L,
            keybind: "ESC",
            variant: u.default.Variants.SOLID
        })), r.createElement(a.AdvancedScrollerAuto, {
            className: T.scroller
        }, r.createElement("div", {
            className: T.header
        }, r.createElement("div", {
            className: T.headerContentWrapper
        }, r.createElement(a.Heading, {
            className: T.heading,
            color: "always-white",
            variant: "display-lg"
        }, O.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING), r.createElement(f.default, {
            guild: g,
            closeLayer: L,
            onCtaVisibilityChange: R
        }), r.createElement(E.default, {
            guild: g
        }), r.createElement(p.default, {
            guild: g
        })), r.createElement(I.HeaderWave, null)), r.createElement("div", {
            className: T.middleBodyContentWrapper
        }, r.createElement(y.default, null)), r.createElement("div", {
            className: T.lowerBody
        }, r.createElement("div", {
            className: T.lowerBodyContentWrapper
        }, r.createElement(m.default, {
            className: T.tierComparisonTable,
            guild: g
        }), r.createElement(c.default, null), r.createElement(d.default, null)), r.createElement(I.BodyWave, null), r.createElement("div", {
            className: T.lowerBodyBackgroundImage
        })), r.createElement(i.VisibilitySensor, {
            onChange: M
        }, r.createElement("div", {
            className: T.persistentCtaSpacer
        }))), r.createElement(_.default, {
            guild: g,
            isVisible: !N,
            closeLayer: L
        }))
    }
}