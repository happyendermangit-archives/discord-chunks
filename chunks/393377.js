function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return S
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("77078"),
        o = n("81594"),
        u = n("371642"),
        d = n("966724"),
        c = n("474643"),
        f = n("585722"),
        m = n("271972"),
        p = n("761354"),
        h = n("49111"),
        E = n("825455"),
        g = n("602416");

    function S(e) {
        let {
            channelId: t,
            option: n,
            keyboardModeEnabled: a
        } = e, S = i.useRef(null), [C, T] = i.useState(!1), v = f.default.getUpload(t, n.name, c.DraftType.SlashCommand), I = i.useRef(null), _ = i.useCallback(() => {
            T(!0)
        }, []), N = i.useCallback(() => {
            T(!1)
        }, []), A = i.useCallback(e => {
            var l;
            T(!1);
            let i = {
                id: n.name,
                file: null === (l = e.dataTransfer) || void 0 === l ? void 0 : l.files[0],
                platform: d.UploadPlatform.WEB
            };
            o.default.setFile({
                channelId: t,
                id: n.name,
                file: i,
                draftType: c.DraftType.SlashCommand
            })
        }, [t, n]);
        return (i.useEffect(() => {
            let e = I.current;
            return null == v && (null == e || e.addEventListener("dragover", _, !1), null == e || e.addEventListener("dragleave", N, !1), null == e || e.addEventListener("drop", A, !1)), () => {
                null == e || e.removeEventListener("dragover", _, !1), null == e || e.removeEventListener("dragleave", N, !1), null == e || e.removeEventListener("drop", A, !1)
            }
        }, [v, _, N, A]), null != v) ? (0, l.jsx)(p.default, {
            channelId: t,
            upload: v,
            keyboardModeEnabled: a,
            draftType: c.DraftType.SlashCommand,
            label: (0, l.jsxs)(i.Fragment, {
                children: [(0, l.jsxs)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    children: [n.name, ": "]
                }), (0, l.jsx)(r.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "text-brand",
                    children: v.filename
                })]
            }),
            canEdit: !1
        }) : (0, l.jsxs)(m.default, {
            id: n.name,
            channelId: t,
            keyboardModeEnabled: a,
            onKeyDown: e => {
                if (e.which === h.KeyboardKeys.ENTER) {
                    var t;
                    e.preventDefault(), null === (t = S.current) || void 0 === t || t.activateUploadDialogue()
                }
            },
            className: s(E.emptyOption, {
                [E.emptyOptionActive]: C
            }),
            draftType: c.DraftType.SlashCommand,
            ref: I,
            children: [(0, l.jsx)("span", {
                className: s(E.optionName, {
                    [E.optionNameActive]: C
                }),
                children: n.name
            }), (0, l.jsx)(r.Clickable, {
                className: E.clickContainer,
                onClick: () => {
                    var e;
                    return null === (e = S.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                },
                children: (0, l.jsxs)("div", {
                    className: E.commandOptionContainer,
                    children: [(0, l.jsx)("img", {
                        src: g,
                        className: E.optionIcon,
                        alt: ""
                    }), (0, l.jsx)(r.Text, {
                        className: E.optionHelp,
                        variant: "text-sm/normal",
                        children: "Drag and drop or click to upload file"
                    }), (0, l.jsx)(u.default, {
                        ref: S,
                        onChange: e => {
                            var l, i;
                            if (null != t && (null === (i = e.currentTarget) || void 0 === i ? void 0 : null === (l = i.files) || void 0 === l ? void 0 : l[0]) != null) {
                                let l = {
                                    id: n.name,
                                    file: e.currentTarget.files[0],
                                    platform: d.UploadPlatform.WEB
                                };
                                o.default.setFile({
                                    channelId: t,
                                    id: n.name,
                                    file: l,
                                    draftType: c.DraftType.SlashCommand
                                }), e.currentTarget.value = ""
                            }
                        },
                        multiple: !1,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        className: E.fileInput
                    })]
                })
            })]
        })
    }
}