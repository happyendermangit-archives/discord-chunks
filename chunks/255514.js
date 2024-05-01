function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("773603");
    var i = n("735250"),
        r = n("470079"),
        a = n("481060"),
        s = n("285952"),
        o = n("185625"),
        l = n("273389"),
        u = n("816342"),
        d = n("15667"),
        _ = n("76264"),
        c = n("822686"),
        E = n("356110"),
        I = n("730719"),
        T = n("996701"),
        f = n("320596"),
        S = n("273514"),
        h = n("995712"),
        A = n("234937"),
        m = n("473121"),
        N = n("449413"),
        p = n("266080"),
        O = n("316617"),
        R = n("15682"),
        C = n("905434"),
        g = n("196627"),
        L = n("739319"),
        v = n("842401"),
        D = n("375790"),
        M = n("981631"),
        y = n("689938"),
        P = n("934338");

    function U(e, t) {
        let {
            elements: n
        } = e;
        return n.find(e => {
            let {
                type: n
            } = e;
            return n === t
        })
    }

    function b(e, t) {
        let {
            elements: n
        } = e;
        return n.filter(e => {
            let {
                type: n
            } = e;
            return n === t
        })
    }
    t.default = e => {
        let {
            node: t,
            reportType: n,
            history: G,
            onSelectChild: w,
            onModalClose: B,
            multiSelect: k,
            reportId: V,
            textInput: x
        } = e, F = U(t, "checkbox"), H = U(t, "text_line_resource"), Y = b(t, "external_link"), j = b(t, "free_text"), W = b(t, "dropdown"), [K, z] = r.useState(!1), [Z, X] = r.useState(""), [Q, q] = r.useState(() => ({})), [J, $] = r.useState(() => ({})), [ee, et] = r.useState((0, o.areRequiredElementsUnfilled)(j, W, F, x, k)), en = function(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = {
                    ...J
                };
            i[e] = {
                value: t,
                isValid: n
            }, $(i), et((0, o.areRequiredElementsUnfilled)(j, W, F, i, Q))
        }, ei = r.useMemo(() => e => {
            w({
                nodeRef: t.id,
                destination: e,
                textInput: null != j || null != W ? J : void 0,
                multiSelect: null != F ? {
                    name: F.name,
                    state: Q
                } : void 0
            })
        }, [t, w, F, Q, J, j, W]);
        r.useEffect(() => {
            null != k && q(k), null != x && $(x)
        }, [k, x]);
        let er = e => {
                if (e === M.AbortCodes.INVALID_FORM_BODY) X(y.default.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
                else X(y.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED)
            },
            ea = () => e.onSubmit({
                nodeRef: t.id,
                destination: ["", e.successNodeId]
            }).then(() => {
                X(""), ei(["", e.successNodeId])
            }).catch(e => {
                var t;
                er(null === (t = e.body) || void 0 === t ? void 0 : t.code)
            }).finally(() => {
                z(!1)
            });
        return (0, i.jsxs)("div", {
            className: P.container,
            children: [(0, i.jsxs)(a.ModalHeader, {
                separator: !1,
                direction: s.default.Direction.VERTICAL,
                className: P.header,
                children: [(0, i.jsx)(g.default, {
                    element: U(t, "success")
                }), (0, i.jsx)(m.default, {
                    node: t
                }), (0, i.jsx)(N.default, {
                    node: t
                })]
            }), (0, i.jsxs)(a.ModalContent, {
                className: P.body,
                children: [null != H ? (0, i.jsx)(L.default, {
                    element: H
                }) : null, null != U(t, "breadcrumbs") && (0, i.jsx)(d.default, {
                    history: G
                }), null != U(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, i.jsx)(O.default, {
                    message: n.record
                }), null != U(t, "user_preview") && "user" === n.name ? (0, i.jsx)(v.default, {
                    user: n.record
                }) : null, function(e) {
                    let {
                        elements: t
                    } = e;
                    return t.some(e => {
                        let {
                            type: t
                        } = e;
                        return D.REMEDIATION_ELEMENT_TYPES.includes(t)
                    })
                }(t) && (0, i.jsx)(a.Heading, {
                    className: P.remediationElementsHeader,
                    variant: "heading-sm/semibold",
                    children: y.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
                }), null != U(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, i.jsx)(u.default, {
                    userId: "user" === n.name ? n.record.id : n.record.author.id,
                    reportId: V,
                    reportName: n.name
                }), null != U(t, "delete_message") && "message" === n.name && (0, i.jsx)(c.default, {
                    message: n.record,
                    reportId: V
                }), null != U(t, "leave_guild") && "guild" === n.name && (0, i.jsx)(p.default, {
                    guildId: n.record.id,
                    reportId: V
                }), null != U(t, "channel_preview") && "stage_channel" === n.name && (0, i.jsx)(C.default, {
                    stageInstance: n.record
                }), null != U(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, i.jsx)(A.default, {
                    event: n.record
                }), null != U(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, i.jsx)(S.default, {
                    entry: n.record
                }), null != U(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, i.jsx)(h.default, {
                    entry: n.record
                }), null != F && (0, i.jsx)(R.default, {
                    element: F,
                    onChange: (e, t) => {
                        let n = {
                            ...Q
                        };
                        e in Q ? delete n[e] : n[e] = t, q(n), et((0, o.areRequiredElementsUnfilled)(j, W, F, J, n))
                    },
                    state: Q
                }), ("user_urf" === n.name || "message_urf" === n.name) && null != W && W.length > 0 && (0, i.jsx)(E.default, {
                    elements: W,
                    onChange: en,
                    state: J
                }), ("user_urf" === n.name || "message_urf" === n.name) && null != j && j.length > 0 && (0, i.jsx)(f.default, {
                    elements: j,
                    onChange: en,
                    state: J
                }), (0, i.jsx)(_.default, {
                    node: t,
                    onSelectChild: ei
                }), null != Y && Y.length > 0 ? (0, i.jsx)(T.default, {
                    elements: Y
                }) : null, (0, i.jsx)(I.default, {
                    errorMessage: Z,
                    onClose: () => {
                        X("")
                    }
                })]
            }), (0, i.jsx)(l.default, {
                button: t.button,
                submitting: K,
                disableNext: ee,
                onClick: e => {
                    switch (e.type) {
                        case "done":
                        case "cancel":
                            B();
                            break;
                        case "next":
                            ei(["", e.target]);
                            break;
                        case "submit":
                            z(!0), ea()
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: G.length > 0
            }), (0, i.jsx)(a.ModalCloseButton, {
                className: P.closeButton,
                onClick: B
            })]
        })
    }
}