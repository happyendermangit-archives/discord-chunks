function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("715045"),
        u = n("784184"),
        s = n("136146"),
        l = n("304933"),
        c = n("954036"),
        f = n("701958"),
        d = n("8558"),
        _ = n("395453"),
        E = n("610028"),
        p = n("941504"),
        m = n("698377"),
        y = n("633353");

    function I(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function h(e, t, n, r, o, i, a) {
        try {
            var u = e[i](a),
                s = u.value
        } catch (e) {
            n(e);
            return
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o)
    }

    function O(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function T(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                O(e, t, n[t])
            })
        }
        return e
    }

    function S(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function v(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != o) {
                var i = [],
                    a = !0,
                    u = !1;
                try {
                    for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                } catch (e) {
                    u = !0, r = e
                } finally {
                    try {
                        !a && null != o.return && o.return()
                    } finally {
                        if (u) throw r
                    }
                }
                return i
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return I(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function g(e) {
        var t = e.text,
            o = e.language,
            u = function() {
                return r.createElement("pre", null, r.createElement("code", {
                    className: i()(y.scrollbarGhostHairline, m.codeView, "hljs")
                }, t))
            };
        return r.createElement(a.LazyLibrary, {
            createPromise: function() {
                return Promise.resolve().then(n.bind(n, "928344"))
            },
            webpackId: "928344",
            render: function(e) {
                if (!e.hasLanguage(o)) return u();
                var n = e.highlight(o, t, !0);
                return null == n ? u() : r.createElement("pre", null, r.createElement("code", {
                    className: i()(y.scrollbarGhostHairline, m.codeView, "hljs", n.language),
                    dangerouslySetInnerHTML: {
                        __html: n.value
                    }
                }))
            },
            renderFallback: function() {
                return u()
            }
        })
    }

    function A(e) {
        var t = e.expanded,
            n = e.setExpanded,
            o = e.isWholeFile,
            i = e.numLines,
            a = (o ? p.default.Messages.PREVIEW_NUM_LINES : p.default.Messages.PREVIEW_NUM_LINES_AT_LEAST).format({
                lines: i
            });
        return r.createElement(u.Tooltip, {
            text: "".concat(t ? p.default.Messages.COLLAPSE : p.default.Messages.EXPAND, " (").concat(a, ")")
        }, function(e) {
            return r.createElement(u.Clickable, S(T({}, e), {
                className: m.toggleExpandSection,
                onClick: function() {
                    n(!t)
                }
            }), r.createElement(f.default, {
                direction: t ? f.default.Directions.UP : f.default.Directions.DOWN
            }), t ? p.default.Messages.COLLAPSE : p.default.Messages.EXPAND)
        })
    }

    function b(e) {
        var t = e.attachment,
            n = "".concat(t.filename, " (").concat((0, l.formatKbSize)(t.size), ")");
        return r.createElement(r.Fragment, null, r.createElement(u.Tooltip, {
            text: n
        }, function(e) {
            return r.createElement("span", S(T({}, e), {
                className: i()(m.downloadSection, m.attachmentName)
            }), t.filename)
        }), r.createElement(u.Tooltip, {
            text: n
        }, function(e) {
            return r.createElement("span", S(T({}, e), {
                className: i()(m.downloadSection, m.formattedSize)
            }), (0, l.formatKbSize)(t.size))
        }), r.createElement(u.Tooltip, {
            text: "".concat(p.default.Messages.DOWNLOAD, " ").concat(n)
        }, function(e) {
            return r.createElement(u.Anchor, S(T({}, e), {
                className: m.downloadSection,
                href: t.url,
                target: "_blank",
                rel: "noreferrer noopener"
            }), r.createElement(d.default, {
                className: m.downloadButton,
                width: 24,
                height: 24
            }))
        }))
    }

    function N(e) {
        var t = e.language,
            n = e.setLanguage;
        return r.createElement(u.Popout, {
            position: "left",
            renderPopout: function(e) {
                var o = e.closePopout;
                return r.createElement(u.Dialog, {
                    "aria-label": p.default.Messages.PREVIEW_CHANGE_LANGUAGE
                }, r.createElement(u.Combobox, {
                    className: m.languageSelector,
                    multiSelect: !1,
                    placeholder: p.default.Messages.PREVIEW_SEARCH_LANGUAGE_PLACEHOLDER,
                    value: new Set([t]),
                    autoFocus: !0,
                    onChange: function(e) {
                        n(e), o()
                    }
                }, function(e) {
                    return Array.from(s.PLAINTEXT_FILE_EXTENSIONS).filter(function(t) {
                        return t.toLowerCase().includes(e.toLowerCase())
                    }).map(function(e) {
                        return r.createElement(u.ComboboxItem, {
                            value: e,
                            key: e
                        }, r.createElement(u.ComboboxItem.Label, null, e))
                    })
                }))
            }
        }, function(e) {
            return r.createElement(u.Tooltip, {
                text: p.default.Messages.PREVIEW_CHANGE_LANGUAGE
            }, function(t) {
                return r.createElement(E.default, S(T({
                    width: 24,
                    height: 24
                }, t, e), {
                    className: m.codeIcon
                }))
            })
        })
    }

    function R(e) {
        return r.createElement(u.Tooltip, {
            text: p.default.Messages.PREVIEW_WHOLE_FILE
        }, function(t) {
            return r.createElement(u.Clickable, S(T({}, t), {
                className: m.openFullPreviewSection,
                onClick: function() {
                    (0, u.openModal)(function(t) {
                        return r.createElement(P, T({}, e, t))
                    })
                }
            }), r.createElement(_.default, null))
        })
    }

    function C(e) {
        var t, n = e.attachment,
            o = e.fileContents,
            a = e.expanded,
            s = e.setExpanded,
            c = e.language,
            f = e.setLanguage,
            d = e.bytesLeft,
            _ = e.className,
            E = null == o ? void 0 : o.split("\n"),
            y = null !== (t = null == E ? void 0 : E.length) && void 0 !== t ? t : 0,
            I = a ? 100 : 6,
            h = 0 === d,
            T = "";
        h && a && y > I ? T = "\n..." : !h && (T = "..."), "" !== T && (h ? T += " " + p.default.Messages.PREVIEW_LINES_LEFT.format({
            lines: y - I
        }) : T += " " + p.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, l.formatKbSize)(d)
        }));
        var S = (null == E ? void 0 : E.slice(0, I).join("\n")) + T,
            v = a || I < y;
        return r.createElement("div", {
            className: i()(_, m.container)
        }, r.createElement("div", {
            className: i()(m.textContainer, O({}, m.expanded, a))
        }, null == o ? r.createElement(u.Spinner, {
            className: m.spinner
        }) : r.createElement(g, {
            text: S,
            language: c
        })), r.createElement(u.Text, {
            color: "header-secondary",
            className: m.footer,
            variant: "text-sm/normal"
        }, v ? r.createElement(r.Fragment, null, r.createElement(A, {
            expanded: a,
            setExpanded: s,
            isWholeFile: h,
            numLines: y
        }), r.createElement(R, {
            language: c,
            fileContents: o,
            bytesLeft: d,
            attachment: n
        })) : null, r.createElement("div", {
            className: m.footerGap
        }), r.createElement(b, {
            attachment: n
        }), r.createElement(N, {
            language: c,
            setLanguage: f
        })))
    }

    function P(e) {
        var t = e.transitionState,
            n = e.language,
            o = e.fileContents,
            i = e.bytesLeft,
            a = e.attachment,
            s = v(r.useState(n), 2),
            c = s[0],
            f = s[1],
            d = null != o ? o : "";
        return 0 !== i && (d += "... ".concat(p.default.Messages.PREVIEW_BYTES_LEFT.format({
            formattedBytes: (0, l.formatKbSize)(i)
        }))), r.createElement(u.ModalRoot, {
            transitionState: t,
            "aria-label": p.default.Messages.PREVIEW_MODAL_LABEL,
            size: u.ModalSize.LARGE,
            className: m.modalRoot
        }, r.createElement("div", {
            className: m.modalContent
        }, r.createElement(u.ScrollerThin, {
            className: m.modalTextContainer
        }, null == o ? r.createElement(u.Spinner, {
            className: m.spinner
        }) : r.createElement(g, {
            text: d,
            language: c
        })), r.createElement(u.Text, {
            color: "header-secondary",
            className: m.footer,
            variant: "text-sm/normal"
        }, r.createElement("div", {
            className: m.footerGap
        }), r.createElement(b, {
            attachment: a
        }), r.createElement(N, {
            language: c,
            setLanguage: f
        }))))
    }
    t.default = r.memo(function(e) {
        var t, n, o, a, u, s, l, f, d, _, E, p = e.attachment,
            y = e.className,
            I = e.onClick,
            O = e.onContextMenu,
            T = v(r.useState(!1), 2),
            S = T[0],
            g = T[1],
            A = v(r.useState(p.filename.split(".").slice(-1)[0]), 2),
            b = A[0],
            N = A[1];
        var R = (t = p.url, n = p.content_type, a = (o = v(r.useState(!1), 2))[0], u = o[1], l = (s = v(r.useState(null), 2))[0], f = s[1], _ = (d = v(r.useState(1), 2))[0], E = d[1], r.useEffect(function() {
                function e() {
                    var r;
                    return r = function() {
                        var e, r, o, i, a, s, l, c, d, _;
                        return function(e, t) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: u(0),
                                throw: u(1),
                                return: u(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function u(i) {
                                return function(u) {
                                    return function(i) {
                                        if (n) throw TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                                case 0:
                                                case 1:
                                                    o = i;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: i[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = i[1], i = [0];
                                                    continue;
                                                case 7:
                                                    i = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                        a.label = i[1];
                                                        break
                                                    }
                                                    if (6 === i[0] && a.label < o[1]) {
                                                        a.label = o[1], o = i;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(i);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            i = t.call(e, a)
                                        } catch (e) {
                                            i = [6, e], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & i[0]) throw i[1];
                                        return {
                                            value: i[0] ? i[1] : void 0,
                                            done: !0
                                        }
                                    }([i, u])
                                }
                            }
                        }(this, function(_) {
                            switch (_.label) {
                                case 0:
                                    return _.trys.push([0, 3, , 4]), [4, fetch(t, {
                                        headers: {
                                            Range: "bytes=0-".concat(5e4),
                                            Accept: "text/plain"
                                        }
                                    })];
                                case 1:
                                    return e = _.sent(), i = (r = function(e) {
                                        var t, n = "utf-8",
                                            r = null !== (t = null == e ? void 0 : e.split("charset=").slice(-1)[0]) && void 0 !== t ? t : n;
                                        try {
                                            return new TextDecoder(r)
                                        } catch (t) {
                                            if ((null == e ? void 0 : e.startsWith("text")) || r.toLowerCase().includes("utf")) return new TextDecoder(n);
                                            throw t
                                        }
                                    }(n)).decode, [4, e.arrayBuffer()];
                                case 2:
                                    return o = i.apply(r, [_.sent()]), s = null !== (a = e.headers.get("content-range")) && void 0 !== a ? a : "0", c = null !== (l = e.headers.get("content-length")) && void 0 !== l ? l : "1", f(0 == (d = parseInt(s.split("/")[1]) - parseInt(c)) ? o : o.slice(0, -1)), E(d), u(!1), [3, 4];
                                case 3:
                                    return _.sent(), E(0), u(!0), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    }, (e = function() {
                        var e = this,
                            t = arguments;
                        return new Promise(function(n, o) {
                            var i = r.apply(e, t);

                            function a(e) {
                                h(i, n, o, a, u, "next", e)
                            }

                            function u(e) {
                                h(i, n, o, a, u, "throw", e)
                            }
                            a(void 0)
                        })
                    }).apply(this, arguments)
                }! function() {
                    e.apply(this, arguments)
                }()
            }, [t, n]), {
                fileContents: l,
                bytesLeft: _,
                hadError: a
            }),
            P = R.fileContents,
            D = R.bytesLeft;
        return R.hadError ? r.createElement(c.default, {
            url: p.url,
            filename: p.filename,
            size: p.size,
            onClick: I,
            onContextMenu: O,
            className: y
        }) : r.createElement(C, {
            attachment: p,
            fileContents: P,
            bytesLeft: D,
            expanded: S,
            setExpanded: g,
            language: b,
            setLanguage: N,
            className: i()(m.newMosaicStyle, y)
        })
    }, function(e, t) {
        return e.attachment.id === t.attachment.id && e.className === t.className
    })
}