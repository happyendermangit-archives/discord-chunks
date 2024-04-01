function(e, t, n) {
    "use strict";
    n.r(t), n("47120"), n("773603");
    var a = n("735250"),
        l = n("470079"),
        r = n("481060"),
        s = n("285952"),
        i = n("185625"),
        d = n("273389"),
        o = n("816342"),
        u = n("15667"),
        c = n("76264"),
        m = n("822686"),
        _ = n("356110"),
        f = n("730719"),
        E = n("996701"),
        h = n("238122"),
        v = n("273514"),
        R = n("995712"),
        x = n("234937"),
        p = n("473121"),
        N = n("449413"),
        g = n("266080"),
        T = n("316617"),
        S = n("15682"),
        I = n("905434"),
        M = n("196627"),
        j = n("739319"),
        C = n("842401"),
        b = n("375790"),
        y = n("981631"),
        L = n("689938"),
        A = n("766070");

    function D(e, t) {
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

    function O(e, t) {
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
            history: U,
            onSelectChild: k,
            onModalClose: B,
            multiSelect: P,
            reportId: G,
            textInput: w
        } = e, H = D(t, "checkbox"), F = D(t, "text_line_resource"), V = O(t, "external_link"), z = O(t, "free_text"), Y = O(t, "dropdown"), [W, K] = l.useState(!1), [q, Z] = l.useState(""), [X, J] = l.useState(() => ({})), [Q, $] = l.useState(() => ({})), [ee, et] = l.useState((0, i.areRequiredElementsUnfilled)(z, Y, H, w, P)), en = function(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = {
                    ...Q
                };
            a[e] = {
                value: t,
                isValid: n
            }, $(a), et((0, i.areRequiredElementsUnfilled)(z, Y, H, a, X))
        }, ea = l.useMemo(() => e => {
            k({
                nodeRef: t.id,
                destination: e,
                textInput: null != z || null != Y ? Q : void 0,
                multiSelect: null != H ? {
                    name: H.name,
                    state: X
                } : void 0
            })
        }, [t, k, H, X, Q, z, Y]);
        l.useEffect(() => {
            null != P && J(P), null != w && $(w)
        }, [P, w]);
        let el = e => {
                if (e === y.AbortCodes.INVALID_FORM_BODY) Z(L.default.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
                else Z(L.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED)
            },
            er = () => e.onSubmit({
                nodeRef: t.id,
                destination: ["", e.successNodeId]
            }).then(() => {
                Z(""), ea(["", e.successNodeId])
            }).catch(e => {
                var t;
                el(null === (t = e.body) || void 0 === t ? void 0 : t.code)
            }).finally(() => {
                K(!1)
            });
        return (0, a.jsxs)("div", {
            className: A.container,
            children: [(0, a.jsxs)(r.ModalHeader, {
                separator: !1,
                direction: s.default.Direction.VERTICAL,
                className: A.header,
                children: [(0, a.jsx)(M.default, {
                    element: D(t, "success")
                }), (0, a.jsx)(p.default, {
                    node: t
                }), (0, a.jsx)(N.default, {
                    node: t
                })]
            }), (0, a.jsxs)(r.ModalContent, {
                className: A.body,
                children: [null != F ? (0, a.jsx)(j.default, {
                    element: F
                }) : null, null != D(t, "breadcrumbs") && (0, a.jsx)(u.default, {
                    history: U
                }), null != D(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, a.jsx)(T.default, {
                    message: n.record
                }), null != D(t, "user_preview") && "user" === n.name ? (0, a.jsx)(C.default, {
                    user: n.record
                }) : null, function(e) {
                    let {
                        elements: t
                    } = e;
                    return t.some(e => {
                        let {
                            type: t
                        } = e;
                        return b.REMEDIATION_ELEMENT_TYPES.includes(t)
                    })
                }(t) && (0, a.jsx)(r.Heading, {
                    className: A.remediationElementsHeader,
                    variant: "heading-sm/semibold",
                    children: L.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER
                }), null != D(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, a.jsx)(o.default, {
                    userId: "user" === n.name ? n.record.id : n.record.author.id,
                    reportId: G,
                    reportName: n.name
                }), null != D(t, "delete_message") && "message" === n.name && (0, a.jsx)(m.default, {
                    message: n.record,
                    reportId: G
                }), null != D(t, "leave_guild") && "guild" === n.name && (0, a.jsx)(g.default, {
                    guildId: n.record.id,
                    reportId: G
                }), null != D(t, "channel_preview") && "stage_channel" === n.name && (0, a.jsx)(I.default, {
                    stageInstance: n.record
                }), null != D(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, a.jsx)(x.default, {
                    event: n.record
                }), null != D(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, a.jsx)(v.default, {
                    entry: n.record
                }), null != D(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, a.jsx)(R.default, {
                    entry: n.record
                }), null != H && (0, a.jsx)(S.default, {
                    element: H,
                    onChange: (e, t) => {
                        let n = {
                            ...X
                        };
                        e in X ? delete n[e] : n[e] = t, J(n), et((0, i.areRequiredElementsUnfilled)(z, Y, H, Q, n))
                    },
                    state: X
                }), ("user_urf" === n.name || "message_urf" === n.name) && null != Y && Y.length > 0 && (0, a.jsx)(_.default, {
                    elements: Y,
                    onChange: en,
                    state: Q
                }), ("user_urf" === n.name || "message_urf" === n.name) && null != z && z.length > 0 && (0, a.jsx)(h.default, {
                    elements: z,
                    onChange: en,
                    state: Q
                }), (0, a.jsx)(c.default, {
                    node: t,
                    onSelectChild: ea
                }), null != V && V.length > 0 ? (0, a.jsx)(E.default, {
                    elements: V
                }) : null, (0, a.jsx)(f.default, {
                    errorMessage: q,
                    onClose: () => {
                        Z("")
                    }
                })]
            }), (0, a.jsx)(d.default, {
                button: t.button,
                submitting: W,
                disableNext: ee,
                onClick: e => {
                    switch (e.type) {
                        case "done":
                        case "cancel":
                            B();
                            break;
                        case "next":
                            ea(["", e.target]);
                            break;
                        case "submit":
                            K(!0), er()
                    }
                },
                onBackClicked: e.onNavigateBack,
                canNavigateBack: U.length > 0
            }), (0, a.jsx)(r.ModalCloseButton, {
                className: A.closeButton,
                onClick: B
            })]
        })
    }
}