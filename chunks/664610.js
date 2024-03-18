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
        I = n("518542"),
        T = n("269149"),
        _ = n("566819");

    function v(e) {
        let t = i.useContext(s.default),
            n = u.UseRichChatInput.useSetting(),
            [v] = i.useState(() => {
                let i = (0, a.createEditor)();
                return i.children = (0, d.toRichValue)(""), i.selection = {
                        anchor: _.FIRST_TEXT_POINT,
                        focus: _.FIRST_TEXT_POINT
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
                            previewMarkdown: _,
                            forTests: v,
                            onChangeStart: N,
                            onChangeEnd: A,
                            updateState: O
                        } = e, M = a, {
                            onChange: R
                        } = M;
                        M.chatInputType = s, M.windowContext = d, M.previewMarkdown = _, M.composition = null, M.events = new l.EventEmitter, M.isMac = "MacIntel" === navigator.platform, M.onChange = () => {
                            M.events.emit("onChange"), R()
                        }, M = (0, S.withReact)(M, !0 === v), M = (0, g.default)(M), M = (0, y.default)(M), (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (M = (0, c.default)(M, r, !0 === o, !0 === u)), M = (0, E.default)(M, r.guild_id, r.id), !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (M = (0, f.default)(M)), !(null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (M = (0, p.default)(M)), v && (M = (0, I.default)(M)), M = (0, x.default)(M), M = (0, m.default)(M), M = (0, C.default)(M), M = (0, T.default)(M, N, A), M = (0, h.default)(M, e => {
                            let {
                                newValue: t,
                                newSelection: n
                            } = e;
                            return O(M, "undo", {
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