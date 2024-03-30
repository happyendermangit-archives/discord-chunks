function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return w
        }
    });
    var r = n("729594"),
        o = n("56300"),
        i = n("629815"),
        a = n("945215"),
        u = n("482644"),
        s = n("653754"),
        l = n("410459"),
        c = n("420480"),
        f = n("964164"),
        d = n("118944"),
        _ = n("89536"),
        E = n("627031"),
        p = n("42969"),
        m = n("421441"),
        y = n("651054"),
        I = n("812508"),
        h = n("411778"),
        O = n("894288"),
        T = n("63116"),
        S = n("380512"),
        v = n("870331"),
        g = n("822853");
    n("355544");
    var A = n("281767");

    function b(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function N(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function R(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    N(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    N(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function C(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return b(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return b(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function P(e, t) {
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
    }

    function D(e, t) {
        return L.apply(this, arguments)
    }

    function L() {
        return (L = R(function(e, t) {
            return P(this, function(n) {
                switch (n.label) {
                    case 0:
                        return [4, i.default.dispatch({
                            type: "INVITE_MODAL_OPEN",
                            invite: e,
                            code: t,
                            context: A.AppContext.APP
                        })];
                    case 1:
                        return n.sent(), [3, 4];
                    case 2:
                        return [4, i.default.dispatch({
                            type: "DISPLAYED_INVITE_SHOW",
                            code: t,
                            username: void 0,
                            deeplinkAttemptId: void 0
                        })];
                    case 3:
                        n.sent(), n.label = 4;
                    case 4:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }

    function M() {
        return (M = R(function(e) {
            var t, n, r, o;
            return P(this, function(i) {
                switch (i.label) {
                    case 0:
                        if (null != (n = h.default.getInvite(e.code))) return [3, 2];
                        return [4, a.default.resolveInvite(e.code, "Markdown Link")];
                    case 1:
                        n = i.sent().invite, i.label = 2;
                    case 2:
                        if (null == n) return [2];
                        if (!(n.state === A.InviteStates.EXPIRED || n.state === A.InviteStates.BANNED || n.state === A.InviteStates.ERROR)) return [3, 4];
                        return [4, D(n, e.code)];
                    case 3:
                        return i.sent(), [2];
                    case 4:
                        if (r = S.default.getFlattenedGuildIds(), !(null != (o = null == n ? void 0 : null === (t = n.guild) || void 0 === t ? void 0 : t.id) && r.includes(o))) return [3, 5];
                        return a.default.transitionToInviteSync(n), [3, 7];
                    case 5:
                        return [4, D(n, e.code)];
                    case 6:
                        i.sent(), i.label = 7;
                    case 7:
                        return [2]
                }
            })
        })).apply(this, arguments)
    }
    var U = {
        skipExtensionCheck: void 0,
        analyticsLocations: []
    };

    function w(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
            i = (0, f.findCodedLink)(e),
            a = t.skipExtensionCheck;
        if (null != i && (i.type === c.CodedLinkType.INVITE || i.type === c.CodedLinkType.EMBEDDED_ACTIVITY_INVITE)) return function(e) {
            return null == e || e.preventDefault(), ! function(e) {
                M.apply(this, arguments)
            }(i), !0
        };
        if (null != i && i.type === c.CodedLinkType.APP_DIRECTORY_PROFILE) return function(e) {
            null == e || e.preventDefault();
            var t, r = i.code,
                a = null !== (t = T.default.getGuildId()) && void 0 !== t ? t : void 0;
            return v.default.track(A.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                application_id: r,
                device_platform: o.isMobile ? "mobile_web" : "desktop_web",
                guild_id: a,
                channel_id: O.default.getChannelId()
            }), n.e("92363").then(n.bind(n, "905335")).then(function(e) {
                (0, e.goToAppDirectory)({
                    view: n("410459").ApplicationDirectoryViews.APPLICATION,
                    applicationId: r,
                    guildId: a,
                    entrypoint: {
                        name: l.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                    }
                })
            }), !0
        };
        if (null != i && i.type === c.CodedLinkType.GUILD_PRODUCT) return function(e) {
            null == e || e.preventDefault();
            var t = C(i.code.split("-"), 2),
                r = t[0],
                o = t[1];
            return n.e("48200").then(n.bind(n, "182220")).then(function(e) {
                (0, e.openGuildProductLink)(r, o)
            }), !0
        };
        var h = r.parse(e),
            S = h.path,
            b = h.hostname,
            N = void 0 === b ? "" : b,
            R = h.host,
            P = h.query,
            D = g.default.isDiscordHostname(N) || g.default.isDiscordLocalhost(R, N);
        if (D && (null == S ? void 0 : S.startsWith("/application-directory"))) {
            var L = C(S.split("/"), 4),
                w = L[2],
                k = L[3],
                G = null != w && (0, s.isSnowflake)(w) ? w : void 0;
            return function(e) {
                null == e || e.preventDefault();
                var t, r = n("265281").ApplicationDirectoryProfileSections,
                    i = n("410459").ApplicationDirectoryViews,
                    a = null !== (t = T.default.getGuildId()) && void 0 !== t ? t : void 0,
                    u = i.HOME;
                return "search" === w && (u = i.SEARCH), null != G && (u = i.APPLICATION, v.default.track(A.AnalyticEvents.APP_DIRECTORY_PROFILE_EMBED_URL_CLICKED, {
                    application_id: G,
                    device_platform: o.isMobile ? "mobile_web" : "desktop_web",
                    guild_id: a,
                    channel_id: O.default.getChannelId()
                })), n.e("92363").then(n.bind(n, "905335")).then(function(e) {
                    (0, e.goToAppDirectory)({
                        view: u,
                        applicationId: G,
                        guildId: a,
                        applicationSection: (0, E.default)(r, k),
                        entrypoint: {
                            name: l.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL
                        }
                    })
                }), !0
            }
        }
        if (null != S && D && g.default.isAppRoute(S)) {
            var B = null != P ? {
                search: P
            } : null;
            return function(e) {
                return null == e || e.preventDefault(), (0, m.default)(S, B), !0
            }
        }
        if (null != S && D) {
            var j = n("971332"),
                F = j.getOAuth2AuthorizeProps,
                V = j.openOAuth2ModalWithCreateGuildModal,
                H = F(e);
            if (null != H) return function(e) {
                return null == e || e.preventDefault(), V(H), !0
            }
        }
        var x = (0, p.tryParseEventDetailsPath)(S);
        if (null != S && D && null != x) return function(e) {
            null == e || e.preventDefault();
            var t = T.default.getGuildId();
            null != x.guildId && "" !== x.guildId && x.guildId !== t && (0, m.default)(A.Routes.CHANNEL(x.guildId));
            var n = _.default.getGuildScheduledEvent(x.guildEventId);
            return null != n && (0, d.openGuildEventDetails)({
                eventId: n.id
            }), !0
        };
        if (D && (null == S ? void 0 : S.startsWith("/settings/"))) {
            var Y = (0, n("877661").default)(S);
            if (null != Y) return function(e) {
                return null == e || e.preventDefault(), u.default.open(Y.section, Y.subsection, {
                    openWithoutBackstack: !1,
                    impressionSource: Y.source
                }), !0
            }
        }
        if (!a && null != (0, I.isSuspiciousDownload)(e)) return function(t) {
            return null == t || t.preventDefault(), y.default.show(e), !0
        }
    }
}