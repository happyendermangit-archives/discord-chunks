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
        r = n("77078"),
        o = n("81594"),
        u = n("371642"),
        d = n("966724"),
        c = n("474643"),
        f = n("585722"),
        p = n("271972"),
        m = n("761354"),
        h = n("49111"),
        x = n("825455"),
        E = n("602416");

    function y(e) {
        let {
            channelId: t,
            option: n,
            keyboardModeEnabled: a
        } = e, y = l.useRef(null), [g, S] = l.useState(!1), C = f.default.getUpload(t, n.name, c.DraftType.SlashCommand), I = l.useRef(null), _ = l.useCallback(() => {
            S(!0)
        }, []), T = l.useCallback(() => {
            S(!1)
        }, []), v = l.useCallback(e => {
            var i;
            S(!1);
            let l = {
                id: n.name,
                file: null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.files[0],
                platform: d.UploadPlatform.WEB
            };
            o.default.setFile({
                channelId: t,
                id: n.name,
                file: l,
                draftType: c.DraftType.SlashCommand
            })
        }, [t, n]);
        return (l.useEffect(() => {
            let e = I.current;
            return null == C && (null == e || e.addEventListener("dragover", _, !1), null == e || e.addEventListener("dragleave", T, !1), null == e || e.addEventListener("drop", v, !1)), () => {
                null == e || e.removeEventListener("dragover", _, !1), null == e || e.removeEventListener("dragleave", T, !1), null == e || e.removeEventListener("drop", v, !1)
            }
        }, [C, _, T, v]), null != C) ? (0, i.jsx)(m.default, {
            channelId: t,
            upload: C,
            keyboardModeEnabled: a,
            draftType: c.DraftType.SlashCommand,
            label: (0, i.jsxs)(l.Fragment, {
                children: [(0, i.jsxs)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    children: [n.name, ": "]
                }), (0, i.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "text-brand",
                    children: C.filename
                })]
            }),
            canEdit: !1
        }) : (0, i.jsxs)(p.default, {
            id: n.name,
            channelId: t,
            keyboardModeEnabled: a,
            onKeyDown: e => {
                if (e.which === h.KeyboardKeys.ENTER) {
                    var t;
                    e.preventDefault(), null === (t = y.current) || void 0 === t || t.activateUploadDialogue()
                }
            },
            className: s(x.emptyOption, {
                [x.emptyOptionActive]: g
            }),
            draftType: c.DraftType.SlashCommand,
            ref: I,
            children: [(0, i.jsx)("span", {
                className: s(x.optionName, {
                    [x.optionNameActive]: g
                }),
                children: n.name
            }), (0, i.jsx)(r.Clickable, {
                className: x.clickContainer,
                onClick: () => {
                    var e;
                    return null === (e = y.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                },
                children: (0, i.jsxs)("div", {
                    className: x.commandOptionContainer,
                    children: [(0, i.jsx)("img", {
                        src: E,
                        className: x.optionIcon,
                        alt: ""
                    }), (0, i.jsx)(r.Text, {
                        className: x.optionHelp,
                        variant: "text-sm/normal",
                        children: "Drag and drop or click to upload file"
                    }), (0, i.jsx)(u.default, {
                        ref: y,
                        onChange: e => {
                            var i, l;
                            if (null != t && (null === (l = e.currentTarget) || void 0 === l ? void 0 : null === (i = l.files) || void 0 === i ? void 0 : i[0]) != null) {
                                let i = {
                                    id: n.name,
                                    file: e.currentTarget.files[0],
                                    platform: d.UploadPlatform.WEB
                                };
                                o.default.setFile({
                                    channelId: t,
                                    id: n.name,
                                    file: i,
                                    draftType: c.DraftType.SlashCommand
                                }), e.currentTarget.value = ""
                            }
                        },
                        multiple: !1,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        className: x.fileInput
                    })]
                })
            })]
        })
    }
}