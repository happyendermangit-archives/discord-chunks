function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n("544891"),
        r = n("570140"),
        s = n("962086"),
        a = n("160404"),
        o = n("264229"),
        l = n("271383"),
        u = n("701190"),
        d = n("594174"),
        _ = n("981631");
    let c = async (e, t) => {
        let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
            s = d.default.getCurrentUser(),
            a = !l.default.isMember(e, null == s ? void 0 : s.id);
        try {
            let t = await i.HTTP.get({
                url: _.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                query: {
                    with_guild: a,
                    invite_code: null != n ? (0, o.parseInviteCodeFromInviteKey)(n) : void 0
                },
                oldFormErrors: !0
            });
            if (null == t.body) throw t;
            let {
                body: s
            } = t;
            return r.default.dispatch({
                type: "MEMBER_VERIFICATION_FORM_UPDATE",
                guildId: e,
                form: {
                    version: s.version,
                    description: s.description,
                    formFields: s.form_fields,
                    guild: s.guild
                }
            }), s
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
        if (a.default.isFullServerPreview(e)) {
            (0, s.updateImpersonatedData)(e, {
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
        updateVerificationFormDescription: I,
        enableVerificationForm: T,
        submitVerificationForm: f
    }
}