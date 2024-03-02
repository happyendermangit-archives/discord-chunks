function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("563911"),
        u = n("258078"),
        d = n("286217"),
        c = n("355263"),
        f = n("406291"),
        m = n("782340"),
        p = n("595911");

    function h(e, t, n) {
        return (0, l.jsx)(d.default, {
            className: p.option,
            name: e.displayName,
            state: t,
            onClick: n
        }, e.name)
    }

    function E(e) {
        let {
            command: t,
            optionStates: n,
            onOptionClick: a
        } = e, {
            requiredOptions: s,
            setOptionalOptions: o,
            unsetOptionalOptions: d
        } = i.useMemo(() => {
            var e, l, i, a;
            let s = null !== (i = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== i ? i : [],
                r = null !== (a = null === (l = t.options) || void 0 === l ? void 0 : l.filter(e => !e.required)) && void 0 !== a ? a : [],
                o = r.filter(e => {
                    var t;
                    return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
                }),
                u = r.filter(e => {
                    var t;
                    return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
                });
            return {
                requiredOptions: s,
                setOptionalOptions: o,
                unsetOptionalOptions: u
            }
        }, [t.options, n]), c = (0, l.jsx)("div", {
            className: p.optionalNames,
            children: d.map(e => (0, l.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: e.displayName
            }, e.name))
        }), f = s.map(e => h(e, null == n ? void 0 : n[e.name], a)), E = o.length > 0 ? (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(r.Heading, {
                className: p.optionalHeader,
                variant: "heading-deprecated-12/semibold",
                children: m.default.Messages.COMMANDS_OPTIONAL_HEADER
            }), o.map(e => h(e, null == n ? void 0 : n[e.name], a))]
        }) : null, g = d.length > 0 ? (0, l.jsx)(r.Tooltip, {
            text: c,
            "aria-label": !1,
            delay: 200,
            children: e => (0, l.jsx)(u.default, {
                className: p.optionalCount,
                color: u.default.Colors.MUTED,
                ...e,
                children: 0 === o.length ? m.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
                    count: d.length
                }) : m.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                    count: d.length
                })
            })
        }) : null;
        return (0, l.jsxs)(l.Fragment, {
            children: [f, null != E || null != g ? (0, l.jsxs)("div", {
                className: p.optionals,
                children: [E, g]
            }) : null]
        })
    }

    function g(e) {
        var t, n, a;
        let r, {
                command: u,
                activeOptionName: d,
                channel: m,
                showOptions: h,
                showImage: g,
                optionStates: C,
                onOptionClick: S,
                section: T,
                isSelectable: I = !0
            } = e,
            v = i.useMemo(() => {
                var e;
                return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
            }, [d, u]),
            _ = null != d ? null == C ? void 0 : C[d] : null;
        r = null != _ && (null === (t = _.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = _.lastValidationResult.error) && void 0 !== n ? n : "" : null;
        let N = g && null != T ? (0, c.getIconComponent)(T) : null;
        return (0, l.jsxs)("div", {
            className: s(p.wrapper, I ? null : p.disabled),
            children: [null != N ? (0, l.jsx)(N, {
                className: p.image,
                channel: m,
                section: T,
                width: 32,
                height: 32
            }) : null, (0, l.jsxs)("div", {
                className: p.infoWrapper,
                children: [(0, l.jsxs)("div", {
                    className: p.usageWrapper,
                    children: [(0, l.jsx)(o.AutocompleteRowHeading, {
                        className: p.title,
                        children: f.COMMAND_SENTINEL + u.displayName
                    }), h ? (0, l.jsx)(E, {
                        command: u,
                        optionStates: C,
                        onOptionClick: S
                    }) : null]
                }), (0, l.jsx)(o.AutocompleteRowSubheading, {
                    className: s(p.description, null != r ? p.error : null),
                    children: null !== (a = null != r ? r : null == v ? void 0 : v.displayDescription) && void 0 !== a ? a : u.displayDescription
                })]
            }), (0, l.jsx)(o.AutocompleteRowContentSecondary, {
                className: p.source,
                children: null == T ? void 0 : T.name
            })]
        })
    }
}