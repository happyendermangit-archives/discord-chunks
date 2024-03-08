function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("65597"),
        o = n("77078"),
        u = n("430568"),
        d = n("277855"),
        c = n("305122"),
        f = n("462550"),
        p = n("235004"),
        m = n("520497"),
        h = n("812809"),
        x = n("948613"),
        E = n("368121"),
        y = n("706014"),
        g = function(e) {
            let {
                soundId: t,
                jumbo: n = !1
            } = e, {
                currentPreviewRef: a
            } = l.useContext(f.default), g = (0, r.default)([p.default], () => p.default.getSoundById(t)), S = (null == g ? void 0 : g.emojiId) != null || (null == g ? void 0 : g.emojiName) != null, [C, I] = l.useState(!1), T = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), _ = l.useCallback(() => {
                var e;
                null == g && (0, c.maybeFetchSoundboardSounds)();
                let n = new Audio((0, m.default)(t));
                null != a.current && a.current.pause(), a.current = n, n.currentTime = 0, n.volume = (0, h.default)(null !== (e = null == g ? void 0 : g.volume) && void 0 !== e ? e : .5), I(!0), n.play(), n.addEventListener("ended", () => {
                    I(!1)
                }, {
                    once: !0
                })
            }, [t, g, a, I]);
            return T ? null == g ? (0, i.jsxs)(o.Clickable, {
                title: "Risky Click",
                tag: "span",
                onClick: _,
                className: y.container,
                children: [(0, i.jsx)(E.default, {
                    className: y.unknownSound
                }), (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "none",
                    className: y.text,
                    children: "Unknown"
                })]
            }) : n ? (0, i.jsxs)(o.Clickable, {
                onClick: _,
                className: y.jumboContainer,
                children: [(0, i.jsx)("div", {
                    className: s(y.jumboOverlay, {
                        [y.playing]: C
                    }),
                    children: (0, i.jsx)(x.default, {
                        className: y.jumboPlayIcon
                    })
                }), S && (0, i.jsx)(u.default, {
                    emojiId: null == g ? void 0 : g.emojiId,
                    emojiName: null == g ? void 0 : g.emojiName,
                    className: y.jumboEmoji
                }), (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-lg/normal",
                    color: "none",
                    className: y.text,
                    children: g.name
                })]
            }) : (0, i.jsxs)(o.Clickable, {
                tag: "span",
                onClick: _,
                className: y.container,
                children: [S && (0, i.jsx)(u.default, {
                    emojiId: null == g ? void 0 : g.emojiId,
                    emojiName: null == g ? void 0 : g.emojiName,
                    className: y.emoji
                }), (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "none",
                    className: y.text,
                    children: g.name
                })]
            }) : null
        }
}