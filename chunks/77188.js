function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("47120");
    var i = n("470079"),
        r = n("836560"),
        a = n("327432"),
        s = n("40851"),
        o = n("213459"),
        l = n("998698"),
        u = n("695346"),
        d = n("752305"),
        _ = n("86724"),
        c = n("886027"),
        E = n("515270"),
        I = n("265446"),
        T = n("196483"),
        f = n("417662"),
        S = n("847302"),
        h = n("374157");
    n("209073");
    var A = n("814011"),
        m = n("50607"),
        N = n("618136"),
        p = n("247765"),
        O = n("15559"),
        R = n("42530");

    function C(e) {
        let t = i.useContext(s.default),
            n = u.UseRichChatInput.useSetting(),
            [C] = i.useState(() => {
                let i = (0, a.createEditor)();
                return i.children = (0, d.toRichValue)(""), i.selection = {
                        anchor: R.FIRST_TEXT_POINT,
                        focus: R.FIRST_TEXT_POINT
                    },
                    function(e) {
                        var t, n, i;
                        let {
                            editor: a,
                            chatInputType: s,
                            channel: o,
                            canUseCommands: l,
                            canOnlyUseTextCommands: u,
                            windowContext: d,
                            previewMarkdown: R,
                            forTests: C,
                            onChangeStart: g,
                            onChangeEnd: L,
                            updateState: v
                        } = e, D = a, {
                            onChange: M
                        } = D;
                        D.chatInputType = s, D.windowContext = d, D.previewMarkdown = R, D.composition = null, D.events = new r.EventEmitter, D.isMac = "MacIntel" === navigator.platform, D.onChange = () => {
                            D.events.emit("onChange"), M()
                        }, D = (0, m.withReact)(D, !0 === C), D = (0, A.default)(D), D = (0, h.default)(D), (null === (t = s.commands) || void 0 === t ? void 0 : t.enabled) && (D = (0, _.default)(D, o, !0 === l, !0 === u)), D = (0, S.default)(D, o.guild_id, o.id), !(null === (n = s.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (D = (0, c.default)(D)), !(null === (i = s.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (D = (0, E.default)(D)), C && (D = (0, p.default)(D)), D = (0, f.default)(D), D = (0, I.default)(D), D = (0, N.default)(D), D = (0, O.default)(D, g, L), D = (0, T.default)(D, e => {
                            let {
                                newValue: t,
                                newSelection: n
                            } = e;
                            return v(D, "undo", {
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
            let e = () => C.onChange();
            return l.default.addChangeListener(e), o.default.addChangeListener(e), () => {
                l.default.removeChangeListener(e), o.default.removeChangeListener(e)
            }
        }, [C]), i.useEffect(() => {
            C.previewMarkdown !== n && (C.previewMarkdown = n, C.onChange())
        }, [C, n]), C
    }
}