function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        a = n("962086"),
        s = n("160404"),
        o = n("264229"),
        l = n("271383"),
        u = n("701190"),
        d = n("594174"),
        _ = n("981631");
    let c = async (e, t) => {
        let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
            a = d.default.getCurrentUser(),
            s = !l.default.isMember(e, null == a ? void 0 : a.id);
        try {
            let t = await i.HTTP.get({
                url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: s,
                    invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                },
                oldFormErrors: !0
            });
            if (null == t.body) throw t;
            let {
                body: a
            } = t;
            return r.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_UPDATE",
                guildId: e,
                form: {
                    version: a.version,
                    description: a.description,
                    formFields: a.form_fields,
                    guild: a.guild
                }
            }), a
        } catch (t) {
            r.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                guildId: e
            })
        }
    }, E = async (e, t) => {
        let {
            body: n
        } = await i.HTTP.patch({
            url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
            body: {
                form_fields: t
            },
            oldFormErrors: !0
        });
        r.default.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        })
    }, I = async (e, t) => {
        let {
            body: n
        } = await i.HTTP.patch({
            url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
            body: {
                description: t
            },
            oldFormErrors: !0
        });
        r.default.dispatch({
            type: "MEMBER_VERIFICATION_FORM_UPDATE",
            guildId: e,
            form: {
                version: n.version,
                description: n.description,
                formFields: n.form_fields
            }
        })
    }, T = async (e, t) => {
        await i.HTTP.patch({
            url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
            body: {
                enabled: t
            },
            oldFormErrors: !0
        })
    }, f = async (e, t) => {
        if (s.default.isFullServerPreview(e)) {
            (0, a.updateImpersonatedData)(e, {
                memberOptions: {
                    isPending: !1
                }
            });
            return
        }
        try {
            let {
                body: n
            } = await i.HTTP.put({
                url: _.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                body: {
                    version: t.version,
                    form_fields: t.formFields
                }
            });
            return r.default.dispatch({
                type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                guildId: e,
                request: n
            }), n
        } catch (e) {
            throw e
        }
    };
    t.default = {
        fetchVerificationForm: c,
        updateVerificationForm: E,
        updateVerificationFormFieldsLocal: (e, t) => {
            r.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_UPDATE",
                guildId: e,
                form: {
                    formFields: t
                },
                isLocalUpdate: !0
            })
        },
        updateVerificationFormDescription: I,
        updateVerificationFormDescriptionLocal: (e, t) => {
            r.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_UPDATE",
                guildId: e,
                form: {
                    description: t
                },
                isLocalUpdate: !0
            })
        },
        enableVerificationForm: T,
        submitVerificationForm: f
    }
}