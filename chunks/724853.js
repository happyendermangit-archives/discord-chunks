function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvalidMobileCodedLinkInner: function() {
            return I
        },
        default: function() {
            return h
        }
    });
    var s = n("37983");
    n("884691");
    var a = n("414456"),
        l = n.n(a),
        i = n("669491"),
        r = n("77078"),
        u = n("145131"),
        o = n("124969"),
        d = n("49111"),
        c = n("782340"),
        f = n("243372"),
        E = n("125047"),
        _ = n("890957");

    function I(e) {
        let {
            text: t,
            buttonCta: a,
            onClick: d
        } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Image, {
                src: n("781073")
            }), (0, s.jsx)(o.Title, {
                className: l(_.marginTop20, _.marginBottom8, E.flexCenter),
                children: c.default.Messages.DISCORD_DESC_SHORT
            }), (0, s.jsx)(o.SubTitle, {
                className: _.marginBottom40,
                children: c.default.Messages.DISCORD_DESC_LONG
            }), (0, s.jsxs)(r.Card, {
                className: f.card,
                type: r.Card.Types.CUSTOM,
                children: [(0, s.jsx)("img", {
                    alt: "",
                    className: f.cardAccentLeft,
                    src: n("975391")
                }), (0, s.jsx)("img", {
                    alt: "",
                    className: f.cardAccentRight,
                    src: n("37920")
                }), (0, s.jsxs)(u.default, {
                    className: f.cardContents,
                    direction: u.default.Direction.VERTICAL,
                    align: u.default.Align.STRETCH,
                    grow: 0,
                    children: [(0, s.jsx)(r.Text, {
                        tag: "strong",
                        className: f.buttonTitle,
                        variant: "text-md/normal",
                        style: {
                            color: i.default.unsafe_rawColors.PRIMARY_300.css
                        },
                        children: t
                    }), (0, s.jsx)(o.Button, {
                        className: f.button,
                        onClick: d,
                        children: a
                    })]
                })]
            })]
        })
    }

    function h(e) {
        let {
            text: t,
            buttonCta: n,
            theme: a = d.ThemeTypes.DARK,
            onClick: l
        } = e;
        return (0, s.jsx)(o.default, {
            theme: a,
            children: (0, s.jsx)(I, {
                text: t,
                buttonCta: n,
                onClick: l
            })
        })
    }
}