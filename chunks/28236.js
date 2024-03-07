function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("65597"),
        o = n("77078"),
        u = n("430568"),
        d = n("277855"),
        c = n("305122"),
        f = n("462550"),
        m = n("235004"),
        p = n("520497"),
        h = n("812809"),
        E = n("948613"),
        g = n("368121"),
        S = n("706014"),
        C = function(e) {
            let {
                soundId: t,
                jumbo: n = !1
            } = e, {
                currentPreviewRef: a
            } = i.useContext(f.default), C = (0, r.default)([m.default], () => m.default.getSoundById(t)), T = (null == C ? void 0 : C.emojiId) != null || (null == C ? void 0 : C.emojiName) != null, [v, I] = i.useState(!1), _ = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), N = i.useCallback(() => {
                var e;
                null == C && (0, c.maybeFetchSoundboardSounds)();
                let n = new Audio((0, p.default)(t));
                null != a.current && a.current.pause(), a.current = n, n.currentTime = 0, n.volume = (0, h.default)(null !== (e = null == C ? void 0 : C.volume) && void 0 !== e ? e : .5), I(!0), n.play(), n.addEventListener("ended", () => {
                    I(!1)
                }, {
                    once: !0
                })
            }, [t, C, a, I]);
            return _ ? null == C ? (0, l.jsxs)(o.Clickable, {
                title: "Risky Click",
                tag: "span",
                onClick: N,
                className: S.container,
                children: [(0, l.jsx)(g.default, {
                    className: S.unknownSound
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "none",
                    className: S.text,
                    children: "Unknown"
                })]
            }) : n ? (0, l.jsxs)(o.Clickable, {
                onClick: N,
                className: S.jumboContainer,
                children: [(0, l.jsx)("div", {
                    className: s(S.jumboOverlay, {
                        [S.playing]: v
                    }),
                    children: (0, l.jsx)(E.default, {
                        className: S.jumboPlayIcon
                    })
                }), T && (0, l.jsx)(u.default, {
                    emojiId: null == C ? void 0 : C.emojiId,
                    emojiName: null == C ? void 0 : C.emojiName,
                    className: S.jumboEmoji
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "none",
                    className: S.text,
                    children: C.name
                })]
            }) : (0, l.jsxs)(o.Clickable, {
                tag: "span",
                onClick: N,
                className: S.container,
                children: [T && (0, l.jsx)(u.default, {
                    emojiId: null == C ? void 0 : C.emojiId,
                    emojiName: null == C ? void 0 : C.emojiName,
                    className: S.emoji
                }), (0, l.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "none",
                    className: S.text,
                    children: C.name
                })]
            }) : null
        }
}