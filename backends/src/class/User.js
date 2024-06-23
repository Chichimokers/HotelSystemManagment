class User{
 constructor(username,mail,conectado,password,rol){

    this.username = username;
    this.mail  = mail,
    this.conectado =conectado;
    this.password = password;

    this.rol = rol;
 }


 setusername(usernames){
    this.username = usernames;
 }
setpassword(password){
    this.password = password;

}
setreservas(reservas){
    this.reservas = reservas;
}
}

module.exports = {User};