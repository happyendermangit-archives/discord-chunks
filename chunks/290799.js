function(e, t, n) {
    "use strict";
    n.r(t), n("47120");
    var i = n("735250"),
        r = n("470079"),
        a = n("120356"),
        s = n.n(a),
        o = n("481060"),
        l = n("729285"),
        u = n("150954"),
        d = n("63063"),
        _ = n("981631"),
        c = n("689938"),
        E = n("732364");
    let I = [{
        getQuestion: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1,
        getAnswer: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
    }, {
        getQuestion: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2,
        getAnswer: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({
            helpCenterUrl: d.default.getArticleURL(_.HelpdeskArticles.GUILD_BOOSTING_FAQ)
        })
    }, {
        getQuestion: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3,
        getAnswer: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
    }, {
        getQuestion: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4,
        getAnswer: () => c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
    }];
    t.default = function(e) {
        let {
            className: t
        } = e, [n, a] = r.useState(null);
        return (0, i.jsxs)("div", {
            className: s()(E.wrapper, t),
            children: [(0, i.jsx)(o.Heading, {
                className: E.heading,
                variant: "heading-xxl/bold",
                children: c.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING
            }), (0, i.jsx)("ul", {
                className: E.list,
                children: I.map((e, t) => {
                    let r = n === t;
                    return (0, i.jsxs)("div", {
                        className: E.listItem,
                        children: [(0, i.jsxs)(o.Clickable, {
                            className: s()(E.questionWrapper, {
                                [E.questionWrapperExpanded]: r
                            }),
                            onClick: () => a(e => e === t ? null : t),
                            tag: "li",
                            children: [(0, i.jsx)(o.Text, {
                                className: E.question,
                                variant: "text-lg/normal",
                                children: e.getQuestion()
                            }), r ? (0, i.jsx)(u.default, {
                                className: E.questionIcon
                            }) : (0, i.jsx)(l.default, {
                                className: E.questionIcon
                            })]
                        }), r && (0, i.jsx)(o.Text, {
                            className: E.answer,
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