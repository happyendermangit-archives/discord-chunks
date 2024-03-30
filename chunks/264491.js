function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("898511"),
        u = n("784184"),
        s = n("560897"),
        l = n("208454"),
        c = n("372844"),
        f = n("412791"),
        d = n("830721"),
        _ = n("640327"),
        E = n("877987"),
        p = n("281767"),
        m = n("941504"),
        y = n("181035"),
        I = n("989171");

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
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
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function v(e) {
        var t = e.guildName;
        return r.createElement("div", {
            className: y.guildMemberProfileTooltip
        }, r.createElement(f.default, {
            className: y.guildMemberProfileTooltipNitroWheel
        }), m.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
            guildName: t
        }))
    }

    function g(e) {
        var t = e.guild,
            o = e.bio,
            f = e.hidePersonalInformation,
            g = e.isUsingGuildBio,
            A = e.lastSection,
            b = e.animateOnHover,
            N = e.isHovering,
            R = e.lineClamp,
            C = (0, s.useAnalyticsContext)().location,
            P = (0, a.useStateFromStores)([l.default], function() {
                return l.default.getCurrentUser()
            }),
            D = d.default.canUsePremiumGuildMemberProfile(P);
        return f || null == o || "" === o ? null : r.createElement(E.default, {
            lastSection: void 0 !== A && A
        }, r.createElement(u.Heading, {
            variant: "eyebrow",
            className: I.title
        }, m.default.Messages.USER_POPOUT_ABOUT_ME, null != t && g && r.createElement(u.Tooltip, {
            color: u.Tooltip.Colors.CUSTOM,
            tooltipClassName: y.aboutMeGuildIconTooltip,
            "aria-label": m.default.Messages.GUILD_IDENTITY_BIO_TOAST.format({
                guildName: t.name
            }),
            text: r.createElement(v, {
                guildName: t.name
            })
        }, function(e) {
            return r.createElement(c.default, S(T({}, e), {
                onClick: function() {
                    return function(e) {
                        if (null == e || e(), null != P && !D) {
                            var t;
                            (0, u.openModalLazy)((t = function() {
                                var e;
                                return function(e, t) {
                                    var n, r, o, i, a = {
                                        label: 0,
                                        sent: function() {
                                            if (1 & o[0]) throw o[1];
                                            return o[1]
                                        },
                                        trys: [],
                                        ops: []
                                    };
                                    return i = {
                                        next: u(0),
                                        throw: u(1),
                                        return: u(2)
                                    }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                        return this
                                    }), i;

                                    function u(i) {
                                        return function(u) {
                                            return function(i) {
                                                if (n) throw TypeError("Generator is already executing.");
                                                for (; a;) try {
                                                    if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                        case 0:
                                                        case 1:
                                                            o = i;
                                                            break;
                                                        case 4:
                                                            return a.label++, {
                                                                value: i[1],
                                                                done: !1
                                                            };
                                                        case 5:
                                                            a.label++, r = i[1], i = [0];
                                                            continue;
                                                        case 7:
                                                            i = a.ops.pop(), a.trys.pop();
                                                            continue;
                                                        default:
                                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                                a = 0;
                                                                continue
                                                            }
                                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                                a.label = i[1];
                                                                break
                                                            }
                                                            if (6 === i[0] && a.label < o[1]) {
                                                                a.label = o[1], o = i;
                                                                break
                                                            }
                                                            if (o && a.label < o[2]) {
                                                                a.label = o[2], a.ops.push(i);
                                                                break
                                                            }
                                                            o[2] && a.ops.pop(), a.trys.pop();
                                                            continue
                                                    }
                                                    i = t.call(e, a)
                                                } catch (e) {
                                                    i = [6, e], r = 0
                                                } finally {
                                                    n = o = 0
                                                }
                                                if (5 & i[0]) throw i[1];
                                                return {
                                                    value: i[0] ? i[1] : void 0,
                                                    done: !0
                                                }
                                            }([i, u])
                                        }
                                    }
                                }(this, function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, n.e("28454").then(n.bind(n, "363675"))];
                                        case 1:
                                            return e = t.sent().default, [2, function(t) {
                                                return r.createElement(e, S(T({}, t), {
                                                    source: S(T({}, C), {
                                                        object: p.AnalyticsObjects.GUILD_ICON
                                                    })
                                                }))
                                            }]
                                    }
                                })
                            }, function() {
                                var e = this,
                                    n = arguments;
                                return new Promise(function(r, o) {
                                    var i = t.apply(e, n);

                                    function a(e) {
                                        h(i, r, o, a, u, "next", e)
                                    }

                                    function u(e) {
                                        h(i, r, o, a, u, "throw", e)
                                    }
                                    a(void 0)
                                })
                            }))
                        }
                    }(e.onClick)
                },
                guild: t,
                size: c.default.Sizes.SMOL,
                className: i()(y.aboutMeGuildIcon, O({}, y.nonPremiumHoverState, !D))
            }))
        })), r.createElement(_.default, {
            userBio: o,
            animateOnHover: void 0 !== b && b,
            isHovering: void 0 !== N && N,
            lineClamp: R
        }))
    }
}