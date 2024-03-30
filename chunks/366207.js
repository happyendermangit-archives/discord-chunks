function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return s
        }
    });
    var n = r("470079"),
        l = r("784184"),
        i = r("311839"),
        a = r("275372"),
        o = r("591263"),
        c = r("941504"),
        u = r("485170");

    function s(e) {
        var t = e.guild,
            r = e.message;
        return (0, a.useNewMemberBadge)(t.id, r.author.id) ? n.createElement(l.Popout, {
            animation: l.Popout.Animation.TRANSLATE,
            align: "center",
            autoInvert: !0,
            nudgeAlignIntoViewport: !0,
            position: "right",
            renderPopout: function(e) {
                var l = e.closePopout;
                return n.createElement(o.default, {
                    guild: t,
                    message: r,
                    onClose: l
                })
            }
        }, function(e) {
            var t = e.onClick;
            return n.createElement(l.Clickable, {
                onClick: t,
                tag: "span"
            }, n.createElement(l.Tooltip, {
                text: c.default.Messages.NEW_MEMBER_BADGE_TOOLTIP_TEXT
            }, function(e) {
                return n.createElement("div", function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable
                        }))), n.forEach(function(t) {
                            var n, l, i;
                            n = e, l = t, i = r[t], l in n ? Object.defineProperty(n, l, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[l] = i
                        })
                    }
                    return e
                }({
                    className: u.newMemberBadge
                }, e), n.createElement(i.default, {
                    width: 20,
                    height: 20
                }))
            }))
        }) : null
    }
}