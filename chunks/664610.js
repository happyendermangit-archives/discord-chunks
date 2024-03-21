function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return v
        }
    }), n("222007");
    var i = n("884691"),
        l = n("44170"),
        a = n("987295"),
        s = n("244201"),
        r = n("988721"),
        o = n("383018"),
        u = n("845579"),
        d = n("149022"),
        c = n("169694"),
        f = n("646220"),
        p = n("467123"),
        m = n("506038"),
        h = n("663190"),
        x = n("93640"),
        E = n("100576"),
        y = n("665613");
    n("473752");
    var g = n("541926"),
        S = n("926970"),
        C = n("755107"),
        T = n("518542"),
        _ = n("269149"),
        I = n("566819");

    function v(e) {
        let t = i.useContext(s.default),
            n = u.UseRichChatInput.useSetting(),
            [v] = i.useState(() => {
                let i = (0, a.createEditor)();
                return i.children = (0, d.toRichValue)(""), i.selection = {
                        anchor: I.FIRST_TEXT_POINT,
                        focus: I.FIRST_TEXT_POINT
                    },
                    function(e) {
                        var t, n, i;
                        let {
                            editor: a,
                            chatInputType: s,
                            channel: r,
                            canUseCommands: o,
                            canOnlyUseTextCommands: u,
                            windowContext: d,
                            previewMarkdown: I,
                            forTests: v,
                            onChangeStart: N,
                            onChangeEnd: A,
                            updateState: O
                        } = e, R = a, {
                            onChange: M
                        } = R;
                        R.chatInputType = s, R.windowContext = d, R.previewMarkdown = I, R.composition = null, R.events = new l.EventEmitter, R.isMac = "MacIntel" === navigator.platform, R.onChange = () => {
                            R.events.emit("onChange"), M()
                        }, R = (0, S.withReact)(R, !0 === v), R = (0, g.default)(R), R = (0, y.default)(R), (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (R = (0, c.default)(R, r, !0 === o, !0 === u)), R = (0, E.default)(R, r.guild_id, r.id), !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (R = (0, f.default)(R)), !(null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (R = (0, p.default)(R)), v && (R = (0, T.default)(R)), R = (0, x.default)(R), R = (0, m.default)(R), R = (0, C.default)(R), R = (0, _.default)(R, N, A), R = (0, h.default)(R, e => {
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
                        editor: i,
                        windowContext: t,
                        previewMarkdown: n
                    }), i
            });
        return i.useEffect(() => {
            let e = () => v.onChange();
            return o.default.addChangeListener(e), r.default.addChangeListener(e), () => {
                o.default.removeChangeListener(e), r.default.removeChangeListener(e)
            }
        }, [v]), i.useEffect(() => {
            v.previewMarkdown !== n && (v.previewMarkdown = n, v.onChange())
        }, [v, n]), v
    }
}