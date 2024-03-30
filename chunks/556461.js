function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        a = n("784184"),
        o = n("355544"),
        l = n("169613"),
        i = n("941504"),
        u = n("265945"),
        c = function(e) {
            var t = e.data,
                n = t.url,
                i = t.link_text,
                c = t.link_description;
            return t.is_localized ? r.createElement(a.Clickable, {
                role: "link",
                className: u.linkButton,
                onClick: function() {
                    (0, o.default)(n)
                }
            }, r.createElement("div", {
                className: u.linkTextContainer
            }, r.createElement(a.Text, {
                className: u.__invalid_linkText,
                variant: "text-md/semibold"
            }, i), null != c && "" !== c && r.createElement(a.Text, {
                variant: "text-md/normal",
                color: "text-muted"
            }, c)), r.createElement(l.default, {
                className: u.linkIcon
            })) : null
        };

    function s(e) {
        var t = e.elements;
        if (null == t || 0 === t.length || null == t.find(function(e) {
                return e.data.is_localized
            })) return null;
        var n = t.map(function(e, t) {
                var n = e.data;
                return r.createElement(c, {
                    data: n,
                    key: "external-link+".concat(t)
                })
            }),
            o = t.some(function(e) {
                return e.data.is_header_hidden
            });
        return r.createElement("div", {
            className: u.linksContainer
        }, !o && r.createElement(a.Heading, {
            variant: "heading-sm/semibold",
            color: "header-secondary",
            className: u.header
        }, i.default.Messages.LEARN_MORE), n)
    }
}