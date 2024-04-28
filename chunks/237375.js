function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    });
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("481060"),
        l = n("508688"),
        u = n("154921"),
        d = n("987826"),
        _ = n("826298"),
        c = n("665692"),
        E = n("689938"),
        I = n("859381");

    function T(e, t, n) {
        return (0, i.jsx)(d.default, {
            className: I.option,
            name: e.displayName,
            state: t,
            onClick: n
        }, e.name)
    }

    function f(e) {
        let {
            command: t,
            optionStates: n,
            onOptionClick: s
        } = e, {
            requiredOptions: a,
            setOptionalOptions: l,
            unsetOptionalOptions: d
        } = r.useMemo(() => {
            var e, i, r, s;
            let a = null !== (r = null === (e = t.options) || void 0 === e ? void 0 : e.filter(e => e.required)) && void 0 !== r ? r : [],
                o = null !== (s = null === (i = t.options) || void 0 === i ? void 0 : i.filter(e => !e.required)) && void 0 !== s ? s : [],
                l = o.filter(e => {
                    var t;
                    return null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue
                });
            return {
                requiredOptions: a,
                setOptionalOptions: l,
                unsetOptionalOptions: o.filter(e => {
                    var t;
                    return !(null == n ? void 0 : null === (t = n[e.name]) || void 0 === t ? void 0 : t.hasValue)
                })
            }
        }, [t.options, n]), _ = (0, i.jsx)("div", {
            className: I.optionalNames,
            children: d.map(e => (0, i.jsx)(o.Text, {
                variant: "text-sm/normal",
                children: e.displayName
            }, e.name))
        }), c = a.map(e => T(e, null == n ? void 0 : n[e.name], s)), f = l.length > 0 ? (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Heading, {
                className: I.optionalHeader,
                variant: "heading-deprecated-12/semibold",
                children: E.default.Messages.COMMANDS_OPTIONAL_HEADER
            }), l.map(e => T(e, null == n ? void 0 : n[e.name], s))]
        }) : null, S = d.length > 0 ? (0, i.jsx)(o.Tooltip, {
            text: _,
            "aria-label": !1,
            delay: 200,
            children: e => (0, i.jsx)(u.default, {
                className: I.optionalCount,
                color: u.default.Colors.MUTED,
                ...e,
                children: 0 === l.length ? E.default.Messages.COMMANDS_OPTIONAL_COUNT.format({
                    count: d.length
                }) : E.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                    count: d.length
                })
            })
        }) : null;
        return (0, i.jsxs)(i.Fragment, {
            children: [c, null != f || null != S ? (0, i.jsxs)("div", {
                className: I.optionals,
                children: [f, S]
            }) : null]
        })
    }

    function S(e) {
        var t, n, s;
        let o, {
                command: u,
                activeOptionName: d,
                channel: E,
                showOptions: T,
                showImage: S,
                optionStates: h,
                onOptionClick: A,
                section: m,
                isSelectable: N = !0
            } = e,
            p = r.useMemo(() => {
                var e;
                return null == u ? void 0 : null === (e = u.options) || void 0 === e ? void 0 : e.find(e => e.name === d)
            }, [d, u]),
            O = null != d ? null == h ? void 0 : h[d] : null;
        o = null != O && (null === (t = O.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? null !== (n = O.lastValidationResult.error) && void 0 !== n ? n : "" : null;
        let R = S && null != m ? (0, _.getIconComponent)(m) : null;
        return (0, i.jsxs)("div", {
            className: a()(I.wrapper, N ? null : I.disabled),
            children: [null != R ? (0, i.jsx)(R, {
                className: I.image,
                channel: E,
                section: m,
                width: 32,
                height: 32
            }) : null, (0, i.jsxs)("div", {
                className: I.infoWrapper,
                children: [(0, i.jsxs)("div", {
                    className: I.usageWrapper,
                    children: [(0, i.jsx)(l.AutocompleteRowHeading, {
                        className: I.title,
                        children: c.COMMAND_SENTINEL + u.displayName
                    }), T ? (0, i.jsx)(f, {
                        command: u,
                        optionStates: h,
                        onOptionClick: A
                    }) : null]
                }), (0, i.jsx)(l.AutocompleteRowSubheading, {
                    className: a()(I.description, null != o ? I.error : null),
                    children: null !== (s = null != o ? o : null == p ? void 0 : p.displayDescription) && void 0 !== s ? s : u.displayDescription
                })]
            }), (0, i.jsx)(l.AutocompleteRowContentSecondary, {
                className: I.source,
                children: null == m ? void 0 : m.name
            })]
        })
    }
}