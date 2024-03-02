function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return x
        }
    }), n("222007");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("868233"),
        o = n("77078"),
        u = n("903962"),
        d = n("993105"),
        c = n("410889"),
        f = n("461380"),
        m = n("195812"),
        p = n("967685"),
        h = n("204591"),
        E = n("782340"),
        g = n("482211"),
        C = n("356410");

    function S(e) {
        let {
            text: t,
            language: i
        } = e, a = () => (0, l.jsx)("pre", {
            children: (0, l.jsx)("code", {
                className: s(C.scrollbarGhostHairline, g.codeView, "hljs"),
                children: t
            })
        });
        return (0, l.jsx)(r.LazyLibrary, {
            createPromise: () => n.el("86256").then(n.bind(n, "86256")),
            webpackId: "86256",
            render: e => {
                if (!e.hasLanguage(i)) return a();
                let n = e.highlight(i, t, !0);
                return null == n ? a() : (0, l.jsx)("pre", {
                    children: (0, l.jsx)("code", {
                        className: s(C.scrollbarGhostHairline, g.codeView, "hljs", n.language),
                        dangerouslySetInnerHTML: {
                            __html: n.value
                        }
                    })
                })
            },
            renderFallback: () => a()
        })
    }

    function T(e) {
        let {
            expanded: t,
            setExpanded: n,
            isWholeFile: i,
            numLines: a
        } = e, s = (i ? E.default.Messages.PREVIEW_NUM_LINES : E.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
            lines: a
        });
        return (0, l.jsx)(o.Tooltip, {
            text: "".concat(t ? E.default.Messages.COLLAPSE : E.default.Messages.EXPAND, " (").concat(s, ")"),
            children: e => (0, l.jsxs)(o.Clickable, {
                ...e,
                className: g.toggleExpandSection,
                onClick: () => {
                    n(!t)
                },
                children: [(0, l.jsx)(f.default, {
                    direction: t ? f.default.Directions.UP : f.default.Directions.DOWN
                }), t ? E.default.Messages.COLLAPSE : E.default.Messages.EXPAND]
            })
        })
    }

    function I(e) {
        let {
            attachment: t
        } = e, n = "".concat(t.filename, " (").concat((0, d.formatKbSize)(t.size), ")");
        return (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(o.Tooltip, {
                text: n,
                children: e => (0, l.jsx)("span", {
                    ...e,
                    className: s(g.downloadSection, g.attachmentName),
                    children: t.filename
                })
            }), (0, l.jsx)(o.Tooltip, {
                text: n,
                children: e => (0, l.jsx)("span", {
                    ...e,
                    className: s(g.downloadSection, g.formattedSize),
                    children: (0, d.formatKbSize)(t.size)
                })
            }), (0, l.jsx)(o.Tooltip, {
                text: "".concat(E.default.Messages.DOWNLOAD, " ").concat(n),
                children: e => (0, l.jsx)(o.Anchor, {
                    ...e,
                    className: g.downloadSection,
                    href: t.url,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: (0, l.jsx)(m.default, {
                        className: g.downloadButton,
                        width: 24,
                        height: 24
                    })
                })
            })]
        })
    }

    function v(e) {
        let {
            language: t,
            setLanguage: n
        } = e;
        return (0, l.jsx)(o.Popout, {
            position: "left",
            renderPopout: e => {
                let {
                    closePopout: i
                } = e;
                return (0, l.jsx)(o.Dialog, {
                    "aria-label": E.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                    children: (0, l.jsx)(o.Combobox, {
                        className: g.languageSelector,
                        multiSelect: !1,
                        placeholder: E.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                        value: new Set([t]),
                        autoFocus: !0,
                        onChange: e => {
                            n(e), i()
                        },
                        children: e => Array.from(u.PLAINTEXT_FILE_EXTENSIONS).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, l.jsx)(o.ComboboxItem, {
                            value: e,
                            children: (0, l.jsx)(o.ComboboxItem.Label, {
                                children: e
                            })
                        }, e))
                    })
                })
            },
            children: e => (0, l.jsx)(o.Tooltip, {
                text: E.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                children: t => (0, l.jsx)(h.default, {
                    width: 24,
                    height: 24,
                    ...t,
                    ...e,
                    className: g.codeIcon
                })
            })
        })
    }

    function _(e) {
        return (0, l.jsx)(o.Tooltip, {
            text: E.default.Messages.PREVIEW_WHOLE_FILE,
            children: t => (0, l.jsx)(o.Clickable, {
                ...t,
                className: g.openFullPreviewSection,
                onClick: () => {
                    (0, o.openModal)(t => (0, l.jsx)(A, {
                        ...e,
                        ...t
                    }))
                },
                children: (0, l.jsx)(p.default, {})
            })
        })
    }

    function N(e) {
        var t;
        let {
            attachment: n,
            fileContents: i,
            expanded: a,
            setExpanded: r,
            language: u,
            setLanguage: c,
            bytesLeft: f,
            className: m
        } = e, p = null == i ? void 0 : i.split("\n"), h = null !== (t = null == p ? void 0 : p.length) && void 0 !== t ? t : 0, C = a ? 100 : 6, N = 0 === f, A = "";
        N && a && h > C ? A = "\n..." : !N && (A = "..."), "" !== A && (N ? A += " " + E.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: h - C
        }) : A += " " + E.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(f)
        }));
        let x = (null == p ? void 0 : p.slice(0, C).join("\n")) + A,
            y = a || C < h;
        return (0, l.jsxs)("div", {
            className: s(m, g.container),
            children: [(0, l.jsx)("div", {
                className: s(g.textContainer, {
                    [g.expanded]: a
                }),
                children: null == i ? (0, l.jsx)(o.Spinner, {
                    className: g.spinner
                }) : (0, l.jsx)(S, {
                    text: x,
                    language: u
                })
            }), (0, l.jsxs)(o.Text, {
                color: "header-secondary",
                className: g.footer,
                variant: "text-sm/normal",
                children: [y ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(T, {
                        expanded: a,
                        setExpanded: r,
                        isWholeFile: N,
                        numLines: h
                    }), (0, l.jsx)(_, {
                        language: u,
                        fileContents: i,
                        bytesLeft: f,
                        attachment: n
                    })]
                }) : null, (0, l.jsx)("div", {
                    className: g.footerGap
                }), (0, l.jsx)(I, {
                    attachment: n
                }), (0, l.jsx)(v, {
                    language: u,
                    setLanguage: c
                })]
            })]
        })
    }

    function A(e) {
        let {
            transitionState: t,
            language: n,
            fileContents: a,
            bytesLeft: s,
            attachment: r
        } = e, [u, c] = i.useState(n), f = null != a ? a : "";
        return 0 !== s && (f += "... ".concat(E.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(s)
        }))), (0, l.jsx)(o.ModalRoot, {
            transitionState: t,
            "aria-label": E.default.Messages.PREVIEW_MODAL_LABEL,
            size: o.ModalSize.LARGE,
            className: g.modalRoot,
            children: (0, l.jsxs)("div", {
                className: g.modalContent,
                children: [(0, l.jsx)(o.ScrollerThin, {
                    className: g.modalTextContainer,
                    children: null == a ? (0, l.jsx)(o.Spinner, {
                        className: g.spinner
                    }) : (0, l.jsx)(S, {
                        text: f,
                        language: u
                    })
                }), (0, l.jsxs)(o.Text, {
                    color: "header-secondary",
                    className: g.footer,
                    variant: "text-sm/normal",
                    children: [(0, l.jsx)("div", {
                        className: g.footerGap
                    }), (0, l.jsx)(I, {
                        attachment: r
                    }), (0, l.jsx)(v, {
                        language: u,
                        setLanguage: c
                    })]
                })]
            })
        })
    }
    var x = i.memo(function(e) {
        let {
            attachment: t,
            className: n,
            onClick: a,
            onContextMenu: r
        } = e, [o, u] = i.useState(!1), [d, f] = i.useState(t.filename.split(".").slice(-1)[0]), {
            fileContents: m,
            bytesLeft: p,
            hadError: h
        } = function(e, t) {
            let [n, l] = i.useState(!1), [a, s] = i.useState(null), [r, o] = i.useState(1);
            return i.useEffect(() => {
                (async function n() {
                    try {
                        var n, i;
                        let a = await fetch(e, {
                                headers: {
                                    Range: "bytes=0-".concat(5e4),
                                    Accept: "text/plain"
                                }
                            }),
                            r = function(e) {
                                var t;
                                let n = "utf-8",
                                    l = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
                                try {
                                    return new TextDecoder(l)
                                } catch (t) {
                                    if ((null == e ? void 0 : e.startsWith("text")) || l.toLowerCase().includes("utf")) return new TextDecoder(n);
                                    throw t
                                }
                            }(t),
                            u = r.decode(await a.arrayBuffer()),
                            d = null !== (n = a.headers.get("content-range")) && void 0 !== n ? n : "0",
                            c = null !== (i = a.headers.get("content-length")) && void 0 !== i ? i : "1",
                            f = parseInt(d.split("/")[1]),
                            m = f - parseInt(c);
                        s(0 === m ? u : u.slice(0, -1)), o(m), l(!1)
                    } catch (e) {
                        o(0), l(!0)
                    }
                })()
            }, [e, t]), {
                fileContents: a,
                bytesLeft: r,
                hadError: n
            }
        }(t.url, t.content_type);
        return h ? (0, l.jsx)(c.default, {
            url: t.url,
            filename: t.filename,
            size: t.size,
            onClick: a,
            onContextMenu: r,
            className: n
        }) : (0, l.jsx)(N, {
            attachment: t,
            fileContents: m,
            bytesLeft: p,
            expanded: o,
            setExpanded: u,
            language: d,
            setLanguage: f,
            className: s(g.newMosaicStyle, n)
        })
    }, (e, t) => e.attachment.id === t.attachment.id && e.className === t.className)
}