function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        areRequiredElementsUnfilled: function() {
            return p
        },
        getDsaExperiment: function() {
            return T
        },
        getReportMenu: function() {
            return l
        },
        getUnauthenticatedReportMenu: function() {
            return u
        },
        sendUnauthenticatedReportPincode: function() {
            return E
        },
        showInAppReportsFeedbackModal: function() {
            return N
        },
        submitHeadlessReport: function() {
            return d
        },
        submitReport: function() {
            return _
        },
        submitReportSecondLook: function() {
            return f
        },
        submitUnauthenticatedReport: function() {
            return c
        },
        trackCloseReportModalAnalytics: function() {
            return m
        },
        verifyUnauthenticatedReport: function() {
            return I
        }
    }), n("411104"), n("724458"), n("47120");
    var i = n("544891"),
        r = n("570140"),
        s = n("367907"),
        a = n("82554"),
        o = n("981631");
    async function l(e, t) {
        var n;
        let r = h(e),
            s = await i.HTTP.get({
                url: o.Endpoints.GET_REPORT_MENU(r),
                query: (null == t ? void 0 : t.variant) != null ? {
                    variant: t.variant
                } : void 0
            });
        return null !== (n = s.body) && void 0 !== n ? n : JSON.parse(s.text)
    }
    async function u(e, t) {
        var n;
        let r = S(e),
            s = await i.HTTP.get({
                url: o.Endpoints.GET_UNAUTHENTICATED_REPORT_MENU(r),
                query: (null == t ? void 0 : t.variant) != null ? {
                    variant: t.variant
                } : void 0
            });
        return null !== (n = s.body) && void 0 !== n ? n : JSON.parse(s.text)
    }
    async function d(e, t) {
        let n = h(e),
            r = await l(e, t);
        await i.HTTP.post({
            url: o.Endpoints.SUBMIT_REPORT_MENU(n),
            body: A(r, e, [{
                nodeRef: r.root_node_id,
                destination: ["", r.success_node_id]
            }])
        })
    }

    function _(e, t, n) {
        return i.HTTP.post({
            url: o.Endpoints.SUBMIT_REPORT_MENU(h(t)),
            body: A(e, t, n)
        })
    }

    function c(e, t, n, r) {
        let s = S(t);
        return i.HTTP.post({
            url: o.Endpoints.SUBMIT_UNAUTHENTICATED_REPORT_MENU(s),
            body: A(e, t, n, r)
        })
    }

    function E(e, t) {
        return i.HTTP.post({
            url: o.Endpoints.SEND_UNAUTHENTICATED_REPORT_PINCODE(e),
            body: {
                name: e,
                email: t
            }
        })
    }
    async function I(e, t, n) {
        return (await i.HTTP.post({
            url: o.Endpoints.VERIFY_UNAUTHENTICATED_REPORT(e),
            body: {
                name: e,
                email: t,
                code: n
            }
        })).body
    }
    async function T() {
        return await i.HTTP.get({
            url: o.Endpoints.DSA_EXPERIMENT_UNAUTHENTICATED
        })
    }
    async function f(e) {
        return (await i.HTTP.post({
            url: o.Endpoints.SUBMIT_REPORT_SECOND_LOOK,
            body: {
                token: e
            }
        })).body
    }

    function S(e) {
        let t = e.name;
        if (!Object.values(a.UnauthenticatedReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
        return t
    }

    function h(e) {
        let t = e.name;
        if (!Object.values(a.ReportNames).includes(t)) throw Error("Invalid report type ".concat(e.name));
        return t
    }
    let A = (e, t, n, i) => {
        let {
            version: r,
            variant: s,
            language: o
        } = e, l = {
            channel_id: void 0,
            message_id: void 0,
            stage_instance_id: void 0,
            guild_id: void 0,
            guild_scheduled_event_id: void 0,
            user_id: void 0,
            email_token: void 0
        }, u = {
            version: r,
            variant: s,
            language: null != o ? o : "en",
            breadcrumbs: n.map(e => e.nodeRef),
            elements: n.reduce((e, t) => {
                let {
                    multiSelect: n,
                    textInput: i
                } = t;
                return {
                    ...e,
                    ...null != n && {
                        [n.name]: Object.keys(n.state)
                    },
                    ...Object.fromEntries(Object.entries(null != i ? i : {}).map(e => {
                        let [t, {
                            value: n
                        }] = e;
                        return [t, n]
                    }))
                }
            }, {})
        };
        if (t.name === a.ReportNames.MESSAGE || t.name === a.ReportNames.FIRST_DM) {
            let {
                channel_id: e,
                id: n
            } = t.record;
            return {
                ...u,
                ...l,
                name: t.name,
                channel_id: e,
                message_id: n
            }
        }
        if (t.name === a.ReportNames.GUILD || t.name === a.ReportNames.GUILD_DISCOVERY) {
            let {
                id: e
            } = t.record;
            return {
                ...u,
                ...l,
                name: t.name,
                guild_id: e
            }
        }
        if (t.name === a.ReportNames.GUILD_DIRECTORY_ENTRY) {
            let {
                guildId: e,
                channelId: n
            } = t.record;
            return {
                ...u,
                ...l,
                name: t.name,
                channel_id: n,
                guild_id: e
            }
        } else if (t.name === a.ReportNames.STAGE_CHANNEL) {
            let {
                id: e,
                guild_id: n,
                channel_id: i
            } = t.record;
            return {
                ...u,
                ...l,
                name: t.name,
                channel_id: i,
                guild_id: n,
                stage_instance_id: e
            }
        } else if (t.name === a.ReportNames.GUILD_SCHEDULED_EVENT) {
            let {
                id: e,
                guild_id: n
            } = t.record;
            return {
                ...u,
                ...l,
                name: t.name,
                guild_id: n,
                guild_scheduled_event_id: e
            }
        } else if (t.name === a.ReportNames.USER) return {
            ...u,
            ...l,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId
        };
        else if (t.name === a.UnauthenticatedReportNames.USER) return {
            ...u,
            ...l,
            name: t.name,
            user_id: t.record.id,
            guild_id: t.contextualGuildId,
            email_token: i
        };
        else if (t.name === a.UnauthenticatedReportNames.MESSAGE) return {
            ...u,
            ...l,
            name: t.name,
            message_id: t.record.id,
            email_token: i
        };
        return null
    };

    function m(e, t, n) {
        s.default.trackWithMetadata(o.AnalyticEvents.IAR_MODAL_CLOSE, {
            report_type: e.name,
            report_id: n,
            navigation_history: t,
            message_id: e.name === a.ReportNames.MESSAGE || e.name === a.ReportNames.FIRST_DM ? e.record.id : void 0,
            stage_instance_id: e.name === a.ReportNames.STAGE_CHANNEL ? e.record.id : void 0,
            guild_scheduled_event_id: e.name === a.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.id : void 0,
            guild_id: e.name === a.ReportNames.GUILD || e.name === a.ReportNames.GUILD_DISCOVERY ? e.record.id : e.name === a.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.guildId : e.name === a.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.guild_id : void 0,
            channel_id: e.name === a.ReportNames.GUILD_SCHEDULED_EVENT ? e.record.channel_id : e.name === a.ReportNames.GUILD_DIRECTORY_ENTRY ? e.record.channelId : void 0
        })
    }

    function N(e, t) {
        r.default.dispatch({
            type: "IN_APP_REPORTS_SHOW_FEEDBACK",
            reportId: t,
            reportType: e.name
        })
    }

    function p(e, t, n, i, r) {
        return e.some(e => {
            var t;
            return !0 === e.should_submit_data && ((null == i ? void 0 : i[e.name]) == null || (null == i ? void 0 : i[e.name].value) === "" || !(null == i ? void 0 : null === (t = i[e.name]) || void 0 === t ? void 0 : t.isValid))
        }) || t.some(e => !0 === e.should_submit_data && ((null == i ? void 0 : i[e.name]) == null || (null == i ? void 0 : i[e.name].value) === "")) || (null == n ? void 0 : n.should_submit_data) === !0 && (null == r || 0 === Object.keys(r).length)
    }
}