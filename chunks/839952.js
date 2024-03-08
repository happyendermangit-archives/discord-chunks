function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return N
        }
    }), n("222007");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("868233"),
        o = n("77078"),
        u = n("903962"),
        d = n("993105"),
        c = n("410889"),
        f = n("461380"),
        p = n("195812"),
        m = n("967685"),
        h = n("204591"),
        x = n("782340"),
        E = n("482211"),
        y = n("356410");

    function g(e) {
        let {
            text: t,
            language: l
        } = e, a = () => (0, i.jsx)("pre", {
            children: (0, i.jsx)("code", {
                className: s(y.scrollbarGhostHairline, E.codeView, "hljs"),
                children: t
            })
        });
        return (0, i.jsx)(r.LazyLibrary, {
            createPromise: () => n.el("86256").then(n.bind(n, "86256")),
            webpackId: "86256",
            render: e => {
                if (!e.hasLanguage(l)) return a();
                let n = e.highlight(l, t, !0);
                return null == n ? a() : (0, i.jsx)("pre", {
                    children: (0, i.jsx)("code", {
                        className: s(y.scrollbarGhostHairline, E.codeView, "hljs", n.language),
                        dangerouslySetInnerHTML: {
                            __html: n.value
                        }
                    })
                })
            },
            renderFallback: () => a()
        })
    }

    function S(e) {
        let {
            expanded: t,
            setExpanded: n,
            isWholeFile: l,
            numLines: a
        } = e, s = (l ? x.default.Messages.PREVIEW_NUM_LINES : x.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
            lines: a
        });
        return (0, i.jsx)(o.Tooltip, {
            text: "".concat(t ? x.default.Messages.COLLAPSE : x.default.Messages.EXPAND, " (").concat(s, ")"),
            children: e => (0, i.jsxs)(o.Clickable, {
                ...e,
                className: E.toggleExpandSection,
                onClick: () => {
                    n(!t)
                },
                children: [(0, i.jsx)(f.default, {
                    direction: t ? f.default.Directions.UP : f.default.Directions.DOWN
                }), t ? x.default.Messages.COLLAPSE : x.default.Messages.EXPAND]
            })
        })
    }

    function C(e) {
        let {
            attachment: t
        } = e, n = "".concat(t.filename, " (").concat((0, d.formatKbSize)(t.size), ")");
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(o.Tooltip, {
                text: n,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s(E.downloadSection, E.attachmentName),
                    children: t.filename
                })
            }), (0, i.jsx)(o.Tooltip, {
                text: n,
                children: e => (0, i.jsx)("span", {
                    ...e,
                    className: s(E.downloadSection, E.formattedSize),
                    children: (0, d.formatKbSize)(t.size)
                })
            }), (0, i.jsx)(o.Tooltip, {
                text: "".concat(x.default.Messages.DOWNLOAD, " ").concat(n),
                children: e => (0, i.jsx)(o.Anchor, {
                    ...e,
                    className: E.downloadSection,
                    href: t.url,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: (0, i.jsx)(p.default, {
                        className: E.downloadButton,
                        width: 24,
                        height: 24
                    })
                })
            })]
        })
    }

    function I(e) {
        let {
            language: t,
            setLanguage: n
        } = e;
        return (0, i.jsx)(o.Popout, {
            position: "left",
            renderPopout: e => {
                let {
                    closePopout: l
                } = e;
                return (0, i.jsx)(o.Dialog, {
                    "aria-label": x.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                    children: (0, i.jsx)(o.Combobox, {
                        className: E.languageSelector,
                        multiSelect: !1,
                        placeholder: x.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                        value: new Set([t]),
                        autoFocus: !0,
                        onChange: e => {
                            n(e), l()
                        },
                        children: e => Array.from(u.PLAINTEXT_FILE_EXTENSIONS).filter(t => t.toLowerCase().includes(e.toLowerCase())).map(e => (0, i.jsx)(o.ComboboxItem, {
                            value: e,
                            children: (0, i.jsx)(o.ComboboxItem.Label, {
                                children: e
                            })
                        }, e))
                    })
                })
            },
            children: e => (0, i.jsx)(o.Tooltip, {
                text: x.default.Messages.PREVIEW_CHANGE_LANGUAGE,
                children: t => (0, i.jsx)(h.default, {
                    width: 24,
                    height: 24,
                    ...t,
                    ...e,
                    className: E.codeIcon
                })
            })
        })
    }

    function T(e) {
        return (0, i.jsx)(o.Tooltip, {
            text: x.default.Messages.PREVIEW_WHOLE_FILE,
            children: t => (0, i.jsx)(o.Clickable, {
                ...t,
                className: E.openFullPreviewSection,
                onClick: () => {
                    (0, o.openModal)(t => (0, i.jsx)(v, {
                        ...e,
                        ...t
                    }))
                },
                children: (0, i.jsx)(m.default, {})
            })
        })
    }

    function _(e) {
        var t;
        let {
            attachment: n,
            fileContents: l,
            expanded: a,
            setExpanded: r,
            language: u,
            setLanguage: c,
            bytesLeft: f,
            className: p
        } = e, m = null == l ? void 0 : l.split("\n"), h = null !== (t = null == m ? void 0 : m.length) && void 0 !== t ? t : 0, y = a ? 100 : 6, _ = 0 === f, v = "";
        _ && a && h > y ? v = "\n..." : !_ && (v = "..."), "" !== v && (_ ? v += " " + x.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: h - y
        }) : v += " " + x.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(f)
        }));
        let N = (null == m ? void 0 : m.slice(0, y).join("\n")) + v,
            A = a || y < h;
        return (0, i.jsxs)("div", {
            className: s(p, E.container),
            children: [(0, i.jsx)("div", {
                className: s(E.textContainer, {
                    [E.expanded]: a
                }),
                children: null == l ? (0, i.jsx)(o.Spinner, {
                    className: E.spinner
                }) : (0, i.jsx)(g, {
                    text: N,
                    language: u
                })
            }), (0, i.jsxs)(o.Text, {
                color: "header-secondary",
                className: E.footer,
                variant: "text-sm/normal",
                children: [A ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(S, {
                        expanded: a,
                        setExpanded: r,
                        isWholeFile: _,
                        numLines: h
                    }), (0, i.jsx)(T, {
                        language: u,
                        fileContents: l,
                        bytesLeft: f,
                        attachment: n
                    })]
                }) : null, (0, i.jsx)("div", {
                    className: E.footerGap
                }), (0, i.jsx)(C, {
                    attachment: n
                }), (0, i.jsx)(I, {
                    language: u,
                    setLanguage: c
                })]
            })]
        })
    }

    function v(e) {
        let {
            transitionState: t,
            language: n,
            fileContents: a,
            bytesLeft: s,
            attachment: r
        } = e, [u, c] = l.useState(n), f = null != a ? a : "";
        return 0 !== s && (f += "... ".concat(x.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, d.formatKbSize)(s)
        }))), (0, i.jsx)(o.ModalRoot, {
            transitionState: t,
            "aria-label": x.default.Messages.PREVIEW_MODAL_LABEL,
            size: o.ModalSize.LARGE,
            className: E.modalRoot,
            children: (0, i.jsxs)("div", {
                className: E.modalContent,
                children: [(0, i.jsx)(o.ScrollerThin, {
                    className: E.modalTextContainer,
                    children: null == a ? (0, i.jsx)(o.Spinner, {
                        className: E.spinner
                    }) : (0, i.jsx)(g, {
                        text: f,
                        language: u
                    })
                }), (0, i.jsxs)(o.Text, {
                    color: "header-secondary",
                    className: E.footer,
                    variant: "text-sm/normal",
                    children: [(0, i.jsx)("div", {
                        className: E.footerGap
                    }), (0, i.jsx)(C, {
                        attachment: r
                    }), (0, i.jsx)(I, {
                        language: u,
                        setLanguage: c
                    })]
                })]
            })
        })
    }
    var N = l.memo(function(e) {
        let {
            attachment: t,
            className: n,
            onClick: a,
            onContextMenu: r
        } = e, [o, u] = l.useState(!1), [d, f] = l.useState(t.filename.split(".").slice(-1)[0]), {
            fileContents: p,
            bytesLeft: m,
            hadError: h
        } = function(e, t) {
            let [n, i] = l.useState(!1), [a, s] = l.useState(null), [r, o] = l.useState(1);
            return l.useEffect(() => {
                (async function n() {
                    try {
                        var n, l;
                        let a = await fetch(e, {
                                headers: {
                                    Range: "bytes=0-".concat(5e4),
                                    Accept: "text/plain"
                                }
                            }),
                            r = function(e) {
                                var t;
                                let n = "utf-8",
                                    i = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
                                try {
                                    return new TextDecoder(i)
                                } catch (t) {
                                    if ((null == e ? void 0 : e.startsWith("text")) || i.toLowerCase().includes("utf")) return new TextDecoder(n);
                                    throw t
                                }
                            }(t),
                            u = r.decode(await a.arrayBuffer()),
                            d = null !== (n = a.headers.get("content-range")) && void 0 !== n ? n : "0",
                            c = null !== (l = a.headers.get("content-length")) && void 0 !== l ? l : "1",
                            f = parseInt(d.split("/")[1]),
                            p = f - parseInt(c);
                        s(0 === p ? u : u.slice(0, -1)), o(p), i(!1)
                    } catch (e) {
                        o(0), i(!0)
                    }
                })()
            }, [e, t]), {
                fileContents: a,
                bytesLeft: r,
                hadError: n
            }
        }(t.url, t.content_type);
        return h ? (0, i.jsx)(c.default, {
            url: t.url,
            filename: t.filename,
            size: t.size,
            onClick: a,
            onContextMenu: r,
            className: n
        }) : (0, i.jsx)(_, {
            attachment: t,
            fileContents: p,
            bytesLeft: m,
            expanded: o,
            setExpanded: u,
            language: d,
            setLanguage: f,
            className: s(E.newMosaicStyle, n)
        })
    }, (e, t) => e.attachment.id === t.attachment.id && e.className === t.className)
}