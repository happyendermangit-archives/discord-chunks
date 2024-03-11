function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var i = n("884691"),
        l = n("44170"),
        a = n("987295"),
        s = n("244201"),
        r = n("988721"),
        o = n("166004"),
        u = n("383018"),
        d = n("845579"),
        c = n("149022"),
        f = n("169694"),
        p = n("646220"),
        m = n("467123"),
        h = n("506038"),
        x = n("663190"),
        E = n("93640"),
        y = n("100576"),
        g = n("665613");
    n("473752");
    var S = n("541926"),
        C = n("926970"),
        I = n("755107"),
        T = n("518542"),
        _ = n("269149"),
        v = n("566819");

    function N(e) {
        let t = i.useContext(s.default),
            n = d.UseRichChatInput.useSetting(),
            [N] = i.useState(() => {
                let i = (0, a.createEditor)();
                return i.children = (0, c.toRichValue)(""), i.selection = {
                        anchor: v.FIRST_TEXT_POINT,
                        focus: v.FIRST_TEXT_POINT
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
                            previewMarkdown: c,
                            forTests: v,
                            onChangeStart: N,
                            onChangeEnd: A,
                            updateState: O
                        } = e, M = a, {
                            onChange: k
                        } = M;
                        M.chatInputType = s, M.windowContext = d, M.previewMarkdown = c, M.composition = null, M.events = new l.EventEmitter, M.isMac = "MacIntel" === navigator.platform, M.onChange = () => {
                            M.events.emit("onChange"), k()
                        }, M = (0, C.withReact)(M, !0 === v), M = (0, S.default)(M), M = (0, g.default)(M), (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (M = (0, f.default)(M, r, !0 === o, !0 === u)), M = (0, y.default)(M, r.guild_id, r.id), !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (M = (0, p.default)(M)), !(null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (M = (0, m.default)(M)), v && (M = (0, T.default)(M)), M = (0, E.default)(M), M = (0, h.default)(M), M = (0, I.default)(M), M = (0, _.default)(M, N, A), M = (0, x.default)(M, e => {
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
            let e = () => N.onChange();
            return u.default.addChangeListener(e), o.default.addChangeListener(e), r.default.addChangeListener(e), () => {
                u.default.removeChangeListener(e), o.default.removeChangeListener(e), r.default.removeChangeListener(e)
            }
        }, [N]), i.useEffect(() => {
            N.previewMarkdown !== n && (N.previewMarkdown = n, N.onChange())
        }, [N, n]), N
    }
}