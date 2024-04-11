function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("608787"),
        l = n("481060"),
        u = n("65838"),
        d = n("424218"),
        _ = n("130208"),
        c = n("259580"),
        E = n("943461"),
        I = n("330379"),
        T = n("672108"),
        f = n("689938"),
        S = n("698377"),
        h = n("633353");

    function A(e) {
        let {
            text: t,
            language: r
        } = e, s = () => (0, i.jsx)("pre", {
            children: (0, i.jsx)("code", {
                className: a()(h.scrollbarGhostHairline, S.codeView, "hljs"),
                children: t
            })
        });
        return (0, i.jsx)(o.LazyLibrary, {
            createPromise: () => Promise.resolve().then(n.bind(n, "364964")),
            webpackId: "364964",
            render: e => {
                if (!e.hasLanguage(r)) return s();
                let n = e.highlight(r, t, !0);
                return null == n ? s() : (0, i.jsx)("pre", {
                    children: (0, i.jsx)("code", {
                        className: a()(h.scrollbarGhostHairline, S.codeView, "hljs", n.language),
                        dangerouslySetInnerHTML: {
                            __html: n.value
                        }
                    })
                })
            },
            renderFallback: () => s()
        })
    }

    function m(e) {
        let {
            expanded: t,
            setExpanded: n,
            isWholeFile: r,
            numLines: s
        } = e, a = (r ? f.default.Messages.PREVIEW_NUM_LINES : f.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
            lines: s
        });
        return (0, i.jsx)(l.Tooltip, {
            text: "".concat(t ? f.default.Messages.COLLAPSE : f.default.Messages.EXPAND, " (").concat(a, ")"),
            children: e => (0, i.jsxs)(l.Clickable, {
                ...e,
                className: S.toggleExpandSection,
                onClick: () => {
                    n(!t)
                },
                children: [(0, i.jsx)(c.default, {
                    direction: t ? c.default.Directions.UP : c.default.Directions.DOWN
                }), t ? f.default.Messages.COLLAPSE : f.default.Messages.EXPAND]
            })
        })
    }

    function N(e) {
        let {
            attachment: t
        } = e, n = "".concat(t.filename, " (").concat((0, d.formatKbSize)(t.size), ")");
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
                text: n,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: a()(S.downloadSection, S.attachmentName),
                    children: t.filename
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: n,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: a()(S.downloadSection, S.formattedSize),
                    children: (0, d.formatKbSize)(t.size)
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: "".concat(f.default.Messages.DOWNLOAD, " ").concat(n),
                children: e => (0, i.jsx)(l.Anchor, {
                    ...e,
                    className: S.downloadSection,
                    href: t.url,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: (0, i.jsx)(E.default, {
                        className: S.downloadButton,
                        width: 24,
                        height: 24
                    })
                })
            })]
        })
    }

    function O(e) {
        let {
            language: t,
            setLanguage: n
        } = e;
        return (0, i.jsx)(l.Popout, {
            position: "left",
            renderPopout: e => {
                let {
                    closePopout: r
                } = e;
                return (0, i.jsx)(l.Dialog, {
                    "aria-label": f.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                    children: (0, i.jsx)(l.Combobox, {
                        className: S.languageSelector,
                        multiSelect: !1,
                        placeholder: f.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                        value: new Set([t]),
                        autoFocus: !0,
                        onChange: e => {
                            n(e), r()
                        },
                        children: e => Array.from(u.PLAINTEXT_FILE_EXTENSIONS).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, i.jsx)(l.ComboboxItem, {
                            value: e,
                            children: (0, i.jsx)(l.ComboboxItem.Label, {
                                children: e
                            })
                        }, e))
                    })
                })
            },
            children: e => (0, i.jsx)(l.Tooltip, {
                text: f.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                children: t => (0, i.jsx)(T.default, {
                    width: 24,
                    height: 24,
                    ...t,
                    ...e,
                    className: S.codeIcon
                })
            })
        })
    }

    function p(e) {
        return (0, i.jsx)(l.Tooltip, {
            text: f.default.Messages.PREVIEW_WHOLE_FILE,
            children: t => (0, i.jsx)(l.Clickable, {
                ...t,
                className: S.openFullPreviewSection,
                onClick: () => {
                    (0, l.openModal)(t => (0, i.jsx)(C, {
                        ...e,
                        ...t
                    }))
                },
                children: (0, i.jsx)(I.default, {})
            })
        })
    }

    function R(e) {
        var t;
        let {
            attachment: n,
            fileContents: r,
            expanded: s,
            setExpanded: o,
            language: u,
            setLanguage: _,
            bytesLeft: c,
            className: E
        } = e, I = null == r ? void 0 : r.split("\n"), T = null !== (t = null == I ? void 0 : I.length) && void 0 !== t ? t : 0, h = s ? 100 : 6, R = 0 === c, C = "";
        R && s && T > h ? C = "\n..." : !R && (C = "..."), "" !== C && (R ? C += " " + f.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: T - h
        }) : C += " " + f.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(c)
        }));
        let g = (null == I ? void 0 : I.slice(0, h).join("\n")) + C,
            L = s || h < T;
        return (0, i.jsxs)("div", {
            className: a()(E, S.container),
            children: [(0, i.jsx)("div", {
                className: a()(S.textContainer, {
                    [S.expanded]: s
                }),
                children: null == r ? (0, i.jsx)(l.Spinner, {
                    className: S.spinner
                }) : (0, i.jsx)(A, {
                    text: g,
                    language: u
                })
            }), (0, i.jsxs)(l.Text, {
                color: "header-secondary",
                className: S.footer,
                variant: "text-sm/normal",
                children: [L ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        expanded: s,
                        setExpanded: o,
                        isWholeFile: R,
                        numLines: T
                    }), (0, i.jsx)(p, {
                        language: u,
                        fileContents: r,
                        bytesLeft: c,
                        attachment: n
                    })]
                }) : null, (0, i.jsx)("div", {
                    className: S.footerGap
                }), (0, i.jsx)(N, {
                    attachment: n
                }), (0, i.jsx)(O, {
                    language: u,
                    setLanguage: _
                })]
            })]
        })
    }

    function C(e) {
        let {
            transitionState: t,
            language: n,
            fileContents: s,
            bytesLeft: a,
            attachment: o
        } = e, [u, _] = r.useState(n), c = null != s ? s : "";
        return 0 !== a && (c += "... ".concat(f.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(a)
        }))), (0, i.jsx)(l.ModalRoot, {
            transitionState: t,
            "aria-label": f.default.Messages.PREVIEW_MODAL_LABEL,
            size: l.ModalSize.LARGE,
            className: S.modalRoot,
            children: (0, i.jsxs)("div", {
                className: S.modalContent,
                children: [(0, i.jsx)(l.ScrollerThin, {
                    className: S.modalTextContainer,
                    children: null == s ? (0, i.jsx)(l.Spinner, {
                        className: S.spinner
                    }) : (0, i.jsx)(A, {
                        text: c,
                        language: u
                    })
                }), (0, i.jsxs)(l.Text, {
                    color: "header-secondary",
                    className: S.footer,
                    variant: "text-sm/normal",
                    children: [(0, i.jsx)("div", {
                        className: S.footerGap
                    }), (0, i.jsx)(N, {
                        attachment: o
                    }), (0, i.jsx)(O, {
                        language: u,
                        setLanguage: _
                    })]
                })]
            })
        })
    }
    t.default = r.memo(function(e) {
        let {
            attachment: t,
            className: n,
            onClick: s,
            onContextMenu: o
        } = e, [l, u] = r.useState(!1), [d, c] = r.useState(t.filename.split(".").slice(-1)[0]), {
            fileContents: E,
            bytesLeft: I,
            hadError: T
        } = function(e, t) {
            let [n, i] = r.useState(!1), [s, a] = r.useState(null), [o, l] = r.useState(1);
            return r.useEffect(() => {
                (async function n() {
                    try {
                        var n, r;
                        let s = await fetch(e, {
                                headers: {
                                    Range: "bytes=0-".concat(5e4),
                                    Accept: "text/plain"
                                }
                            }),
                            o = (function(e) {
                                var t;
                                let n = "utf-8",
                                    i = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
                                try {
                                    return new TextDecoder(i)
                                } catch (t) {
                                    if ((null == e ? void 0 : e.startsWith("text")) || i.toLowerCase().includes("utf")) return new TextDecoder(n);
                                    throw t
                                }
                            })(t).decode(await s.arrayBuffer()),
                            u = null !== (n = s.headers.get("content-range")) && void 0 !== n ? n : "0",
                            d = null !== (r = s.headers.get("content-length")) && void 0 !== r ? r : "1",
                            _ = parseInt(u.split("/")[1]) - parseInt(d);
                        a(0 === _ ? o : o.slice(0, -1)), l(_), i(!1)
                    } catch (e) {
                        l(0), i(!0)
                    }
                })()
            }, [e, t]), {
                fileContents: s,
                bytesLeft: o,
                hadError: n
            }
        }(t.url, t.content_type);
        return T ? (0, i.jsx)(_.default, {
            url: t.url,
            filename: t.filename,
            size: t.size,
            onClick: s,
            onContextMenu: o,
            className: n
        }) : (0, i.jsx)(R, {
            attachment: t,
            fileContents: E,
            bytesLeft: I,
            expanded: l,
            setExpanded: u,
            language: d,
            setLanguage: c,
            className: a()(S.newMosaicStyle, n)
        })
    }, (e, t) => e.attachment.id === t.attachment.id && e.className === t.className)
}