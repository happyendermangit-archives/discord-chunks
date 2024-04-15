function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
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
            url: t,
            fileName: n,
            fileSize: r
        } = e, s = "".concat(n, " (").concat((0, d.formatKbSize)(r), ")");
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(l.Tooltip, {
                text: s,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: a()(S.downloadSection, S.attachmentName),
                    children: n
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: s,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: a()(S.downloadSection, S.formattedSize),
                    children: (0, d.formatKbSize)(r)
                })
            }), (0, i.jsx)(l.Tooltip, {
                text: "".concat(f.default.Messages.DOWNLOAD, " ").concat(s),
                children: e => (0, i.jsx)(l.Anchor, {
                    ...e,
                    className: S.downloadSection,
                    href: t,
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

    function p(e) {
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

    function O(e) {
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
            url: n,
            fileName: r,
            fileSize: s,
            fileContents: o,
            expanded: u,
            setExpanded: _,
            language: c,
            setLanguage: E,
            bytesLeft: I,
            className: T
        } = e, h = null == o ? void 0 : o.split("\n"), R = null !== (t = null == h ? void 0 : h.length) && void 0 !== t ? t : 0, C = u ? 100 : 6, g = 0 === I, L = "";
        g && u && R > C ? L = "\n..." : !g && (L = "..."), "" !== L && (g ? L += " " + f.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: R - C
        }) : L += " " + f.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(I)
        }));
        let D = (null == h ? void 0 : h.slice(0, C).join("\n")) + L,
            v = u || C < R;
        return (0, i.jsxs)("div", {
            className: a()(T, S.container),
            children: [(0, i.jsx)("div", {
                className: a()(S.textContainer, {
                    [S.expanded]: u
                }),
                children: null == o ? (0, i.jsx)(l.Spinner, {
                    className: S.spinner
                }) : (0, i.jsx)(A, {
                    text: D,
                    language: c
                })
            }), (0, i.jsxs)(l.Text, {
                color: "header-secondary",
                className: S.footer,
                variant: "text-sm/normal",
                children: [v ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(m, {
                        expanded: u,
                        setExpanded: _,
                        isWholeFile: g,
                        numLines: R
                    }), (0, i.jsx)(O, {
                        url: n,
                        fileName: r,
                        fileSize: s,
                        language: c,
                        fileContents: o,
                        bytesLeft: I
                    })]
                }) : null, (0, i.jsx)("div", {
                    className: S.footerGap
                }), (0, i.jsx)(N, {
                    url: n,
                    fileName: r,
                    fileSize: s
                }), (0, i.jsx)(p, {
                    language: c,
                    setLanguage: E
                })]
            })]
        })
    }

    function C(e) {
        let {
            url: t,
            fileName: n,
            fileSize: s,
            transitionState: a,
            language: o,
            fileContents: u,
            bytesLeft: _
        } = e, [c, E] = r.useState(o), I = null != u ? u : "";
        return 0 !== _ && (I += "... ".concat(f.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(_)
        }))), (0, i.jsx)(l.ModalRoot, {
            transitionState: a,
            "aria-label": f.default.Messages.PREVIEW_MODAL_LABEL,
            size: l.ModalSize.LARGE,
            className: S.modalRoot,
            children: (0, i.jsxs)("div", {
                className: S.modalContent,
                children: [(0, i.jsx)(l.ScrollerThin, {
                    className: S.modalTextContainer,
                    children: null == u ? (0, i.jsx)(l.Spinner, {
                        className: S.spinner
                    }) : (0, i.jsx)(A, {
                        text: I,
                        language: c
                    })
                }), (0, i.jsxs)(l.Text, {
                    color: "header-secondary",
                    className: S.footer,
                    variant: "text-sm/normal",
                    children: [(0, i.jsx)("div", {
                        className: S.footerGap
                    }), (0, i.jsx)(N, {
                        url: t,
                        fileName: n,
                        fileSize: s
                    }), (0, i.jsx)(p, {
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
        } = e, [c, E] = r.useState(!1), [I, T] = r.useState(n.split(".").slice(-1)[0]), {
            fileContents: f,
            bytesLeft: h,
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
        return A ? (0, i.jsx)(_.default, {
            url: t,
            fileName: n,
            fileSize: s,
            onClick: u,
            onContextMenu: d,
            className: l
        }) : (0, i.jsx)(R, {
            url: t,
            fileName: n,
            fileSize: s,
            fileContents: f,
            bytesLeft: h,
            expanded: c,
            setExpanded: E,
            language: I,
            setLanguage: T,
            className: a()(S.newMosaicStyle, l)
        })
    }, (e, t) => e.url === t.url && e.className === t.className)
}