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
        _ = n("518542"),
        T = n("269149"),
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
                            updateState: R
                        } = e, O = a, {
                            onChange: M
                        } = O;
                        O.chatInputType = s, O.windowContext = d, O.previewMarkdown = I, O.composition = null, O.events = new l.EventEmitter, O.isMac = "MacIntel" === navigator.platform, O.onChange = () => {
                            O.events.emit("onChange"), M()
                        }, O = (0, S.withReact)(O, !0 === v), O = (0, g.default)(O), O = (0, y.default)(O), (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (O = (0, c.default)(O, r, !0 === o, !0 === u)), O = (0, E.default)(O, r.guild_id, r.id), !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (O = (0, f.default)(O)), !(null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (O = (0, p.default)(O)), v && (O = (0, _.default)(O)), O = (0, x.default)(O), O = (0, m.default)(O), O = (0, C.default)(O), O = (0, T.default)(O, N, A), O = (0, h.default)(O, e => {
                            let {
                                newValue: t,
                                newSelection: n
                            } = e;
                            return R(O, "undo", {
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