function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        resolveApplicationCommandOption: function() {
            return A
        },
        resolvePlaintextInlineVoid: function() {
            return S
        }
    }), n("47120");
    var i = n("933557"),
        r = n("927723"),
        s = n("339085"),
        a = n("633302"),
        o = n("601070"),
        l = n("592125"),
        u = n("984933"),
        d = n("271383"),
        _ = n("430824"),
        c = n("594174"),
        E = n("483360"),
        I = n("709054"),
        T = n("752305"),
        f = n("377668");

    function S(e, t, n, c) {
        let {
            allowUsers: T = !0,
            allowRoles: S = !0
        } = null != c ? c : {};
        switch (e[0]) {
            case "@":
                return function(e, t, n, i, s) {
                    let [a, o] = e.slice(1).split("#", 2), u = null != t ? _.default.getGuild(t) : null, c = (0, r.getClydeExperimentEnabled)(u);
                    if (s && null == o && null != u) {
                        for (let e of Object.values(_.default.getRoles(u.id)))
                            if (a === e.name) return {
                                type: "roleMention",
                                roleId: e.id,
                                children: [{
                                    text: ""
                                }]
                            }
                    }
                    if (i) {
                        let e = null != n ? l.default.getChannel(n) : null;
                        if (null != e) {
                            if (e.isPrivate()) {
                                for (let t of e.recipients)
                                    if (h(a, o, t)) return {
                                        type: "userMention",
                                        userId: t,
                                        children: [{
                                            text: ""
                                        }]
                                    }
                            } else {
                                for (let {
                                        userId: e
                                    }
                                    of d.default.getMembers(t))
                                    if (h(a, o, e)) return {
                                        type: "userMention",
                                        userId: e,
                                        children: [{
                                            text: ""
                                        }]
                                    };
                                if (c && h(a, o, f.CLYDE_AI_USER_ID)) return {
                                    type: "userMention",
                                    userId: f.CLYDE_AI_USER_ID,
                                    children: [{
                                        text: ""
                                    }]
                                }
                            }
                        }
                    }
                    return null
                }(e, t, n, T, S);
            case ":":
                return function(e, t) {
                    let n = a.default.EMOJI_NAME_RE.exec(e);
                    if (null == n) return null;
                    let i = n[1],
                        r = s.default.getDisambiguatedEmojiContext(t).getCustomEmoji();
                    if (null != r && i in r) {
                        let e = r[i];
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
                    let r = u.default.getTextChannelNameDisambiguations(t);
                    for (let e of I.default.keys(r))
                        if (r[e].name === n) return {
                            type: "channelMention",
                            channelId: e,
                            children: [{
                                text: ""
                            }]
                        };
                    for (let e of E.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS) {
                        if (e !== u.GUILD_SELECTABLE_CHANNELS_KEY) {
                            for (let {
                                    channel: i
                                }
                                of u.default.getChannels(t)[e])
                                if (i.name === n) return {
                                    type: "channelMention",
                                    channelId: i.id,
                                    children: [{
                                        text: ""
                                    }]
                                }
                        }
                    }
                    let s = o.default.getActiveJoinedThreadsForGuild(t);
                    for (let e of I.default.keys(s))
                        for (let t of I.default.keys(s[e])) {
                            let {
                                channel: i
                            } = s[e][t];
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

    function A(e, t, n, i) {
        let r = S(e, t, n, i);
        return null == r ? null : (0, T.voidToOptionValue)(r)
    }

    function h(e, t, n) {
        let i = c.default.getUser(n);
        return null != i && (n === f.CLYDE_AI_USER_ID && "clyde" === e.toLowerCase() || i.username === e && i.discriminator === (null != t ? t : "0"))
    }
}