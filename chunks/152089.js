function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findCommandOptionAutocompleteType: function() {
            return E
        },
        findMatchingAutocompleteType: function() {
            return c
        },
        getOptions: function() {
            return d
        }
    }), n("47120"), n("411104");
    var i = n("911969"),
        r = n("581364"),
        a = n("752305"),
        s = n("130402"),
        o = n("365704"),
        l = n("590921"),
        u = n("185923");

    function d(e) {
        var t;
        let {
            activeCommandOption: n,
            canMentionUsers: s = !0,
            canMentionRoles: o = !0,
            canMentionChannels: u = !0,
            canMentionEveryone: d,
            canMentionClyde: _ = !1,
            useNewSlashCommands: c,
            canOnlyUseTextCommands: E,
            canSendStickers: I,
            hideMentionDescription: T,
            hidePersonalInformation: f,
            type: S,
            emojiIntention: h,
            editorRef: A,
            onSendMessage: m,
            onSendSticker: N,
            setValue: p
        } = e, O = {
            mentions: {
                channel: l.ChannelMentionMode.DENY,
                global: l.GlobalMentionMode.DENY,
                role: l.RoleMentionMode.DENY,
                user: l.UserMentionMode.DENY,
                clyde: l.ClydeMentionMode.DENY
            },
            commands: l.CommandMode.DISABLED,
            allowStickers: !0 === I,
            forNonStringCommandOption: null != n && n.type !== i.ApplicationCommandOptionType.STRING,
            hideMentionDescription: !0 === T,
            hidePersonalInformation: !0 === f,
            chatInputType: S,
            emojiIntention: h,
            sendMessage: m,
            sendSticker: N,
            insertText: (e, t) => {
                var n;
                null === (n = A.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
            },
            replaceText: (e, t) => {
                p(e, null != t ? t : (0, a.toRichValue)(e))
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = A.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
            }
        };
        if (null != n) {
            let e = (0, r.getApplicationCommandOptionQueryOptions)(n);
            e.canMentionChannels && (O.mentions.channel = l.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (O.mentions.global = e.canMentionHere ? l.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : l.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (O.mentions.role = e.canMentionNonMentionableRoles ? l.RoleMentionMode.ALLOW_ALL : l.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (O.mentions.user = e.canMentionAnyGuildUser ? l.UserMentionMode.ALLOW_GUILD : l.UserMentionMode.ALLOW_CHANNEL), O.hideMentionDescription = !0
        } else u && (O.mentions.channel = l.ChannelMentionMode.ALLOW_SELECTABLE), o && (O.mentions.role = l.RoleMentionMode.ALLOW_MENTIONABLE), s && (O.mentions.user = l.UserMentionMode.ALLOW_CHANNEL), d && (O.mentions.global = l.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), _ && (O.mentions.clyde = l.ClydeMentionMode.ALLOW);
        return (null === (t = S.commands) || void 0 === t ? void 0 : t.enabled) && (c ? O.commands = E ? l.CommandMode.NEW_TEXT_ONLY : l.CommandMode.NEW : O.commands = l.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (O.allowedChannelTypes = n.channelTypes), O
    }

    function _(e) {
        let {
            type: t,
            channel: n,
            guild: i,
            query: r,
            isAtStart: a,
            options: s
        } = e, l = o.AUTOCOMPLETE_OPTIONS[t];
        if (null != l.sentinel) {
            if (!r.startsWith(l.sentinel)) return !1;
            r = r.substring(l.sentinel.length)
        }
        return !!(null == l.matches || l.matches(n, i, r, a, s)) || !1
    }

    function c(e) {
        let {
            channel: t,
            guild: n,
            options: i,
            currentWord: r,
            currentWordIsAtStart: a,
            textValue: d,
            optionText: c
        } = e, E = null;
        for (let e of o.AUTOCOMPLETE_PRIORITY) {
            var I, T, f, S, h, A;
            let m = o.AUTOCOMPLETE_OPTIONS[e];
            if (e === l.AutocompleteOptionTypes.GIFS || e === l.AutocompleteOptionTypes.CHOICES) {
                if (i.commands === l.CommandMode.OLD_BUILT_INS) {
                    if (_({
                            type: e,
                            channel: t,
                            guild: n,
                            query: d,
                            isAtStart: !1,
                            options: i
                        })) {
                        E = {
                            type: e,
                            typeInfo: m,
                            query: d
                        };
                        break
                    }
                } else if (_({
                        type: e,
                        channel: t,
                        guild: n,
                        query: c,
                        isAtStart: !1,
                        options: i
                    })) return {
                    type: e,
                    typeInfo: m,
                    query: c
                }
            } else if (e === l.AutocompleteOptionTypes.COMMANDS && i.commands !== l.CommandMode.OLD_BUILT_INS) {
                if (_({
                        type: e,
                        channel: t,
                        guild: n,
                        query: d,
                        isAtStart: !0,
                        options: i
                    })) {
                    E = {
                        type: e,
                        typeInfo: m,
                        query: d.substring(null !== (T = null === (I = m.sentinel) || void 0 === I ? void 0 : I.length) && void 0 !== T ? T : 0)
                    };
                    break
                }
            } else if (e === l.AutocompleteOptionTypes.LEGACY_COMMANDS) {
                if (_({
                        type: e,
                        channel: t,
                        guild: n,
                        query: d,
                        isAtStart: a,
                        options: i
                    })) {
                    E = {
                        type: e,
                        typeInfo: m,
                        query: d
                    };
                    break
                }
            } else if (e === l.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
                if (null != r && r.length > 0 && (0, s.initiateEmojiInteraction)(u.EmojiInteractionPoint.AutocompleteTyped), null != r && _({
                        type: e,
                        channel: t,
                        guild: n,
                        query: r,
                        isAtStart: a,
                        options: i
                    })) {
                    E = {
                        type: e,
                        typeInfo: m,
                        query: r.substring(null !== (S = null === (f = m.sentinel) || void 0 === f ? void 0 : f.length) && void 0 !== S ? S : 0)
                    };
                    break
                }
            } else if (null != r && _({
                    type: e,
                    channel: t,
                    guild: n,
                    query: r,
                    isAtStart: a,
                    options: i
                })) {
                E = {
                    type: e,
                    typeInfo: m,
                    query: r.substring(null !== (A = null === (h = m.sentinel) || void 0 === h ? void 0 : h.length) && void 0 !== A ? A : 0)
                };
                break
            }
        }
        return null == E ? null : (E.query = E.query.toLocaleLowerCase(), E)
    }

    function E(e, t) {
        let n;
        if (null == t || null == e) return null;
        if (null != e.choices || e.autocomplete) n = l.AutocompleteOptionTypes.CHOICES;
        else switch (e.type) {
            case i.ApplicationCommandOptionType.BOOLEAN:
                n = l.AutocompleteOptionTypes.CHOICES;
                break;
            case i.ApplicationCommandOptionType.CHANNEL:
                n = l.AutocompleteOptionTypes.CHANNELS;
                break;
            case i.ApplicationCommandOptionType.ROLE:
            case i.ApplicationCommandOptionType.USER:
            case i.ApplicationCommandOptionType.MENTIONABLE:
                n = l.AutocompleteOptionTypes.MENTIONS;
                break;
            default:
                return null
        }
        let r = o.AUTOCOMPLETE_OPTIONS[n];
        return {
            type: n,
            typeInfo: r,
            query: t
        }
    }
}