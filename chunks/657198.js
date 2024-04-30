function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("207470"),
        l = n("442837"),
        u = n("911969"),
        d = n("998698"),
        _ = n("703558"),
        c = n("117530"),
        E = n("91313"),
        I = n("436660"),
        T = n("887490"),
        f = n("689938"),
        S = n("3500");

    function h(e, t, n) {
        let {
            attributes: r,
            children: s,
            element: a
        } = t;
        switch (a.type) {
            case "applicationCommand":
                let o = d.default.getActiveCommand(n),
                    l = 0,
                    u = 0;
                if (null != o && o.id === a.command.id) {
                    var _;
                    let t = E.getOptionNames(e);
                    for (let e of null !== (_ = o.options) && void 0 !== _ ? _ : []) t.includes(e.name) ? u++ : l++
                }
                let c = {};
                if (l > 0) {
                    let e;
                    e = u > 0 ? f.default.Messages.COMMANDS_OPTIONAL_COUNT_REMAINING.format({
                        count: l
                    }) : f.default.Messages.COMMANDS_OPTION_COUNT.format({
                        count: l
                    }), c["data-trailing-placeholder"] = e
                }
                return (0, i.jsx)("div", {
                    className: S.applicationCommand,
                    ...r,
                    ...c,
                    children: s
                });
            case "applicationCommandOption":
                return (0, i.jsx)(A, {
                    attributes: r,
                    channelId: n,
                    element: a,
                    children: s
                });
            default:
                return null
        }
    }
    let A = e => {
        let t, {
                channelId: n,
                element: s,
                attributes: E,
                children: h
            } = e,
            A = (0, o.useSelected)(),
            m = (0, o.useFocused)(),
            N = (0, o.useSlateStatic)(),
            {
                optionType: p,
                errored: O
            } = (0, l.useStateFromStoresObject)([d.default], () => {
                var e, t, i;
                return {
                    optionType: null === (e = d.default.getOption(n, s.optionName)) || void 0 === e ? void 0 : e.type,
                    errored: (null === (i = d.default.getOptionState(n, s.optionName)) || void 0 === i ? void 0 : null === (t = i.lastValidationResult) || void 0 === t ? void 0 : t.success) !== !0
                }
            }, [n, s.optionName]),
            R = (0, l.useStateFromStores)([c.default], () => c.default.getUpload(n, s.optionName, _.DraftType.SlashCommand), [n, s.optionName]),
            C = s.children[s.children.length - 1],
            g = null != C && T.TextUtils.isText(C) && C.text.endsWith("\n"),
            L = a()(S.inlineElement, S.optionPill, {
                [S.selectedPill]: m && A,
                [S.erroredPill]: (!m || !A) && O
            }),
            D = r.useCallback(() => {
                !T.EditorUtils.isVoid(N, s) && I.SlateTransforms.selectCommandOption(N, s.optionName, !0)
            }, [N, s]);
        return t = p === u.ApplicationCommandOptionType.ATTACHMENT ? (null == R ? void 0 : R.filename) != null ? (0, i.jsxs)("span", {
            className: a()(S.optionPillValue, S.attachmentFilename),
            contentEditable: !1,
            children: [R.filename, h]
        }) : (0, i.jsxs)("span", {
            className: a()(S.optionPillValue, S.readonlyPillValue),
            contentEditable: !1,
            children: [f.default.Messages.APPLICATION_COMMAND_FILE_ATTACHMENT, h]
        }) : (0, i.jsxs)("span", {
            className: S.optionPillValue,
            children: [h, g ? (0, i.jsx)("span", {
                className: S.newLine,
                contentEditable: !1
            }) : null]
        }), (0, i.jsxs)("span", {
            ...E,
            className: L,
            children: [(0, i.jsxs)("span", {
                className: S.optionPillKey,
                contentEditable: !1,
                onClick: D,
                children: [s.optionDisplayName, "​"]
            }), t, (0, i.jsx)("span", {
                contentEditable: !1,
                children: "​"
            })]
        })
    }
}