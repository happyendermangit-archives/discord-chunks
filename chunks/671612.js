function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("399606"),
        l = n("481060"),
        u = n("596454"),
        d = n("315744"),
        _ = n("208049"),
        c = n("135869"),
        E = n("763296"),
        I = n("22382"),
        T = n("747071"),
        f = n("964297"),
        S = n("632184"),
        A = n("50593");
    t.default = function(e) {
        let {
            soundId: t,
            jumbo: n = !1
        } = e, {
            currentPreviewRef: s
        } = r.useContext(c.default), h = (0, o.useStateFromStores)([E.default], () => E.default.getSoundById(t)), m = (null == h ? void 0 : h.emojiId) != null || (null == h ? void 0 : h.emojiName) != null, [N, O] = r.useState(!1), p = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), R = r.useCallback(() => {
            var e;
            null == h && (0, _.maybeFetchSoundboardSounds)();
            let n = new Audio((0, I.default)(t));
            null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, T.default)(null !== (e = null == h ? void 0 : h.volume) && void 0 !== e ? e : .5), O(!0), n.play(), n.addEventListener("ended", () => {
                O(!1)
            }, {
                once: !0
            })
        }, [t, h, s, O]);
        return p ? null == h ? (0, i.jsxs)(l.Clickable, {
            title: "Risky Click",
            tag: "span",
            onClick: R,
            className: A.container,
            children: [(0, i.jsx)(S.default, {
                className: A.unknownSound
            }), (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "none",
                className: A.text,
                children: "Unknown"
            })]
        }) : n ? (0, i.jsxs)(l.Clickable, {
            onClick: R,
            className: A.jumboContainer,
            children: [(0, i.jsx)("div", {
                className: a()(A.jumboOverlay, {
                    [A.playing]: N
                }),
                children: (0, i.jsx)(f.default, {
                    className: A.__invalid_jumboPlayIcon
                })
            }), m && (0, i.jsx)(u.default, {
                emojiId: null == h ? void 0 : h.emojiId,
                emojiName: null == h ? void 0 : h.emojiName,
                className: A.jumboEmoji
            }), (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-lg/normal",
                color: "none",
                className: A.text,
                children: h.name
            })]
        }) : (0, i.jsxs)(l.Clickable, {
            tag: "span",
            onClick: R,
            className: A.container,
            children: [m && (0, i.jsx)(u.default, {
                emojiId: null == h ? void 0 : h.emojiId,
                emojiName: null == h ? void 0 : h.emojiName,
                className: A.emoji
            }), (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "none",
                className: A.text,
                children: h.name
            })]
        }) : null
    }
}