function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var l = n("884691"),
        i = n("775560"),
        a = n("446674"),
        s = n("118200"),
        r = n("383018"),
        o = n("850391"),
        u = n("980215"),
        d = n("26989"),
        c = n("957255"),
        f = n("102985"),
        m = n("697218"),
        p = n("234246"),
        h = n("689299"),
        E = n("49111"),
        g = n("680894"),
        C = n("958706");

    function S(e, t, n) {
        var S, T, I, v, _, N, A;
        let {
            channel: x,
            type: y
        } = e, [O, R] = l.useState(() => (0, p.createInitialState)()), M = (0, i.useForceUpdate)(), L = (0, a.useStateFromStores)([d.default], () => {
            if (null != e.guild) {
                var t;
                return null != d.default.getMember(null === (t = e.guild) || void 0 === t ? void 0 : t.id, g.CLYDE_AI_USER_ID)
            }
            return !1
        }), P = (0, u.useClydeEnabled)(e.guild, e.channel) && !L && !(0, u.canUseCustomClydeProfiles)(e.guild), b = (0, a.useStateFromStores)([d.default, m.default], () => {
            var e, t;
            let n = m.default.getCurrentUser();
            return null !== (t = null != x.guild_id && null != n ? null === (e = d.default.getMember(x.guild_id, n.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t
        }), {
            canMentionEveryone: j,
            hidePersonalInformation: U
        } = (0, a.useStateFromStoresObject)([c.default, f.default], () => {
            let e = x.isPrivate();
            return {
                canMentionEveryone: e || b || y === o.ChatInputTypes.RULES_INPUT || c.default.can(E.Permissions.MENTION_EVERYONE, x),
                hidePersonalInformation: f.default.hidePersonalInformation
            }
        }, [x, y, b]), {
            activeCommand: D,
            activeCommandOption: k
        } = (0, a.useStateFromStoresObject)([r.default], () => ({
            activeCommand: r.default.getActiveCommand(x.id),
            activeCommandOption: r.default.getActiveOption(x.id)
        })), w = (0, h.default)({
            navId: "channel-autocomplete",
            scrollerRef: n,
            state: O,
            onFocus: e => B.setSelectedIndex(e)
        }), F = null === (S = e.editorRef.current) || void 0 === S ? void 0 : S.getCurrentWord(), G = {
            ...e,
            navigator: w,
            activeCommand: D,
            activeCommandOption: k,
            canMentionUsers: null !== (_ = null === (T = y.users) || void 0 === T ? void 0 : T.allowMentioning) && void 0 !== _ && _,
            canMentionEveryone: j,
            canMentionClyde: P,
            hidePersonalInformation: U,
            hideMentionDescription: y === o.ChatInputTypes.RULES_INPUT,
            emojiIntention: y === o.ChatInputTypes.RULES_INPUT ? C.EmojiIntention.COMMUNITY_CONTENT : C.EmojiIntention.CHAT,
            currentWord: null !== (N = null == F ? void 0 : F.word) && void 0 !== N ? N : "",
            currentWordIsAtStart: (null == F ? void 0 : F.isAtStart) === !0,
            optionText: null != k ? (0, s.getString)({
                [k.name]: null !== (A = null === (I = e.editorRef.current) || void 0 === I ? void 0 : I.getCurrentCommandOptionValue()) && void 0 !== A ? A : []
            }, k.name) : ""
        }, [B] = l.useState(() => new p.default(G));
        return l.useEffect(() => {
            B.updateProps(G)
        }), l.useImperativeHandle(t, () => B, [B]), l.useEffect(() => {
            let e = e => R(e);
            return B.on("change", e), B.on("update", M), () => {
                B.off("change", e), B.off("update", M)
            }
        }, [M, B]), l.useEffect(() => {
            var e;
            let t = null === (e = O.query) || void 0 === e ? void 0 : e.typeInfo.stores;
            if (null != t) {
                let e = () => B.queryResults();
                for (let n of t) n.addChangeListener(e);
                return () => {
                    for (let n of t) n.removeChangeListener(e)
                }
            }
        }, [B, null === (v = O.query) || void 0 === v ? void 0 : v.typeInfo]), [O, B, w]
    }
}