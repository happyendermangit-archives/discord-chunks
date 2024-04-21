function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        InvalidMobileCodedLinkInner: function() {
            return I
        },
        default: function() {
            return p
        }
    });
    var s = n("735250");
    n("470079");
    var a = n("120356"),
        l = n.n(a),
        i = n("692547"),
        r = n("481060"),
        u = n("285952"),
        o = n("819570"),
        d = n("981631"),
        c = n("689938"),
        f = n("263723"),
        E = n("605094"),
        _ = n("794711");

    function I(e) {
        let {
            text: t,
            buttonCta: a,
            onClick: d
        } = e;
        return (0, s.jsxs)(s.Fragment, {
            children: [(0, s.jsx)(o.Image, {
                src: n("689411")
            }), (0, s.jsx)(o.Title, {
                className: l()(_.marginTop20, _.marginBottom8, E.flexCenter),
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
                    src: n("70519")
                }), (0, s.jsx)("img", {
                    alt: "",
                    className: f.cardAccentRight,
                    src: n("806848")
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

    function p(e) {
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