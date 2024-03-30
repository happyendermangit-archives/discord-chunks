function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("37295"),
        u = n("784184"),
        s = n("765457"),
        l = n("988900"),
        c = n("14253"),
        f = n("258461"),
        d = n("452700"),
        _ = n("155866"),
        E = n("689505"),
        p = n("478493"),
        m = n("893427"),
        y = n("50593");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    t.default = function(e) {
        var t, n, o, h, O, T = e.soundId,
            S = e.jumbo,
            v = r.useContext(f.default).currentPreviewRef,
            g = (0, a.useStateFromStores)([d.default], function() {
                return d.default.getSoundById(T)
            }),
            A = (null == g ? void 0 : g.emojiId) != null || (null == g ? void 0 : g.emojiName) != null;
        var b = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return I(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            N = b[0],
            R = b[1],
            C = (0, l.useSoundmojiExperiment)("soundmoji_chat_mention"),
            P = r.useCallback(function() {
                null == g && (0, c.maybeFetchSoundboardSounds)();
                var e, t = new Audio((0, _.default)(T));
                null != v.current && v.current.pause(), v.current = t, t.currentTime = 0, t.volume = (0, E.default)(null !== (e = null == g ? void 0 : g.volume) && void 0 !== e ? e : .5), R(!0), t.play(), t.addEventListener("ended", function() {
                    R(!1)
                }, {
                    once: !0
                })
            }, [T, g, v, R]);
        if (!C) return null;
        if (null == g) return r.createElement(u.Clickable, {
            title: "Risky Click",
            tag: "span",
            onClick: P,
            className: y.container
        }, r.createElement(m.default, {
            className: y.unknownSound
        }), r.createElement(u.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "none",
            className: y.text
        }, "Unknown"));
        if (void 0 !== S && S) {
            ;
            return r.createElement(u.Clickable, {
                onClick: P,
                className: y.jumboContainer
            }, r.createElement("div", {
                className: i()(y.jumboOverlay, (o = {}, h = y.playing, O = N, h in o ? Object.defineProperty(o, h, {
                    value: O,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[h] = O, o))
            }, r.createElement(p.default, {
                className: y.__invalid_jumboPlayIcon
            })), A && r.createElement(s.default, {
                emojiId: null == g ? void 0 : g.emojiId,
                emojiName: null == g ? void 0 : g.emojiName,
                className: y.jumboEmoji
            }), r.createElement(u.Text, {
                tag: "span",
                variant: "text-lg/normal",
                color: "none",
                className: y.text
            }, g.name))
        }
        return r.createElement(u.Clickable, {
            tag: "span",
            onClick: P,
            className: y.container
        }, A && r.createElement(s.default, {
            emojiId: null == g ? void 0 : g.emojiId,
            emojiName: null == g ? void 0 : g.emojiName,
            className: y.emoji
        }), r.createElement(u.Text, {
            tag: "span",
            variant: "text-md/normal",
            color: "none",
            className: y.text
        }, g.name))
    }
}