function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        InvalidMobileCodedLinkInner: function() {
            return _
        },
        default: function() {
            return h
        }
    });
    var n = s("735250");
    s("470079");
    var a = s("803997"),
        l = s.n(a),
        i = s("692547"),
        r = s("481060"),
        u = s("285952"),
        o = s("819570"),
        d = s("981631"),
        c = s("689938"),
        f = s("263723"),
        E = s("605094"),
        I = s("794711");

    function _(e) {
        let {
            text: t,
            buttonCta: a,
            onClick: d
        } = e;
        return (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(o.Image, {
                src: s("689411")
            }), (0, n.jsx)(o.Title, {
                className: l()(I.marginTop20, I.marginBottom8, E.flexCenter),
                children: c.default.Messages.DISCORD_DESC_SHORT
            }), (0, n.jsx)(o.SubTitle, {
                className: I.marginBottom40,
                children: c.default.Messages.DISCORD_DESC_LONG
            }), (0, n.jsxs)(r.Card, {
                className: f.card,
                type: r.Card.Types.CUSTOM,
                children: [(0, n.jsx)("img", {
                    alt: "",
                    className: f.cardAccentLeft,
                    src: s("70519")
                }), (0, n.jsx)("img", {
                    alt: "",
                    className: f.cardAccentRight,
                    src: s("806848")
                }), (0, n.jsxs)(u.default, {
                    className: f.cardContents,
                    direction: u.default.Direction.VERTICAL,
                    align: u.default.Align.STRETCH,
                    grow: 0,
                    children: [(0, n.jsx)(r.Text, {
                        tag: "strong",
                        className: f.buttonTitle,
                        variant: "text-md/normal",
                        style: {
                            color: i.default.unsafe_rawColors.PRIMARY_300.css
                        },
                        children: t
                    }), (0, n.jsx)(o.Button, {
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
            buttonCta: s,
            theme: a = d.ThemeTypes.DARK,
            onClick: l
        } = e;
        return (0, n.jsx)(o.default, {
            theme: a,
            children: (0, n.jsx)(_, {
                text: t,
                buttonCta: s,
                onClick: l
            })
        })
    }
}