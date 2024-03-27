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
        h = n("50593");
    t.default = function(e) {
        let {
            soundId: t,
            jumbo: n = !1
        } = e, {
            currentPreviewRef: s
        } = r.useContext(c.default), A = (0, o.useStateFromStores)([E.default], () => E.default.getSoundById(t)), m = (null == A ? void 0 : A.emojiId) != null || (null == A ? void 0 : A.emojiName) != null, [N, O] = r.useState(!1), p = (0, d.useSoundmojiExperiment)("soundmoji_chat_mention"), R = r.useCallback(() => {
            var e;
            null == A && (0, _.maybeFetchSoundboardSounds)();
            let n = new Audio((0, I.default)(t));
            null != s.current && s.current.pause(), s.current = n, n.currentTime = 0, n.volume = (0, T.default)(null !== (e = null == A ? void 0 : A.volume) && void 0 !== e ? e : .5), O(!0), n.play(), n.addEventListener("ended", () => {
                O(!1)
            }, {
                once: !0
            })
        }, [t, A, s, O]);
        return p ? null == A ? (0, i.jsxs)(l.Clickable, {
            title: "Risky Click",
            tag: "span",
            onClick: R,
            className: h.container,
            children: [(0, i.jsx)(S.default, {
                className: h.unknownSound
            }), (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "none",
                className: h.text,
                children: "Unknown"
            })]
        }) : n ? (0, i.jsxs)(l.Clickable, {
            onClick: R,
            className: h.jumboContainer,
            children: [(0, i.jsx)("div", {
                className: a()(h.jumboOverlay, {
                    [h.playing]: N
                }),
                children: (0, i.jsx)(f.default, {
                    className: h.jumboPlayIcon
                })
            }), m && (0, i.jsx)(u.default, {
                emojiId: null == A ? void 0 : A.emojiId,
                emojiName: null == A ? void 0 : A.emojiName,
                className: h.jumboEmoji
            }), (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-lg/normal",
                color: "none",
                className: h.text,
                children: A.name
            })]
        }) : (0, i.jsxs)(l.Clickable, {
            tag: "span",
            onClick: R,
            className: h.container,
            children: [m && (0, i.jsx)(u.default, {
                emojiId: null == A ? void 0 : A.emojiId,
                emojiName: null == A ? void 0 : A.emojiName,
                className: h.emoji
            }), (0, i.jsx)(l.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "none",
                className: h.text,
                children: A.name
            })]
        }) : null
    }
}