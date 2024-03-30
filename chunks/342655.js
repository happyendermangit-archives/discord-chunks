function(e, t, a) {
    "use strict";
    a.r(t), a.d(t, {
        default: function() {
            return g
        }
    });
    var n = a("470079"),
        r = a("803997"),
        l = a.n(r),
        s = a("392711"),
        u = a.n(s),
        E = a("194926"),
        i = a("447515"),
        c = a("784184"),
        _ = a("493174"),
        o = a("531822"),
        d = a("301683"),
        L = a("208454"),
        f = a("701958"),
        T = a("258674"),
        M = a("893427"),
        C = a("348873"),
        m = a("334162"),
        A = a("349999"),
        I = a("465517"),
        R = a("281767"),
        S = a("941504"),
        p = a("618627");

    function D(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var a = 0, n = Array(t); a < t; a++) n[a] = e[a];
        return n
    }
    a("418757");

    function N(e, t, a, n, r, l, s) {
        try {
            var u = e[l](s),
                E = u.value
        } catch (e) {
            a(e);
            return
        }
        u.done ? t(E) : Promise.resolve(E).then(n, r)
    }

    function O(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var a, n, r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != r) {
                var l = [],
                    s = !0,
                    u = !1;
                try {
                    for (r = r.call(e); !(s = (a = r.next()).done) && (l.push(a.value), !t || l.length !== t); s = !0);
                } catch (e) {
                    u = !0, n = e
                } finally {
                    try {
                        !s && null != r.return && r.return()
                    } finally {
                        if (u) throw n
                    }
                }
                return l
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return D(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a) return Array.from(a);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return D(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        var t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            a = O(n.useState(""), 2),
            r = a[0],
            l = a[1],
            s = O(n.useState(null), 2),
            u = s[0],
            E = s[1],
            i = O(n.useState(null), 2),
            f = i[0],
            T = i[1],
            M = (0, m.default)(e.code);
        n.useEffect(function() {
            function e() {
                var t;
                return t = function() {
                    var e, t;
                    return function(e, t) {
                        var a, n, r, l, s = {
                            label: 0,
                            sent: function() {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return l = {
                            next: u(0),
                            throw: u(1),
                            return: u(2)
                        }, "function" == typeof Symbol && (l[Symbol.iterator] = function() {
                            return this
                        }), l;

                        function u(l) {
                            return function(u) {
                                return function(l) {
                                    if (a) throw TypeError("Generator is already executing.");
                                    for (; s;) try {
                                        if (a = 1, n && (r = 2 & l[0] ? n.return : l[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, l[1])).done) return r;
                                        switch (n = 0, r && (l = [2 & l[0], r.value]), l[0]) {
                                            case 0:
                                            case 1:
                                                r = l;
                                                break;
                                            case 4:
                                                return s.label++, {
                                                    value: l[1],
                                                    done: !1
                                                };
                                            case 5:
                                                s.label++, n = l[1], l = [0];
                                                continue;
                                            case 7:
                                                l = s.ops.pop(), s.trys.pop();
                                                continue;
                                            default:
                                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                    s = 0;
                                                    continue
                                                }
                                                if (3 === l[0] && (!r || l[1] > r[0] && l[1] < r[3])) {
                                                    s.label = l[1];
                                                    break
                                                }
                                                if (6 === l[0] && s.label < r[1]) {
                                                    s.label = r[1], r = l;
                                                    break
                                                }
                                                if (r && s.label < r[2]) {
                                                    s.label = r[2], s.ops.push(l);
                                                    break
                                                }
                                                r[2] && s.ops.pop(), s.trys.pop();
                                                continue
                                        }
                                        l = t.call(e, s)
                                    } catch (e) {
                                        l = [6, e], n = 0
                                    } finally {
                                        a = r = 0
                                    }
                                    if (5 & l[0]) throw l[1];
                                    return {
                                        value: l[0] ? l[1] : void 0,
                                        done: !0
                                    }
                                }([l, u])
                            }
                        }
                    }(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (null != (e = L.default.getCurrentUser())) return [3, 4];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, (0, o.fetchCurrentUser)()];
                            case 2:
                                return e = t.sent(), [3, 4];
                            case 3:
                                return t.sent(), _.default.verifySSOToken(null), [3, 4];
                            case 4:
                                return null != e && l(M.defaultName.format({
                                    username: e.username
                                })), [2]
                        }
                    })
                }, (e = function() {
                    var e = this,
                        a = arguments;
                    return new Promise(function(n, r) {
                        var l = t.apply(e, a);

                        function s(e) {
                            N(l, n, r, s, u, "next", e)
                        }

                        function u(e) {
                            N(l, n, r, s, u, "throw", e)
                        }
                        s(void 0)
                    })
                }).apply(this, arguments)
            }! function() {
                e.apply(this, arguments)
            }()
        }, [M.defaultName]);
        (0, A.default)(e);
        var D = n.createElement(n.Fragment, null, t ? n.createElement(I.default, {
                guildTemplate: e
            }) : null, n.createElement("div", {
                className: p.icon
            }, n.createElement(d.default, {
                icon: u,
                onChange: E
            })), n.createElement(c.FormItem, {
                title: M.nameLabel
            }, n.createElement(c.TextInput, {
                type: "text",
                value: r,
                maxLength: 100,
                onChange: l,
                error: null == f ? void 0 : f.name
            })), n.createElement(c.Text, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: p.guidelines
            }, M.terms.format({
                guidelinesURL: R.MarketingURLs.GUIDELINES
            }))),
            g = e.serializedSourceGuild.roles.filter(function(e) {
                return "@everyone" !== e.name
            });
        return {
            form: D,
            preview: n.createElement(n.Fragment, null, n.createElement("div", {
                className: p.divider
            }), n.createElement(c.FormItem, {
                className: p.previewSection,
                title: S.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_HEADER
            }, n.createElement(U, {
                channels: e.serializedSourceGuild.channels
            }), n.createElement(c.Text, {
                variant: "text-xs/normal",
                color: "header-secondary",
                className: p.protip
            }, n.createElement("span", {
                className: p.protipText
            }, S.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"), " ", S.default.Messages.GUILD_TEMPLATE_MODAL_CHANNELS_TIP)), g.length > 0 ? n.createElement(n.Fragment, null, n.createElement(c.FormItem, {
                className: p.previewSection,
                title: S.default.Messages.GUILD_TEMPLATE_MODAL_ROLES_HEADER2
            }, n.createElement(h, {
                roles: g
            }))) : null),
            handleSubmit: function() {
                return C.default.acceptGuildTemplate(e.code, r, u).catch(function(e) {
                    return T(e)
                })
            }
        }
    }

    function U(e) {
        var t = e.channels,
            a = u()(t).sortBy(function(e) {
                return null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id
            }).map(function(e) {
                var t, a, r, s = function(e) {
                    var t = e.type;
                    return t === R.ChannelTypes.GUILD_VOICE ? M.default : t === R.ChannelTypes.GUILD_CATEGORY ? f.default : T.default
                }(e);
                return n.createElement("div", {
                    key: e.id,
                    className: l()(p.channel, (t = {}, a = p.category, r = e.type === R.ChannelTypes.GUILD_CATEGORY, a in t ? Object.defineProperty(t, a, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[a] = r, t))
                }, n.createElement(s, {
                    className: p.channelIcon
                }), n.createElement(c.Text, {
                    className: p.channelText,
                    variant: "text-sm/normal"
                }, e.name))
            }).value();
        return n.createElement("div", {
            className: p.channelsWrapper
        }, a)
    }

    function h(e) {
        var t = e.roles.slice().reverse().map(function(e) {
            return n.createElement(v, {
                key: e.id,
                role: e
            })
        });
        return n.createElement("ul", {
            className: p.rolesWrapper
        }, t)
    }

    function v(e) {
        var t, a = e.role,
            r = null == a.color ? i.default.unsafe_rawColors.PRIMARY_300.css : (0, E.int2hex)(a.color);
        return n.createElement("li", {
            className: p.role,
            style: {
                borderColor: null !== (t = (0, E.hex2rgb)(r, .6)) && void 0 !== t ? t : void 0
            }
        }, n.createElement(c.RoleCircle, {
            className: p.roleCircle,
            color: r
        }), n.createElement("div", {
            className: p.roleName
        }, a.name))
    }
}