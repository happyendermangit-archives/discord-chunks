function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getOptions: function() {
            return d
        },
        findMatchingAutocompleteType: function() {
            return f
        },
        findCommandOptionAutocompleteType: function() {
            return p
        }
    }), n("222007"), n("70102");
    var i = n("798609"),
        l = n("389153"),
        a = n("149022"),
        s = n("558986"),
        r = n("237700"),
        o = n("851745"),
        u = n("958706");

    function d(e) {
        var t;
        let {
            activeCommandOption: n,
            canMentionUsers: s = !0,
            canMentionRoles: r = !0,
            canMentionChannels: u = !0,
            canMentionEveryone: d,
            canMentionClyde: c = !1,
            useNewSlashCommands: f,
            canOnlyUseTextCommands: p,
            canSendStickers: m,
            hideMentionDescription: h,
            hidePersonalInformation: x,
            type: E,
            emojiIntention: y,
            editorRef: g,
            onSendMessage: S,
            onSendSticker: C,
            setValue: _
        } = e, T = {
            mentions: {
                channel: o.ChannelMentionMode.DENY,
                global: o.GlobalMentionMode.DENY,
                role: o.RoleMentionMode.DENY,
                user: o.UserMentionMode.DENY,
                clyde: o.ClydeMentionMode.DENY
            },
            commands: o.CommandMode.DISABLED,
            allowStickers: !0 === m,
            forNonStringCommandOption: null != n && n.type !== i.ApplicationCommandOptionType.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === x,
            chatInputType: E,
            emojiIntention: y,
            sendMessage: S,
            sendSticker: C,
            insertText: (e, t) => {
                var n;
                null === (n = g.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
            },
            replaceText: (e, t) => {
                _(e, null != t ? t : (0, a.toRichValue)(e))
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = g.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
            }
        };
        if (null != n) {
            let e = (0, l.getApplicationCommandOptionQueryOptions)(n);
            e.canMentionChannels && (T.mentions.channel = o.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (T.mentions.global = e.canMentionHere ? o.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : o.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (T.mentions.role = e.canMentionNonMentionableRoles ? o.RoleMentionMode.ALLOW_ALL : o.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (T.mentions.user = e.canMentionAnyGuildUser ? o.UserMentionMode.ALLOW_GUILD : o.UserMentionMode.ALLOW_CHANNEL), T.hideMentionDescription = !0
        } else u && (T.mentions.channel = o.ChannelMentionMode.ALLOW_SELECTABLE), r && (T.mentions.role = o.RoleMentionMode.ALLOW_MENTIONABLE), s && (T.mentions.user = o.UserMentionMode.ALLOW_CHANNEL), d && (T.mentions.global = o.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), c && (T.mentions.clyde = o.ClydeMentionMode.ALLOW);
        return (null === (t = E.commands) || void 0 === t ? void 0 : t.enabled) && (f ? T.commands = p ? o.CommandMode.NEW_TEXT_ONLY : o.CommandMode.NEW : T.commands = o.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (T.allowedChannelTypes = n.channelTypes), T
    }

    function c(e) {
        let {
            type: t,
            channel: n,
            guild: i,
            query: l,
            isAtStart: a,
            options: s
        } = e, o = r.AUTOCOMPLETE_OPTIONS[t];
        if (null != o.sentinel) {
            if (!l.startsWith(o.sentinel)) return !1;
            l = l.substring(o.sentinel.length)
        }
        return !!(null == o.matches || o.matches(n, i, l, a, s)) || !1
    }

    function f(e) {
        let {
            channel: t,
            guild: n,
            options: i,
            currentWord: l,
            currentWordIsAtStart: a,
            textValue: d,
            optionText: f
        } = e, p = null;
        for (let e of r.AUTOCOMPLETE_PRIORITY) {
            var m, h, x, E, y, g;
            let S = r.AUTOCOMPLETE_OPTIONS[e];
            if (e === o.AutocompleteOptionTypes.GIFS || e === o.AutocompleteOptionTypes.CHOICES) {
                if (i.commands === o.CommandMode.OLD_BUILT_INS) {
                    if (c({
                            type: e,
                            channel: t,
                            guild: n,
                            query: d,
                            isAtStart: !1,
                            options: i
                        })) {
                        p = {
                            type: e,
                            typeInfo: S,
                            query: d
                        };
                        break
                    }
                } else if (c({
                        type: e,
                        channel: t,
                        guild: n,
                        query: f,
                        isAtStart: !1,
                        options: i
                    })) return {
                    type: e,
                    typeInfo: S,
                    query: f
                }
            } else if (e === o.AutocompleteOptionTypes.COMMANDS && i.commands !== o.CommandMode.OLD_BUILT_INS) {
                if (c({
                        type: e,
                        channel: t,
                        guild: n,
                        query: d,
                        isAtStart: !0,
                        options: i
                    })) {
                    p = {
                        type: e,
                        typeInfo: S,
                        query: d.substring(null !== (h = null === (m = S.sentinel) || void 0 === m ? void 0 : m.length) && void 0 !== h ? h : 0)
                    };
                    break
                }
            } else if (e === o.AutocompleteOptionTypes.LEGACY_COMMANDS) {
                if (c({
                        type: e,
                        channel: t,
                        guild: n,
                        query: d,
                        isAtStart: a,
                        options: i
                    })) {
                    p = {
                        type: e,
                        typeInfo: S,
                        query: d
                    };
                    break
                }
            } else if (e === o.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
                if (null != l && l.length > 0 && (0, s.initiateEmojiInteraction)(u.EmojiInteractionPoint.AutocompleteTyped), null != l && c({
                        type: e,
                        channel: t,
                        guild: n,
                        query: l,
                        isAtStart: a,
                        options: i
                    })) {
                    p = {
                        type: e,
                        typeInfo: S,
                        query: l.substring(null !== (E = null === (x = S.sentinel) || void 0 === x ? void 0 : x.length) && void 0 !== E ? E : 0)
                    };
                    break
                }
            } else if (null != l && c({
                    type: e,
                    channel: t,
                    guild: n,
                    query: l,
                    isAtStart: a,
                    options: i
                })) {
                p = {
                    type: e,
                    typeInfo: S,
                    query: l.substring(null !== (g = null === (y = S.sentinel) || void 0 === y ? void 0 : y.length) && void 0 !== g ? g : 0)
                };
                break
            }
        }
        return null == p ? null : (p.query = p.query.toLocaleLowerCase(), p)
    }

    function p(e, t) {
        let n;
        if (null == t || null == e) return null;
        if (null != e.choices || e.autocomplete) n = o.AutocompleteOptionTypes.CHOICES;
        else switch (e.type) {
            case i.ApplicationCommandOptionType.BOOLEAN:
                n = o.AutocompleteOptionTypes.CHOICES;
                break;
            case i.ApplicationCommandOptionType.CHANNEL:
                n = o.AutocompleteOptionTypes.CHANNELS;
                break;
            case i.ApplicationCommandOptionType.ROLE:
            case i.ApplicationCommandOptionType.USER:
            case i.ApplicationCommandOptionType.MENTIONABLE:
                n = o.AutocompleteOptionTypes.MENTIONS;
                break;
            default:
                return null
        }
        let l = r.AUTOCOMPLETE_OPTIONS[n];
        return {
            type: n,
            typeInfo: l,
            query: t
        }
    }
}