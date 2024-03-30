function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        findCommandOptionAutocompleteType: function() {
            return _
        },
        findMatchingAutocompleteType: function() {
            return d
        },
        getOptions: function() {
            return c
        }
    });
    var r = n("29570"),
        o = n("653754"),
        i = n("941055"),
        a = n("645077"),
        u = n("2674"),
        s = n("209610"),
        l = n("68735");

    function c(e) {
        var t, n = e.activeCommandOption,
            a = e.canMentionUsers,
            u = e.canMentionRoles,
            l = e.canMentionChannels,
            c = e.canMentionEveryone,
            f = e.canMentionClyde,
            d = e.useNewSlashCommands,
            _ = e.canOnlyUseTextCommands,
            E = e.canSendStickers,
            p = e.hideMentionDescription,
            m = e.hidePersonalInformation,
            y = e.type,
            I = e.emojiIntention,
            h = e.editorRef,
            O = e.onSendMessage,
            T = e.onSendSticker,
            S = e.setValue,
            v = {
                mentions: {
                    channel: s.ChannelMentionMode.DENY,
                    global: s.GlobalMentionMode.DENY,
                    role: s.RoleMentionMode.DENY,
                    user: s.UserMentionMode.DENY,
                    clyde: s.ClydeMentionMode.DENY
                },
                commands: s.CommandMode.DISABLED,
                allowStickers: !0 === E,
                forNonStringCommandOption: null != n && n.type !== r.ApplicationCommandOptionType.STRING,
                hideMentionDescription: !0 === p,
                hidePersonalInformation: !0 === m,
                chatInputType: y,
                emojiIntention: I,
                sendMessage: O,
                sendSticker: T,
                insertText: function(e, t) {
                    var n;
                    null === (n = h.current) || void 0 === n || n.insertAutocomplete(e, null != t ? t : e)
                },
                replaceText: function(e, t) {
                    S(e, null != t ? t : (0, i.toRichValue)(e))
                },
                getCommandOptionValues: function() {
                    var e;
                    return null === (e = h.current) || void 0 === e ? void 0 : e.getCommandOptionValues()
                }
            };
        if (null != n) {
            var g = (0, o.getApplicationCommandOptionQueryOptions)(n);
            g.canMentionChannels && (v.mentions.channel = s.ChannelMentionMode.ALLOW_SELECTABLE), g.canMentionEveryone && (v.mentions.global = g.canMentionHere ? s.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE : s.GlobalMentionMode.ALLOW_EVERYONE), g.canMentionRoles && (v.mentions.role = g.canMentionNonMentionableRoles ? s.RoleMentionMode.ALLOW_ALL : s.RoleMentionMode.ALLOW_MENTIONABLE), g.canMentionUsers && (v.mentions.user = g.canMentionAnyGuildUser ? s.UserMentionMode.ALLOW_GUILD : s.UserMentionMode.ALLOW_CHANNEL), v.hideMentionDescription = !0
        } else(void 0 === l || l) && (v.mentions.channel = s.ChannelMentionMode.ALLOW_SELECTABLE), (void 0 === u || u) && (v.mentions.role = s.RoleMentionMode.ALLOW_MENTIONABLE), (void 0 === a || a) && (v.mentions.user = s.UserMentionMode.ALLOW_CHANNEL), c && (v.mentions.global = s.GlobalMentionMode.ALLOW_EVERYONE_OR_HERE), void 0 !== f && f && (v.mentions.clyde = s.ClydeMentionMode.ALLOW);
        return (null === (t = y.commands) || void 0 === t ? void 0 : t.enabled) && (d ? v.commands = _ ? s.CommandMode.NEW_TEXT_ONLY : s.CommandMode.NEW : v.commands = s.CommandMode.OLD_BUILT_INS), null != n && null != n.channelTypes && (v.allowedChannelTypes = n.channelTypes), v
    }

    function f(e) {
        var t = e.type,
            n = e.channel,
            r = e.guild,
            o = e.query,
            i = e.isAtStart,
            a = e.options,
            s = u.AUTOCOMPLETE_OPTIONS[t];
        if (null != s.sentinel) {
            if (!o.startsWith(s.sentinel)) return !1;
            o = o.substring(s.sentinel.length)
        }
        return !!(null == s.matches || s.matches(n, r, o, i, a)) || !1
    }

    function d(e) {
        var t = e.channel,
            n = e.guild,
            r = e.options,
            o = e.currentWord,
            i = e.currentWordIsAtStart,
            c = e.textValue,
            d = e.optionText,
            _ = null,
            E = !0,
            p = !1,
            m = void 0;
        try {
            for (var y, I = (0, u.AUTOCOMPLETE_PRIORITY)[Symbol.iterator](); !(E = (y = I.next()).done); E = !0) {
                var h, O, T, S, v, g, A = y.value,
                    b = u.AUTOCOMPLETE_OPTIONS[A];
                if (A === s.AutocompleteOptionTypes.GIFS || A === s.AutocompleteOptionTypes.CHOICES) {
                    if (r.commands === s.CommandMode.OLD_BUILT_INS) {
                        if (f({
                                type: A,
                                channel: t,
                                guild: n,
                                query: c,
                                isAtStart: !1,
                                options: r
                            })) {
                            _ = {
                                type: A,
                                typeInfo: b,
                                query: c
                            };
                            break
                        }
                    } else if (f({
                            type: A,
                            channel: t,
                            guild: n,
                            query: d,
                            isAtStart: !1,
                            options: r
                        })) return {
                        type: A,
                        typeInfo: b,
                        query: d
                    }
                } else if (A === s.AutocompleteOptionTypes.COMMANDS && r.commands !== s.CommandMode.OLD_BUILT_INS) {
                    if (f({
                            type: A,
                            channel: t,
                            guild: n,
                            query: c,
                            isAtStart: !0,
                            options: r
                        })) {
                        _ = {
                            type: A,
                            typeInfo: b,
                            query: c.substring(null !== (O = null === (h = b.sentinel) || void 0 === h ? void 0 : h.length) && void 0 !== O ? O : 0)
                        };
                        break
                    }
                } else if (A === s.AutocompleteOptionTypes.LEGACY_COMMANDS) {
                    if (f({
                            type: A,
                            channel: t,
                            guild: n,
                            query: c,
                            isAtStart: i,
                            options: r
                        })) {
                        _ = {
                            type: A,
                            typeInfo: b,
                            query: c
                        };
                        break
                    }
                } else if (A === s.AutocompleteOptionTypes.EMOJIS_AND_STICKERS) {
                    if (null != o && o.length > 0 && (0, a.initiateEmojiInteraction)(l.EmojiInteractionPoint.AutocompleteTyped), null != o && f({
                            type: A,
                            channel: t,
                            guild: n,
                            query: o,
                            isAtStart: i,
                            options: r
                        })) {
                        _ = {
                            type: A,
                            typeInfo: b,
                            query: o.substring(null !== (S = null === (T = b.sentinel) || void 0 === T ? void 0 : T.length) && void 0 !== S ? S : 0)
                        };
                        break
                    }
                } else if (null != o && f({
                        type: A,
                        channel: t,
                        guild: n,
                        query: o,
                        isAtStart: i,
                        options: r
                    })) {
                    _ = {
                        type: A,
                        typeInfo: b,
                        query: o.substring(null !== (g = null === (v = b.sentinel) || void 0 === v ? void 0 : v.length) && void 0 !== g ? g : 0)
                    };
                    break
                }
            }
        } catch (e) {
            p = !0, m = e
        } finally {
            try {
                !E && null != I.return && I.return()
            } finally {
                if (p) throw m
            }
        }
        return null == _ ? null : (_.query = _.query.toLocaleLowerCase(), _)
    }

    function _(e, t) {
        if (null == t || null == e) return null;
        if (null != e.choices || e.autocomplete) n = s.AutocompleteOptionTypes.CHOICES;
        else switch (e.type) {
            case r.ApplicationCommandOptionType.BOOLEAN:
                n = s.AutocompleteOptionTypes.CHOICES;
                break;
            case r.ApplicationCommandOptionType.CHANNEL:
                n = s.AutocompleteOptionTypes.CHANNELS;
                break;
            case r.ApplicationCommandOptionType.ROLE:
            case r.ApplicationCommandOptionType.USER:
            case r.ApplicationCommandOptionType.MENTIONABLE:
                n = s.AutocompleteOptionTypes.MENTIONS;
                break;
            default:
                return null
        }
        var n, o = u.AUTOCOMPLETE_OPTIONS[n];
        return {
            type: n,
            typeInfo: o,
            query: t
        }
    }
}