function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("357911"),
        s = n("210295"),
        l = n("473059"),
        c = n("941504"),
        f = n("990037");

    function d(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function _(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                d(e, t, n[t])
            })
        }
        return e
    }

    function E(e) {
        var t = e.guild,
            n = e.focused,
            o = function(e, t) {
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
            }(e, ["guild", "focused"]),
            E = (0, u.useManageResourcePermissions)(t).canCreateExpressions;
        return r.createElement(a.Tooltip, {
            text: c.default.Messages.SOUNDBOARD_SOUND_UPLOAD_BUTTON_DISABLED,
            shouldShow: !E
        }, function(e) {
            var u, p, m;
            return r.createElement("li", _({
                className: f.soundButtonWrapper
            }, e), r.createElement(a.ClickableContainer, (p = _({}, o), m = (m = {
                "aria-label": c.default.Messages.SOUNDBOARD_UPLOAD_SOUND_FOR_GUILD.format({
                    guildName: t.name
                }),
                className: i()(f.soundAddButton, (d(u = {}, f.focused, n), d(u, f.disabled, !E), u)),
                onClick: function() {
                    return (0, l.default)(t.id)
                }
            }, m), Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(m)).forEach(function(e) {
                Object.defineProperty(p, e, Object.getOwnPropertyDescriptor(m, e))
            }), p), r.createElement(s.default, {
                className: f.soundAddIcon
            }), r.createElement(a.Text, {
                variant: "text-xs/normal",
                color: E ? "header-primary" : "text-muted"
            }, c.default.Messages.SOUNDBOARD_SOUND_ADD_SOUND)))
        })
    }
}