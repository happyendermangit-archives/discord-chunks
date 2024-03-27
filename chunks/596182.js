function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var i = n("37983"),
        l = n("884691"),
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
        return (0, i.jsx)(d.default, {
            className: p.option,
            name: e.displayName,
            state: t,
            onClick: n
        }, e.name)
    }

    function x(e) {
        let {
            command: t,
            optionStates: n,
            onOptionClick: a
        } = e, {
            requiredOptions: s,
            setOptionalOptions: o,
            unsetOptionalOptions: d
        } = l.useMemo(() => {
            var e, i, l, a;
            let s = null !== (l = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== l ? l : [],
                r = null !== (a = null === (i = t.options) || void 0 === i ? void 0 : i.filter(e => !e.required)) && void 0 !== a ? a : [],
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
        }, [t.options, n]), c = (0, i.jsx)("div", {
            className: p.optionalNames,
            children: d.map(e => (0, i.jsx)(r.Text, {
                variant: "text-sm/normal",
                children: e.displayName
            }, e.name))
        }), f = s.map(e => h(e, null == n ? void 0 : n[e.name], a)), x = o.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(r.Heading, {
                className: p.optionalHeader,
                variant: "heading-deprecated-12/semibold",
                children: m.default.Messages.COMMANDS_OPTIONAL_HEADER
            }), o.map(e => h(e, null == n ? void 0 : n[e.name], a))]
        }) : null, E = d.length > 0 ? (0, i.jsx)(r.Tooltip, {
            text: c,
            "aria-label": !1,
            delay: 200,
            children: e => (0, i.jsx)(u.default, {
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
        return (0, i.jsxs)(i.Fragment, {
            children: [f, null != x || null != E ? (0, i.jsxs)("div", {
                className: p.optionals,
                children: [x, E]
            }) : null]
        })
    }

    function E(e) {
        var t, n, a;
        let r, {
                command: u,
                activeOptionName: d,
                channel: m,
                showOptions: h,
                showImage: E,
                optionStates: y,
                onOptionClick: g,
                section: S,
                isSelectable: C = !0
            } = e,
            T = l.useMemo(() => {
                var e;
                return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
            }, [d, u]),
            _ = null != d ? null == y ? void 0 : y[d] : null;
        r = null != _ && (null === (t = _.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = _.lastValidationResult.error) && void 0 !== n ? n : "" : null;
        let I = E && null != S ? (0, c.getIconComponent)(S) : null;
        return (0, i.jsxs)("div", {
            className: s(p.wrapper, C ? null : p.disabled),
            children: [null != I ? (0, i.jsx)(I, {
                className: p.image,
                channel: m,
                section: S,
                width: 32,
                height: 32
            }) : null, (0, i.jsxs)("div", {
                className: p.infoWrapper,
                children: [(0, i.jsxs)("div", {
                    className: p.usageWrapper,
                    children: [(0, i.jsx)(o.AutocompleteRowHeading, {
                        className: p.title,
                        children: f.COMMAND_SENTINEL + u.displayName
                    }), h ? (0, i.jsx)(x, {
                        command: u,
                        optionStates: y,
                        onOptionClick: g
                    }) : null]
                }), (0, i.jsx)(o.AutocompleteRowSubheading, {
                    className: s(p.description, null != r ? p.error : null),
                    children: null !== (a = null != r ? r : null == T ? void 0 : T.displayDescription) && void 0 !== a ? a : u.displayDescription
                })]
            }), (0, i.jsx)(o.AutocompleteRowContentSecondary, {
                className: p.source,
                children: null == S ? void 0 : S.name
            })]
        })
    }
}