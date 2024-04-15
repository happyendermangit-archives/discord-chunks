function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("47120");
    var i = n("470079"),
        r = n("836560"),
        s = n("327432"),
        a = n("40851"),
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
        let t = i.useContext(a.default),
            n = u.UseRichChatInput.useSetting(),
            [C] = i.useState(() => {
                let i = (0, s.createEditor)();
                return i.children = (0, d.toRichValue)(""), i.selection = {
                        anchor: R.FIRST_TEXT_POINT,
                        focus: R.FIRST_TEXT_POINT
                    },
                    function(e) {
                        var t, n, i;
                        let {
                            editor: s,
                            chatInputType: a,
                            channel: o,
                            canUseCommands: l,
                            canOnlyUseTextCommands: u,
                            windowContext: d,
                            previewMarkdown: R,
                            forTests: C,
                            onChangeStart: g,
                            onChangeEnd: L,
                            updateState: D
                        } = e, v = s, {
                            onChange: M
                        } = v;
                        v.chatInputType = a, v.windowContext = d, v.previewMarkdown = R, v.composition = null, v.events = new r.EventEmitter, v.isMac = "MacIntel" === navigator.platform, v.onChange = () => {
                            v.events.emit("onChange"), M()
                        }, v = (0, m.withReact)(v, !0 === C), v = (0, A.default)(v), v = (0, h.default)(v), (null === (t = a.commands) || void 0 === t ? void 0 : t.enabled) && (v = (0, _.default)(v, o, !0 === l, !0 === u)), v = (0, S.default)(v, o.guild_id, o.id), !(null === (n = a.markdown) || void 0 === n ? void 0 : n.disableBlockQuotes) && (v = (0, c.default)(v)), !(null === (i = a.markdown) || void 0 === i ? void 0 : i.disableCodeBlocks) && (v = (0, E.default)(v)), C && (v = (0, p.default)(v)), v = (0, f.default)(v), v = (0, I.default)(v), v = (0, N.default)(v), v = (0, O.default)(v, g, L), v = (0, T.default)(v, e => {
                            let {
                                newValue: t,
                                newSelection: n
                            } = e;
                            return D(v, "undo", {
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