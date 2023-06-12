import joi from 'joi';
export const signupSchema={
body: joi.object({
    userName: joi.string().min(3).max(20).required().messages({
        'string.min':"String Must Be At Least 3 characters:long",
        'string.empty':"String Is Not Allowed To Be Empty",
        'any.required':"The Body Must have userName: It's Required"
    }),
    // email: joi.string().email({minDomainSegments:3,tlds:{ allow:['com','org','edu','net'] }}).required(),
     email: joi.string().email({minDomainSegments:2,tlds:{ allow:['com','org','edu','net'] }}).required(),
    password:joi.string().required(),
    cPassword:joi.string().valid(joi.ref('password')).required()
}).required(),
query: joi.object({
    test: joi.string().required(),
})

}

export const loginSchema={
    body:joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    }).required()
}
