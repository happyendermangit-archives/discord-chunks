function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("556026"),
        i = n("135983"),
        a = n("784184"),
        u = n("390897"),
        s = n("941504"),
        l = n("91779");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function d(e) {
        var t, n, d, _ = e.selectedGuildId,
            E = e.selectedChannelId,
            p = e.onChannelChange,
            m = e.error;
        var y = (t = r.useState(null), n = 2, function(e) {
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
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            I = y[0],
            h = y[1],
            O = r.useRef(!1);
        if (r.useEffect(function() {
                function e() {
                    var t;
                    return t = function(e) {
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
                        }(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, (0, u.fetchChannels)(e)];
                                case 1:
                                    return t = n.sent(), _ === e && (t.sort(function(e, t) {
                                        return e.name.localeCompare(t.name)
                                    }), h({
                                        guildId: e,
                                        channels: t
                                    }), O.current = !0), [2]
                            }
                        })
                    }, (e = function() {
                        var e = this,
                            n = arguments;
                        return new Promise(function(r, o) {
                            var i = t.apply(e, n);

                            function a(e) {
                                f(i, r, o, a, u, "next", e)
                            }

                            function u(e) {
                                f(i, r, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }).apply(this, arguments)
                }
                h(null), null == _ ? p(null) : ! function(t) {
                    return e.apply(this, arguments)
                }(_)
            }, [p, _]), r.useEffect(function() {
                if (!!O.current) null == I ? null != E && p(null) : !I.channels.some(function(e) {
                    return e.id === E
                }) && p(null)
            }, [I, p, E, _]), null == _) return null;
        var T = null == I || I.guildId !== _ ? [] : (null !== (d = null == I ? void 0 : I.channels) && void 0 !== d ? d : []).map(function(e) {
            return {
                value: e.id,
                label: e.name
            }
        });
        return r.createElement("div", {
            className: l.selectorGroup
        }, r.createElement(o.Heading, {
            variant: "heading-deprecated-12/semibold",
            className: l.sectionLabel
        }, s.default.Messages.OAUTH2_ADD_WEBHOOK_INCOMING), null != m && "" !== m ? r.createElement(i.Text, {
            variant: "text-xs/normal",
            color: "text-danger"
        }, m) : null, r.createElement(a.Select, {
            className: l.select,
            maxVisibleItems: 5,
            select: p,
            placeholder: s.default.Messages.SCOPE_WEBHOOK_INCOMING_CHANNEL_PLACEHOLDER,
            options: T,
            isSelected: function(e) {
                return e === E
            },
            serialize: function(e) {
                return e
            },
            renderOptionLabel: function(e) {
                return r.createElement(i.Text, {
                    variant: "text-md/normal"
                }, e.label)
            },
            renderOptionValue: function(e) {
                return r.createElement(i.Text, {
                    variant: "text-md/normal"
                }, e[0].label)
            }
        }), r.createElement(i.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: l.label
        }, s.default.Messages.SCOPE_WEBHOOK_INCOMING_DESCRIPTION))
    }
}