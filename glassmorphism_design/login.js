 // The REF
            const usernameInputl = document.getElementById('userInpl');
            const passwordInputl = document.getElementById('passInpl');
             const submitInp = document.getElementById('auth_btn');

            // authentication process

            function authUser(){
                const dbRef = ref(db);
                
                get(child(dbRef, "UsersList/"+ usernameInputl.value)).then((snapshot)=>{
                    if(snapshot.exists()){
                        let dbpass = decPass(snapshot.val().password);
                        if(dbpass == passwordInputl.value){
                            login();
                        }
                        else{
                            alert("Invalid Password");
                        }
                    }
                    else{
                        alert("Invalid Username");
                    }
                });
            }
                //decrypt process

                function decPass(dbpass){
                    var pass12 = CryptoJS.AES.decrypt(dbpass, passwordInputl.value);
                    return pass12.toString(CryptoJS.enc.Utf8);
                }

                //login
                function login(user){
                    let keepLoggedIn = document.getElementById('rememberMe').checked;


                    if(!keepLoggedIn){
                        sessionStorage.setItem('user', JSON.stringify(user));
                        window.location ="home.html";
                    }

                    else{
                        localStorage.setItem('keepLoggedIn', 'yes');
                        localStorage.setItem('user', JSON.stringify(user));
                        window.location = "home.html";
                    }
                }

            //assign the events
            submitInp.addEventListener('click', authUser);

            