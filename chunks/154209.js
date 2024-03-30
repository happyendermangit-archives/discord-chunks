function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return g
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("84791"),
        u = n("514034"),
        s = n("693744"),
        l = n("14782"),
        c = n("447515"),
        f = n("784184"),
        d = n("482644"),
        _ = n("510077"),
        E = n("443160"),
        p = n("52303"),
        m = n("261584"),
        y = n("368887"),
        I = n("281767"),
        h = n("348201"),
        O = n("941504"),
        T = n("127906");

    function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var v = "https://www.youtube.com/embed/".concat(y.LOOTBOX_VIDEO_ID, "?autoplay=1&mute=1&controls=0&loop=1&playlist=").concat(y.LOOTBOX_VIDEO_ID, "&origin=https://").concat(I.PRIMARY_DOMAIN);

    function g() {
        var e, t, n = (e = r.useState(!1), t = 2, function(e) {
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
                    if ("string" == typeof e) return S(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t)
                }
            }(e, t) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            o = n[0],
            y = n[1],
            g = E.default.useExperiment({
                location: "lootbox_entrypoint"
            }).showMainEntrypoints,
            A = !(0, _.useIsDismissibleContentDismissed)(l.DismissibleContent.LOOTBOXES_ENTRYPOINT),
            b = function(e) {
                (0, _.markDismissibleContentAsDismissed)(l.DismissibleContent.LOOTBOXES_ENTRYPOINT, {
                    dismissAction: e
                })
            };
        return g && A ? r.createElement("div", {
            className: i()(T.wrapper, o ? T.wrapperHovered : null),
            onMouseLeave: function() {
                return y(!1)
            }
        }, r.createElement(f.Clickable, {
            className: T.closeButton,
            onClick: function() {
                return b(h.ContentDismissActionType.DISMISS)
            }
        }, r.createElement(u.CloseSmallIcon, {
            className: T.closeIcon,
            color: c.default.colors.WHITE
        }), r.createElement(s.Text, {
            variant: "text-xs/bold",
            color: "always-white"
        }, O.default.Messages.PACKAGES_ENTRYPOINT_CLOSE)), r.createElement("div", {
            className: T.videoWrapper
        }, r.createElement("iframe", {
            className: T.video,
            src: v,
            sandbox: "allow-same-origin allow-scripts allow-popups"
        }), r.createElement(f.Clickable, {
            className: T.entrypoint,
            onClick: function() {
                b(h.ContentDismissActionType.PRIMARY), d.default.open(I.UserSettingsSections.LOOTBOXES)
            },
            onMouseEnter: function() {
                return y(!0)
            }
        }, r.createElement("div", {
            className: T.backgroundWrapper
        }, r.createElement(m.default, {
            className: T.backgroundImage,
            pageMultiplier: 5
        })), r.createElement(p.default, {
            className: T.image,
            color: c.default.colors.POLLS_NORMAL_FILL_HOVER,
            width: 70,
            height: 70
        }), r.createElement("div", {
            className: T.body
        }, r.createElement(s.Text, {
            variant: "text-md/bold",
            color: "always-white"
        }, O.default.Messages.PACKAGES_ENTRYPOINT_TITLE), r.createElement(s.Text, {
            variant: "text-sm/medium",
            color: "always-white"
        }, O.default.Messages.PACKAGES_ENTRYPOINT_DESCRIPTION)), r.createElement("div", {
            className: T.buttonWrapper
        }, r.createElement("div", {
            className: T.iconButton
        }, r.createElement(a.ArrowLargeRightIcon, {
            className: T.buttonIcon,
            color: c.default.colors.WHITE
        })))))) : null
    }
}