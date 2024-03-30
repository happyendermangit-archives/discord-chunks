function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveApplicationCommandOption: function() {
            return h
        },
        resolvePlaintextInlineVoid: function() {
            return I
        }
    });
    var r = n("534965"),
        o = n("646220"),
        i = n("300983"),
        a = n("27375"),
        u = n("914535"),
        s = n("935741"),
        l = n("29604"),
        c = n("957808"),
        f = n("306912"),
        d = n("208454"),
        _ = n("378309"),
        E = n("523018"),
        p = n("941055"),
        m = n("142680");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t, n, d) {
        var p = null != d ? d : {},
            I = p.allowUsers,
            h = p.allowRoles;
        switch (e[0]) {
            case "@":
                return function(e, t, n, r, i) {
                    var a = (h = e.slice(1).split("#", 2), T = 2, function(e) {
                            if (Array.isArray(e)) return e
                        }(h) || function(e, t) {
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
                        }(h, T) || function(e, t) {
                            if (e) {
                                if ("string" == typeof e) return y(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                            }
                        }(h, T) || function() {
                            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()),
                        u = a[0],
                        l = a[1],
                        d = null != t ? f.default.getGuild(t) : null,
                        _ = (0, o.getClydeExperimentEnabled)(d);
                    if (i && null == l && null != d) {
                        var E = !0,
                            p = !1,
                            I = void 0;
                        try {
                            for (var h, T, S, v = Object.values(f.default.getRoles(d.id))[Symbol.iterator](); !(E = (S = v.next()).done); E = !0) {
                                var g = S.value;
                                if (u === g.name) return {
                                    type: "roleMention",
                                    roleId: g.id,
                                    children: [{
                                        text: ""
                                    }]
                                }
                            }
                        } catch (e) {
                            p = !0, I = e
                        } finally {
                            try {
                                !E && null != v.return && v.return()
                            } finally {
                                if (p) throw I
                            }
                        }
                    }
                    if (r) {
                        var A = null != n ? s.default.getChannel(n) : null;
                        if (null != A) {
                            if (A.isPrivate()) {
                                var b = !0,
                                    N = !1,
                                    R = void 0;
                                try {
                                    for (var C, P = A.recipients[Symbol.iterator](); !(b = (C = P.next()).done); b = !0) {
                                        var D = C.value;
                                        if (O(u, l, D)) return {
                                            type: "userMention",
                                            userId: D,
                                            children: [{
                                                text: ""
                                            }]
                                        }
                                    }
                                } catch (e) {
                                    N = !0, R = e
                                } finally {
                                    try {
                                        !b && null != P.return && P.return()
                                    } finally {
                                        if (N) throw R
                                    }
                                }
                            } else {
                                var L = c.default.getMembers(t),
                                    M = !0,
                                    U = !1,
                                    w = void 0;
                                try {
                                    for (var k, G = L[Symbol.iterator](); !(M = (k = G.next()).done); M = !0) {
                                        var B = k.value.userId;
                                        if (O(u, l, B)) return {
                                            type: "userMention",
                                            userId: B,
                                            children: [{
                                                text: ""
                                            }]
                                        }
                                    }
                                } catch (e) {
                                    U = !0, w = e
                                } finally {
                                    try {
                                        !M && null != G.return && G.return()
                                    } finally {
                                        if (U) throw w
                                    }
                                }
                                if (_ && O(u, l, m.CLYDE_AI_USER_ID)) return {
                                    type: "userMention",
                                    userId: m.CLYDE_AI_USER_ID,
                                    children: [{
                                        text: ""
                                    }]
                                }
                            }
                        }
                    }
                    return null
                }(e, t, n, void 0 === I || I, void 0 === h || h);
            case ":":
                return function(e, t) {
                    var n = a.default.EMOJI_NAME_RE.exec(e);
                    if (null == n) return null;
                    var r = n[1],
                        o = i.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                    if (null != o && r in o) {
                        var u = o[r];
                        return {
                            type: "customEmoji",
                            emoji: {
                                emojiId: u.id,
                                name: "require_colons" in u && u.require_colons ? ":".concat(u.name, ":") : u.name,
                                animated: !0 === u.animated,
                                jumboable: !1
                            },
                            children: [{
                                text: ""
                            }]
                        }
                    }
                    return null
                }(e, t);
            case "#":
                return function(e, t) {
                    if (null == t) return null;
                    s = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, r.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
                    var n = l.default.getTextChannelNameDisambiguations(t),
                        o = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var s, c, f = E.default.keys(n)[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
                            var d = c.value;
                            if (n[d].name === s) return {
                                type: "channelMention",
                                channelId: d,
                                children: [{
                                    text: ""
                                }]
                            }
                        }
                    } catch (e) {
                        i = !0, a = e
                    } finally {
                        try {
                            !o && null != f.return && f.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    var p = !0,
                        m = !1,
                        y = void 0;
                    try {
                        for (var I, h = (0, _.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS)[Symbol.iterator](); !(p = (I = h.next()).done); p = !0) {
                            var O = I.value;
                            if (O !== l.GUILD_SELECTABLE_CHANNELS_KEY) {
                                var T = l.default.getChannels(t)[O],
                                    S = !0,
                                    v = !1,
                                    g = void 0;
                                try {
                                    for (var A, b = T[Symbol.iterator](); !(S = (A = b.next()).done); S = !0) {
                                        var N = A.value.channel;
                                        if (N.name === s) return {
                                            type: "channelMention",
                                            channelId: N.id,
                                            children: [{
                                                text: ""
                                            }]
                                        }
                                    }
                                } catch (e) {
                                    v = !0, g = e
                                } finally {
                                    try {
                                        !S && null != b.return && b.return()
                                    } finally {
                                        if (v) throw g
                                    }
                                }
                            }
                        }
                    } catch (e) {
                        m = !0, y = e
                    } finally {
                        try {
                            !p && null != h.return && h.return()
                        } finally {
                            if (m) throw y
                        }
                    }
                    var R = u.default.getActiveJoinedThreadsForGuild(t),
                        C = !0,
                        P = !1,
                        D = void 0;
                    try {
                        for (var L, M = E.default.keys(R)[Symbol.iterator](); !(C = (L = M.next()).done); C = !0) {
                            var U = L.value,
                                w = !0,
                                k = !1,
                                G = void 0;
                            try {
                                for (var B, j = E.default.keys(R[U])[Symbol.iterator](); !(w = (B = j.next()).done); w = !0) {
                                    var F = B.value,
                                        V = R[U][F].channel;
                                    if (V.name === s) return {
                                        type: "channelMention",
                                        channelId: V.id,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                                }
                            } catch (e) {
                                k = !0, G = e
                            } finally {
                                try {
                                    !w && null != j.return && j.return()
                                } finally {
                                    if (k) throw G
                                }
                            }
                        }
                    } catch (e) {
                        P = !0, D = e
                    } finally {
                        try {
                            !C && null != M.return && M.return()
                        } finally {
                            if (P) throw D
                        }
                    }
                    return null
                }(e, t)
        }
        return null
    }

    function h(e, t, n, r) {
        var o = I(e, t, n, r);
        return null == o ? null : (0, p.voidToOptionValue)(o)
    }

    function O(e, t, n) {
        var r = d.default.getUser(n);
        return null != r && (n === m.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || r.username === e && r.discriminator === (null != t ? t : "0"))
    }
}