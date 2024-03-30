function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("183645"),
        s = n("301636"),
        l = n("319654"),
        c = n("309944"),
        f = n("158201"),
        d = n("510049"),
        _ = n("59686"),
        E = n("281767"),
        p = n("117168"),
        m = n("451328");

    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function h(e) {
        var t, n, o = e.channelId,
            h = e.option,
            O = e.keyboardModeEnabled,
            T = r.useRef(null);
        var S = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
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
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return y(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            v = S[0],
            g = S[1],
            A = f.default.getUpload(o, h.name, c.DraftType.SlashCommand),
            b = r.useRef(null),
            N = r.useCallback(function() {
                g(!0)
            }, []),
            R = r.useCallback(function() {
                g(!1)
            }, []),
            C = r.useCallback(function(e) {
                g(!1);
                var t, n = {
                    id: h.name,
                    file: null === (t = e.dataTransfer) || void 0 === t ? void 0 : t.files[0],
                    platform: l.UploadPlatform.WEB
                };
                u.default.setFile({
                    channelId: o,
                    id: h.name,
                    file: n,
                    draftType: c.DraftType.SlashCommand
                })
            }, [o, h]);
        return (r.useEffect(function() {
            var e = b.current;
            return null == A && (null == e || e.addEventListener("dragover", N, !1), null == e || e.addEventListener("dragleave", R, !1), null == e || e.addEventListener("drop", C, !1)),
                function() {
                    null == e || e.removeEventListener("dragover", N, !1), null == e || e.removeEventListener("dragleave", R, !1), null == e || e.removeEventListener("drop", C, !1)
                }
        }, [A, N, R, C]), null != A) ? r.createElement(_.default, {
            channelId: o,
            upload: A,
            keyboardModeEnabled: O,
            draftType: c.DraftType.SlashCommand,
            label: r.createElement(r.Fragment, null, r.createElement(a.Text, {
                tag: "span",
                variant: "text-md/normal"
            }, h.name, ": "), r.createElement(a.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-brand"
            }, A.filename)),
            canEdit: !1
        }) : r.createElement(d.default, {
            id: h.name,
            channelId: o,
            keyboardModeEnabled: O,
            onKeyDown: function(e) {
                if (e.which === E.KeyboardKeys.ENTER) {
                    var t;
                    e.preventDefault(), null === (t = T.current) || void 0 === t || t.activateUploadDialogue()
                }
            },
            className: i()(p.emptyOption, I({}, p.emptyOptionActive, v)),
            draftType: c.DraftType.SlashCommand,
            ref: b
        }, r.createElement("span", {
            className: i()(p.optionName, I({}, p.optionNameActive, v))
        }, h.name), r.createElement(a.Clickable, {
            className: p.clickContainer,
            onClick: function() {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.activateUploadDialogue()
            }
        }, r.createElement("div", {
            className: p.commandOptionContainer
        }, r.createElement("img", {
            src: m,
            className: p.optionIcon,
            alt: ""
        }), r.createElement(a.Text, {
            className: p.optionHelp,
            variant: "text-sm/normal"
        }, "Drag and drop or click to upload file"), r.createElement(s.default, {
            ref: T,
            onChange: function(e) {
                var t, n;
                if (null != o && (null === (n = e.currentTarget) || void 0 === n ? void 0 : null === (t = n.files) || void 0 === t ? void 0 : t[0]) != null) {
                    var r = {
                        id: h.name,
                        file: e.currentTarget.files[0],
                        platform: l.UploadPlatform.WEB
                    };
                    u.default.setFile({
                        channelId: o,
                        id: h.name,
                        file: r,
                        draftType: c.DraftType.SlashCommand
                    }), e.currentTarget.value = ""
                }
            },
            multiple: !1,
            tabIndex: -1,
            "aria-hidden": !0,
            className: p.fileInput
        }))))
    }
}