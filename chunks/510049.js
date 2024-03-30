function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        AttachmentListItemSizes: function() {
            return o
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("762624"),
        l = n("784184"),
        c = n("183645"),
        f = n("898770"),
        d = n("120447"),
        _ = n("255719"),
        E = n("281767"),
        p = n("941504"),
        m = n("196826");

    function y(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function I(e) {
        e.stopPropagation()
    }(r = o || (o = {}))[r.SMALL = 0] = "SMALL", r[r.MEDIUM = 1] = "MEDIUM", r[r.CLIP = 2] = "CLIP";
    t.default = i.forwardRef(function(e, t) {
        var n, r, o = e.id,
            a = e.channelId,
            h = e.className,
            O = e.children,
            T = e.actions,
            S = e.handleEditModal,
            v = e.keyboardModeEnabled,
            g = e.onKeyDown,
            A = e.draftType,
            b = e.size,
            N = void 0 === b ? 1 : b,
            R = (0, s.useListItem)(o),
            C = R.onFocus,
            P = function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(R, ["onFocus"]),
            D = (0, _.useFocusInside)(C),
            L = D.handleFocus,
            M = D.handleBlur,
            U = 0 === N,
            w = null != T;
        return i.createElement(l.FocusRing, null, i.createElement("li", (n = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    y(e, t, n[t])
                })
            }
            return e
        }({}, P), r = (r = {
            onFocus: L,
            onBlur: M,
            onKeyDown: function(e) {
                if (v) {
                    switch (e.which) {
                        case E.KeyboardKeys.D:
                            e.preventDefault(), c.default.remove(a, o, A);
                            return;
                        case E.KeyboardKeys.E:
                            null != S && (e.preventDefault(), S(e));
                            return;
                        case E.KeyboardKeys.BACKSPACE:
                            e.ctrlKey ? (e.preventDefault(), c.default.clearAll(a, A)) : (e.preventDefault(), c.default.remove(a, o, A));
                            return;
                        case E.KeyboardKeys.ARROW_UP:
                            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) return;
                            e.preventDefault(), d.ComponentDispatch.dispatchToLastSubscribed(E.ComponentActions.FOCUS_MESSAGES, {
                                atEnd: !0
                            })
                    }
                    null == g || g(e)
                }
            },
            className: u()(m.upload, h, y({}, m.sizeClip, 2 === N)),
            ref: t
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n), i.createElement("div", {
            className: m.uploadContainer
        }, O, w ? i.createElement("div", {
            className: m.actionBarContainer
        }, i.createElement("div", {
            className: u()(m.actionBar, y({}, m.smallActionBar, U)),
            onContextMenu: I,
            "aria-label": p.default.Messages.ATTACHMENT_UTILITIES
        }, i.createElement(f.default, {
            className: u()(y({}, m.miniPopover, U))
        }, T))) : null)))
    })
}