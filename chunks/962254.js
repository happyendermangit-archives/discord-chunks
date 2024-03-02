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
            return m
        }
    }), n("222007"), n("70102");
    var l = n("798609"),
        i = n("389153"),
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
            canOnlyUseTextCommands: m,
            canSendStickers: p,
            hideMentionDescription: h,
            hidePersonalInformation: E,
            type: g,
            emojiIntention: C,
            editorRef: S,
            onSendMessage: T,
            onSendSticker: I,
            setValue: v
        } = e, _ = {
            mentions: {
                channel: o.ChannelMentionMode.DENY,
                global: o.GlobalMentionMode.DENY,
                role: o.RoleMentionMode.DENY,
                user: o.UserMentionMode.DENY,
                clyde: o.ClydeMentionMode.DENY
            },
            commands: o.CommandMode.DISABLED,
            allowStickers: !0 === p,
            forNonStringCommandOption: null != n && n.type !== l.ApplicationCommandOptionType.STRING,
            hideMentionDescription: !0 === h,
            hidePersonalInformation: !0 === E,
            chatInputType: g,
            emojiIntention: C,
            sendMessage: T,
            sendSticker: I,
            insertText: (e, t) => {
                var n;
                null === (n = S.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
            },
            replaceText: (e, t) => {
                v(e, null != t ? t : (0, a.toRichValue)(e))
            },
            getCommandOptionValues: () => {
                var e;
                return null === (e = S.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
            }
        };
        if (null != n) {
            let e = (0, i.getApplicationCommandOptionQueryOptions)(n);
            e.canMentionChannels && (_.mentions.channel = o.ChannelMentionMode.ALLOW_SELECTABLE), e.canMentionEveryone && (_.mentions.global = e.canMentionHere ? o.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : o.GlobalMentionMode.ALLOW_EVERYONE), e.canMentionRoles && (_.mentions.role = e.canMentionNonMentionableRoles ? o.RoleMentionMode.ALLOW_ALL : o.RoleMentionMode.ALLOW_MENTIONABLE), e.canMentionUsers && (_.mentions.user = e.canMentionAnyGuildUser ? o.UserMentionMode.ALLOW_GUILD : o.UserMentionMode.ALLOW_CHANNEL), _.hideMentionDescription = !0
        } else u && (_.mentions.channel = o.ChannelMentionMode.ALLOW_SELECTABLE), r && (_.mentions.role = o.RoleMentionMode.ALLOW_MENTIONABLE), s && (_.mentions.user = o.UserMentionMode.ALLOW_CHANNEL), d && (_.mentions.global = o.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), c && (_.mentions.clyde = o.ClydeMentionMode.ALLOW);
        return (null === (t = g.commands) || void 0 === t ? void 0 : t.enabled) && (f ? _.commands = m ? o.CommandMode.NEW_TEXT_ONLY : o.CommandMode.NEW : _.commands = o.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (_.allowedChannelTypes = n.channelTypes), _
    }

    function c(e) {
        let {
            type: t,
            channel: n,
            guild: l,
            query: i,
            isAtStart: a,
            options: s
        } = e, o = r.AUTOCOMPLETE_OPTIONS[t];
        if (null != o.sentinel) {
            if (!i.startsWith(o.sentinel)) return !1;
            i = i.substring(o.sentinel.length)
        }
        return !!(null == o.matches || o.matches(n, l, i, a, s)) || !1
    }

    function f(e) {
        let {
            channel: t,
            guild: n,
            options: l,
            currentWord: i,
            currentWordIsAtStart: a,
            textValue: d,
            optionText: f
        } = e, m = null;
        for (let e of r.AUTOCOMPLETE_PRIORITY) {
            var p, h, E, g, C, S;
            let T = r.AUTOCOMPLETE_OPTIONS[e];
            if (e === o.AutocompleteOptionTypes.GIFS || e === o.AutocompleteOptionTypes.CHOICES) {
                if (l.commands === o.CommandMode.OLD_BUILT_INS) {
                    if (c({
                            type: e,
                            channel: t,
                            guild: n,
                            query: d,
                            isAtStart: !1,
                            options: l
                        })) {
                        m = {
                            type: e,
                            typeInfo: T,
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
                        options: l
                    })) return {
                    type: e,
                    typeInfo: T,
                    query: f
                }
            } else if (e === o.AutocompleteOptionTypes.COMMANDS && l.commands !== o.CommandMode.OLD_BUILT_INS) {
                if (c({
                        type: e,
                        channel: t,
                        guild: n,
                        query: d,
                        isAtStart: !0,
                        options: l
                    })) {
                    m = {
                        type: e,
                        typeInfo: T,
                        query: d.substring(null !== (h = null === (p = T.sentinel) || void 0 === p ? void 0 : p.length) && void 0 !== h ? h : 0)
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
                        options: l
                    })) {
                    m = {
                        type: e,
                        typeInfo: T,
                        query: d
                    };
                    break
                }
            } else if (e === o.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
                if (null != i && i.length > 0 && (0, s.initiateEmojiInteraction)(u.EmojiInteractionPoint.AutocompleteTyped), null != i && c({
                        type: e,
                        channel: t,
                        guild: n,
                        query: i,
                        isAtStart: a,
                        options: l
                    })) {
                    m = {
                        type: e,
                        typeInfo: T,
                        query: i.substring(null !== (g = null === (E = T.sentinel) || void 0 === E ? void 0 : E.length) && void 0 !== g ? g : 0)
                    };
                    break
                }
            } else if (null != i && c({
                    type: e,
                    channel: t,
                    guild: n,
                    query: i,
                    isAtStart: a,
                    options: l
                })) {
                m = {
                    type: e,
                    typeInfo: T,
                    query: i.substring(null !== (S = null === (C = T.sentinel) || void 0 === C ? void 0 : C.length) && void 0 !== S ? S : 0)
                };
                break
            }
        }
        return null == m ? null : (m.query = m.query.toLocaleLowerCase(), m)
    }

    function m(e, t) {
        let n;
        if (null == t || null == e) return null;
        if (null != e.choices || e.autocomplete) n = o.AutocompleteOptionTypes.CHOICES;
        else switch (e.type) {
            case l.ApplicationCommandOptionType.BOOLEAN:
                n = o.AutocompleteOptionTypes.CHOICES;
                break;
            case l.ApplicationCommandOptionType.CHANNEL:
                n = o.AutocompleteOptionTypes.CHANNELS;
                break;
            case l.ApplicationCommandOptionType.ROLE:
            case l.ApplicationCommandOptionType.USER:
            case l.ApplicationCommandOptionType.MENTIONABLE:
                n = o.AutocompleteOptionTypes.MENTIONS;
                break;
            default:
                return null
        }
        let i = r.AUTOCOMPLETE_OPTIONS[n];
        return {
            type: n,
            typeInfo: i,
            query: t
        }
    }
}