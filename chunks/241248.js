function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("210295"),
        s = n("785194"),
        l = n("481971"),
        c = n("281767"),
        f = n("941504"),
        d = n("236941");

    function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var E = [{
        getQuestion: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_1
        },
        getAnswer: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_1
        }
    }, {
        getQuestion: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_2
        },
        getAnswer: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_2.format({
                helpCenterUrl: l.default.getArticleURL(c.HelpdeskArticles.GUILD_BOOSTING_FAQ)
            })
        }
    }, {
        getQuestion: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_3
        },
        getAnswer: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_3
        }
    }, {
        getQuestion: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_QUESTION_4
        },
        getAnswer: function() {
            return f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_ANSWER_4
        }
    }];
    t.default = function(e) {
        var t, n, o = e.className;
        var l = (t = r.useState(null), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return _(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            c = l[0],
            p = l[1];
        return r.createElement("div", {
            className: i()(d.wrapper, o)
        }, r.createElement(a.Heading, {
            className: d.heading,
            variant: "heading-xxl/bold"
        }, f.default.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_FAQ_HEADING), r.createElement("ul", {
            className: d.list
        }, E.map(function(e, t) {
            var n, o, l, f = c === t;
            return r.createElement("div", {
                key: t,
                className: d.listItem
            }, r.createElement(a.Clickable, {
                className: i()(d.questionWrapper, (n = {}, o = d.questionWrapperExpanded, l = f, o in n ? Object.defineProperty(n, o, {
                    value: l,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[o] = l, n)),
                onClick: function() {
                    return p(function(e) {
                        return e === t ? null : t
                    })
                },
                tag: "li"
            }, r.createElement(a.Text, {
                className: d.question,
                variant: "text-lg/normal"
            }, e.getQuestion()), f ? r.createElement(s.default, {
                className: d.questionIcon
            }) : r.createElement(u.default, {
                className: d.questionIcon
            })), f && r.createElement(a.Text, {
                className: d.answer,
                color: "text-normal",
                variant: "text-md/normal"
            }, e.getAnswer()))
        })))
    }
}