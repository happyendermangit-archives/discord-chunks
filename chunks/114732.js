function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("780384"),
        s = n("481060"),
        a = n("410030"),
        o = n("689938"),
        l = n("55386"),
        u = n("167969"),
        d = n("557256");
    t.default = function(e) {
        let {
            onClose: t
        } = e, n = (0, a.default)(), _ = (0, r.isThemeDark)(n);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(s.ModalHeader, {
                separator: !1,
                className: l.header,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    className: l.headerImage,
                    src: _ ? u : d
                }), (0, i.jsx)(s.Heading, {
                    className: l.title,
                    variant: "heading-xl/medium",
                    children: o.default.Messages.STICKER_ASSET_LOAD_ERROR
                }), (0, i.jsx)(s.ModalCloseButton, {
                    onClick: t,
                    className: l.modalCloseButton
                })]
            }), (0, i.jsx)(s.ModalContent, {
                className: l.content,
                children: (0, i.jsx)(s.Text, {
                    variant: "text-md/normal",
                    children: o.default.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN
                })
            }), (0, i.jsx)(s.ModalFooter, {
                className: l.modalFooter,
                children: (0, i.jsx)(s.Button, {
                    color: s.Button.Colors.BRAND,
                    size: s.Button.Sizes.MEDIUM,
                    onClick: t,
                    children: o.default.Messages.CLOSE
                })
            })]
        })
    }
}