function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("735250");
    n("470079");
    var r = n("780384"),
        a = n("481060"),
        s = n("410030"),
        o = n("689938"),
        l = n("223004"),
        u = n("167969"),
        d = n("557256");
    t.default = function(e) {
        let {
            onClose: t
        } = e, n = (0, s.default)(), _ = (0, r.isThemeDark)(n);
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsxs)(a.ModalHeader, {
                separator: !1,
                className: l.header,
                children: [(0, i.jsx)("img", {
                    alt: "",
                    className: l.headerImage,
                    src: _ ? u : d
                }), (0, i.jsx)(a.Heading, {
                    className: l.title,
                    variant: "heading-xl/medium",
                    children: o.default.Messages.STICKER_ASSET_LOAD_ERROR
                }), (0, i.jsx)(a.ModalCloseButton, {
                    onClick: t,
                    className: l.modalCloseButton
                })]
            }), (0, i.jsx)(a.ModalContent, {
                className: l.content,
                children: (0, i.jsx)(a.Text, {
                    variant: "text-md/normal",
                    children: o.default.Messages.ACTIVATE_DEVICE_ERROR_UNKNOWN
                })
            }), (0, i.jsx)(a.ModalFooter, {
                className: l.modalFooter,
                children: (0, i.jsx)(a.Button, {
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    onClick: t,
                    children: o.default.Messages.CLOSE
                })
            })]
        })
    }
}