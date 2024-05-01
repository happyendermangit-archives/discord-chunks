function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("47120");
    var i = n("470079"),
        r = n("207561"),
        a = n("442837"),
        s = n("456007"),
        o = n("998698"),
        l = n("541716"),
        u = n("797610"),
        d = n("271383"),
        _ = n("496675"),
        c = n("246946"),
        E = n("594174"),
        I = n("106824"),
        T = n("691841"),
        f = n("981631"),
        S = n("377668"),
        h = n("185923");

    function A(e, t, n) {
        var A, m, N, p, O, R, C;
        let {
            channel: g,
            type: L
        } = e, [v, D] = i.useState(() => (0, I.createInitialState)()), M = (0, r.useForceUpdate)(), y = (0, a.useStateFromStores)([d.default], () => {
            if (null != e.guild) {
                var t;
                return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, S.CLYDE_AI_USER_ID)
            }
            return !1
        }), P = (0, u.useClydeEnabled)(e.guild, e.channel) && !y && !(0, u.canUseCustomClydeProfiles)(e.guild), U = (0, a.useStateFromStores)([d.default, E.default], () => {
            var e, t;
            let n = E.default.getCurrentUser();
            return null !== (t = null != g.guild_id && null != n ? null === (e = d.default.getMember(g.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }), {
            canMentionEveryone: b,
            hidePersonalInformation: G
        } = (0, a.useStateFromStoresObject)([_.default, c.default], () => ({
            canMentionEveryone: g.isPrivate() || U || L === l.ChatInputTypes.RULES_INPUT || _.default.can(f.Permissions.MENTION_EVERYONE, g),
            hidePersonalInformation: c.default.hidePersonalInformation
        }), [g, L, U]), {
            activeCommand: w,
            activeCommandOption: B
        } = (0, a.useStateFromStoresObject)([o.default], () => ({
            activeCommand: o.default.getActiveCommand(g.id),
            activeCommandOption: o.default.getActiveOption(g.id)
        })), k = (0, T.default)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: v,
            onFocus: e => F.setSelectedIndex(e)
        }), V = null === (A = e.editorRef.current) || void 0 === A ? void 0 : A.getCurrentWord(), x = {
            ...e,
            navigator: k,
            activeCommand: w,
            activeCommandOption: B,
            canMentionUsers: null !== (O = null === (m = L.users) || void 0 === m ? void 0 : m.allowMentioning) && void 0 !== O && O,
            canMentionEveryone: b,
            canMentionClyde: P,
            hidePersonalInformation: G,
            hideMentionDescription: L === l.ChatInputTypes.RULES_INPUT,
            emojiIntention: L === l.ChatInputTypes.RULES_INPUT ? h.EmojiIntention.COMMUNITY_CONTENT : h.EmojiIntention.CHAT,
            currentWord: null !== (R = null == V ? void 0 : V.word) && void 0 !== R ? R : "",
            currentWordIsAtStart: (null == V ? void 0 : V.isAtStart) === !0,
            optionText: null != B ? (0, s.getString)({
                [B.name]: null !== (C = null === (N = e.editorRef.current) || void 0 === N ? void 0 : N.getCurrentCommandOptionValue()) && void 0 !== C ? C : []
            }, B.name) : ""
        }, [F] = i.useState(() => new I.default(x));
        return i.useEffect(() => {
            F.updateProps(x)
        }), i.useImperativeHandle(t, () => F, [F]), i.useEffect(() => {
            let e = e => D(e);
            return F.on("change", e), F.on("update", M), () => {
                F.off("change", e), F.off("update", M)
            }
        }, [M, F]), i.useEffect(() => {
            var e;
            let t = null === (e = v.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => F.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e)
                }
            }
        }, [F, null === (p = v.query) || void 0 === p ? void 0 : p.typeInfo]), [v, F, k]
    }
}