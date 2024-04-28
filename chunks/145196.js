function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("608787"),
        l = n("481060"),
        u = n("571989"),
        d = n("65838"),
        _ = n("424218"),
        c = n("130208"),
        E = n("259580"),
        I = n("943461"),
        T = n("330379"),
        f = n("672108"),
        S = n("689938"),
        h = n("619481"),
        A = n("842648");

    function m(e) {
        let {
            text: t,
            language: r
        } = e, s = () => (0, i.jsx)("pre", {
            children: (0, i.jsx)("code", {
                className: a()(A.scrollbarGhostHairline, h.codeView, "hljs"),
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
                        className: a()(A.scrollbarGhostHairline, h.codeView, "hljs", n.language),
                        dangerouslySetInnerHTML: {
                            __html: n.value
                        }
                    })
                })
            },
            renderFallback: () => s()
        })
    }

    function N(e) {
        let {
            expanded: t,
            setExpanded: n,
            isWholeFile: r,
            numLines: s
        } = e, a = (r ? S.default.Messages.PREVIEW_NUM_LINES : S.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
            lines: s
        });
        return (0, i.jsx)(l.Tooltip, {
            text: "".concat(t ? S.default.Messages.COLLAPSE : S.default.Messages.EXPAND, " (").concat(a, ")"),
            children: e => (0, i.jsxs)(l.Clickable, {
                ...e,
                className: h.toggleExpandSection,
                onClick: () => {
                    n(!t)
                },
                children: [(0, i.jsx)(E.default, {
                    direction: t ? E.default.Directions.UP : E.default.Directions.DOWN
                }), t ? S.default.Messages.COLLAPSE : S.default.Messages.EXPAND]
            })
        })
    }

    function p(e) {
        let {
            url: t,
            fileName: n,
            fileSize: r
        } = e, s = "".concat(n, " (").concat((0, _.formatKbSize)(r), ")");
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
                text: s,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: a()(h.downloadSection, h.attachmentName),
                    children: n
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: s,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: a()(h.downloadSection, h.formattedSize),
                    children: (0, _.formatKbSize)(r)
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: "".concat(S.default.Messages.DOWNLOAD, " ").concat(s),
                children: e => (0, i.jsx)(l.Anchor, {
                    ...e,
                    className: h.downloadSection,
                    href: t,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: (0, i.jsx)(I.default, {
                        className: h.downloadButton,
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
                    "aria-label": S.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                    children: (0, i.jsx)(l.Combobox, {
                        className: h.languageSelector,
                        multiSelect: !1,
                        placeholder: S.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                        value: new Set([t]),
                        autoFocus: !0,
                        onChange: e => {
                            n(e), r()
                        },
                        children: e => Array.from(d.PLAINTEXT_FILE_EXTENSIONS).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, i.jsx)(l.ComboboxItem, {
                            value: e,
                            children: (0, i.jsx)(l.ComboboxItem.Label, {
                                children: e
                            })
                        }, e))
                    })
                })
            },
            children: e => (0, i.jsx)(l.Tooltip, {
                text: S.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                children: t => (0, i.jsx)(f.default, {
                    width: 24,
                    height: 24,
                    ...t,
                    ...e,
                    className: h.codeIcon
                })
            })
        })
    }

    function R(e) {
        return (0, i.jsx)(l.Tooltip, {
            text: S.default.Messages.PREVIEW_WHOLE_FILE,
            children: t => (0, i.jsx)(l.Clickable, {
                ...t,
                className: h.openFullPreviewSection,
                onClick: () => {
                    (0, l.openModal)(t => (0, i.jsx)(g, {
                        ...e,
                        ...t
                    }))
                },
                children: (0, i.jsx)(T.default, {})
            })
        })
    }

    function C(e) {
        var t;
        let {
            url: n,
            fileName: r,
            fileSize: s,
            fileContents: o,
            expanded: d,
            setExpanded: c,
            language: E,
            setLanguage: I,
            bytesLeft: T,
            className: f
        } = e, A = null == o ? void 0 : o.split("\n"), C = null !== (t = null == A ? void 0 : A.length) && void 0 !== t ? t : 0, g = d ? 100 : 6, L = 0 === T, D = "";
        L && d && C > g ? D = "\n..." : !L && (D = "..."), "" !== D && (L ? D += " " + S.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: C - g
        }) : D += " " + S.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, _.formatKbSize)(T)
        }));
        let v = (null == A ? void 0 : A.slice(0, g).join("\n")) + D,
            M = (0, u.sanitizeWhitespace)(v),
            y = d || g < C;
        return (0, i.jsxs)("div", {
            className: a()(f, h.container),
            children: [(0, i.jsx)("div", {
                className: a()(h.textContainer, {
                    [h.expanded]: d
                }),
                children: null == o ? (0, i.jsx)(l.Spinner, {
                    className: h.spinner
                }) : (0, i.jsx)(m, {
                    text: M,
                    language: E
                })
            }), (0, i.jsxs)(l.Text, {
                color: "header-secondary",
                className: h.footer,
                variant: "text-sm/normal",
                children: [y ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(N, {
                        expanded: d,
                        setExpanded: c,
                        isWholeFile: L,
                        numLines: C
                    }), (0, i.jsx)(R, {
                        url: n,
                        fileName: r,
                        fileSize: s,
                        language: E,
                        fileContents: o,
                        bytesLeft: T
                    })]
                }) : null, (0, i.jsx)("div", {
                    className: h.footerGap
                }), (0, i.jsx)(p, {
                    url: n,
                    fileName: r,
                    fileSize: s
                }), (0, i.jsx)(O, {
                    language: E,
                    setLanguage: I
                })]
            })]
        })
    }

    function g(e) {
        let {
            url: t,
            fileName: n,
            fileSize: s,
            transitionState: a,
            language: o,
            fileContents: u,
            bytesLeft: d
        } = e, [c, E] = r.useState(o), I = null != u ? u : "";
        return 0 !== d && (I += "... ".concat(S.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, _.formatKbSize)(d)
        }))), (0, i.jsx)(l.ModalRoot, {
            transitionState: a,
            "aria-label": S.default.Messages.PREVIEW_MODAL_LABEL,
            size: l.ModalSize.LARGE,
            className: h.modalRoot,
            children: (0, i.jsxs)("div", {
                className: h.modalContent,
                children: [(0, i.jsx)(l.ScrollerThin, {
                    className: h.modalTextContainer,
                    children: null == u ? (0, i.jsx)(l.Spinner, {
                        className: h.spinner
                    }) : (0, i.jsx)(m, {
                        text: I,
                        language: c
                    })
                }), (0, i.jsxs)(l.Text, {
                    color: "header-secondary",
                    className: h.footer,
                    variant: "text-sm/normal",
                    children: [(0, i.jsx)("div", {
                        className: h.footerGap
                    }), (0, i.jsx)(p, {
                        url: t,
                        fileName: n,
                        fileSize: s
                    }), (0, i.jsx)(O, {
                        language: c,
                        setLanguage: E
                    })]
                })]
            })
        })
    }
    t.default = r.memo(function(e) {
        let {
            url: t,
            fileName: n,
            fileSize: s,
            contentType: o,
            className: l,
            onClick: u,
            onContextMenu: d
        } = e, [_, E] = r.useState(!1), [I, T] = r.useState(n.split(".").slice(-1)[0]), {
            fileContents: f,
            bytesLeft: S,
            hadError: A
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
        }(t, o);
        return A ? (0, i.jsx)(c.default, {
            url: t,
            fileName: n,
            fileSize: s,
            onClick: u,
            onContextMenu: d,
            className: l
        }) : (0, i.jsx)(C, {
            url: t,
            fileName: n,
            fileSize: s,
            fileContents: f,
            bytesLeft: S,
            expanded: _,
            setExpanded: E,
            language: I,
            setLanguage: T,
            className: a()(h.newMosaicStyle, l)
        })
    }, (e, t) => e.url === t.url && e.className === t.className)
}