function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        PrivateThreadMode: function() {
            return o
        },
        createThread: function() {
            return G
        },
        getDefaultThreadName: function() {
            return w
        },
        getIsPrivate: function() {
            return U
        },
        useCreateForumPostCommon: function() {
            return B
        },
        useCreateThreadCommon: function() {
            return k
        },
        usePrivateThreadMode: function() {
            return M
        }
    });
    var r, o, i = n("470079"),
        a = n("967888"),
        u = n("629815"),
        s = n("483587"),
        l = n("771382"),
        c = n("443458"),
        f = n("183645"),
        d = n("93141"),
        _ = n("719378"),
        E = n("261535"),
        p = n("931582"),
        m = n("935741"),
        y = n("309944"),
        I = n("204394"),
        h = n("877708"),
        O = n("388990"),
        T = n("947248"),
        S = n("523018"),
        v = n("839317"),
        g = n("838726"),
        A = n("943298"),
        b = n("73587"),
        N = n("281767"),
        R = n("941504");

    function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function P(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function D(e) {
        return function() {
            var t = this,
                n = arguments;
            return new Promise(function(r, o) {
                var i = e.apply(t, n);

                function a(e) {
                    P(i, r, o, a, u, "next", e)
                }

                function u(e) {
                    P(i, r, o, a, u, "throw", e)
                }
                a(void 0)
            })
        }
    }

    function L(e, t) {
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

    function M(e) {
        var t = (0, g.useCanStartPublicThread)(e);
        return (0, g.useCanStartPrivateThread)(e) ? t ? 2 : 3 : 1
    }

    function U(e, t) {
        var n;
        if (3 === t) return !0;
        return null !== (n = e.isPrivate) && void 0 !== n && n
    }

    function w(e, t) {
        var n = null == t ? null : I.default.getMessage(e.id, t),
            r = null !== (a = null == n ? void 0 : null === (i = n.embeds) || void 0 === i ? void 0 : null === (o = i[0]) || void 0 === o ? void 0 : o.rawTitle) && void 0 !== a ? a : "";
        if ("" !== r) return r.length > 40 ? r.substring(0, 40) + "..." : r;
        var o, i, a, u, s = E.default.unparse(null !== (u = null == n ? void 0 : n.content) && void 0 !== u ? u : "", e.id, !0),
            l = (0, A.default)(s.split("\n")[0], !0);
        l = l.replace(/^[ #-]+/, "");
        for (var c = [];;) {
            var f = l.match(/(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,./])+/);
            if (null == f || null == f.index) {
                c.push(l);
                break
            }
            c.push(l.substring(0, f.index)), c.push(f[0]), l = l.substring(f.index + f[0].length)
        }
        for (var d = c[0], _ = 1; _ < c.length; _++) {
            var p = d + c[_];
            if (p.length > 40) break;
            d = p
        }
        return d.length > 40 && (d = d.substring(0, 40) + "..."), d
    }

    function k(e) {
        var t, n = e.parentChannel,
            r = e.parentMessageId,
            o = e.threadSettings,
            u = e.privateThreadMode,
            s = e.location,
            d = e.onThreadCreated,
            _ = e.useDefaultThreadName,
            p = e.uploadHandler;
        return i.useCallback((t = D(function(e, t, i) {
            var I, h, O, T, g, A, b, C;
            return L(this, function(P) {
                switch (P.label) {
                    case 0:
                        return I = null == r, h = U(o, u), "" === (T = null !== (O = o.name) && void 0 !== O ? O : "") && _ && (T = "" !== (g = w(n, r)) ? g : R.default.Messages.THREAD), A = (0, v.getAutoArchiveDuration)(n), b = m.default.getChannel(S.default.castMessageIdAsChannelId(r)), [4, j(n, function() {
                            var e = null != r ? N.Endpoints.CHANNEL_MESSAGE_THREADS(n.id, r) : N.Endpoints.CHANNEL_THREADS(n.id);
                            return a.HTTP.post({
                                url: e,
                                body: {
                                    name: T,
                                    type: h ? N.ChannelTypes.PRIVATE_THREAD : n.type === N.ChannelTypes.GUILD_ANNOUNCEMENT ? N.ChannelTypes.ANNOUNCEMENT_THREAD : N.ChannelTypes.PUBLIC_THREAD,
                                    auto_archive_duration: A,
                                    location: s
                                }
                            })
                        })];
                    case 1:
                        return (C = P.sent()) !== b && (l.default.clearDraft(n.id, y.DraftType.ThreadSettings), l.default.clearDraft(n.id, y.DraftType.FirstThreadMessage), null == d || d(C), (I || e.length > 0 || null != t && t.length > 0 || null != i && i.length > 0) && function(e, t, n, r, o) {
                            if (null != o && null != r && r.length > 0) o(e, r, t, n);
                            else if (null != n && n.length > 0) c.default.sendStickers(e.id, n, t);
                            else c.default.sendMessage(e.id, E.default.parse(e, t))
                        }(C, e, t, i, p)), f.default.clearAll(n.id, y.DraftType.FirstThreadMessage), [2]
                }
            })
        }), function(e, n, r) {
            return t.apply(this, arguments)
        }), [n, r, o, d, u, s, _, p])
    }

    function G(e, t, n, r, o) {
        return j(e, function() {
            return a.HTTP.post({
                url: N.Endpoints.CHANNEL_THREADS(e.id),
                body: {
                    name: t,
                    type: n,
                    auto_archive_duration: r,
                    location: o
                }
            })
        })
    }

    function B(e) {
        var t, n = e.parentChannel,
            r = e.name,
            o = e.appliedTags,
            u = e.onThreadCreated,
            s = e.upload;
        return i.useCallback((t = D(function(e, t, i) {
            var c, d, E, m, I, h, O, S;
            return L(this, function(g) {
                switch (g.label) {
                    case 0:
                        var A, b;
                        return c = 0, A = (0, p.default)(e), b = 2, E = (d = function(e) {
                            if (Array.isArray(e)) return e
                        }(A) || function(e, t) {
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
                        }(A, b) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return C(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return C(e, t)
                            }
                        }(A, b) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }())[0], m = d[1], E && (e = m, c = (0, T.addFlag)(c, N.MessageFlags.SUPPRESS_NOTIFICATIONS)), I = (0, v.getAutoArchiveDuration)(n, null), h = N.Endpoints.CHANNEL_THREADS(n.id) + "?use_nested_fields=true", O = {
                            name: r,
                            auto_archive_duration: I,
                            applied_tags: o,
                            message: {
                                content: e,
                                sticker_ids: t,
                                flags: 0 !== c ? c : void 0
                            }
                        }, [4, j(n, function() {
                            return null != i && i.length > 0 ? s(h, O, i) : a.HTTP.post({
                                url: h,
                                body: O
                            })
                        })];
                    case 1:
                        return S = g.sent(), l.default.clearDraft(n.id, y.DraftType.ThreadSettings), l.default.clearDraft(n.id, y.DraftType.FirstThreadMessage), f.default.clearAll(n.id, y.DraftType.FirstThreadMessage), (0, _.trackForumPostCreated)({
                            guildId: n.guild_id,
                            channelId: n.id,
                            postId: S.id
                        }), null == u || u(S), [2, S]
                }
            })
        }), function(e, n, r) {
            return t.apply(this, arguments)
        }), [n, r, u, o, s])
    }(r = o || (o = {}))[r.Disabled = 1] = "Disabled", r[r.Enabled = 2] = "Enabled", r[r.PrivateOnly = 3] = "PrivateOnly";

    function j(e, t) {
        return F.apply(this, arguments)
    }

    function F() {
        return (F = D(function(e, t) {
            var n, r, o, i, a, l, c, f, _, E;
            return L(this, function(p) {
                switch (p.label) {
                    case 0:
                        r = e.isForumLikeChannel(), p.label = 1;
                    case 1:
                        return p.trys.push([1, 3, , 4]), [4, t()];
                    case 2:
                        return null == (n = p.sent()).body ? s.default.show({
                            title: R.default.Messages.ERROR,
                            body: R.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                        }) : (u.default.dispatch({
                            type: "SLOWMODE_RESET_COOLDOWN",
                            slowmodeType: h.SlowmodeType.CreateThread,
                            channelId: e.id
                        }), u.default.dispatch({
                            type: "THREAD_CREATE_LOCAL",
                            channelId: n.body.id
                        })), [3, 4];
                    case 3:
                        if ((null === (i = (o = p.sent()).body) || void 0 === i ? void 0 : i.code) === N.AbortCodes.TOO_MANY_THREADS) s.default.show({
                            title: r ? R.default.Messages.CANNOT_CREATE_FORUM_POST : R.default.Messages.CANNOT_CREATE_THREAD,
                            body: r ? R.default.Messages.TOO_MANY_FORUM_POSTS_MESSAGE : R.default.Messages.TOO_MANY_THREADS_MESSAGE
                        });
                        else if ((null === (a = o.body) || void 0 === a ? void 0 : a.code) === N.AbortCodes.TOO_MANY_ANNOUNCEMENT_THREADS) s.default.show({
                            title: R.default.Messages.CANNOT_CREATE_THREAD,
                            body: R.default.Messages.TOO_MANY_ANNOUNCEMENT_THREADS_MESSAGE
                        });
                        else if ((null === (l = o.body) || void 0 === l ? void 0 : l.code) === N.AbortCodes.SLOWMODE_RATE_LIMITED)(E = null !== (_ = o.body.retry_after) && void 0 !== _ ? _ : 0) > 0 && u.default.dispatch({
                            type: "SLOWMODE_SET_COOLDOWN",
                            channelId: e.id,
                            slowmodeType: h.SlowmodeType.CreateThread,
                            cooldownMs: E * O.default.Millis.SECOND
                        });
                        else if (429 === o.status) s.default.show({
                            title: r ? R.default.Messages.CANNOT_CREATE_FORUM_POST : R.default.Messages.CANNOT_CREATE_THREAD,
                            body: R.default.Messages.RATE_LIMITED
                        });
                        else if (b.FORUM_POST_CREATION_AUTOMOD_ERRORS.has(null === (c = o.body) || void 0 === c ? void 0 : c.code)) throw o;
                        else {
                            if (b.FORUM_POST_CREATION_UPLOAD_ERRORS.has(null === (f = o.body) || void 0 === f ? void 0 : f.code)) return [2, new Promise(function(e, t) {
                                null == o.body && t(), d.default.addConditionalChangeListener(function() {
                                    var n = d.default.getAndDeleteMostRecentUserCreatedThreadId();
                                    if (null != n) {
                                        var r = m.default.getChannel(n);
                                        return u.default.wait(function() {
                                            null == r ? t() : e(r)
                                        }), !1
                                    }
                                })
                            })];
                            s.default.show({
                                title: R.default.Messages.ERROR,
                                body: R.default.Messages.ERROR_OCCURRED_TRY_AGAIN
                            })
                        }
                        return [3, 4];
                    case 4:
                        return [2, new Promise(function(e, t) {
                            null == n.body && t(), m.default.addConditionalChangeListener(function() {
                                var t = m.default.getChannel(n.body.id);
                                if (null != t) return u.default.wait(function() {
                                    e(t)
                                }), !1
                            })
                        })]
                }
            })
        })).apply(this, arguments)
    }
}