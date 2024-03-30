function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("784184"),
        o = n("143953"),
        l = n("658005"),
        i = n("371375"),
        u = n("550814"),
        c = n("457109"),
        s = n("874428"),
        d = n("873427"),
        f = n("823032"),
        m = n("931981"),
        p = n("556461"),
        v = n("556643"),
        y = n("941367"),
        E = n("948370"),
        b = n("629275"),
        h = n("296509"),
        g = n("125835"),
        _ = n("179114"),
        S = n("846893"),
        R = n("615384"),
        O = n("589346"),
        N = n("173723"),
        I = n("847381"),
        T = n("786598"),
        M = n("234655"),
        A = n("281767"),
        w = n("941504"),
        C = n("766070");

    function P(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function j(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, a, o;
                r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = o
            })
        }
        return e
    }

    function x(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n, r, a = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != a) {
                var o = [],
                    l = !0,
                    i = !1;
                try {
                    for (a = a.call(e); !(l = (n = a.next()).done) && (o.push(n.value), !t || o.length !== t); l = !0);
                } catch (e) {
                    i = !0, r = e
                } finally {
                    try {
                        !l && null != a.return && a.return()
                    } finally {
                        if (i) throw r
                    }
                }
                return o
            }
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return P(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return P(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function D(e, t) {
        return e.elements.find(function(e) {
            return e.type === t
        })
    }

    function k(e, t) {
        return e.elements.filter(function(e) {
            return e.type === t
        })
    }
    t.default = function(e) {
        var t = e.node,
            n = e.reportType,
            P = e.history,
            L = e.onSelectChild,
            U = e.onModalClose,
            B = e.multiSelect,
            G = e.reportId,
            H = e.textInput,
            F = D(t, "checkbox"),
            V = D(t, "text_line_resource"),
            z = k(t, "external_link"),
            Y = k(t, "free_text"),
            W = k(t, "dropdown"),
            K = x(r.useState(!1), 2),
            $ = K[0],
            q = K[1],
            Z = x(r.useState(""), 2),
            X = Z[0],
            J = Z[1],
            Q = x(r.useState(function() {
                return {}
            }), 2),
            ee = Q[0],
            et = Q[1],
            en = x(r.useState(function() {
                return {}
            }), 2),
            er = en[0],
            ea = en[1],
            eo = x(r.useState((0, l.areRequiredElementsUnfilled)(Y, W, F, H, B)), 2),
            el = eo[0],
            ei = eo[1],
            eu = function(e, t) {
                var n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    r = j({}, er);
                r[e] = {
                    value: t,
                    isValid: n
                }, ea(r), ei((0, l.areRequiredElementsUnfilled)(Y, W, F, r, ee))
            },
            ec = r.useMemo(function() {
                return function(e) {
                    L({
                        nodeRef: t.id,
                        destination: e,
                        textInput: null != Y || null != W ? er : void 0,
                        multiSelect: null != F ? {
                            name: F.name,
                            state: ee
                        } : void 0
                    })
                }
            }, [t, L, F, ee, er, Y, W]);
        r.useEffect(function() {
            null != B && et(B), null != H && ea(H)
        }, [B, H]);
        var es = function(e) {
            if (e === A.AbortCodes.INVALID_FORM_BODY) J(w.default.Messages.IN_APP_REPORTING_SUBMIT_VALIDATION_ERROR);
            else J(w.default.Messages.MOBILE_REPORTS_SUBMIT_FAILED)
        };
        return r.createElement("div", {
            className: C.container
        }, r.createElement(a.ModalHeader, {
            separator: !1,
            direction: o.default.Direction.VERTICAL,
            className: C.header
        }, r.createElement(N.default, {
            element: D(t, "success")
        }), r.createElement(h.default, {
            node: t
        }), r.createElement(g.default, {
            node: t
        })), r.createElement(a.ModalContent, {
            className: C.body
        }, null != V ? r.createElement(I.default, {
            element: V
        }) : null, null != D(t, "breadcrumbs") && r.createElement(c.default, {
            history: P
        }), null != D(t, "message_preview") && ("message" === n.name || "first_dm" === n.name) && r.createElement(S.default, {
            message: n.record
        }), null != D(t, "user_preview") && "user" === n.name ? r.createElement(T.default, {
            user: n.record
        }) : null, t.elements.some(function(e) {
            var t = e.type;
            return M.REMEDIATION_ELEMENT_TYPES.includes(t)
        }) && r.createElement(a.Heading, {
            className: C.remediationElementsHeader,
            variant: "heading-sm/semibold"
        }, w.default.Messages.MOBILE_REPORTS_BLOCK_ELEMENT_HEADER), null != D(t, "block_users") && ("message" === n.name || "first_dm" === n.name || "user" === n.name) && r.createElement(u.default, {
            userId: "user" === n.name ? n.record.id : n.record.author.id,
            reportId: G,
            reportName: n.name
        }), null != D(t, "delete_message") && "message" === n.name && r.createElement(d.default, {
            message: n.record,
            reportId: G
        }), null != D(t, "leave_guild") && "guild" === n.name && r.createElement(_.default, {
            guildId: n.record.id,
            reportId: G
        }), null != D(t, "channel_preview") && "stage_channel" === n.name && r.createElement(O.default, {
            stageInstance: n.record
        }), null != D(t, "guild_scheduled_event_preview") && "guild_scheduled_event" === n.name && r.createElement(b.default, {
            event: n.record
        }), null != D(t, "guild_directory_entry_preview") && "guild_directory_entry" === n.name && r.createElement(y.default, {
            entry: n.record
        }), null != D(t, "guild_discovery_preview") && "guild_discovery" === n.name && r.createElement(E.default, {
            entry: n.record
        }), null != F && r.createElement(R.default, {
            element: F,
            onChange: function(e, t) {
                var n = j({}, ee);
                e in ee ? delete n[e] : n[e] = t, et(n), ei((0, l.areRequiredElementsUnfilled)(Y, W, F, er, n))
            },
            state: ee
        }), ("user_urf" === n.name || "message_urf" === n.name) && null != W && W.length > 0 && r.createElement(f.default, {
            elements: W,
            onChange: eu,
            state: er
        }), ("user_urf" === n.name || "message_urf" === n.name) && null != Y && Y.length > 0 && r.createElement(v.default, {
            elements: Y,
            onChange: eu,
            state: er
        }), r.createElement(s.default, {
            node: t,
            onSelectChild: ec
        }), null != z && z.length > 0 ? r.createElement(p.default, {
            elements: z
        }) : null, r.createElement(m.default, {
            errorMessage: X,
            onClose: function() {
                J("")
            }
        })), r.createElement(i.default, {
            button: t.button,
            submitting: $,
            disableNext: el,
            onClick: function(n) {
                switch (n.type) {
                    case "done":
                    case "cancel":
                        U();
                        break;
                    case "next":
                        ec(["", n.target]);
                        break;
                    case "submit":
                        q(!0), e.onSubmit({
                            nodeRef: t.id,
                            destination: ["", e.successNodeId]
                        }).then(function() {
                            J(""), ec(["", e.successNodeId])
                        }).catch(function(e) {
                            var t;
                            es(null === (t = e.body) || void 0 === t ? void 0 : t.code)
                        }).finally(function() {
                            q(!1)
                        })
                }
            },
            onBackClicked: e.onNavigateBack,
            canNavigateBack: P.length > 0
        }), r.createElement(a.ModalCloseButton, {
            className: C.closeButton,
            onClick: U
        }))
    }
}