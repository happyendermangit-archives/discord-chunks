function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return A
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("481060"),
        l = n("166459"),
        u = n("53281"),
        d = n("476326"),
        _ = n("703558"),
        c = n("117530"),
        E = n("859235"),
        I = n("898463"),
        T = n("981631"),
        f = n("117168"),
        S = n("451328");

    function A(e) {
        let {
            channelId: t,
            option: n,
            keyboardModeEnabled: s
        } = e, A = r.useRef(null), [h, m] = r.useState(!1), N = c.default.getUpload(t, n.name, _.DraftType.SlashCommand), O = r.useRef(null), p = r.useCallback(() => {
            m(!0)
        }, []), R = r.useCallback(() => {
            m(!1)
        }, []), C = r.useCallback(e => {
            var i;
            m(!1);
            let r = {
                id: n.name,
                file: null === (i = e.dataTransfer) || void 0 === i ? void 0 : i.files[0],
                platform: d.UploadPlatform.WEB
            };
            l.default.setFile({
                channelId: t,
                id: n.name,
                file: r,
                draftType: _.DraftType.SlashCommand
            })
        }, [t, n]);
        return (r.useEffect(() => {
            let e = O.current;
            return null == N && (null == e || e.addEventListener("dragover", p, !1), null == e || e.addEventListener("dragleave", R, !1), null == e || e.addEventListener("drop", C, !1)), () => {
                null == e || e.removeEventListener("dragover", p, !1), null == e || e.removeEventListener("dragleave", R, !1), null == e || e.removeEventListener("drop", C, !1)
            }
        }, [N, p, R, C]), null != N) ? (0, i.jsx)(I.default, {
            channelId: t,
            upload: N,
            keyboardModeEnabled: s,
            draftType: _.DraftType.SlashCommand,
            label: (0, i.jsxs)(r.Fragment, {
                children: [(0, i.jsxs)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    children: [n.name, ": "]
                }), (0, i.jsx)(o.Text, {
                    tag: "span",
                    variant: "text-md/normal",
                    color: "text-brand",
                    children: N.filename
                })]
            }),
            canEdit: !1
        }) : (0, i.jsxs)(E.default, {
            id: n.name,
            channelId: t,
            keyboardModeEnabled: s,
            onKeyDown: e => {
                if (e.which === T.KeyboardKeys.ENTER) {
                    var t;
                    e.preventDefault(), null === (t = A.current) || void 0 === t || t.activateUploadDialogue()
                }
            },
            className: a()(f.emptyOption, {
                [f.emptyOptionActive]: h
            }),
            draftType: _.DraftType.SlashCommand,
            ref: O,
            children: [(0, i.jsx)("span", {
                className: a()(f.optionName, {
                    [f.optionNameActive]: h
                }),
                children: n.name
            }), (0, i.jsx)(o.Clickable, {
                className: f.clickContainer,
                onClick: () => {
                    var e;
                    return null === (e = A.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
                },
                children: (0, i.jsxs)("div", {
                    className: f.commandOptionContainer,
                    children: [(0, i.jsx)("img", {
                        src: S,
                        className: f.optionIcon,
                        alt: ""
                    }), (0, i.jsx)(o.Text, {
                        className: f.optionHelp,
                        variant: "text-sm/normal",
                        children: "Drag and drop or click to upload file"
                    }), (0, i.jsx)(u.default, {
                        ref: A,
                        onChange: e => {
                            var i, r;
                            if (null != t && (null === (r = e.currentTarget) || void 0 === r ? void 0 : null === (i = r.files) || void 0 === i ? void 0 : i[0]) != null) {
                                let i = {
                                    id: n.name,
                                    file: e.currentTarget.files[0],
                                    platform: d.UploadPlatform.WEB
                                };
                                l.default.setFile({
                                    channelId: t,
                                    id: n.name,
                                    file: i,
                                    draftType: _.DraftType.SlashCommand
                                }), e.currentTarget.value = ""
                            }
                        },
                        multiple: !1,
                        tabIndex: -1,
                        "aria-hidden": !0,
                        className: f.fileInput
                    })]
                })
            })]
        })
    }
}