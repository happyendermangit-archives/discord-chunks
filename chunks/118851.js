function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolvePlaintextInlineVoid: function() {
            return C
        },
        resolveApplicationCommandOption: function() {
            return T
        }
    }), n("222007");
    var i = n("679653"),
        l = n("980215"),
        a = n("385976"),
        o = n("867805"),
        r = n("401690"),
        s = n("42203"),
        u = n("923959"),
        d = n("26989"),
        c = n("305961"),
        p = n("697218"),
        f = n("25292"),
        m = n("299039"),
        _ = n("149022"),
        I = n("680894");

    function C(e, t, n, p) {
        let {
            allowUsers: _ = !0,
            allowRoles: C = !0
        } = null != p ? p : {};
        switch (e[0]) {
            case "@":
                return function(e, t, n, i, a) {
                    let [o, r] = e.slice(1).split("#", 2), u = null != t ? c.default.getGuild(t) : null, p = (0, l.getClydeExperimentEnabled)(u);
                    if (a && null == r && null != u) {
                        for (let e of Object.values(u.roles))
                            if (o === e.name) return {
                                type: "roleMention",
                                roleId: e.id,
                                children: [{
                                    text: ""
                                }]
                            }
                    }
                    if (i) {
                        let e = null != n ? s.default.getChannel(n) : null;
                        if (null != e) {
                            if (e.isPrivate()) {
                                for (let t of e.recipients)
                                    if (A(o, r, t)) return {
                                        type: "userMention",
                                        userId: t,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            } else {
                                let e = d.default.getMembers(t);
                                for (let {
                                        userId: t
                                    }
                                    of e)
                                    if (A(o, r, t)) return {
                                        type: "userMention",
                                        userId: t,
                                        children: [{
                                            text: ""
                                        }]
                                    };
                                if (p && A(o, r, I.CLYDE_AI_USER_ID)) return {
                                    type: "userMention",
                                    userId: I.CLYDE_AI_USER_ID,
                                    children: [{
                                        text: ""
                                    }]
                                }
                            }
                        }
                    }
                    return null
                }(e, t, n, _, C);
            case ":":
                return function(e, t) {
                    let n = o.default.EMOJI_NAME_RE.exec(e);
                    if (null == n) return null;
                    let i = n[1],
                        l = a.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                    if (null != l && i in l) {
                        let e = l[i];
                        return {
                            type: "customEmoji",
                            emoji: {
                                emojiId: e.id,
                                name: "require_colons" in e && e.require_colons ? ":".concat(e.name, ":") : e.name,
                                animated: !0 === e.animated,
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
                    let n;
                    if (null == t) return null;
                    n = e.length > 3 && '"' === e[1] && '"' === e[e.length - 1] ? (0, i.unescapeChannelName)(e.slice(2, e.length - 1)) : e.slice(1);
                    let l = u.default.getTextChannelNameDisambiguations(t);
                    for (let e of m.default.keys(l))
                        if (l[e].name === n) return {
                            type: "channelMention",
                            channelId: e,
                            children: [{
                                text: ""
                            }]
                        };
                    for (let e of f.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
                        if (e === u.GUILD_SELECTABLE_CHANNELS_KEY) continue;
                        let i = u.default.getChannels(t)[e];
                        for (let {
                                channel: e
                            }
                            of i)
                            if (e.name === n) return {
                                type: "channelMention",
                                channelId: e.id,
                                children: [{
                                    text: ""
                                }]
                            }
                    }
                    let a = r.default.getActiveJoinedThreadsForGuild(t);
                    for (let e of m.default.keys(a))
                        for (let t of m.default.keys(a[e])) {
                            let {
                                channel: i
                            } = a[e][t];
                            if (i.name === n) return {
                                type: "channelMention",
                                channelId: i.id,
                                children: [{
                                    text: ""
                                }]
                            }
                        }
                    return null
                }(e, t)
        }
        return null
    }

    function T(e, t, n, i) {
        let l = C(e, t, n, i);
        return null == l ? null : (0, _.voidToOptionValue)(l)
    }

    function A(e, t, n) {
        let i = p.default.getUser(n);
        return null != i && (n === I.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || i.username === e && i.discriminator === (null != t ? t : "0"))
    }
}