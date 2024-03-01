function(e, t, s) {
    "use strict";
    s.r(t), s.d(t, {
        default: function() {
            return I
        }
    }), s("222007");
    var i = s("37983"),
        r = s("884691"),
        a = s("414456"),
        l = s.n(a),
        o = s("77078"),
        n = s("151185"),
        u = s("342169"),
        d = s("701909"),
        c = s("49111"),
        E = s("782340"),
        _ = s("669511");
    let T = [{
        getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
        getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
    }, {
        getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
        getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({
            helpCenterUrl: d.default.getArticleURL(c.HelpdeskArticles.GUILD_BOOSTING_FAQ)
        })
    }, {
        getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
        getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
    }, {
        getQuestion: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
        getAnswer: () => E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
    }];
    var I = function(e) {
        let {
            className: t
        } = e, [s, a] = r.useState(null);
        return (0, i.jsxs)("div", {
            className: l(_.wrapper, t),
            children: [(0, i.jsx)(o.Heading, {
                className: _.heading,
                variant: "heading-xxl/bold",
                children: E.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
            }), (0, i.jsx)("ul", {
                className: _.list,
                children: T.map((e, t) => {
                    let r = s === t;
                    return (0, i.jsxs)("div", {
                        className: _.listItem,
                        children: [(0, i.jsxs)(o.Clickable, {
                            className: l(_.questionWrapper, {
                                [_.questionWrapperExpanded]: r
                            }),
                            onClick: () => a(e => e === t ? null : t),
                            tag: "li",
                            children: [(0, i.jsx)(o.Text, {
                                className: _.question,
                                variant: "text-lg/normal",
                                children: e.getQuestion()
                            }), r ? (0, i.jsx)(u.default, {
                                className: _.questionIcon
                            }) : (0, i.jsx)(n.default, {
                                className: _.questionIcon
                            })]
                        }), r && (0, i.jsx)(o.Text, {
                            className: _.answer,
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: e.getAnswer()
                        })]
                    }, t)
                })
            })]
        })
    }
}