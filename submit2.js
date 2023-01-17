$(document).ready(()=>
            { 
            var submit = $("#submit-form2")
            submit.click(()=>{
                            var data = $('form#test-form2').serialize();
                            
                            console.log(data)
                            var form = $("#test-form2")

                            if (form[0].checkValidity() === false) {
                                event.preventDefault()
                                event.stopPropagation()
                            }

                            let check = true
                            const value = $(`#test-form2 input`)
                            console.log(value);
                            if (value[0].value == ``) {
                                check = false
                                value[0].placeholder = `Vui lòng nhập thông tin`
                                value[0].classList.add(`red`)

                            }
                            if (value[1].value == ``) {
                                check = false
                                value[1].placeholder = `Vui lòng nhập thông tin`
                                value[1].classList.add(`red`)
                            } 
                            if (value[2].value == ``) {
                                check = false
                                value[2].placeholder = `Vui lòng nhập thông tin`
                                value[2].classList.add(`red`)
                            } 
                            if (check) {
                                
                                $.ajax({
                                                type : 'POST', 
                                                url : 'https://script.google.com/macros/s/AKfycbyGK5PUXG6kzTo5r0W5AT5qbUJnOqqfHGxEJuaYJJc4dVCtIhSZjAp6ONjvxrrMDtne/exec',
                                                dataType:'json',
                                                crossDomain : true,
                                                data : data,
                                                success : function(data)
                                                {
        
                                                    
                                                    if(data == 'false') 
                                                    {
                                                        // document.querySelector(`body`).innerHTML+=`
                                                        // <div class="alert alert-danger" role="alert">
                                                        //     Gửi thông tin thất bại!
                                                        // </div>
                                                        // `
                                                        console.log(`Submit False`);
                                                    }else{
                                                        document.querySelector(`.root`).innerHTML+=`
                                                        <div class="alert-submit position-fixed w-100 h-100" onclick="$(this).remove()" onscroll="$(this).remove()">
                                                            <img class="animated fadeInDown position-absolute" 
                                                            src="./img/alert.png" alt="">
                                                        </div>
                                                        `
                                                        for (let i = 0; i < value.length; i++) {
                                                            value[i].value=``;
                                                            
                                                        }
                                                    }
                                                }
                                    })
                            }
                            return false
            })
        })