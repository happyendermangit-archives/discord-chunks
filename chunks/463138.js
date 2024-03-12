function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return U
        }
    }), n("222007"), n("506083");
    var a = n("37983"),
        l = n("884691"),
        r = n("77078"),
        s = n("145131"),
        i = n("965153"),
        d = n("64573"),
        u = n("191732"),
        o = n("284787"),
        c = n("859043"),
        m = n("540227"),
        f = n("755575"),
        _ = n("552190"),
        E = n("798016"),
        h = n("918418"),
        v = n("947319"),
        R = n("420938"),
        x = n("111181"),
        p = n("677734"),
        N = n("538418"),
        g = n("584866"),
        S = n("41877"),
        I = n("71514"),
        T = n("265104"),
        M = n("345516"),
        j = n("244599"),
        C = n("291028"),
        b = n("821003"),
        y = n("49111"),
        L = n("782340"),
        A = n("260839");

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
    var U = e => {
        let {
            node: t,
            reportType: n,
            history: U,
            onSelectChild: k,
            onModalClose: B,
            multiSelect: G,
            reportId: P,
            textInput: w
        } = e, F = D(t, "checkbox"), V = D(t, "text_line_resource"), H = O(t, "external_link"), z = O(t, "free_text"), Y = O(t, "dropdown"), [W, K] = l.useState(!1), [q, Z] = l.useState(""), [X, J] = l.useState(() => ({})), [Q, $] = l.useState(() => ({})), [ee, et] = l.useState((0, i.areRequiredElementsUnfilled)(z, Y, F, w, G)), en = function(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = {
                    ...Q
                };
            a[e] = {
                value: t,
                isValid: n
            }, $(a), et((0, i.areRequiredElementsUnfilled)(z, Y, F, a, X))
        }, ea = l.useMemo(() => e => {
            k({
                nodeRef: t.id,
                destination: e,
                textInput: null != z || null != Y ? Q : void 0,
                multiSelect: null != F ? {
                    name: F.name,
                    state: X
                } : void 0
            })
        }, [t, k, F, X, Q, z, Y]);
        l.useEffect(() => {
            null != G && J(G), null != w && $(w)
        }, [G, w]);
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
                children: [null != V ? (0, a.jsx)(j.default, {
                    element: V
                }) : null, null != D(t, "breadcrumbs") && (0, a.jsx)(o.default, {
                    history: U
                }), null != D(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && (0, a.jsx)(S.default, {
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
                }), null != D(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && (0, a.jsx)(u.default, {
                    userId: "user" === n.name ? n.record.id : n.record.author.id,
                    reportId: P,
                    reportName: n.name
                }), null != D(t, "delete_message") && "message" === n.name && (0, a.jsx)(m.default, {
                    message: n.record,
                    reportId: P
                }), null != D(t, "leave_guild") && "guild" === n.name && (0, a.jsx)(g.default, {
                    guildId: n.record.id,
                    reportId: P
                }), null != D(t, "channel_preview") && "stage_channel" === n.name && (0, a.jsx)(T.default, {
                    stageInstance: n.record
                }), null != D(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && (0, a.jsx)(x.default, {
                    event: n.record
                }), null != D(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && (0, a.jsx)(v.default, {
                    entry: n.record
                }), null != D(t, "guild_discovery_preview") && "guild_discovery" === n.name && (0, a.jsx)(R.default, {
                    entry: n.record
                }), null != F && (0, a.jsx)(I.default, {
                    element: F,
                    onChange: (e, t) => {
                        let n = {
                            ...X
                        };
                        e in X ? delete n[e] : n[e] = t, J(n), et((0, i.areRequiredElementsUnfilled)(z, Y, F, Q, n))
                    },
                    state: X
                }), ("user_urf" === n.name || "message_urf" === n.name) && null != Y && Y.length > 0 && (0, a.jsx)(f.default, {
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
                }), null != H && H.length > 0 ? (0, a.jsx)(E.default, {
                    elements: H
                }) : null, (0, a.jsx)(_.default, {
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