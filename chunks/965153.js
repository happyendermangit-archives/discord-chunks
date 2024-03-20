function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        getReportMenu: function() {
            return d
        },
        getUnauthenticatedReportMenu: function() {
            return u
        },
        submitHeadlessReport: function() {
            return o
        },
        submitReport: function() {
            return c
        },
        submitUnauthenticatedReport: function() {
            return m
        },
        sendUnauthenticatedReportPincode: function() {
            return f
        },
        verifyUnauthenticatedReport: function() {
            return _
        },
        submitReportSecondLook: function() {
            return E
        },
        trackCloseReportModalAnalytics: function() {
            return x
        },
        showInAppReportsFeedbackModal: function() {
            return p
        },
        areRequiredElementsUnfilled: function() {
            return N
        }
    }), n("70102"), n("808653"), n("222007");
    var a = n("872717"),
        l = n("913144"),
        r = n("716241"),
        s = n("143618"),
        i = n("49111");
    async function d(e, t) {
        var n;
        let l = v(e),
            r = await a.default.get({
                url: i.Endpoints.GET_REPORT_MENU(l),
                query: (null == t ? void 0 : t.variant) != null ? {
                    variant: t.variant
                } : void 0
            }),
            s = null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
        return s
    }
    async function u(e, t) {
        var n;
        let l = h(e),
            r = await a.default.get({
                url: i.Endpoints.GET_UNAUTHENTICATED_REPORT_MENU(l),
                query: (null == t ? void 0 : t.variant) != null ? {
                    variant: t.variant
                } : void 0
            }),
            s = null !== (n = r.body) && void 0 !== n ? n : JSON.parse(r.text);
        return s
    }
    async function o(e, t) {
        let n = v(e),
            l = await d(e, t);
        await a.default.post({
            url: i.Endpoints.SUBMIT_REPORT_MENU(n),
            body: R(l, e, [{
                nodeRef: l.root_node_id,
                destination: ["", l.success_node_id]
            }])
        })
    }

    function c(e, t, n) {
        return a.default.post({
            url: i.Endpoints.SUBMIT_REPORT_MENU(v(t)),
            body: R(e, t, n)
        })
    }

    function m(e, t, n, l) {
        let r = h(t);
        return a.default.post({
            url: i.Endpoints.SUBMIT_UNAUTHENTICATED_REPORT_MENU(r),
            body: R(e, t, n, l)
        })
    }

    function f(e, t) {
        return a.default.post({
            url: i.Endpoints.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
            body: {
                name: e,
                email: t
            }
        })
    }
    async function _(e, t, n) {
        let l = await a.default.post({
            url: i.Endpoints.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            }
        });
        return l.body
    }
    async function E(e) {
        let t = await a.default.post({
            url: i.Endpoints.SUBMIT_REPORT_SECOND_LOOK,
            body: {
                token: e
            }
        });
        return t.body
    }

    function h(e) {
        let t = e.name;
        if (!Object.values(s.UnauthenticatedReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
        return t
    }

    function v(e) {
        let t = e.name;
        if (!Object.values(s.ReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
        return t
    }
    let R = (e, t, n, a) => {
        let {
            version: l,
            variant: r,
            language: i
        } = e, d = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0
        }, u = {
            version: l,
            variant: r,
            language: null != i ? i : "en",
            breadcrumbs: n.map(e => e.nodeRef),
            elements: n.reduce((e, t) => {
                let {
                    multiSelect: n,
                    textInput: a
                } = t;
                return {
                    ...e,
                    ...null != n && {
                        [n.name]: Object.keys(n.state)
                    },
                    ...Object.fromEntries(Object.entries(null != a ? a : {}).map(e => {
                        let [t, {
                            value: n
                        }] = e;
                        return [t, n]
                    }))
                }
            }, {})
        };
        if (t.name === s.ReportNames.MESSAGE || t.name === s.ReportNames.FIRST_DM) {
            let {
                channel_id: e,
                id: n
            } = t.record;
            return {
                ...u,
                ...d,
                name: t.name,
                channel_id: e,
                message_id: n
            }
        }
        if (t.name === s.ReportNames.GUILD || t.name === s.ReportNames.GUILD_DISCOVERY) {
            let {
                id: e
            } = t.record;
            return {
                ...u,
                ...d,
                name: t.name,
                guild_id: e
            }
        }
        if (t.name === s.ReportNames.GUILD_DIRECTORY_ENTRY) {
            let {
                guildId: e,
                channelId: n
            } = t.record;
            return {
                ...u,
                ...d,
                name: t.name,
                channel_id: n,
                guild_id: e
            }
        } else if (t.name === s.ReportNames.STAGE_CHANNEL) {
            let {
                id: e,
                guild_id: n,
                channel_id: a
            } = t.record;
            return {
                ...u,
                ...d,
                name: t.name,
                channel_id: a,
                guild_id: n,
                stage_instance_id: e
            }
        } else if (t.name === s.ReportNames.GUILD_SCHEDULED_EVENT) {
            let {
                id: e,
                guild_id: n
            } = t.record;
            return {
                ...u,
                ...d,
                name: t.name,
                guild_id: n,
                guild_scheduled_event_id: e
            }
        } else if (t.name === s.ReportNames.USER) return {
            ...u,
            ...d,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
        else if (t.name === s.UnauthenticatedReportNames.USER) return {
            ...u,
            ...d,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: a
        };
        else if (t.name === s.UnauthenticatedReportNames.MESSAGE) return {
            ...u,
            ...d,
            name: t.name,
            message_id: t.record.id,
            email_token: a
        };
        return null
    };

    function x(e, t, n) {
        r.default.trackWithMetadata(i.AnalyticEvents.IAR_MODAL_CLOSE, {
            report_type: e.name,
            report_id: n,
            navigation_history: t,
            message_id: e.name === s.ReportNames.MESSAGE || e.name === s.ReportNames.FIRST_DM ? e.record.id : void 0,
            stage_instance_id: e.name === s.ReportNames.STAGE_CHANNEL ? e.record.id : void 0,
            guild_scheduled_event_id: e.name === s.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
            guild_id: e.name === s.ReportNames.GUILD || e.name === s.ReportNames.GUILD_DISCOVERY ? e.record.id : e.name === s.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === s.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
            channel_id: e.name === s.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === s.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
        })
    }

    function p(e, t) {
        l.default.dispatch({
            type: "IN_APP_REPORTS_SHOW_FEEDBACK",
            reportId: t,
            reportType: e.name
        })
    }

    function N(e, t, n, a, l) {
        return e.some(e => {
            var t;
            return !0 === e.should_submit_data && ((null == a ? void 0 : a[e.name]) == null || (null == a ? void 0 : a[e.name].value) === "" || !(null == a ? void 0 : null === (t = a[e.name]) || void 0 === t ? void 0 : t.isValid))
        }) || t.some(e => !0 === e.should_submit_data && ((null == a ? void 0 : a[e.name]) == null || (null == a ? void 0 : a[e.name].value) === "")) || (null == n ? void 0 : n.should_submit_data) === !0 && (null == l || 0 === Object.keys(l).length)
    }
}