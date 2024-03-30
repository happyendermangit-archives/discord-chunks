function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        },
        getSizeForWidth: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("143953"),
        s = n("986660");

    function l(e) {
        return e < 400 ? "small" : e < 1e3 ? "medium" : "large"
    }

    function c(e) {
        var t = e.onCTAClick,
            n = e.callToAction,
            o = e.header,
            l = e.description,
            c = e.size,
            f = e.className,
            d = e.artURL,
            _ = e.noArt,
            E = e.selected;
        return r.createElement(u.default, {
            className: f,
            justify: u.default.Justify.CENTER,
            align: u.default.Align.CENTER,
            direction: u.default.Direction.VERTICAL,
            style: {
                padding: 4
            }
        }, !(void 0 !== _ && _) && null != d && r.createElement("div", {
            className: i()(s.art, s[c]),
            style: {
                backgroundImage: "url(".concat(d, ")")
            }
        }), null != o ? r.createElement(a.Text, {
            color: "none",
            variant: "text-md/semibold",
            className: s.header
        }, o) : null, null != l ? r.createElement(a.Text, {
            color: "none",
            className: s.description,
            variant: "text-sm/medium"
        }, l) : null, void 0 !== E && E || null == n ? null : r.createElement(a.Button, {
            className: s.outerButton,
            size: a.Button.Sizes.NONE,
            color: a.Button.Colors.WHITE,
            look: a.Button.Looks.BLANK,
            innerClassName: s.button,
            onClick: function(e) {
                e.stopPropagation(), null == t || t(e)
            }
        }, n))
    }
}