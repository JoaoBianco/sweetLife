const localStrategy = require("passport-local").Strategy
const bcrypt = require("bcryptjs")
const DBConnection = require("./dbConnection")


module.exports = (passport) => {
    passport.use(new localStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
        user = findUserByEmail(email).then((user) => {
            if(!user){
                console.log("não existe")
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

    let findUserByEmail = (email) => {
        return new Promise((resolve, reject) => {
            try {
                DBConnection.query(
                    ' SELECT * FROM `testeauth` WHERE `email` = ?  ', email,
                    function(err, rows) {
                        if (err) {
                            reject(err)
                        }
                        let user = rows[0];
                        resolve(user);
                    }
                );
            } catch (err) {
                reject(err);
            }
        });
    };
    
    let findUserById = (id) => {
        return new Promise((resolve, reject) => {
            try {
                DBConnection.query(
                    ' SELECT * FROM `testeauth` WHERE `id` = ?  ', id,
                    function(err, rows) {
                        if (err) {
                            reject(err)
                        }
                        let user = rows[0];
                        resolve(user);
                    }
                );
            } catch (err) {
                reject(err);
            }
        });
    };

    passport.serializeUser((user, done) =>{
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        user = findUserById(id).then((user) => {
            return done(null, user);
        }).catch(error => {
            return done(error, null)
        });
    });

    
}