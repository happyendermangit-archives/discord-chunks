function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
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
        h = n("356287"),
        A = n("819041");

    function m(e) {
        let {
            text: t,
            language: r
        } = e, a = () => (0, i.jsx)("pre", {
            children: (0, i.jsx)("code", {
                className: s()(A.scrollbarGhostHairline, h.codeView, "hljs"),
                children: t
            })
        });
        return (0, i.jsx)(o.LazyLibrary, {
            createPromise: () => Promise.resolve().then(n.bind(n, "364964")),
            webpackId: "364964",
            render: e => {
                if (!e.hasLanguage(r)) return a();
                let n = e.highlight(r, t, !0);
                return null == n ? a() : (0, i.jsx)("pre", {
                    children: (0, i.jsx)("code", {
                        className: s()(A.scrollbarGhostHairline, h.codeView, "hljs", n.language),
                        dangerouslySetInnerHTML: {
                            __html: n.value
                        }
                    })
                })
            },
            renderFallback: () => a()
        })
    }

    function N(e) {
        let {
            expanded: t,
            setExpanded: n,
            isWholeFile: r,
            numLines: a
        } = e, s = (r ? S.default.Messages.PREVIEW_NUM_LINES : S.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
            lines: a
        });
        return (0, i.jsx)(l.Tooltip, {
            text: "".concat(t ? S.default.Messages.COLLAPSE : S.default.Messages.EXPAND, " (").concat(s, ")"),
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
        } = e, a = "".concat(n, " (").concat((0, _.formatKbSize)(r), ")");
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
                text: a,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s()(h.downloadSection, h.attachmentName),
                    children: n
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: a,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s()(h.downloadSection, h.formattedSize),
                    children: (0, _.formatKbSize)(r)
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: "".concat(S.default.Messages.DOWNLOAD, " ").concat(a),
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
            fileSize: a,
            fileContents: o,
            expanded: d,
            setExpanded: c,
            language: E,
            setLanguage: I,
            bytesLeft: T,
            className: f
        } = e, A = null == o ? void 0 : o.split("\n"), C = null !== (t = null == A ? void 0 : A.length) && void 0 !== t ? t : 0, g = d ? 100 : 6, L = 0 === T, v = "";
        L && d && C > g ? v = "\n..." : !L && (v = "..."), "" !== v && (L ? v += " " + S.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: C - g
        }) : v += " " + S.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, _.formatKbSize)(T)
        }));
        let D = (null == A ? void 0 : A.slice(0, g).join("\n")) + v,
            M = (0, u.sanitizeWhitespace)(D),
            y = d || g < C;
        return (0, i.jsxs)("div", {
            className: s()(f, h.container),
            children: [(0, i.jsx)("div", {
                className: s()(h.textContainer, {
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
                        fileSize: a,
                        language: E,
                        fileContents: o,
                        bytesLeft: T
                    })]
                }) : null, (0, i.jsx)("div", {
                    className: h.footerGap
                }), (0, i.jsx)(p, {
                    url: n,
                    fileName: r,
                    fileSize: a
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
            fileSize: a,
            transitionState: s,
            language: o,
            fileContents: u,
            bytesLeft: d
        } = e, [c, E] = r.useState(o), I = null != u ? u : "";
        return 0 !== d && (I += "... ".concat(S.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, _.formatKbSize)(d)
        }))), (0, i.jsx)(l.ModalRoot, {
            transitionState: s,
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
                        fileSize: a
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
            fileSize: a,
            contentType: o,
            className: l,
            onClick: u,
            onContextMenu: d
        } = e, [_, E] = r.useState(!1), [I, T] = r.useState(n.split(".").slice(-1)[0]), {
            fileContents: f,
            bytesLeft: S,
            hadError: A
        } = function(e, t) {
            let [n, i] = r.useState(!1), [a, s] = r.useState(null), [o, l] = r.useState(1);
            return r.useEffect(() => {
                (async function n() {
                    try {
                        var n, r;
                        let a = await fetch(e, {
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
                            })(t).decode(await a.arrayBuffer()),
                            u = null !== (n = a.headers.get("content-range")) && void 0 !== n ? n : "0",
                            d = null !== (r = a.headers.get("content-length")) && void 0 !== r ? r : "1",
                            _ = parseInt(u.split("/")[1]) - parseInt(d);
                        s(0 === _ ? o : o.slice(0, -1)), l(_), i(!1)
                    } catch (e) {
                        l(0), i(!0)
                    }
                })()
            }, [e, t]), {
                fileContents: a,
                bytesLeft: o,
                hadError: n
            }
        }(t, o);
        return A ? (0, i.jsx)(c.default, {
            url: t,
            fileName: n,
            fileSize: a,
            onClick: u,
            onContextMenu: d,
            className: l
        }) : (0, i.jsx)(C, {
            url: t,
            fileName: n,
            fileSize: a,
            fileContents: f,
            bytesLeft: S,
            expanded: _,
            setExpanded: E,
            language: I,
            setLanguage: T,
            className: s()(h.newMosaicStyle, l)
        })
    }, (e, t) => e.url === t.url && e.className === t.className)
}