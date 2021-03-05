const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
const user = require("../app/services/loginService")


module.exports = (passport) => {
    passport.use(new localStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
        user.findUserByEmail(email).then((user) => {
            if(!user){
                return done(null, false, {message: "não existe"})
            }
            
            bcrypt.compare(password, user.password, (error, success) => {
                if(success){
                    console.log("senha certa")
                    return done(null, user)
                }
                else{
                    console.log("senha errada")
                    return done(null, false, {message: "senha inválida"})
                }
            })
        })
    }))

    passport.serializeUser((user, done) =>{
        done(null, user.id)
    })

    passport.deserializeUser((id, done) =>{
        user.findUserById(id, (error, user) =>{
            done(error, user)
        })
    })

    
}