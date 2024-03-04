function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("222007");
    var l = n("884691"),
        i = n("44170"),
        a = n("987295"),
        s = n("244201"),
        r = n("988721"),
        o = n("166004"),
        u = n("383018"),
        d = n("845579"),
        c = n("149022"),
        f = n("169694"),
        m = n("646220"),
        p = n("467123"),
        h = n("506038"),
        E = n("663190"),
        g = n("93640"),
        C = n("100576"),
        S = n("665613");
    n("473752");
    var T = n("541926"),
        v = n("926970"),
        I = n("755107"),
        _ = n("518542"),
        N = n("269149"),
        A = n("566819");

    function x(e) {
        let t = l.useContext(s.default),
            n = d.UseRichChatInput.useSetting(),
            [x] = l.useState(() => {
                let l = (0, a.createEditor)();
                return l.children = (0, c.toRichValue)(""), l.selection = {
                        anchor: A.FIRST_TEXT_POINT,
                        focus: A.FIRST_TEXT_POINT
                    },
                    function(e) {
                        var t, n, l;
                        let {
                            editor: a,
                            chatInputType: s,
                            channel: r,
                            canUseCommands: o,
                            canOnlyUseTextCommands: u,
                            windowContext: d,
                            previewMarkdown: c,
                            forTests: A,
                            onChangeStart: x,
                            onChangeEnd: y,
                            updateState: O
                        } = e, R = a, {
                            onChange: M
                        } = R;
                        R.chatInputType = s, R.windowContext = d, R.previewMarkdown = c, R.composition = null, R.events = new i.EventEmitter, R.isMac = "MacIntel" === navigator.platform, R.onChange = () => {
                            R.events.emit("onChange"), M()
                        }, R = (0, v.withReact)(R, !0 === A), R = (0, T.default)(R), R = (0, S.default)(R), (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (R = (0, f.default)(R, r, !0 === o, !0 === u)), R = (0, C.default)(R, r.guild_id, r.id), !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (R = (0, m.default)(R)), !(null === (l = s.markdown) || void 0 === l ? void 0 : l.disableCodeBlocks) && (R = (0, p.default)(R)), A && (R = (0, _.default)(R)), R = (0, g.default)(R), R = (0, h.default)(R), R = (0, I.default)(R), R = (0, N.default)(R, x, y), R = (0, E.default)(R, e => {
                            let {
                                newValue: t,
                                newSelection: n
                            } = e;
                            return O(R, "undo", {
                                value: t,
                                selection: n
                            })
                        })
                    }({
                        ...e,
                        editor: l,
                        windowContext: t,
                        previewMarkdown: n
                    }), l
            });
        return l.useEffect(() => {
            let e = () => x.onChange();
            return u.default.addChangeListener(e), o.default.addChangeListener(e), r.default.addChangeListener(e), () => {
                u.default.removeChangeListener(e), o.default.removeChangeListener(e), r.default.removeChangeListener(e)
            }
        }, [x]), l.useEffect(() => {
            x.previewMarkdown !== n && (x.previewMarkdown = n, x.onChange())
        }, [x, n]), x
    }
}