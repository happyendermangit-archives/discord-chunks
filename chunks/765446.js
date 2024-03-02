function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return C
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("371621"),
        o = n("446674"),
        u = n("798609"),
        d = n("383018"),
        c = n("474643"),
        f = n("585722"),
        m = n("640830"),
        p = n("939563"),
        h = n("385887"),
        E = n("782340"),
        g = n("165555");

    function C(e, t, n) {
        let {
            attributes: i,
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
                    let t = m.getOptionNames(e);
                    for (let e of null !== (c = r.options) && void 0 !== c ? c : []) t.includes(e.name) ? u++ : o++
                }
                let f = {};
                if (o > 0) {
                    let e;
                    e = u > 0 ? E.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                        count: o
                    }) : E.default.Messages.COMMANDS_OPTION_COUNT.format({
                        count: o
                    }), f["data-trailing-placeholder"] = e
                }
                return (0, l.jsx)("div", {
                    className: g.applicationCommand,
                    ...i,
                    ...f,
                    children: a
                });
            case "applicationCommandOption":
                return (0, l.jsx)(S, {
                    attributes: i,
                    channelId: n,
                    element: s,
                    children: a
                });
            default:
                return null
        }
    }
    let S = e => {
        let t, {
                channelId: n,
                element: a,
                attributes: m,
                children: C
            } = e,
            S = (0, r.useSelected)(),
            T = (0, r.useFocused)(),
            I = (0, r.useSlateStatic)(),
            {
                optionType: v,
                errored: _
            } = (0, o.useStateFromStoresObject)([d.default], () => {
                var e, t, l;
                return {
                    optionType: null === (e = d.default.getOption(n, a.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (l = d.default.getOptionState(n, a.optionName)) || void 0 === l ? void 0 : null === (t = l.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                }
            }, [n, a.optionName]),
            N = (0, o.useStateFromStores)([f.default], () => f.default.getUpload(n, a.optionName, c.DraftType.SlashCommand), [n, a.optionName]),
            A = a.children[a.children.length - 1],
            x = null != A && h.TextUtils.isText(A) && A.text.endsWith("\n"),
            y = s(g.inlineElement, g.optionPill, {
                [g.selectedPill]: T && S,
                [g.erroredPill]: (!T || !S) && _
            }),
            O = i.useCallback(() => {
                !h.EditorUtils.isVoid(I, a) && p.SlateTransforms.selectCommandOption(I, a.optionName, !0)
            }, [I, a]);
        return t = v === u.ApplicationCommandOptionType.ATTACHMENT ? (null == N ? void 0 : N.filename) != null ? (0, l.jsxs)("span", {
            className: s(g.optionPillValue, g.attachmentFilename),
            contentEditable: !1,
            children: [N.filename, C]
        }) : (0, l.jsxs)("span", {
            className: s(g.optionPillValue, g.readonlyPillValue),
            contentEditable: !1,
            children: [E.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, C]
        }) : (0, l.jsxs)("span", {
            className: g.optionPillValue,
            children: [C, x ? (0, l.jsx)("span", {
                className: g.newLine,
                contentEditable: !1
            }) : null]
        }), (0, l.jsxs)("span", {
            ...m,
            className: y,
            children: [(0, l.jsxs)("span", {
                className: g.optionPillKey,
                contentEditable: !1,
                onClick: O,
                children: [a.optionDisplayName, "​"]
            }), t, (0, l.jsx)("span", {
                contentEditable: !1,
                children: "​"
            })]
        })
    }
}