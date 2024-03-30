function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return p
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("392711"),
        u = n.n(a),
        s = n("784184"),
        l = n("549579"),
        c = n("72478"),
        f = n("830567"),
        d = n("849056");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function E(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function p(e) {
        var t, o, a, p, m = e.className,
            y = e.maxUsers,
            I = e.users,
            h = e.guildId,
            O = e.onFocus,
            T = e.size,
            S = void 0 === T ? s.AvatarSizes.SIZE_24 : T,
            v = e.hideOverflowCount,
            g = void 0 !== v && v,
            A = e.disableUsernameTooltip,
            b = void 0 !== A && A;
        var N = (t = r.useState(!1), o = 2, function(e) {
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
            }(t, o) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, o) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            R = N[0],
            C = N[1];

        function P() {
            return r.createElement(s.Dialog, {
                className: d.popoutWrapper
            }, r.createElement(s.Scroller, {
                className: d.scroller
            }, I.map(function(e) {
                return r.createElement(c.default, {
                    guildId: h,
                    key: e.id,
                    user: e,
                    nick: f.default.getName(e),
                    onContextMenu: function(t) {
                        var o;
                        return (0, l.openContextMenuLazy)(t, (o = function() {
                            var t;
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
                            }(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        return [4, Promise.all([n.e("99387"), n.e("40874"), n.e("92379"), n.e("51051"), n.e("44186")]).then(n.bind(n, "249511"))];
                                    case 1:
                                        return t = o.sent().default, [2, function(n) {
                                            var o, i;
                                            return r.createElement(t, (o = function(e) {
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
                                            }({}, n), i = (i = {
                                                user: e
                                            }, i), Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                                                var n = Object.keys(e);
                                                if (Object.getOwnPropertySymbols) {
                                                    var r = Object.getOwnPropertySymbols(e);
                                                    n.push.apply(n, r)
                                                }
                                                return n
                                            })(Object(i)).forEach(function(e) {
                                                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e))
                                            }), o))
                                        }]
                                }
                            })
                        }, function() {
                            var e = this,
                                t = arguments;
                            return new Promise(function(n, r) {
                                var i = o.apply(e, t);

                                function a(e) {
                                    E(i, n, r, a, u, "next", e)
                                }

                                function u(e) {
                                    E(i, n, r, a, u, "throw", e)
                                }
                                a(void 0)
                            })
                        }), {
                            onClose: function() {
                                return C(!1)
                            }
                        })
                    }
                })
            })))
        }
        if (I.length <= 0) return null;
        return r.createElement("div", {
            className: i()(m, d.avatars)
        }, (a = u()(I).take(y).map(function(e) {
            var t = f.default.getName(e);
            return b ? r.createElement("div", {
                className: d.avatar
            }, r.createElement(s.Avatar, {
                src: e.getAvatarURL(h, 24),
                "aria-label": t,
                size: S
            })) : r.createElement(s.TooltipContainer, {
                key: e.id,
                text: t,
                className: d.avatar
            }, r.createElement(s.Avatar, {
                src: e.getAvatarURL(h, 24),
                "aria-label": t,
                size: S
            }))
        }).value(), (p = I.length - y) > 0 && !g && (a[a.length - 1] = r.createElement(s.Popout, {
            key: "overflow",
            renderPopout: P,
            shouldShow: R,
            position: "bottom",
            onRequestClose: function() {
                return C(!1)
            }
        }, function() {
            return r.createElement(s.Button, {
                className: i()(d.avatar, d.overflow),
                onFocus: O,
                onClick: function() {
                    return C(!0)
                },
                look: s.Button.Looks.BLANK,
                size: s.Button.Sizes.NONE
            }, "+", p + 1)
        })), a))
    }
}