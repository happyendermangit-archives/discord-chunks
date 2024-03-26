function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return y
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("371621"),
        o = n("446674"),
        u = n("798609"),
        d = n("383018"),
        c = n("474643"),
        f = n("585722"),
        p = n("640830"),
        m = n("939563"),
        h = n("385887"),
        x = n("782340"),
        E = n("165555");

    function y(e, t, n) {
        let {
            attributes: l,
            children: a,
            element: s
        } = t;
        switch (s.type) {
            case "applicationCommand":
                let r = d.default.getActiveCommand(n),
                    o = 0,
                    u = 0;
                if (null != r && r.id === s.command.id) {
                    var c;
                    let t = p.getOptionNames(e);
                    for (let e of null !== (c = r.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : o++
                }
                let f = {};
                if (o > 0) {
                    let e;
                    e = u > 0 ? x.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                        count: o
                    }) : x.default.Messages.COMMANDS_OPTION_COUNT.format({
                        count: o
                    }), f["data-trailing-placeholder"] = e
                }
                return (0, i.jsx)("div", {
                    className: E.applicationCommand,
                    ...l,
                    ...f,
                    children: a
                });
            case "applicationCommandOption":
                return (0, i.jsx)(g, {
                    attributes: l,
                    channelId: n,
                    element: s,
                    children: a
                });
            default:
                return null
        }
    }
    let g = e => {
        let t, {
                channelId: n,
                element: a,
                attributes: p,
                children: y
            } = e,
            g = (0, r.useSelected)(),
            S = (0, r.useFocused)(),
            C = (0, r.useSlateStatic)(),
            {
                optionType: _,
                errored: T
            } = (0, o.useStateFromStoresObject)([d.default], () => {
                var e, t, i;
                return {
                    optionType: null === (e = d.default.getOption(n, a.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (i = d.default.getOptionState(n, a.optionName)) || void 0 === i ? void 0 : null === (t = i.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                }
            }, [n, a.optionName]),
            I = (0, o.useStateFromStores)([f.default], () => f.default.getUpload(n, a.optionName, c.DraftType.SlashCommand), [n, a.optionName]),
            v = a.children[a.children.length - 1],
            N = null != v && h.TextUtils.isText(v) && v.text.endsWith("\n"),
            A = s(E.inlineElement, E.optionPill, {
                [E.selectedPill]: S && g,
                [E.erroredPill]: (!S || !g) && T
            }),
            R = l.useCallback(() => {
                !h.EditorUtils.isVoid(C, a) && m.SlateTransforms.selectCommandOption(C, a.optionName, !0)
            }, [C, a]);
        return t = _ === u.ApplicationCommandOptionType.ATTACHMENT ? (null == I ? void 0 : I.filename) != null ? (0, i.jsxs)("span", {
            className: s(E.optionPillValue, E.attachmentFilename),
            contentEditable: !1,
            children: [I.filename, y]
        }) : (0, i.jsxs)("span", {
            className: s(E.optionPillValue, E.readonlyPillValue),
            contentEditable: !1,
            children: [x.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, y]
        }) : (0, i.jsxs)("span", {
            className: E.optionPillValue,
            children: [y, N ? (0, i.jsx)("span", {
                className: E.newLine,
                contentEditable: !1
            }) : null]
        }), (0, i.jsxs)("span", {
            ...p,
            className: A,
            children: [(0, i.jsxs)("span", {
                className: E.optionPillKey,
                contentEditable: !1,
                onClick: R,
                children: [a.optionDisplayName, "​"]
            }), t, (0, i.jsx)("span", {
                contentEditable: !1,
                children: "​"
            })]
        })
    }
}